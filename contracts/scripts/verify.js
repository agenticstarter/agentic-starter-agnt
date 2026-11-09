/**
 * Publishes the source code of every deployed contract on BscScan, so anyone can read it.
 *
 *   ETHERSCAN_API_KEY=… npx hardhat run scripts/verify.js --network bscTestnet   (or --network bsc)
 *
 * Reads deployments/<network>.json (written by deploy.js, which records constructor arguments).
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

async function main() {
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "deployments", `${hre.network.name}.json`), "utf8"));
  if (!d.contracts) throw new Error("This deployment file has no constructor arguments. Redeploy with the current deploy.js.");
  for (const c of d.contracts) {
    try {
      await hre.run("verify:verify", { address: c.address, constructorArguments: c.args, libraries: c.libraries });
      console.log(`✓ ${c.name} ${c.address}`);
    } catch (e) {
      const msg = String(e.message || e);
      console.log(`${/already verified/i.test(msg) ? "✓" : "✗"} ${c.name} ${c.address} ${/already verified/i.test(msg) ? "(already verified)" : msg.split("\n")[0]}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
