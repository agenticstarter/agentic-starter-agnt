const fs = require("fs");
const { ethers, network } = require("hardhat");
async function main() {
  const t = JSON.parse(fs.readFileSync("deployments/localhost.presale-test.json"));
  const p = await ethers.getContractAt("AGNTPresale", t.presale);
  await network.provider.send("evm_increaseTime", [120]); await network.provider.send("evm_mine");
  const s = await ethers.getSigners();
  for (const i of [111, 112, 113]) {
    await (await p.connect(s[i]).contribute({ value: ethers.parseEther("0.2") })).wait();
    console.log(`buyer ${i}: contributed ${ethers.formatEther(await p.contributed(s[i].address))} BNB`);
  }
  console.log("phase after hard cap:", (await p.phase()).toString(), "raised", ethers.formatEther(await p.totalRaised()));
  if (process.env.CLAIM) { await (await p.connect(s[111]).claim()).wait(); const a = await ethers.getContractAt("AGNTToken", await p.agnt()); console.log("buyer 111 AGNT:", ethers.formatEther(await a.balanceOf(s[111].address))); }
}
main();
