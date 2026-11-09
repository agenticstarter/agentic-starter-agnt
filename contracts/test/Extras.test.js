const { expect } = require("chai");
const { ethers } = require("hardhat");
const { E, deployAll } = require("./helpers");

const DAY = 24 * 3600;
const DEAD = "0x000000000000000000000000000000000000dEaD";
const travel = async (s) => {
  await ethers.provider.send("evm_increaseTime", [s]);
  await ethers.provider.send("evm_mine", []);
};

describe("AGNT staking v2", () => {
  let ctx;
  beforeEach(async () => {
    ctx = await deployAll();
    const { agnt, alice, bob, carol, staking } = ctx;
    for (const u of [alice, bob, carol]) {
      await agnt.transfer(u.address, E(1_000_000));
      await agnt.connect(u).approve(staking.target, E(1_000_000));
    }
  });

  it("streams each reward over 7 days, so a last-second staker earns almost nothing", async () => {
    const { staking, alice, bob, owner } = ctx;
    await staking.connect(alice).stake(E(100_000));
    await staking.connect(owner).notifyRewardBnb({ value: E(7) });
    // bob stakes 10x more right after the reward lands
    await staking.connect(bob).stake(E(1_000_000));
    await travel(3600);
    const bobEarly = await staking.pendingBnb(bob.address);
    expect(bobEarly).to.be.lt(E(0.05)); // about 1 hour of the stream
    await travel(7 * DAY);
    const a = await staking.pendingBnb(alice.address);
    const b = await staking.pendingBnb(bob.address);
    expect(a + b).to.be.closeTo(E(7), E(0.0001));
    await expect(staking.connect(bob).claim()).to.emit(staking, "Claimed");
  });

  it("holds rewards back while nobody is staked (no first-staker windfall)", async () => {
    const { staking, alice, owner } = ctx;
    await staking.connect(owner).notifyRewardBnb({ value: E(7) });
    await travel(3 * DAY);
    await staking.connect(alice).stake(E(100));
    expect(await staking.pendingBnb(alice.address)).to.equal(0n);
    await travel(3600);
    expect(await staking.pendingBnb(alice.address)).to.be.lt(E(0.05));
    await travel(8 * DAY);
    expect(await staking.pendingBnb(alice.address)).to.be.closeTo(E(7), E(0.0001));
  });

  it("perks need the threshold staked for 7 days; a top-up restarts the clock", async () => {
    const { staking, alice } = ctx;
    await staking.connect(alice).stake(E(100_000));
    expect(await staking.hasPerks(alice.address)).to.equal(false);
    await travel(7 * DAY);
    expect(await staking.hasPerks(alice.address)).to.equal(true);
    expect(await staking.maturedStake(alice.address)).to.equal(E(100_000));
    await staking.connect(alice).stake(E(1));
    expect(await staking.hasPerks(alice.address)).to.equal(false);
    await staking.connect(alice).unstake(E(100_001));
    expect(await staking.maturedStake(alice.address)).to.equal(0n);
  });
});

describe("Standard token factory", () => {
  let ctx, factory;
  beforeEach(async () => {
    ctx = await deployAll();
    factory = await (await ethers.getContractFactory("StandardTokenFactory")).deploy(ctx.owner.address, ctx.treasury.address, ethers.ZeroAddress);
  });

  const saltOf = (addr, n) => ethers.zeroPadBytes(addr, 20) + n.toString(16).padStart(24, "0");

  async function findSalt(addr, advanced, want) {
    for (let n = 1; n < 400000; n++) {
      const salt = saltOf(addr, n);
      const a = (await factory.predict(advanced, salt)).toLowerCase();
      if (want(a)) return salt;
    }
    throw new Error("no salt");
  }

  it("creates a basic token for 0.01 BNB, fixed supply, never with the curve suffix", async () => {
    const { alice, treasury } = ctx;
    const salt = await findSalt(alice.address, false, (a) => !a.endsWith("aaaa"));
    await expect(factory.connect(alice).createBasic("Plain", "PLN", E(1_000_000), salt, false, { value: E(0.009) }))
      .to.be.revertedWithCustomError(factory, "FeeTooLow");
    const before = await ethers.provider.getBalance(treasury.address);
    const rc = await (await factory.connect(alice).createBasic("Plain", "PLN", E(1_000_000), salt, false, { value: E(0.02) })).wait();
    expect((await ethers.provider.getBalance(treasury.address)) - before).to.equal(E(0.01));
    const ev = rc.logs.map((l) => { try { return factory.interface.parseLog(l); } catch { return null; } }).find((e) => e && e.name === "StandardCreated");
    const token = await ethers.getContractAt("BasicToken", ev.args.token);
    expect(await token.balanceOf(alice.address)).to.equal(E(1_000_000));
    expect(await token.name()).to.equal("Plain");
    await expect(token.initialize("x", "y", 1, alice.address)).to.be.revertedWithCustomError(token, "AlreadyInitialized");
  });

  it("vanity 9999 costs 0.02 BNB and must really end in 9999", async () => {
    const { alice } = ctx;
    const plain = await findSalt(alice.address, false, (a) => !a.endsWith("9999") && !a.endsWith("aaaa"));
    await expect(factory.connect(alice).createBasic("V", "V", E(1), plain, true, { value: E(0.02) }))
      .to.be.revertedWithCustomError(factory, "BadSalt");
    expect(await factory.feeFor(alice.address, false, false, true)).to.equal(E(0.02));
  });

  it("advanced token: capped mint, tax only down, renounce", async () => {
    const { alice, bob, carol } = ctx;
    const salt = await findSalt(alice.address, true, (a) => !a.endsWith("aaaa"));
    const init = { name: "Taxy", symbol: "TAX", supply: E(1000), maxSupply: E(2000), taxBps: 300n, taxWallet: carol.address, owner: bob.address };
    await expect(factory.connect(alice).createAdvanced(init, salt, false, { value: E(0.05) })).to.be.revertedWithCustomError(factory, "FeeTooLow");
    const rc = await (await factory.connect(alice).createAdvanced(init, salt, false, { value: E(0.1) })).wait();
    const ev = rc.logs.map((l) => { try { return factory.interface.parseLog(l); } catch { return null; } }).find((e) => e && e.name === "StandardCreated");
    const t = await ethers.getContractAt("AdvancedToken", ev.args.token);
    expect(await t.owner()).to.equal(alice.address); // always the caller, never a passed-in owner
    await t.connect(alice).mint(alice.address, E(1000));
    await expect(t.connect(alice).mint(alice.address, 1n)).to.be.revertedWithCustomError(t, "OverMax");
    await t.connect(alice).setPair(bob.address, true);
    await t.connect(alice).transfer(bob.address, E(100));
    expect(await t.balanceOf(carol.address)).to.equal(E(3));
    await expect(t.connect(alice).setTax(400, ethers.ZeroAddress)).to.be.revertedWithCustomError(t, "TaxUp");
    await t.connect(alice).setTax(0, ethers.ZeroAddress);
    await t.connect(alice).renounceOwnership();
    await expect(t.connect(alice).mint(alice.address, 1n)).to.be.revertedWithCustomError(t, "NotOwner");
  });

  it("stakers with perks pay half", async () => {
    const { alice, owner, treasury } = ctx;
    const perks = await (await ethers.getContractFactory("MockPerks")).deploy();
    await perks.set(alice.address, true);
    await factory.connect(owner).setAddresses(treasury.address, perks.target);
    expect(await factory.feeFor(alice.address, false, false, false)).to.equal(E(0.005));
  });

  it("liquidity helper adds liquidity and burns or locks the LP", async () => {
    const { alice, router } = ctx;
    const helper = await (await ethers.getContractFactory("LiquidityHelper")).deploy(router.target);
    const salt = await findSalt(alice.address, false, (a) => !a.endsWith("aaaa"));
    const rc = await (await factory.connect(alice).createBasic("Pool Me", "POOL", E(1_000_000), salt, false, { value: E(0.01) })).wait();
    const ev = rc.logs.map((l) => { try { return factory.interface.parseLog(l); } catch { return null; } }).find((e) => e && e.name === "StandardCreated");
    const token = await ethers.getContractAt("BasicToken", ev.args.token);
    await token.connect(alice).approve(helper.target, E(1_000_000));
    await expect(helper.connect(alice).addLiquidity(token.target, E(100_000), 0, 0, 1, { value: E(1) })).to.be.revertedWithCustomError(helper, "BadUnlock");
    await helper.connect(alice).addLiquidity(token.target, E(100_000), 0, 0, 0, { value: E(1) });
    const pair = await ethers.getContractAt("MockPair", await (await ethers.getContractAt("MockFactory", await router.factory())).getPair(token.target, await router.WETH()));
    expect(await pair.balanceOf(DEAD)).to.equal(await pair.totalSupply());
    const unlockAt = (await ethers.provider.getBlock("latest")).timestamp + 31 * DAY;
    await helper.connect(alice).addLiquidity(token.target, E(100_000), 0, 0, unlockAt, { value: E(1) });
    await expect(helper.connect(alice).unlock(0)).to.be.revertedWithCustomError(helper, "StillLocked");
    await travel(32 * DAY);
    await expect(helper.connect(ctx.bob).unlock(0)).to.be.revertedWithCustomError(helper, "NotOwner");
    await helper.connect(alice).unlock(0);
    expect(await pair.balanceOf(alice.address)).to.be.gt(0n);
  });
});

describe("attacker-style tests", () => {
  it("presale refund cannot be re-entered", async () => {
    const ctx = await deployAll();
    const t = (await ethers.provider.getBlock("latest")).timestamp;
    const presale = await (await ethers.getContractFactory("AGNTPresale")).deploy({
      agnt: ctx.agnt.target, projectWallet: ctx.treasury.address, floorRate: E(1_000_000), saleTokens: E(250_000_000),
      softCap: E(50), minBuy: E(0.05), maxBuy: E(5), bonusBps: 1000n, bonusCap: E(25_000_000), bonusWindow: 172800n,
      startTime: t + 10, endTime: t + 1000,
    });
    const evil = await (await ethers.getContractFactory("ReentrantRefunder")).deploy(presale.target);
    await travel(20);
    await evil.buy({ value: E(2) });
    await presale.connect(ctx.alice).contribute({ value: E(3) });
    await travel(2000);
    await evil.doRefund();
    expect(await evil.reentered()).to.equal(0n);
    expect(await ethers.provider.getBalance(evil.target)).to.equal(E(2));
    expect(await ethers.provider.getBalance(presale.target)).to.equal(E(3));
  });

  it("a contract wallet that refuses BNB cannot block trading; its refund waits in withdraw()", async () => {
    const { launchpad, agentId, alice } = await deployAll();
    const { createToken } = require("./helpers");
    const token = await createToken(launchpad, alice);
    const w = await (await ethers.getContractFactory("RejectingWallet")).deploy();
    await agentId.grant(w.target);
    await w.buy(launchpad.target, token.target, { value: E(5) }); // capped: most of it is refunded
    const owed = await launchpad.pendingWithdrawals(w.target);
    expect(owed).to.be.gt(E(4));
    await expect(w.withdrawFrom(launchpad.target)).to.be.reverted;
    await w.setAccept(true);
    await w.withdrawFrom(launchpad.target);
    expect(await ethers.provider.getBalance(w.target)).to.equal(owed);
  });

  it("one wallet with unlimited BNB cannot push a token to graduation (wallet cap)", async () => {
    const { launchpad, agentId, alice, bob } = await deployAll();
    const { createToken } = require("./helpers");
    const token = await createToken(launchpad, alice);
    await agentId.grant(bob.address);
    await launchpad.connect(bob).buy(token.target, 0, { value: E(1000) });
    const c = await launchpad.curves(token.target);
    expect(c.graduated).to.equal(false);
    expect(await token.balanceOf(bob.address)).to.equal(E(10_000_000));
    expect(c.realBnb).to.be.lt(E(1));
  });
});
