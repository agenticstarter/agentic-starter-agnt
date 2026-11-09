/**
 * Local demo chain: deploys the stack with mock PancakeSwap and testnet settings (3 BNB graduation), then seeds two
 * days of launchpad activity, ignites, creator rewards and a live presale.
 * EMPTY=1 deploys the contracts only (no activity) to see the sites in their empty state.
 *
 *   HH_INITIAL_DATE=$(date -u -d '-2 days' +%FT%TZ) npx hardhat node      # terminal 1
 *   npx hardhat run scripts/local-demo.js --network localhost              # terminal 2
 *
 * LAUNCHER=0x… lets that wallet create tokens for users (the Telegram bot in local tests).
 * Writes deployments/localhost.json for the indexer and the web apps.
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;
const { networks, PRESALE, RESERVED_TICKERS } = require("../config/networks");
const { deployStack, tokenSalt } = require("./lib/stack");

const E = (n) => ethers.parseEther(String(n));
const DEV = process.env.DEV_ADDRESS; // optional: your browser wallet, gets a test Agent ID

const TOKENS = [
  ["Asti Agent", "ASTI", "#FFC93C", "The mascot coin of the first agent launchpad."],
  ["Nova Agent", "NOVA", "#E8B4F8", "An agent that scouts fresh launches before breakfast."],
  ["Byte Bandit", "BYTE", "#A58BFF", "Steals alpha, returns memes."],
  ["Sigma Swarm", "SWRM", "#3DDC97", "A hive of tiny agents trading as one."],
  ["Chain Whisper", "WHSP", "#FFE58A", "Reads mempools so you do not have to."],
  ["Orbit Oracle", "ORBT", "#F3BA2F", "Prices everything, predicts nothing."],
  ["Ledger Lynx", "LYNX", "#FF8F6B", "Fast paws on BNB Chain."],
  ["Pixel Pilot", "PXL", "#6BC5FF", "Flies tokens from idea to PancakeSwap."],
];

function metaURI(name, symbol, color, description) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='${color}'/><text x='32' y='41' font-family='Arial' font-weight='700' font-size='22' text-anchor='middle' fill='#0B0B0C'>${symbol.slice(0, 2)}</text></svg>`;
  const meta = {
    description,
    image: `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`,
    website: "https://agenticstarter.xyz",
    twitter: "@agentic_starter",
  };
  return `data:application/json;base64,${Buffer.from(JSON.stringify(meta)).toString("base64")}`;
}

let seed = 42;
const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);

async function warp(seconds) {
  await ethers.provider.send("evm_increaseTime", [Math.floor(seconds)]);
  await ethers.provider.send("evm_mine", []);
}

async function main() {
  const signers = await ethers.getSigners();
  const [deployer, treasury, team, guardian] = signers;
  const agents = signers.slice(4, 112);
  const startBlock = await ethers.provider.getBlockNumber();
  const deploy = async (name, ...args) => (await ethers.getContractFactory(name)).deploy(...args).then(async (c) => { await c.waitForDeployment(); return c; });

  const wbnb = await deploy("MockWBNB");
  const factory = await deploy("MockFactory");
  const router = await deploy("MockRouter", factory.target, wbnb.target);

  const chainNow = (await ethers.provider.getBlock("latest")).timestamp;
  const wallNow = Math.floor(Date.now() / 1000);
  const empty = process.env.EMPTY === "1";
  const presaleStart = empty ? chainNow + 3600 : Math.max(chainNow + 5, wallNow - 3600);
  const cfg = {
    ...networks[31337],
    router: router.target,
    testAgents: [...agents.map((a) => a.address), ...(DEV ? [DEV] : [])],
    launcher: process.env.LAUNCHER || null,
    keeper: deployer.address,
    presale: { ...PRESALE, start: presaleStart },
    reservedTickers: RESERVED_TICKERS,
    tge: wallNow + 30 * 86400,
  };
  const { addresses, contracts } = await deployStack({
    ethers,
    cfg,
    wallets: { TREASURY: treasury.address, TEAM: team.address, GUARDIAN: guardian.address, OWNER: deployer.address },
    log: () => {},
  });
  const { launchpad, presale, ignite } = contracts;
  console.log("contracts deployed");

  const out = () => ({
    chainId: 31337, startBlock, router: router.target, factory: factory.target, wbnb: wbnb.target,
    ...addresses, treasury: treasury.address, projectWallet: treasury.address, guardian: guardian.address,
    launchBot: cfg.launcher || undefined, keeper: deployer.address,
  });
  const write = () => {
    const dir = path.join(__dirname, "..", "deployments");
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "localhost.json"), JSON.stringify(out(), null, 2));
  };
  if (empty) {
    write();
    console.log("EMPTY=1: contracts deployed, no activity. Wrote deployments/localhost.json");
    return;
  }

  // ---------------------------------------------------------------- launchpad activity
  const tokens = [];
  const nTrades = Number(process.env.SEED_TRADES || 220);
  const created = async (i) => {
    const [name, symbol, color, desc] = TOKENS[i];
    const creator = agents[i * 3];
    const salt = await tokenSalt(launchpad, creator.address);
    const p = { name, symbol, metaURI: metaURI(name, symbol, color, desc), salt, quote: ethers.ZeroAddress, rewardMode: 0, recipients: [] };
    const rc = await (await launchpad.connect(creator).create(p)).wait();
    const ev = rc.logs.map((l) => { try { return launchpad.interface.parseLog(l); } catch { return null; } }).find((e) => e?.name === "Created");
    tokens.push({ addr: ev.args.token, symbol, weight: 1 + rand() * 3 });
    console.log(`  ${symbol.padEnd(5)} ${ev.args.token}`);
  };
  for (let i = 0; i < 4; i++) { await created(i); await warp(1800 + rand() * 3600); }

  for (let t = 0; t < nTrades; t++) {
    if (t === Math.floor(nTrades * 0.35)) await created(4);
    if (t === Math.floor(nTrades * 0.55)) await created(5);
    if (t === Math.floor(nTrades * 0.8)) await created(6);
    if (t === Math.floor(nTrades * 0.93)) await created(7);
    const live = [];
    for (const tk of tokens) if (!(await launchpad.curves(tk.addr)).graduated) live.push(tk);
    if (!live.length) break;
    const total = live.reduce((s, x) => s + x.weight, 0);
    let r = rand() * total, tk = live[0];
    for (const x of live) { r -= x.weight; if (r <= 0) { tk = x; break; } }
    const who = agents[Math.floor(rand() * agents.length)];
    const token = await ethers.getContractAt("LaunchToken", tk.addr);
    const bal = await token.balanceOf(who.address);
    try {
      if (bal > 0n && rand() < 0.28) {
        await (await launchpad.connect(who).sell(tk.addr, (bal * BigInt(30 + Math.floor(rand() * 70))) / 100n, 0)).wait();
      } else {
        const bnb = 0.004 + rand() * rand() * 0.03;
        await (await launchpad.connect(who).buy(tk.addr, 0, { value: E(bnb.toFixed(5)) })).wait();
      }
    } catch { /* wallet cap reached etc. */ }
    await warp(60 + rand() * 420);
  }

  // push ASTI to graduation and NOVA, BYTE close to it
  const fill = async (addr, targetBps) => {
    for (const a of agents) {
      if (Number(await contracts.lens.progressBps(addr)) >= targetBps) return;
      if ((await launchpad.curves(addr)).graduated) return;
      try { await (await launchpad.connect(a).buy(addr, 0, { value: E(0.2) })).wait(); } catch { /* capped */ }
      await warp(30 + rand() * 120);
    }
  };
  await fill(tokens[0].addr, 10_001);
  await fill(tokens[1].addr, 8_600);
  await fill(tokens[2].addr, 5_400);
  await (await launchpad.collectFees()).wait();
  // one creator claims rewards, one updates the token info
  await (await launchpad.connect(agents[0]).claimFor([tokens[0].addr])).wait().catch(() => {});
  const [n1, s1, c1] = TOKENS[1];
  await (await launchpad.connect(agents[3]).updateMeta(tokens[1].addr, metaURI(n1, s1, c1, "Scouts fresh launches before breakfast. Now with a Telegram channel."), { value: E(0.01) })).wait();
  console.log(`seeded ${tokens.length} tokens`);

  // ---------------------------------------------------------------- ignite (burn + message)
  const msgs = ["first agent in, last agent out", "burning for the culture", "curve looks healthy, holders growing", "gm agents", "see you on PancakeSwap"];
  for (let i = 0; i < 6; i++) {
    const tk = tokens[i % 3];
    const token = await ethers.getContractAt("LaunchToken", tk.addr);
    for (const a of agents) {
      const bal = await token.balanceOf(a.address);
      if (bal < 10n ** 24n) continue;
      const amt = (bal * BigInt(5 + Math.floor(rand() * 20))) / 100n;
      await (await token.connect(a).approve(ignite.target, amt)).wait();
      await (await ignite.connect(a).ignite(tk.addr, amt, msgs[i % msgs.length], 0)).wait();
      await warp(300 + rand() * 1800);
      break;
    }
  }

  // ---------------------------------------------------------------- presale (live round)
  const latest = (await ethers.provider.getBlock("latest")).timestamp;
  await ethers.provider.send("evm_setNextBlockTimestamp", [Math.max(presaleStart + 60, wallNow - 600, latest + 1)]);
  await ethers.provider.send("evm_mine", []);
  for (let i = 30; i < 85; i++) {
    const v = (0.1 + rand() * 1.9).toFixed(3);
    const ref = i % 3 === 0 ? agents[5 + (i % 2)].address : null; // every third buyer came through an invite link
    const tx = ref ? presale.connect(agents[i]).contributeWithRef(ref, { value: E(v) }) : presale.connect(agents[i]).contribute({ value: E(v) });
    await (await tx).wait();
  }
  console.log(`presale raised ${ethers.formatEther(await presale.totalRaised())} BNB`);

  write();
  console.log("wrote deployments/localhost.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
