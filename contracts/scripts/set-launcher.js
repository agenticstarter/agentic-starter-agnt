/**
 * Registers the launch bot wallet on the launchpad (the wallet the Telegram bot uses to create tokens for users).
 *   npx hardhat run scripts/set-launcher.js --network bscTestnet
 * Testnet: the deployer is the owner and sends the transaction. Mainnet: the owner is the Treasury Safe, so this
 * prints the call for Admin → Contracts → Safe batches instead.
 */
const fs = require("fs");
const path = require("path");
const hre = require("hardhat");
const { ethers } = hre;
const { WALLETS } = require("../config/networks");

async function main() {
  const { chainId } = await ethers.provider.getNetwork();
  const name = chainId === 97n ? "bscTestnet" : chainId === 56n ? "bsc" : hre.network.name;
  const d = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "deployments", `${name}.json`), "utf8"));
  const bot = process.env.LAUNCHER || WALLETS.LAUNCHER;
  const [me] = await ethers.getSigners();
  const lp = await ethers.getContractAt("AgentLaunchpad", d.launchpad, me);
  if (await lp.launchers(bot)) return console.log(`Launch bot ${bot} is already registered.`);
  if ((await lp.owner()).toLowerCase() !== me.address.toLowerCase()) {
    return console.log(`The owner is ${await lp.owner()}. Propose launchpad.setLauncher(${bot}, true) from the Safe.`);
  }
  const rc = await (await lp.setLauncher(bot, true)).wait();
  console.log(`Launch bot ${bot} registered: ${rc.hash}`);
  d.launchBot = bot;
  fs.writeFileSync(path.join(__dirname, "..", "deployments", `${name}.json`), JSON.stringify(d, null, 2));
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
