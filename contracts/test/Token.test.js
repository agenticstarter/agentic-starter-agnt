const { expect } = require("chai");
const { ethers } = require("hardhat");
const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const { E, deployAll, createToken } = require("./helpers");

const DEAD = "0x000000000000000000000000000000000000dEaD";

async function now() {
  return (await ethers.provider.getBlock("latest")).timestamp;
}
async function warp(ts) {
  await ethers.provider.send("evm_setNextBlockTimestamp", [ts]);
  await ethers.provider.send("evm_mine", []);
}

async function deployPresale(ctx, overrides = {}) {
  const t = await now();
  const cfg = {
    agnt: ctx.agnt.target,
    projectWallet: ctx.treasury.address,
    floorRate: E(1_000_000), // 1 BNB = 1,000,000 AGNT
    saleTokens: E(250_000_000),
    softCap: E(50),
    minBuy: E(0.05),
    maxBuy: E(5),
    bonusBps: 1000n,
    bonusCap: E(25_000_000),
    bonusWindow: 48n * 3600n,
    startTime: t + 100,
    endTime: t + 15 * 24 * 3600,
    ...overrides,
  };
  const presale = await (await ethers.getContractFactory("AGNTPresale")).deploy(cfg);
  await ctx.agnt.transfer(presale.target, cfg.saleTokens);
  return { presale, cfg };
}

/** n distinct wallets each contributing `each` BNB. */
async function buyers(presale, signers, n, each) {
  for (const s of signers.slice(0, n)) await presale.connect(s).contribute({ value: each });
}

describe("$AGNT presale (model 250+)", () => {
  it("sells at the floor up to 250 BNB, burns the unsold part and pays the 48 h bonus", async () => {
    const ctx = await deployAll();
    const { presale, cfg } = await deployPresale(ctx);
    const s = ctx.rest;
    await expect(presale.connect(s[0]).contribute({ value: E(1) })).to.be.revertedWithCustomError(presale, "NotOpen");
    await warp(cfg.startTime);
    await expect(presale.connect(s[0]).contribute({ value: E(0.01) })).to.be.revertedWithCustomError(presale, "BelowMin");
    await expect(s[0].sendTransaction({ to: presale.target, value: E(1) })).to.be.revertedWithCustomError(presale, "NotOpen");
    await buyers(presale, s, 10, E(5)); // 50 BNB in the first 48 h
    await warp(cfg.startTime + 48 * 3600 + 1);
    await buyers(presale, s.slice(10), 10, E(5)); // 50 BNB later, no bonus
    expect(await presale.totalRaised()).to.equal(E(100));
    expect(await presale.currentRate()).to.equal(E(1_000_000));
    expect(await presale.tokensFor(s[0].address)).to.equal(E(5_000_000));
    expect(await presale.bonusFor(s[0].address)).to.equal(E(500_000));
    expect(await presale.bonusFor(s[10].address)).to.equal(0n);
    expect(await presale.bonusPool()).to.equal(E(5_000_000));

    // wallet cap 5 BNB, excess refunded
    await expect(presale.connect(s[0]).contribute({ value: E(1) })).to.be.revertedWithCustomError(presale, "WalletCapReached");

    await expect(presale.finalize()).to.be.revertedWithCustomError(presale, "CannotFinalize");
    await warp(Number(cfg.endTime));
    const tBefore = await ethers.provider.getBalance(ctx.treasury.address);
    await expect(presale.connect(s[0]).finalize()).to.be.revertedWithCustomError(presale, "OwnableUnauthorizedAccount");
    await presale.finalize();
    expect((await ethers.provider.getBalance(ctx.treasury.address)) - tBefore).to.equal(E(100));
    expect(await ctx.agnt.balanceOf(DEAD)).to.equal(E(150_000_000)); // 250M - 100M sold
    expect(await presale.burnedUnsold()).to.equal(E(150_000_000));

    await expect(presale.openClaim()).to.be.revertedWithCustomError(presale, "InsufficientTokens"); // bonus not funded
    await ctx.agnt.transfer(presale.target, E(5_000_000)); // Community Safe funds the bonus pool
    await presale.openClaim();
    await presale.connect(s[0]).claim();
    expect(await ctx.agnt.balanceOf(s[0].address)).to.equal(E(5_500_000));
    await presale.connect(s[10]).claim();
    expect(await ctx.agnt.balanceOf(s[10].address)).to.equal(E(5_000_000));
    await expect(presale.connect(s[0]).claim()).to.be.revertedWithCustomError(presale, "AlreadyClaimed");
    await expect(presale.connect(s[0]).refund()).to.be.revertedWithCustomError(presale, "NotRefundable");
  });

  it("above 250 BNB shares the 250M pro rata, caps the bonus pool at 25M, no hard cap", async () => {
    const ctx = await deployAll();
    const { presale, cfg } = await deployPresale(ctx);
    const s = ctx.rest;
    await warp(cfg.startTime);
    await buyers(presale, s, 100, E(5)); // 500 BNB, all early
    expect(await presale.totalRaised()).to.equal(E(500));
    expect(await presale.currentRate()).to.equal(E(500_000)); // price doubled
    expect(await presale.tokensSold()).to.equal(E(250_000_000));
    expect(await presale.tokensFor(s[0].address)).to.equal(E(2_500_000));
    // raw bonus 10% of 250M = 25M -> exactly at the cap
    expect(await presale.bonusPool()).to.equal(E(25_000_000));
    const [, simTokens] = await presale.simulate(s[100].address, E(5));
    expect(simTokens).to.equal((E(5) * E(250_000_000)) / E(505));
    await warp(Number(cfg.endTime));
    await presale.finalize();
    expect(await presale.burnedUnsold()).to.equal(0n);
    await ctx.agnt.transfer(presale.target, E(25_000_000));
    await presale.openClaim();
    let total = 0n;
    for (const b of s.slice(0, 100)) {
      await presale.connect(b).claim();
      total += await ctx.agnt.balanceOf(b.address);
    }
    expect(total).to.be.lte(E(275_000_000));
    expect(E(275_000_000) - total).to.be.lt(1000n); // rounding dust only
  });

  it("a sale under the 50 BNB soft cap fails and every buyer refunds; tokens go back", async () => {
    const ctx = await deployAll();
    const { presale, cfg } = await deployPresale(ctx);
    const s = ctx.rest;
    await warp(cfg.startTime);
    await buyers(presale, s, 8, E(5)); // 40 BNB
    await warp(Number(cfg.endTime));
    expect(await presale.phase()).to.equal(5);
    expect(await presale.failed()).to.equal(true);
    await expect(presale.finalize()).to.be.revertedWithCustomError(presale, "CannotFinalize");
    const before = await ethers.provider.getBalance(s[0].address);
    const rc = await (await presale.connect(s[0]).refund()).wait();
    expect((await ethers.provider.getBalance(s[0].address)) - before + rc.gasUsed * rc.gasPrice).to.equal(E(5));
    await expect(presale.connect(s[0]).refund()).to.be.revertedWithCustomError(presale, "NothingToRefund");
    const tBefore = await ctx.agnt.balanceOf(ctx.treasury.address);
    await presale.sweepSurplus();
    expect((await ctx.agnt.balanceOf(ctx.treasury.address)) - tBefore).to.equal(E(250_000_000));
  });

  it("buyers cannot refund while the sale is live, ended or finalized; the owner can open refunds", async () => {
    const ctx = await deployAll();
    const { presale, cfg } = await deployPresale(ctx);
    const s = ctx.rest;
    await warp(cfg.startTime);
    await buyers(presale, s, 12, E(5));
    await expect(presale.connect(s[0]).refund()).to.be.revertedWithCustomError(presale, "NotRefundable");
    await warp(Number(cfg.endTime));
    await expect(presale.connect(s[0]).refund()).to.be.revertedWithCustomError(presale, "NotRefundable");
    // the sale tokens stay locked until finalize or failure
    const before = await ctx.agnt.balanceOf(ctx.treasury.address);
    await presale.sweepSurplus();
    expect(await ctx.agnt.balanceOf(ctx.treasury.address)).to.equal(before);
    await presale.finalize();
    await expect(presale.openRefunds()).to.be.revertedWithCustomError(presale, "InsufficientBnb");
    await presale.openRefunds({ value: E(60) });
    await presale.connect(s[0]).refund();
    expect(await presale.phase()).to.equal(5);
  });

  it("contributeWithRef records the referrer and ignores self-referrals", async () => {
    const ctx = await deployAll();
    const { presale, cfg } = await deployPresale(ctx);
    await warp(cfg.startTime);
    await expect(presale.connect(ctx.alice).contributeWithRef(ctx.bob.address, { value: E(2) }))
      .to.emit(presale, "Referred").withArgs(ctx.alice.address, ctx.bob.address, E(2));
    await expect(presale.connect(ctx.bob).contributeWithRef(ctx.bob.address, { value: E(1) })).to.not.emit(presale, "Referred");
  });

  it("the schedule can only move before the sale starts", async () => {
    const ctx = await deployAll();
    const { presale, cfg } = await deployPresale(ctx);
    const t = await now();
    await presale.setSchedule(t + 500, t + 5000);
    await warp(t + 501);
    await expect(presale.setSchedule(t + 600, t + 7000)).to.be.revertedWithCustomError(presale, "AlreadyStarted");
    void cfg;
  });
});

describe("Ignite", () => {
  it("burns launch tokens (even before graduation) and $AGNT with a message", async () => {
    const ctx = await deployAll();
    const { launchpad, agentId, alice, agnt } = ctx;
    const board = await (await ethers.getContractFactory("IgniteBoard")).deploy();
    await agentId.grant(alice.address);
    const token = await createToken(launchpad, alice);
    await launchpad.connect(alice).buy(token.target, 0, { value: E(0.2) });
    const bal = await token.balanceOf(alice.address);

    await token.connect(alice).approve(board.target, bal / 2n);
    await expect(board.connect(alice).ignite(token.target, bal / 2n, "gm from the curve", 0))
      .to.emit(board, "Ignited").withArgs(1n, token.target, alice.address, bal / 2n, "gm from the curve", 0n);
    expect(await token.balanceOf(DEAD)).to.equal(bal / 2n);
    expect(await board.totalBurned(token.target)).to.equal(bal / 2n);
    // still no other transfers before graduation
    await expect(token.connect(alice).transfer(ctx.bob.address, 1n)).to.be.revertedWithCustomError(token, "TransfersLocked");

    await agnt.approve(board.target, E(1000));
    await board.ignite(agnt.target, E(1000), "reply", 1);
    await expect(board.ignite(agnt.target, 0, "x", 0)).to.be.revertedWithCustomError(board, "EmptyBurn");
    await expect(board.ignite(agnt.target, 1, "x".repeat(141), 0)).to.be.revertedWithCustomError(board, "MessageTooLong");
    await expect(board.ignite(agnt.target, 1, "x", 9)).to.be.revertedWithCustomError(board, "BadReply");
  });
});

describe("Fee flywheel", () => {
  it("splits the platform part of the curve fee 50 / 37.5 / 12.5 (40 / 30 / 10 of the whole fee)", async () => {
    const ctx = await deployAll();
    const { launchpad, splitter, agnt, staking, router, agentId, alice, bob, owner, treasury } = ctx;
    // list AGNT so the buyback has a pool
    await agnt.approve(router.target, E(100_000_000));
    await router.addLiquidityETH(agnt.target, E(100_000_000), 0, 0, owner.address, 0, { value: E(100) });
    await splitter.setAddresses(agnt.target, staking.target, treasury.address, owner.address);

    await agnt.transfer(bob.address, E(1_000_000));
    await agnt.connect(bob).approve(staking.target, E(1_000_000));
    await staking.connect(bob).stake(E(1_000_000));

    await agentId.grant(alice.address);
    const token = await createToken(launchpad, alice);
    for (const s of ctx.rest.slice(0, 6)) {
      await agentId.grant(s.address);
      await launchpad.connect(s).buy(token.target, 0, { value: E(0.05) });
    }
    const fees = await launchpad.feesAccrued();
    await launchpad.collectFees();
    expect(await ethers.provider.getBalance(splitter.target)).to.equal(fees);

    const deadBefore = await agnt.balanceOf(DEAD);
    const tBefore = await ethers.provider.getBalance(treasury.address);
    await splitter.distribute(0);
    expect(await agnt.balanceOf(DEAD)).to.be.gt(deadBefore);
    const toBuyback = (fees * 5000n) / 10000n;
    const toStakers = (fees * 3750n) / 10000n;
    expect(await staking.pendingBnb(bob.address)).to.be.lt(toStakers / 1000n); // streamed, not instant
    await ethers.provider.send("evm_increaseTime", [7 * 24 * 3600]);
    await ethers.provider.send("evm_mine", []);
    expect(await staking.pendingBnb(bob.address)).to.be.closeTo(toStakers, 1_000_000n);
    expect(await ethers.provider.getBalance(treasury.address)).to.equal(tBefore + fees - toBuyback - toStakers);
    // with the creator's 20% taken by the launchpad, the whole curve fee splits 20 / 40 / 30 / 10
    const creator = (await launchpad.curves(token.target)).creatorFees;
    const whole = creator + fees;
    expect((creator * 100n) / whole).to.equal(20n);
    expect((toBuyback * 100n + whole / 2n) / whole).to.equal(40n);
    expect((toStakers * 100n + whole / 2n) / whole).to.equal(30n);
    await expect(staking.connect(bob).claim()).to.emit(staking, "Claimed");
  });
});

describe("Spark airdrop", () => {
  it("pays a season's Merkle claims once and sweeps leftovers after the deadline", async () => {
    const ctx = await deployAll();
    const { agnt, owner, alice, bob, treasury } = ctx;
    const airdrop = await (await ethers.getContractFactory("SparkAirdrop")).deploy(agnt.target, treasury.address);
    const list = [[alice.address, E(1000).toString()], [bob.address, E(2500).toString()]];
    const tree = StandardMerkleTree.of(list, ["address", "uint256"]);
    await agnt.approve(airdrop.target, E(5000));
    const deadline = (await now()) + 3600;
    await airdrop.openSeason(tree.root, E(5000), deadline);

    const proof = tree.getProof(0);
    await airdrop.connect(alice).claim(1, E(1000), proof);
    expect(await agnt.balanceOf(alice.address)).to.equal(E(1000));
    await expect(airdrop.connect(alice).claim(1, E(1000), proof)).to.be.revertedWithCustomError(airdrop, "AlreadyClaimed");
    await expect(airdrop.connect(alice).claim(1, E(9999), proof)).to.be.revertedWithCustomError(airdrop, "AlreadyClaimed");
    await expect(airdrop.connect(bob).claim(1, E(9999), tree.getProof(1))).to.be.revertedWithCustomError(airdrop, "BadProof");

    await warp(deadline + 1);
    await airdrop.sweep(1);
    expect(await agnt.balanceOf(treasury.address)).to.equal(E(4000));
    void owner;
  });
});

describe("AGNT vesting", () => {
  it("vests linearly after the cliff; the owner can only postpone the start before it begins", async () => {
    const { agnt, owner, alice, bob } = await deployAll();
    const MONTH = 30 * 24 * 3600;
    const start = (await now()) + 10 * 24 * 3600; // planned TGE in 10 days
    const v = await (await ethers.getContractFactory("AGNTVesting")).deploy(alice.address, start, 24 * MONTH, 12 * MONTH, owner.address);
    await agnt.transfer(v.target, E(120_000_000));

    await expect(v.connect(bob).postponeStart(start + 100)).to.be.revertedWithCustomError(v, "OwnableUnauthorizedAccount");
    await expect(v.postponeStart(start - 1)).to.be.revertedWithCustomError(v, "NotLater");
    await expect(v.postponeStart(start + 5 * 24 * 3600)).to.emit(v, "StartPostponed");
    const newStart = Number(await v.start());

    await warp(newStart + 12 * MONTH - 10);
    expect(await v.releasable(agnt.target)).to.equal(0n);
    await expect(v.postponeStart(newStart + 1)).to.be.revertedWithCustomError(v, "AlreadyStarted");

    await warp(newStart + 18 * MONTH);
    const r = await v.releasable(agnt.target);
    expect(r).to.be.closeTo(E(90_000_000), E(10));
    await v.connect(bob).release(agnt.target); // anyone may trigger, tokens go to the beneficiary
    expect(await agnt.balanceOf(alice.address)).to.be.closeTo(E(90_000_000), E(10));

    await warp(newStart + 24 * MONTH);
    await v.release(agnt.target);
    expect(await agnt.balanceOf(alice.address)).to.equal(E(120_000_000));
    await expect((await ethers.getContractFactory("AGNTVesting")).deploy(alice.address, start, 10, 11, owner.address)).to.be.revertedWithCustomError(v, "BadSchedule");
  });
});
