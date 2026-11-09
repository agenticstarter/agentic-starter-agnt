/**
 * Owner actions on the presale, for the wallet that owns it (testnet rehearsals).
 * On mainnet the owner is the multisig: do the same calls in the Safe app (see the mainnet runbook).
 *
 *   ACTION=status       npx hardhat run scripts/presale-admin.js --network bscTestnet
 *   ACTION=finalize     … sends every BNB raised to the project wallet (sale ended above the soft cap)
 *   ACTION=open-claim   … deposits the sold AGNT from this wallet, then opens claims
 *   ACTION=open-refunds … refund mode; after finalize, add BNB_BACK=<amount> (the project wallet sends it back)
 *   ACTION=schedule START=<unix> END=<unix> … move the dates before the sale opens
 *
 * PRESALE=0x… picks a presale other than the one in deployments/<network>.json
 * (e.g. the one from deploy-presale.js: deployments/<network>.presale-test.json).
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;

const PHASES = ["not open yet", "live", "ended (finalize next)", "finalized (claims not open)", "claims open", "refunds open"];

async function main() {
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "deployments", `${hre.network.name}.json`), "utf8"));
  const [me] = await ethers.getSigners();
  const p = await ethers.getContractAt("AGNTPresale", process.env.PRESALE || d.presale);
  const f = (v) => ethers.formatEther(v);
  const action = process.env.ACTION || "status";

  const show = async () => {
    const [phase, raised, soft, hard, buyers, start, end, owner, wallet, bal] = await Promise.all([
      p.phase(), p.totalRaised(), p.softCap(), p.hardCap(), p.contributors(), p.startTime(), p.endTime(), p.owner(), p.projectWallet(), ethers.provider.getBalance(p.target),
    ]);
    console.log(`presale ${p.target}`);
    console.log(`  phase ${phase} (${PHASES[Number(phase)]}) · raised ${f(raised)} / ${f(hard)} BNB (soft cap ${f(soft)}) · ${buyers} buyers`);
    console.log(`  window ${new Date(Number(start) * 1000).toISOString()} → ${new Date(Number(end) * 1000).toISOString()}`);
    console.log(`  owner ${owner}${owner.toLowerCase() === me.address.toLowerCase() ? " (this wallet)" : ""} · project wallet ${wallet} · BNB in contract ${f(bal)}`);
  };

  if (action === "status") return show();
  if (action === "finalize") {
    await (await p.finalize()).wait();
    console.log("Finalized: every BNB raised went to the project wallet.");
  } else if (action === "open-claim") {
    const agnt = await ethers.getContractAt("AGNTToken", await p.agnt());
    const need = (await p.tokensSold()) - (await p.totalClaimed());
    const have = await agnt.balanceOf(p.target);
    if (have < need) {
      console.log(`Depositing ${f(need - have)} AGNT…`);
      await (await agnt.transfer(p.target, need - have)).wait();
    }
    await (await p.openClaim()).wait();
    console.log("Claims are open: buyers claim on the presale site.");
  } else if (action === "open-refunds") {
    await (await p.openRefunds({ value: ethers.parseEther(process.env.BNB_BACK || "0") })).wait();
    console.log("Refund mode is on: buyers refund on the presale site.");
  } else if (action === "schedule") {
    await (await p.setSchedule(BigInt(process.env.START), BigInt(process.env.END))).wait();
    console.log("Schedule updated.");
  } else {
    throw new Error(`Unknown ACTION ${action}`);
  }
  await show();
}

main().catch((e) => {
  console.error(e.shortMessage || e.message);
  process.exit(1);
});
