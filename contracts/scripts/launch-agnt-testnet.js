/**
 * Testnet only: launches $AGNT as a bonding-curve token so the whole launch → buy → graduate → PancakeSwap path can be
 * tested with the real platform name. On mainnet $AGNT is sold in the presale and listed directly, never on a curve.
 *
 *   npx hardhat run scripts/launch-agnt-testnet.js --network bscTestnet
 *
 * Needs the testnet owner key (the deployer keeps ownership on testnet). Steps: lift the AGNT reservation, create the
 * token from the deployer (which holds a testnet Agent ID), reserve AGNT again so nobody else can copy it, and save
 * the address as `agntCurve` in deployments/bscTestnet.json (write-env.js passes it to the web app).
 * Optional: AGNT_FIRST_BUY=0.05 makes a first buy in BNB.
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;
const { tokenSalt } = require("./lib/stack");

const SITE = "https://agenticstarter.xyz";

async function main() {
  const { chainId } = await ethers.provider.getNetwork();
  if (chainId !== 97n) throw new Error("This script runs on BNB Chain testnet (97) only.");
  const file = path.join(__dirname, "..", "deployments", "bscTestnet.json");
  const d = JSON.parse(fs.readFileSync(file, "utf8"));
  if (d.agntCurve) return console.log(`$AGNT curve token already exists: ${d.agntCurve}`);

  const [me] = await ethers.getSigners();
  const lp = await ethers.getContractAt("AgentLaunchpad", d.launchpad, me);
  if ((await lp.owner()).toLowerCase() !== me.address.toLowerCase()) throw new Error("The deployer is not the launchpad owner on testnet.");

  const meta = {
    description: "Agentic Starter platform token. Testnet curve for end-to-end tests; on mainnet $AGNT is sold in the presale and listed on PancakeSwap.",
    image: `${SITE}/icon-512.png`,
    website: SITE,
    twitter: "@agentic_starter",
  };
  const metaURI = `data:application/json;base64,${Buffer.from(JSON.stringify(meta)).toString("base64")}`;

  console.log("Searching a salt for the AAAA address…");
  const salt = await tokenSalt(lp, me.address);
  const p = { name: "Agentic Starter", symbol: "AGNT", metaURI, salt, quote: ethers.ZeroAddress, rewardMode: 0, recipients: [] };

  const wait = async (tx, what) => { const rc = await (await tx).wait(); console.log(`  ${what}: ${rc.hash}`); return rc; };
  await wait(lp.setReserved(["AGNT"], false), "AGNT unlocked");
  let rc;
  try {
    const firstBuy = process.env.AGNT_FIRST_BUY ? ethers.parseEther(process.env.AGNT_FIRST_BUY) : 0n;
    const fee = await lp.launchFeeFor(me.address);
    rc = firstBuy > 0n
      ? await wait(lp.createAndBuy(p, 0, { value: fee + firstBuy }), "created + first buy")
      : await wait(lp.create(p, { value: fee }), "created");
  } finally {
    await wait(lp.setReserved(["AGNT"], true), "AGNT reserved again");
  }
  const ev = rc.logs.map((l) => { try { return lp.interface.parseLog(l); } catch { return null; } }).find((e) => e?.name === "Created");
  d.agntCurve = ev.args.token;
  fs.writeFileSync(file, JSON.stringify(d, null, 2));
  console.log(`$AGNT testnet curve token: ${d.agntCurve}\nSaved agntCurve in deployments/bscTestnet.json. Run write-env.js again.`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
