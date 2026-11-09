/**
 * Hands every owned contract to the multisig and (optionally) moves the deployer's AGNT to it.
 * Ownable2Step contracts need the multisig to call acceptOwnership() afterwards (Safe app → New transaction).
 *
 *   MULTISIG=0x71c9… npx hardhat run scripts/handover.js --network bsc
 *   MULTISIG=0x… MOVE_AGNT=1 npx hardhat run scripts/handover.js --network bsc   # also send all deployer AGNT
 *
 * DRY_RUN=1 only prints what would happen.
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;

const OWNED = [
  ["launchpad", "AgentLaunchpad"],
  ["agentGate", "AgentGate"],
  ["accountEscrow", "AccountFeeEscrow"],
  ["feeSplitter", "FeeSplitter"],
  ["staking", "AGNTStaking"],
  ["presale", "AGNTPresale"],
  ["ignite", "IgniteBoard"],
  ["standardFactory", "StandardTokenFactory"],
  ["airdrop", "SparkAirdrop"],
  // TestnetAgentID is left out: its owner is immutable and can only hand out free testnet IDs
];

async function main() {
  const to = process.env.MULTISIG;
  if (!to || !ethers.isAddress(to)) throw new Error("Set MULTISIG=0x… (your Safe address on this network)");
  const code = await ethers.provider.getCode(to);
  if (code === "0x") throw new Error(`${to} has no contract code on this network. Is the Safe deployed on this chain?`);
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "deployments", `${hre.network.name}.json`), "utf8"));
  const [me] = await ethers.getSigners();
  const dry = process.env.DRY_RUN === "1";
  const pending = [];

  for (const [key, name] of OWNED) {
    if (!d[key]) continue;
    const c = await ethers.getContractAt(name, d[key]);
    let owner;
    try { owner = await c.owner(); } catch { continue; }
    if (owner.toLowerCase() === to.toLowerCase()) { console.log(`  ${name.padEnd(15)} already owned by the multisig`); continue; }
    if (owner.toLowerCase() !== me.address.toLowerCase()) { console.log(`  ${name.padEnd(15)} owned by ${owner}, skipped`); continue; }
    if (typeof c.transferOwnership !== "function") { console.log(`  ${name.padEnd(15)} has no transferOwnership, skipped`); continue; }
    const twoStep = c.interface.fragments.some((f) => f.name === "acceptOwnership");
    let already = false;
    if (twoStep) { try { already = (await c.pendingOwner()).toLowerCase() === to.toLowerCase(); } catch { /* no pendingOwner */ } }
    console.log(`  ${name.padEnd(15)} ${d[key]} → ${to}${already ? " (already offered, waiting for the multisig)" : twoStep ? " (multisig must accept)" : ""}`);
    if (!dry && !already) await (await c.transferOwnership(to)).wait();
    if (twoStep) pending.push([name, d[key]]);
  }

  if (process.env.MOVE_AGNT === "1" && d.agnt) {
    const agnt = await ethers.getContractAt("AGNTToken", d.agnt);
    const bal = await agnt.balanceOf(me.address);
    console.log(`  AGNT            ${ethers.formatEther(bal)} from the deployer → ${to}`);
    if (!dry && bal > 0n) await (await agnt.transfer(to, bal)).wait();
  }

  if (pending.length) {
    // one Transaction Builder file: the Safe accepts every contract in a single signed batch
    const batch = {
      version: "1.0",
      chainId: String((await ethers.provider.getNetwork()).chainId),
      createdAt: Date.now(),
      meta: { name: "Accept ownership", description: "acceptOwnership() on every Agentic Starter contract", txBuilderVersion: "1.16.5", createdFromSafeAddress: to },
      transactions: pending.map(([, addr]) => ({ to: addr, value: "0", data: "0x79ba5097", contractMethod: null, contractInputsValues: null })),
    };
    const out = path.join(__dirname, "..", "deployments", `${hre.network.name}-accept-ownership.json`);
    if (!dry) fs.writeFileSync(out, JSON.stringify(batch, null, 2));
    console.log(`\nSafe batch file: ${out}`);
    console.log("\nNext, in the Safe app (app.safe.global) → New transaction → Transaction builder, for each address:");
    for (const [name, addr] of pending) console.log(`  ${name.padEnd(15)} ${addr}  → method acceptOwnership()`);
    console.log("Sign with the required owners and execute. Until then the deployer still controls these contracts.");
  }
}

main().catch((e) => {
  console.error(e.shortMessage || e.message);
  process.exit(1);
});
