/**
 * Deploys Agentic Starter.
 *
 *   Wave 1, testnet:  npx hardhat run scripts/deploy.js --network bscTestnet
 *   Wave 2, mainnet:  PRESALE_START=2027-01-10T14:00:00Z TGE=2027-02-01T14:00:00Z \
 *                     npx hardhat run scripts/deploy.js --network bsc
 *
 * Settings come from config/networks.js. Any of them can be overridden with an environment variable:
 *   TREASURY TEAM GUARDIAN KEEPER LAUNCHER OWNER       wallets (OWNER=deployer keeps ownership, testnet default)
 *   AGENT_REGISTRY      Agent ID registry, or "testnet" to deploy a free-claim TestnetAgentID
 *   TEST_AGENTS         comma-separated wallets that get a testnet Agent ID right away
 *   GRADUATION_TARGET GRADUATION_FEE_BPS LAUNCH_FEE META_FEE WALLET_CAP_BPS MIN_TARGET SUFFIX   launchpad settings
 *   ATTESTER            wallet that signs X/GitHub account bindings for the fee escrow (optional, settable later)
 *   START_PAUSED=0|1    start with launches and buys paused (mainnet default 1)
 *   PRESALE_START       ISO date or unix time the presale opens (UTC). Required on mainnet.
 *   PRESALE_DAYS        default 15
 *   PRESALE_SOFT_CAP PRESALE_MIN PRESALE_MAX   default 50, 0.05, 5 (model 250+: floor 1 BNB = 1M AGNT up to 250 BNB)
 *   TGE                 planned listing date (ISO or unix): vesting counts from here. Required on mainnet.
 *
 * Writes deployments/<network>.json (addresses, settings and constructor arguments for scripts/verify.js).
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;
const { WALLETS, networks, RESERVED_TICKERS, PRESALE } = require("../config/networks");
const { deployStack } = require("./lib/stack");

const env = process.env;
const toUnix = (v) => (v == null || v === "" ? undefined : /^\d+$/.test(v) ? Number(v) : Math.floor(Date.parse(v) / 1000));

async function main() {
  const [deployer] = await ethers.getSigners();
  const chainId = Number((await ethers.provider.getNetwork()).chainId);
  const base = networks[chainId];
  if (!base) throw new Error(`No settings for chain ${chainId} in config/networks.js`);
  const mainnet = chainId === 56;

  const cfg = {
    ...base,
    router: env.ROUTER || base.router,
    agentRegistry: env.AGENT_REGISTRY || base.agentRegistry,
    testAgents: (env.TEST_AGENTS || "").split(",").map((a) => a.trim()).filter(Boolean),
    graduationTarget: env.GRADUATION_TARGET || base.graduationTarget,
    graduationFeeBps: Number(env.GRADUATION_FEE_BPS || base.graduationFeeBps),
    launchFee: env.LAUNCH_FEE || base.launchFee,
    metaUpdateFee: env.META_FEE || base.metaUpdateFee,
    walletCapBps: Number(env.WALLET_CAP_BPS || base.walletCapBps),
    minTarget: env.MIN_TARGET || base.minTarget,
    // an empty line in .env (LAUNCHER=) means "use the default", not "none"; write "none" to deploy without one
    suffix: env.SUFFIX ? env.SUFFIX : base.suffix,
    launcher: env.LAUNCHER === "none" ? "" : env.LAUNCHER || base.launcher,
    keeper: env.KEEPER || base.keeper,
    attester: env.ATTESTER || WALLETS.ATTESTER,
    reservedTickers: RESERVED_TICKERS,
    startPaused: env.START_PAUSED ? env.START_PAUSED === "1" : base.startPaused,
    tge: toUnix(env.TGE),
  };
  const presaleStart = toUnix(env.PRESALE_START);
  if (presaleStart) {
    cfg.presale = {
      ...PRESALE,
      start: presaleStart,
      days: Number(env.PRESALE_DAYS || PRESALE.days),
      softCap: env.PRESALE_SOFT_CAP || PRESALE.softCap,
      minBuy: env.PRESALE_MIN || PRESALE.minBuy,
      maxBuy: env.PRESALE_MAX || PRESALE.maxBuy,
    };
  }
  const ownerSetting = env.OWNER || base.owner;
  const wallets = {
    TREASURY: env.TREASURY || WALLETS.TREASURY,
    TEAM: env.TEAM || WALLETS.TEAM,
    GUARDIAN: env.GUARDIAN || WALLETS.GUARDIAN,
    ECOSYSTEM: env.ECOSYSTEM || WALLETS.ECOSYSTEM,
    LIQUIDITY: env.LIQUIDITY || WALLETS.LIQUIDITY,
    COMMUNITY: env.COMMUNITY || WALLETS.COMMUNITY,
    OWNER: ownerSetting === "deployer" ? deployer.address : ownerSetting,
  };

  if (!cfg.router) throw new Error("No DEX router: set ROUTER");
  if (mainnet) {
    if (cfg.agentRegistry === "testnet" || !ethers.isAddress(cfg.agentRegistry)) throw new Error("Mainnet needs the real AGENT_REGISTRY");
    if (!cfg.presale) throw new Error("Mainnet needs PRESALE_START (UTC)");
    if (!cfg.tge) throw new Error("Mainnet needs TGE, the planned listing date (vesting counts from it)");
    if (cfg.presale.start <= Math.floor(Date.now() / 1000)) throw new Error("PRESALE_START is in the past");
    for (const [k, v] of Object.entries(wallets)) {
      if ((await ethers.provider.getCode(v)) === "0x" && k !== "GUARDIAN") {
        throw new Error(`${k} ${v} has no contract code on BNB Chain. Is the Safe created on this network?`);
      }
    }
  }
  if (cfg.tge && cfg.presale && cfg.tge < cfg.presale.start + cfg.presale.days * 86400) {
    console.warn("  note: TGE is before the presale ends");
  }

  console.log(`Deploying on chain ${chainId} from ${deployer.address}`);
  console.log(`  balance ${ethers.formatEther(await ethers.provider.getBalance(deployer.address))} BNB`);
  const { deployed, pendingAccept, addresses } = await deployStack({ ethers, cfg, wallets });

  const out = {
    chainId,
    startBlock: await ethers.provider.getBlockNumber(),
    router: cfg.router,
    ...addresses,
    launchBot: cfg.launcher || undefined,
    keeper: cfg.keeper,
    treasury: wallets.TREASURY,
    team: wallets.TEAM,
    ecosystem: wallets.ECOSYSTEM,
    liquidity: wallets.LIQUIDITY,
    community: wallets.COMMUNITY,
    guardian: wallets.GUARDIAN,
    owner: wallets.OWNER,
    settings: {
      graduationTarget: cfg.graduationTarget,
      graduationFeeBps: cfg.graduationFeeBps,
      launchFee: cfg.launchFee,
      metaUpdateFee: cfg.metaUpdateFee,
      walletCapBps: cfg.walletCapBps,
      creatorAllocBps: cfg.creatorAllocBps,
      creatorAllocUnlock: cfg.creatorAllocUnlock,
      suffix: cfg.suffix,
      startPaused: cfg.startPaused,
      presale: cfg.presale,
      tge: cfg.tge,
    },
    projectWallet: wallets.TREASURY,
    contracts: JSON.parse(JSON.stringify(deployed, (_k, v) => (typeof v === "bigint" ? v.toString() : v))),
  };
  const dir = path.join(__dirname, "..", "deployments");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${hre.network.name}.json`), JSON.stringify(out, null, 2));
  console.log(`Saved deployments/${hre.network.name}.json`);

  if (pendingAccept.length) {
    console.log("\nThe owner Safe must accept ownership (app.safe.global → New transaction → Transaction Builder):");
    for (const p of pendingAccept) console.log(`  ${p.name.padEnd(15)} ${p.address}  → acceptOwnership()`);
    console.log("Or load the batch file the admin page builds (Contract tab → Accept ownership).");
  }
  console.log("\nNext: npm run verify:" + (mainnet ? "mainnet" : "testnet"));
}

main().catch((e) => {
  console.error(e.shortMessage || e.message);
  process.exit(1);
});
