/**
 * Deploys ONE extra AGNTPresale against the AGNT token of an existing deployment, for a quick rehearsal
 * (e.g. hard cap 0.5 tBNB) without redeploying everything.
 *
 *   HARD_CAP=0.5 SOFT_CAP=0.2 MIN_BUY=0.01 MAX_BUY=0.2 START_MIN=5 PRESALE_HOURS=2 \
 *   npx hardhat run scripts/deploy-presale.js --network bscTestnet
 *
 * Environment (all optional):
 *   HARD_CAP, SOFT_CAP, MIN_BUY, MAX_BUY   in BNB (defaults 0.5, 0.2, 0.01, 0.2)
 *   PRESALE_RATE                            AGNT per 1 BNB (default 1000000)
 *   START_MIN                               opens this many minutes from now (default 5)
 *   PRESALE_HOURS                           length (default 2)
 *   PROJECT_WALLET                          receives the BNB at finalize (default: the deployment's projectWallet)
 *   USE_IT=1                                also make it THE presale of deployments/<network>.json, so
 *                                           write-env.js, the site and the indexer pick it up
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;

const E = (n) => ethers.parseEther(String(n));

async function main() {
  const file = path.join(__dirname, "..", "deployments", `${hre.network.name}.json`);
  if (!fs.existsSync(file)) throw new Error(`deployments/${hre.network.name}.json not found: run deploy.js first`);
  const d = JSON.parse(fs.readFileSync(file, "utf8"));
  const [deployer] = await ethers.getSigners();
  const { chainId } = await ethers.provider.getNetwork();
  if (Number(chainId) === 56 && process.env.ALLOW_MAINNET !== "1") throw new Error("This script is for rehearsals. Set ALLOW_MAINNET=1 if you really mean mainnet.");

  const chainNow = (await ethers.provider.getBlock("latest")).timestamp; // chain clock, not this computer's
  const start = chainNow + Number(process.env.START_MIN ?? 5) * 60;
  const end = start + Math.round(Number(process.env.PRESALE_HOURS || 2) * 3600);
  const cfg = {
    agnt: d.agnt,
    projectWallet: process.env.PROJECT_WALLET || d.projectWallet || deployer.address,
    rate: E(process.env.PRESALE_RATE || 1_000_000),
    softCap: E(process.env.SOFT_CAP || 0.2),
    hardCap: E(process.env.HARD_CAP || 0.5),
    minBuy: E(process.env.MIN_BUY || 0.01),
    maxBuy: E(process.env.MAX_BUY || 0.2),
    startTime: start,
    endTime: end,
  };
  const presale = await (await ethers.getContractFactory("AGNTPresale")).deploy(cfg);
  await presale.waitForDeployment();
  const block = await ethers.provider.getBlockNumber();

  console.log(`AGNTPresale ${presale.target}`);
  console.log(`  hard cap ${ethers.formatEther(cfg.hardCap)} BNB · soft cap ${ethers.formatEther(cfg.softCap)} · per wallet ${ethers.formatEther(cfg.minBuy)}–${ethers.formatEther(cfg.maxBuy)}`);
  console.log(`  opens ${new Date(start * 1000).toISOString()} · closes ${new Date(end * 1000).toISOString()}`);
  console.log(`  BNB goes to ${cfg.projectWallet} at finalize`);

  const rec = { presale: presale.target, block, ...Object.fromEntries(Object.entries(cfg).map(([k, v]) => [k, typeof v === "bigint" ? v.toString() : v])) };
  fs.writeFileSync(path.join(__dirname, "..", "deployments", `${hre.network.name}.presale-test.json`), JSON.stringify(rec, null, 2));

  if (process.env.USE_IT === "1") {
    d.presale = presale.target;
    d.projectWallet = cfg.projectWallet;
    fs.writeFileSync(file, JSON.stringify(d, null, 2));
    console.log(`\nUpdated deployments/${hre.network.name}.json. Next: node contracts/scripts/write-env.js ${hre.network.name} <api url>,`);
    console.log(`rebuild the presale site, and restart the indexer with START_BLOCK=${block} or a fresh database.`);
  } else {
    console.log(`\nTo try it on the presale site: VITE_PRESALE=${presale.target} (presale site build)`);
    console.log(`For live buys in the indexer: PRESALE=${presale.target} and START_BLOCK=${block}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
