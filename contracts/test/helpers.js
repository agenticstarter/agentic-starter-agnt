const path = require("path");
const { ethers } = require("hardhat");

const E = (n) => ethers.parseEther(String(n));
const VANITY = path.join(__dirname, "..", "..", "packages", "sdk", "src", "vanity.js");

/**
 * Deploys mock PancakeSwap + Agent ID, the gate, the launchpad v3 stack and the $AGNT stack.
 * Defaults = mainnet rules (16 BNB, 3% graduation fee, 1% wallet cap, rate limit on) without the address suffix
 * (fast tests); pass `suffix: true` for the real 0xAAAA rule.
 */
async function deployAll({
  graduationTarget = E(16),
  graduationFeeBps = 300n,
  launchFee = 0n,
  metaUpdateFee = E(0.01),
  walletCapBps = 100n,
  minTarget = E(2),
  minWalletCapBps = 50n,
  maxWalletCapBps = 200n,
  creatorAllocBps = 0n,
  creatorAllocUnlock = 0n,
  rateLimited = true,
  suffix = false,
  openGate = false,
} = {}) {
  const [owner, treasury, alice, bob, carol, dave, guardian, ...rest] = await ethers.getSigners();

  const wbnb = await (await ethers.getContractFactory("MockWBNB")).deploy();
  const factory = await (await ethers.getContractFactory("MockFactory")).deploy();
  const router = await (await ethers.getContractFactory("MockRouter")).deploy(factory.target, wbnb.target);
  const agentId = await (await ethers.getContractFactory("MockAgentID")).deploy();
  const gate = await (await ethers.getContractFactory("AgentGate")).deploy([agentId.target], owner.address, guardian.address);
  const template = await (await ethers.getContractFactory("LaunchToken")).deploy();
  const adapter = await (await ethers.getContractFactory("PancakeV2Adapter")).deploy(router.target);
  const rules = await (await ethers.getContractFactory("LaunchRules")).deploy();

  const splitter = await (await ethers.getContractFactory("FeeSplitter")).deploy(router.target, treasury.address);
  const Launchpad = await ethers.getContractFactory("AgentLaunchpad", { libraries: { LaunchRules: rules.target } });
  const launchpad = await Launchpad.deploy({
    gate: openGate ? ethers.ZeroAddress : gate.target,
    template: template.target,
    adapter: adapter.target,
    escrow: ethers.ZeroAddress,
    perks: ethers.ZeroAddress,
    feeRecipient: splitter.target,
    treasury: treasury.address,
    guardian: guardian.address,
    graduationTarget,
    graduationFeeBps,
    launchFee,
    metaUpdateFee,
    walletCapBps,
    minTarget,
    minWalletCapBps,
    maxWalletCapBps,
    creatorAllocBps,
    creatorAllocUnlock,
    rateLimited,
    suffixMask: suffix ? 0xffffn : 0n,
    suffix: suffix ? 0xaaaan : 0n,
  });
  const lens = await (await ethers.getContractFactory("LaunchpadLens")).deploy(launchpad.target);

  const agnt = await (await ethers.getContractFactory("AGNTToken")).deploy(owner.address);
  const staking = await (await ethers.getContractFactory("AGNTStaking")).deploy(agnt.target, owner.address, E(100_000));

  return {
    owner, treasury, alice, bob, carol, dave, guardian, rest,
    wbnb, factory, router, agentId, gate, template, adapter, rules, splitter, launchpad, lens, agnt, staking,
  };
}

let counter = 0n;
/** A salt for `creator`. With the suffix rule on, search for one the way launch tools do. */
async function saltFor(launchpad, creator) {
  if ((await launchpad.suffixMask()) === 0n) {
    counter += 1n;
    return ethers.zeroPadBytes(creator, 20) + counter.toString(16).padStart(24, "0");
  }
  const { findSalt } = await import(VANITY);
  const { salt } = findSalt({
    launchpad: launchpad.target,
    creator,
    initCodeHash: await launchpad.tokenInitCodeHash(),
  });
  return salt;
}

function eventArgs(contract, rc, name) {
  const ev = rc.logs
    .map((l) => { try { return contract.interface.parseLog(l); } catch { return null; } })
    .find((e) => e && e.name === name);
  return ev && ev.args;
}

async function params(launchpad, creator, over = {}) {
  return {
    name: "Nova Agent",
    symbol: "NOVA",
    metaURI: "ipfs://meta",
    salt: await saltFor(launchpad, creator),
    quote: ethers.ZeroAddress,
    rewardMode: 0,
    recipients: [],
    ...over,
  };
}

async function createToken(launchpad, signer, over = {}, value) {
  const p = await params(launchpad, signer.address, over);
  const fee = value ?? (await launchpad.launchFeeFor(signer.address));
  const rc = await (await launchpad.connect(signer).create(p, { value: fee })).wait();
  return ethers.getContractAt("LaunchToken", eventArgs(launchpad, rc, "Created").token);
}

/** Buys with many agent wallets until the curve graduates. Returns the graduation receipt. */
async function fillCurve(launchpad, agentId, token, buyers, perBuy = E(1)) {
  for (const b of buyers) {
    if (!(await agentId.balanceOf(b.address))) await agentId.grant(b.address);
    const rc = await (await launchpad.connect(b).buy(token.target, 0, { value: perBuy })).wait();
    if (eventArgs(launchpad, rc, "Graduated")) return rc;
  }
  throw new Error("curve did not graduate");
}

module.exports = { E, deployAll, createToken, params, saltFor, eventArgs, fillCurve };
