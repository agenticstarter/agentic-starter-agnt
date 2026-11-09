/**
 * Deploys the whole Agentic Starter stack. Shared by scripts/deploy.js (testnet and mainnet) and
 * scripts/local-demo.js (local chain with mock PancakeSwap).
 */
const path = require("path");

const DAY = 86400n;
const MONTH = 30n * DAY;

/** "AAAA" → { mask: 0xffff, value: 0xaaaa }; "" → no suffix rule. */
function suffixBits(hex) {
  if (!hex) return { mask: 0n, value: 0n };
  const h = hex.toLowerCase();
  if (!/^[0-9a-f]{1,8}$/.test(h)) throw new Error(`bad suffix ${hex}`);
  return { mask: (1n << BigInt(4 * h.length)) - 1n, value: BigInt("0x" + h) };
}

// dynamic import() needs a file:// URL on Windows (a bare C:\ path fails)
const VANITY = require("url").pathToFileURL(path.join(__dirname, "..", "..", "..", "packages", "sdk", "src", "vanity.js")).href;

/** Runs the salt search in a worker thread so the main thread keeps its RPC connection alive. */
function findSaltInWorker(opts) {
  const { Worker } = require("worker_threads");
  const code = `const { parentPort, workerData } = require("worker_threads");
    import(workerData.vanity).then(({ findSalt }) => parentPort.postMessage(findSalt(workerData.opts)))
      .catch((e) => parentPort.postMessage({ error: String(e) }));`;
  return new Promise((resolve, reject) => {
    const w = new Worker(code, { eval: true, workerData: { vanity: VANITY, opts } });
    w.once("message", (m) => (m.error ? reject(new Error(m.error)) : resolve(m)));
    w.once("error", reject);
  });
}

/** Finds a salt for `creator` whose token address ends with the launchpad's suffix. */
async function tokenSalt(launchpad, creator) {
  const mask = await launchpad.suffixMask();
  if (mask === 0n) {
    const rnd = BigInt(Math.floor(Math.random() * 2 ** 48)).toString(16).padStart(24, "0");
    return creator.toLowerCase() + rnd;
  }
  const suffix = (await launchpad.suffix()).toString(16).toUpperCase();
  const initCodeHash = await launchpad.tokenInitCodeHash();
  const provider = launchpad.runner.provider;
  const keepAlive = setInterval(() => provider.getBlockNumber().catch(() => {}), 2000);
  try {
    const r = await findSaltInWorker({ launchpad: launchpad.target, creator, initCodeHash, suffix });
    return r.salt;
  } finally {
    clearInterval(keepAlive);
  }
}

/**
 * @param {object} o
 * @param {import('ethers')} o.ethers
 * @param {object} o.cfg       network settings (config/networks.js, after env overrides)
 * @param {object} o.wallets   TREASURY, TEAM, GUARDIAN, KEEPER, LAUNCHER, OWNER
 * @param {function} [o.log]
 */
async function deployStack({ ethers, cfg, wallets, log = console.log }) {
  const E = (n) => ethers.parseEther(String(n));
  const M = (n) => E(n * 1_000_000);
  const [deployer] = await ethers.getSigners();
  const owner = wallets.OWNER || deployer.address;
  const deployed = [];
  const deploy = async (name, args = [], opts = {}) => {
    const c = await (await ethers.getContractFactory(name, opts)).deploy(...args);
    await c.waitForDeployment();
    log(`  ${name.padEnd(22)} ${c.target}`);
    deployed.push({ name, address: c.target, args, libraries: opts.libraries });
    return c;
  };
  const send = async (p) => (await p).wait();

  // ---- agent check
  let agentRegistry = cfg.agentRegistry;
  let testnetAgentId;
  if (agentRegistry === "testnet") {
    testnetAgentId = await deploy("TestnetAgentID");
    const grants = [deployer.address, ...(cfg.testAgents || [])];
    await send(testnetAgentId.grant(grants));
    agentRegistry = testnetAgentId.target;
  }
  const gate = await deploy("AgentGate", [[agentRegistry, ...(cfg.extraRegistries || [])], owner, wallets.GUARDIAN || ethers.ZeroAddress]);

  // ---- AGNT and staking first: staking is the launchpad's perks module
  const agnt = await deploy("AGNTToken", [deployer.address]);
  const staking = await deploy("AGNTStaking", [agnt.target, owner, E(cfg.perkThreshold || "100000")]);

  // ---- launchpad modules
  const template = await deploy("LaunchToken");
  const adapter = await deploy("PancakeV2Adapter", [cfg.router]);
  const rules = await deploy("LaunchRules");
  const escrow = await deploy("AccountFeeEscrow", [ethers.ZeroAddress, deployer.address, cfg.attester || ethers.ZeroAddress, wallets.GUARDIAN || ethers.ZeroAddress]);
  const splitter = await deploy("FeeSplitter", [cfg.router, wallets.TREASURY]);
  const sfx = suffixBits(cfg.suffix);
  const launchpad = await deploy("AgentLaunchpad", [{
    gate: gate.target,
    template: template.target,
    adapter: adapter.target,
    escrow: escrow.target,
    perks: staking.target,
    feeRecipient: splitter.target,
    treasury: wallets.TREASURY,
    guardian: wallets.GUARDIAN || ethers.ZeroAddress,
    graduationTarget: E(cfg.graduationTarget),
    graduationFeeBps: BigInt(cfg.graduationFeeBps),
    launchFee: E(cfg.launchFee),
    metaUpdateFee: E(cfg.metaUpdateFee),
    walletCapBps: BigInt(cfg.walletCapBps),
    minTarget: E(cfg.minTarget),
    minWalletCapBps: BigInt(cfg.minWalletCapBps),
    maxWalletCapBps: BigInt(cfg.maxWalletCapBps),
    creatorAllocBps: BigInt(cfg.creatorAllocBps),
    creatorAllocUnlock: BigInt(cfg.creatorAllocUnlock),
    rateLimited: !!cfg.rateLimited,
    suffixMask: sfx.mask,
    suffix: sfx.value,
  }], { libraries: { LaunchRules: rules.target } });
  await send(escrow.setLaunchpad(launchpad.target));
  const lens = await deploy("LaunchpadLens", [launchpad.target]);
  if (cfg.reservedTickers?.length) await send(launchpad.setReserved(cfg.reservedTickers, true));
  if (cfg.launcher) {
    await send(launchpad.setLauncher(cfg.launcher, true));
    log(`  launch bot             ${cfg.launcher} (may create tokens for users)`);
  }
  if (cfg.startPaused) {
    await send(launchpad.pause());
    log("  launchpad paused until opening day (the owner unpauses)");
  }
  await send(splitter.setAddresses(agnt.target, staking.target, wallets.TREASURY, cfg.keeper || deployer.address));
  const ignite = await deploy("IgniteBoard");

  // ---- standard tokens (no curve) and the liquidity helper
  const standardFactory = await deploy("StandardTokenFactory", [owner, wallets.TREASURY, staking.target]);
  const liquidityHelper = await deploy("LiquidityHelper", [cfg.router]);

  // ---- presale "250+" (mainnet: dates are required; testnet: optional small round). Sale tokens go in now.
  let presale;
  if (cfg.presale) {
    const p = cfg.presale;
    presale = await deploy("AGNTPresale", [{
      agnt: agnt.target,
      projectWallet: wallets.TREASURY,
      floorRate: E(p.floorRate),
      saleTokens: E(p.saleTokens),
      softCap: E(p.softCap),
      minBuy: E(p.minBuy),
      maxBuy: E(p.maxBuy),
      bonusBps: BigInt(p.bonusBps),
      bonusCap: E(p.bonusCap),
      bonusWindow: BigInt(p.bonusHours) * 3600n,
      startTime: BigInt(p.start),
      endTime: BigInt(p.start) + BigInt(p.days) * DAY,
    }]);
    await send(agnt.transfer(presale.target, E(p.saleTokens)));
    log(`  sale tokens in the presale: ${p.saleTokens} AGNT`);
  }

  // ---- airdrop claims (seasons open later from the owner)
  const airdrop = await deploy("SparkAirdrop", [agnt.target, wallets.TREASURY]);

  // ---- vesting, counted from the planned TGE; the owner may only postpone it
  let vesting;
  if (cfg.tge) {
    const tge = BigInt(cfg.tge);
    const team = await deploy("AGNTVesting", [wallets.TEAM, tge, 36n * MONTH, 12n * MONTH, owner]); // 12m cliff + 24m linear
    const eco = await deploy("AGNTVesting", [wallets.ECOSYSTEM || wallets.TREASURY, tge, 21n * MONTH, 3n * MONTH, owner]); // 3m cliff + 18m
    const tre = await deploy("AGNTVesting", [wallets.TREASURY, tge, 12n * MONTH, 0n, owner]); // 12m linear
    await send(agnt.transfer(team.target, M(120)));
    await send(agnt.transfer(eco.target, M(120)));
    await send(agnt.transfer(tre.target, M(100)));
    vesting = { team: team.target, ecosystem: eco.target, treasury: tre.target };
  }

  // ---- hand everything to the owner (the Safe on mainnet). Ownable2Step: the Safe must accept.
  const pendingAccept = [];
  if (owner.toLowerCase() !== deployer.address.toLowerCase()) {
    const owned = [["AgentLaunchpad", launchpad], ["FeeSplitter", splitter], ["SparkAirdrop", airdrop], ["AccountFeeEscrow", escrow]];
    if (presale) owned.push(["AGNTPresale", presale]);
    for (const [name, c] of owned) {
      await send(c.transferOwnership(owner));
      pendingAccept.push({ name, address: c.target });
    }
    // community 200M → Community Safe; liquidity 150M + listing reserve 60M → Liquidity Safe; the rest → Treasury
    const moves = [["COMMUNITY", 200], ["LIQUIDITY", 210]];
    for (const [k, m] of moves) {
      if (wallets[k]) {
        await send(agnt.transfer(wallets[k], M(m)));
        log(`  ${m}M AGNT → ${k} Safe ${wallets[k]}`);
      }
    }
    const rest = await agnt.balanceOf(deployer.address);
    if (rest > 0n) await send(agnt.transfer(wallets.TREASURY, rest));
    log(`  AGNT left with the deployer moved to the treasury: ${ethers.formatEther(rest)}`);
  }

  return {
    deployed,
    pendingAccept,
    addresses: {
      agentRegistry,
      testnetAgentId: testnetAgentId?.target,
      agentGate: gate.target,
      launchpad: launchpad.target,
      lens: lens.target,
      tokenTemplate: template.target,
      graduationAdapter: adapter.target,
      launchRules: rules.target,
      accountEscrow: escrow.target,
      feeSplitter: splitter.target,
      agnt: agnt.target,
      staking: staking.target,
      ignite: ignite.target,
      standardFactory: standardFactory.target,
      liquidityHelper: liquidityHelper.target,
      presale: presale?.target,
      airdrop: airdrop.target,
      vesting,
    },
    contracts: { gate, launchpad, lens, splitter, agnt, staking, ignite, presale, airdrop, testnetAgentId, standardFactory, liquidityHelper, escrow },
  };
}

module.exports = { deployStack, tokenSalt, suffixBits };
