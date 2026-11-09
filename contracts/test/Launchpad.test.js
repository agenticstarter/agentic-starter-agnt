const { expect } = require("chai");
const { ethers } = require("hardhat");
const { E, deployAll, createToken, params, saltFor, eventArgs, fillCurve } = require("./helpers");

const CURVE = E(800_000_000);
const LP = E(200_000_000);
const DEAD = "0x000000000000000000000000000000000000dEaD";
const DAY = 24 * 3600;

const gas = (rc) => rc.gasUsed * rc.gasPrice;
const travel = async (s) => {
  await ethers.provider.send("evm_increaseTime", [s]);
  await ethers.provider.send("evm_mine", []);
};
const key = (s) => ethers.encodeBytes32String(s);

describe("AgentLaunchpad v3", () => {
  let ctx;
  beforeEach(async () => {
    ctx = await deployAll();
  });

  describe("curve", () => {
    it("ends exactly at the PancakeSwap opening price after the 3% graduation fee", async () => {
      const { launchpad, alice } = ctx;
      const token = await createToken(launchpad, alice);
      const c = await launchpad.curves(token.target);
      expect(c.graduationFee).to.equal(E(0.48));
      const lhs = (c.virtualBnb + c.target) * LP;
      const rhs = (c.target - c.graduationFee) * (c.virtualToken - CURVE);
      const diff = lhs > rhs ? lhs - rhs : rhs - lhs;
      expect((diff * 1_000_000n) / lhs).to.equal(0n);
    });

    it("only agents can buy, anyone can create and sell", async () => {
      const { launchpad, alice, bob, agentId } = ctx;
      const token = await createToken(launchpad, bob);
      await expect(launchpad.connect(alice).buy(token.target, 0, { value: E(0.1) })).to.be.revertedWithCustomError(launchpad, "NotAgent");
      await agentId.grant(alice.address);
      await expect(launchpad.connect(alice).buy(token.target, 0, { value: E(0.1) })).to.emit(launchpad, "Buy");
      expect(await token.balanceOf(alice.address)).to.be.gt(0n);
    });

    it("caps each wallet with a same-transaction refund; the lens quote matches execution", async () => {
      const { launchpad, lens, alice, agentId } = ctx;
      await agentId.grant(alice.address);
      const token = await createToken(launchpad, alice);
      const cap = await launchpad.maxPerWallet(token.target);
      expect(cap).to.equal(E(10_000_000));
      const [out, used, , refund] = await lens.quoteBuy(token.target, alice.address, E(5));
      expect(out).to.equal(cap);
      expect(used + refund).to.equal(E(5));
      const before = await ethers.provider.getBalance(alice.address);
      const rc = await (await launchpad.connect(alice).buy(token.target, 0, { value: E(5) })).wait();
      expect(before - (await ethers.provider.getBalance(alice.address)) - gas(rc)).to.equal(used);
      expect(await token.balanceOf(alice.address)).to.equal(out);
      await expect(launchpad.connect(alice).buy(token.target, 0, { value: E(0.1) })).to.be.revertedWithCustomError(launchpad, "WalletCapReached");
    });

    it("locks transfers before graduation and sells without an approve", async () => {
      const { launchpad, lens, alice, bob, agentId } = ctx;
      await agentId.grant(alice.address);
      const token = await createToken(launchpad, bob);
      await launchpad.connect(alice).buy(token.target, 0, { value: E(0.03) });
      const bal = await token.balanceOf(alice.address);
      await expect(token.connect(alice).transfer(bob.address, 1n)).to.be.revertedWithCustomError(token, "TransfersLocked");
      const [quoteOut] = await lens.quoteSell(token.target, bal);
      await expect(launchpad.connect(alice).sell(token.target, bal, quoteOut)).to.emit(launchpad, "Sell");
      expect(await token.balanceOf(alice.address)).to.equal(0n);
    });

    it("rejects buys and sells worse than the minimum", async () => {
      const { launchpad, lens, alice, agentId } = ctx;
      await agentId.grant(alice.address);
      const token = await createToken(launchpad, alice);
      const [out] = await lens.quoteBuy(token.target, alice.address, E(0.2));
      await expect(launchpad.connect(alice).buy(token.target, out + 1n, { value: E(0.2) })).to.be.revertedWithCustomError(launchpad, "Slippage");
      await launchpad.connect(alice).buy(token.target, out, { value: E(0.2) });
      const [bnbOut] = await lens.quoteSell(token.target, out);
      await expect(launchpad.connect(alice).sell(token.target, out, bnbOut + 1n)).to.be.revertedWithCustomError(launchpad, "Slippage");
    });

    it("refuses other quote tokens for now", async () => {
      const { launchpad, alice, agnt } = ctx;
      const p = await params(launchpad, alice.address, { quote: agnt.target });
      await expect(launchpad.connect(alice).create(p)).to.be.revertedWithCustomError(launchpad, "BadQuote");
    });
  });

  describe("creator fees", () => {
    it("accrues 20% of the curve fee per token and pays the creator on claimFor; none on own trades", async () => {
      const { launchpad, alice, bob, agentId } = ctx;
      await agentId.grant(alice.address);
      await agentId.grant(bob.address);
      const token = await createToken(launchpad, bob);
      const rc = await (await launchpad.connect(alice).buy(token.target, 0, { value: E(1) })).wait();
      const fee = eventArgs(launchpad, rc, "Buy").fee;
      const cut = (fee * 2000n) / 10000n;
      expect((await launchpad.curves(token.target)).creatorFees).to.equal(cut);
      expect(await launchpad.feesAccrued()).to.equal(fee - cut);
      await launchpad.connect(bob).buy(token.target, 0, { value: E(0.5) });
      expect((await launchpad.curves(token.target)).creatorFees).to.equal(cut);

      const before = await ethers.provider.getBalance(bob.address);
      const rc2 = await (await launchpad.connect(bob).claimFor([token.target])).wait();
      expect((await ethers.provider.getBalance(bob.address)) - before + gas(rc2)).to.equal(cut);
      await expect(launchpad.connect(bob).claimCreatorRewards()).to.be.revertedWithCustomError(launchpad, "NothingPending");
    });

    it("splits to up to 10 recipients including an X account held in escrow", async () => {
      const { launchpad, owner, alice, bob, carol, dave, guardian, agentId } = ctx;
      const Escrow = await ethers.getContractFactory("AccountFeeEscrow");
      const escrow = await Escrow.deploy(launchpad.target, owner.address, owner.address, guardian.address);
      const acct = ethers.keccak256(ethers.toUtf8Bytes("x:agentdev"));
      const p0 = await params(launchpad, bob.address, { recipients: [{ wallet: carol.address, account: ethers.ZeroHash, bps: 10000 }, { wallet: ethers.ZeroAddress, account: acct, bps: 0 }] });
      await expect(launchpad.connect(bob).create(p0)).to.be.revertedWithCustomError(launchpad, "BadSplit");
      const pAcct = await params(launchpad, bob.address, { recipients: [{ wallet: ethers.ZeroAddress, account: acct, bps: 10000 }] });
      await expect(launchpad.connect(bob).create(pAcct)).to.be.revertedWithCustomError(launchpad, "BadSplit"); // no escrow yet

      await launchpad.proposeModule(key("escrow"), escrow.target);
      await travel(2 * DAY + 1);
      await launchpad.applyModule(key("escrow"));

      const recipients = [
        { wallet: bob.address, account: ethers.ZeroHash, bps: 5000 },
        { wallet: carol.address, account: ethers.ZeroHash, bps: 3000 },
        { wallet: ethers.ZeroAddress, account: acct, bps: 2000 },
      ];
      const token = await createToken(launchpad, bob, { recipients });
      expect((await launchpad.splitOf(token.target)).length).to.equal(3);
      await agentId.grant(alice.address);
      await launchpad.connect(alice).buy(token.target, 0, { value: E(2) });
      const cut = (await launchpad.curves(token.target)).creatorFees;
      await launchpad.distributeCreatorFees(token.target);
      const b = await launchpad.creatorRewards(bob.address);
      const c = await launchpad.creatorRewards(carol.address);
      const credit = (await escrow.credits(token.target, acct)).amount;
      expect(b).to.equal((cut * 5000n) / 10000n);
      expect(c).to.equal((cut * 3000n) / 10000n);
      expect(b + c + credit).to.equal(cut);

      // the account owner proves the account, waits 72 h, then claims
      const domain = { name: "AgenticAccountEscrow", version: "1", chainId: 31337, verifyingContract: escrow.target };
      const types = { Bind: [{ name: "account", type: "bytes32" }, { name: "wallet", type: "address" }, { name: "deadline", type: "uint256" }] };
      const deadline = (await ethers.provider.getBlock("latest")).timestamp + 3600;
      const sig = await owner.signTypedData(domain, types, { account: acct, wallet: dave.address, deadline });
      const bad = await alice.signTypedData(domain, types, { account: acct, wallet: dave.address, deadline });
      await expect(escrow.requestBind(acct, dave.address, deadline, bad)).to.be.revertedWithCustomError(escrow, "BadSignature");
      await escrow.requestBind(acct, dave.address, deadline, sig);
      await expect(escrow.connect(dave).claim([token.target], acct)).to.be.revertedWithCustomError(escrow, "NotReady");
      await travel(3 * DAY + 1);
      const before = await ethers.provider.getBalance(dave.address);
      await escrow.connect(alice).claim([token.target], acct); // anyone can trigger; BNB goes to the bound wallet
      expect((await ethers.provider.getBalance(dave.address)) - before).to.equal(credit);
    });

    it("unclaimed account shares go back to the creator after 90 days", async () => {
      const { launchpad, owner, alice, bob, guardian, agentId } = ctx;
      const escrow = await (await ethers.getContractFactory("AccountFeeEscrow")).deploy(launchpad.target, owner.address, owner.address, guardian.address);
      await launchpad.proposeModule(key("escrow"), escrow.target);
      await travel(2 * DAY + 1);
      await launchpad.applyModule(key("escrow"));
      const acct = ethers.keccak256(ethers.toUtf8Bytes("github:someone"));
      const token = await createToken(launchpad, bob, { recipients: [{ wallet: ethers.ZeroAddress, account: acct, bps: 10000 }] });
      await agentId.grant(alice.address);
      await launchpad.connect(alice).buy(token.target, 0, { value: E(1) });
      await launchpad.distributeCreatorFees(token.target);
      const credit = (await escrow.credits(token.target, acct)).amount;
      await expect(escrow.expire(token.target, acct)).to.be.revertedWithCustomError(escrow, "NotExpired");
      await travel(90 * DAY + 1);
      const before = await ethers.provider.getBalance(bob.address);
      await escrow.connect(alice).expire(token.target, acct);
      expect((await ethers.provider.getBalance(bob.address)) - before).to.equal(credit);
    });

    it("cashback mode returns the creator part to the trader", async () => {
      const { launchpad, alice, bob, agentId } = ctx;
      await agentId.grant(alice.address);
      const token = await createToken(launchpad, bob, { rewardMode: 1 });
      const rc = await (await launchpad.connect(alice).buy(token.target, 0, { value: E(1) })).wait();
      const fee = eventArgs(launchpad, rc, "Buy").fee;
      expect(await launchpad.creatorRewards(alice.address)).to.equal((fee * 2000n) / 10000n);
      expect((await launchpad.curves(token.target)).creatorFees).to.equal(0n);
    });

    it("fee split changes wait 24 hours; the creator role moves in two steps", async () => {
      const { launchpad, alice, bob, carol, agentId } = ctx;
      await agentId.grant(alice.address);
      const token = await createToken(launchpad, bob);
      await launchpad.connect(alice).buy(token.target, 0, { value: E(0.05) });
      const newSplit = [{ wallet: carol.address, account: ethers.ZeroHash, bps: 10000 }];
      await expect(launchpad.connect(alice).proposeSplit(token.target, newSplit)).to.be.revertedWithCustomError(launchpad, "NotCreator");
      await launchpad.connect(bob).proposeSplit(token.target, newSplit);
      await expect(launchpad.connect(bob).applySplit(token.target)).to.be.revertedWithCustomError(launchpad, "TimelockActive");
      await travel(DAY + 1);
      const owedBefore = (await launchpad.curves(token.target)).creatorFees;
      await launchpad.connect(bob).applySplit(token.target);
      expect(await launchpad.creatorRewards(bob.address)).to.equal(owedBefore); // old fees went to the old split
      await launchpad.connect(alice).buy(token.target, 0, { value: E(0.05) });
      await launchpad.distributeCreatorFees(token.target);
      expect(await launchpad.creatorRewards(carol.address)).to.be.gt(0n);

      await expect(launchpad.connect(carol).acceptCreator(token.target)).to.be.revertedWithCustomError(launchpad, "NotCreator");
      await launchpad.connect(bob).proposeCreator(token.target, carol.address);
      await expect(launchpad.connect(carol).acceptCreator(token.target))
        .to.emit(launchpad, "CreatorTransferred").withArgs(token.target, bob.address, carol.address);
      expect(await launchpad.creatorOf(token.target)).to.equal(carol.address);
    });
  });

  describe("launch fees and perks", () => {
    it("charges the launch fee, refunds the excess, and waives it for stakers with perks", async () => {
      const { launchpad, owner, alice, bob } = ctx;
      await launchpad.connect(owner).setLaunchFee(E(0.005));
      const p = await params(launchpad, alice.address);
      await expect(launchpad.connect(alice).create(p, { value: E(0.004) })).to.be.revertedWithCustomError(launchpad, "FeeTooLow");
      const before = await ethers.provider.getBalance(alice.address);
      const rc = await (await launchpad.connect(alice).create(p, { value: E(0.05) })).wait();
      expect(before - (await ethers.provider.getBalance(alice.address)) - gas(rc)).to.equal(E(0.005));

      const perks = await (await ethers.getContractFactory("MockPerks")).deploy();
      await perks.set(bob.address, true);
      await launchpad.proposeModule(key("perks"), perks.target);
      await travel(2 * DAY + 1);
      await launchpad.applyModule(key("perks"));
      expect(await launchpad.launchFeeFor(bob.address)).to.equal(0n);
      expect(await launchpad.launchFeeFor(alice.address)).to.equal(E(0.005));
      await launchpad.connect(bob).create(await params(launchpad, bob.address));
    });

    it("createAndBuy takes the launch fee then buys with the rest", async () => {
      const { launchpad, alice, agentId, owner } = ctx;
      await launchpad.connect(owner).setLaunchFee(E(0.005));
      await agentId.grant(alice.address);
      const p = await params(launchpad, alice.address);
      const [addr, out] = await launchpad.connect(alice).createAndBuy.staticCall(p, 0, { value: E(0.03) });
      await launchpad.connect(alice).createAndBuy(p, 0, { value: E(0.03) });
      const token = await ethers.getContractAt("LaunchToken", addr);
      expect(await token.balanceOf(alice.address)).to.equal(out);
      expect((await launchpad.curves(addr)).realBnb).to.equal(E(0.02475));
      expect(await launchpad.treasuryAccrued()).to.equal(E(0.005));
    });

    it("metadata updates are creator-only and paid to the treasury", async () => {
      const { launchpad, alice, bob } = ctx;
      const token = await createToken(launchpad, bob);
      await expect(launchpad.connect(alice).updateMeta(token.target, "ipfs://x", { value: E(0.01) })).to.be.revertedWithCustomError(launchpad, "NotCreator");
      await expect(launchpad.connect(bob).updateMeta(token.target, "ipfs://x", { value: E(0.009) })).to.be.revertedWithCustomError(launchpad, "FeeTooLow");
      await expect(launchpad.connect(bob).updateMeta(token.target, "ipfs://new", { value: E(0.02) }))
        .to.emit(token, "MetaURIUpdated").withArgs("ipfs://new");
      expect(await launchpad.treasuryAccrued()).to.equal(E(0.01));
    });
  });

  describe("graduation", () => {
    it("3% fee to the treasury with 20% of it to the creator; LP burned; sell hook off forever", async () => {
      const { launchpad, agentId, factory, wbnb, lens } = ctx;
      const signers = await ethers.getSigners();
      const creator = signers[2];
      const token = await createToken(launchpad, creator);
      const rc = await fillCurve(launchpad, agentId, token, signers.slice(8, 120));
      const g = eventArgs(launchpad, rc, "Graduated");
      const c = await launchpad.curves(token.target);
      expect(c.graduated).to.equal(true);
      expect(c.realBnb).to.be.closeTo(E(16), E(0.001));
      expect(g.graduationFee).to.equal(E(0.48));
      expect(g.bnbAmount).to.equal(c.realBnb - E(0.48));
      expect(eventArgs(launchpad, rc, "GraduationBonus").amount).to.equal(E(0.096));
      expect(await launchpad.treasuryAccrued()).to.equal(E(0.384));
      expect(await lens.progressBps(token.target)).to.equal(10000n);

      const pairAddr = await factory.getPair(token.target, wbnb.target);
      expect(pairAddr).to.equal(c.pair);
      const pair = await ethers.getContractAt("MockPair", pairAddr);
      expect(await pair.balanceOf(DEAD)).to.equal(await pair.totalSupply());
      expect(await token.balanceOf(pairAddr)).to.equal(LP);
      expect(await token.balanceOf(launchpad.target)).to.equal(0n);

      const endPrice = ((c.virtualBnb + c.realBnb) * E(1)) / (c.virtualToken - c.tokensSold);
      const poolPrice = (g.bnbAmount * E(1)) / LP;
      expect(endPrice).to.be.closeTo(poolPrice, poolPrice / 10_000n);

      await token.connect(signers[8]).transfer(signers[1].address, 1n);
      await expect(launchpad.connect(signers[8]).buy(token.target, 0, { value: E(0.1) })).to.be.revertedWithCustomError(launchpad, "AlreadyGraduated");
      // even the launchpad itself can no longer pull holders' tokens
      await ethers.provider.send("hardhat_impersonateAccount", [launchpad.target]);
      await ethers.provider.send("hardhat_setBalance", [launchpad.target, "0x56BC75E2D63100000"]);
      const lpSigner = await ethers.getSigner(launchpad.target);
      await expect(token.connect(lpSigner).pullForSell(signers[8].address, 1n)).to.be.revertedWithCustomError(token, "Graduated");
      await ethers.provider.send("hardhat_stopImpersonatingAccount", [launchpad.target]);
    });

    it("still graduates when someone created the pair early and donated WBNB to it", async () => {
      const { launchpad, agentId, factory, wbnb } = ctx;
      const signers = await ethers.getSigners();
      const attacker = signers[5];
      const token = await createToken(launchpad, signers[2]);
      await factory.connect(attacker).createPair(token.target, wbnb.target);
      const pairAddr = await factory.getPair(token.target, wbnb.target);
      await wbnb.connect(attacker).deposit({ value: E(1) });
      await wbnb.connect(attacker).transfer(pairAddr, E(1));
      await (await ethers.getContractAt("MockPair", pairAddr)).sync();
      const rc = await fillCurve(launchpad, agentId, token, signers.slice(8, 120));
      const g = eventArgs(launchpad, rc, "Graduated");
      expect(g.pair).to.equal(pairAddr);
      expect(await wbnb.balanceOf(pairAddr)).to.equal(g.bnbAmount + E(1));
    });

    it("waits for the minimum curve time, then anyone can graduate", async () => {
      const { launchpad, owner, agentId } = ctx;
      await launchpad.connect(owner).setMinCurveTime(DAY);
      const signers = await ethers.getSigners();
      const token = await createToken(launchpad, signers[2]);
      for (const b of signers.slice(8, 120)) {
        await agentId.grant(b.address);
        await launchpad.connect(b).buy(token.target, 0, { value: E(1) }).catch(() => {});
        if ((await launchpad.curves(token.target)).tokensSold >= CURVE) break;
      }
      const c = await launchpad.curves(token.target);
      expect(c.tokensSold).to.equal(CURVE);
      expect(c.graduated).to.equal(false);
      await expect(launchpad.graduate(token.target)).to.be.revertedWithCustomError(launchpad, "NotReady");
      await travel(DAY + 1);
      await expect(launchpad.connect(signers[3]).graduate(token.target)).to.emit(launchpad, "Graduated");
    });

    it("testnet: 1 BNB target, 10% cap, creator allocation unlocking over 5 days", async () => {
      const t = await deployAll({
        graduationTarget: E(1), minTarget: E(0.1), walletCapBps: 1000n, maxWalletCapBps: 2000n,
        creatorAllocBps: 300n, creatorAllocUnlock: BigInt(5 * DAY), rateLimited: false,
      });
      const signers = await ethers.getSigners();
      const creator = signers[2];
      await t.agentId.grant(creator.address);
      const p = await params(t.launchpad, creator.address);
      const rc0 = await (await t.launchpad.connect(creator).createAndBuy(p, 0, { value: E(0.2) })).wait();
      const tokenAddr = eventArgs(t.launchpad, rc0, "Created").token;
      const token = await ethers.getContractAt("LaunchToken", tokenAddr);
      const alloc = E(30_000_000);
      expect(eventArgs(t.launchpad, rc0, "AllocationEscrowed").tokens).to.equal(alloc);
      expect(await token.balanceOf(creator.address)).to.be.gt(0n); // the rest of the first buy, within the cap
      expect(await token.balanceOf(creator.address)).to.be.lte(E(100_000_000));
      expect((await t.launchpad.curves(tokenAddr)).allocTokens).to.equal(alloc);

      const rc = await fillCurve(t.launchpad, t.agentId, token, signers.slice(8, 40), E(0.2));
      expect(eventArgs(t.launchpad, rc, "Graduated").graduationFee).to.equal(E(0.03));
      expect(await token.balanceOf(t.launchpad.target)).to.equal(alloc);
      await travel(Math.floor(2.5 * DAY));
      await t.launchpad.claimAllocation(tokenAddr);
      expect(await token.balanceOf(creator.address)).to.be.gt(0n);
      const half = (await t.launchpad.curves(tokenAddr)).allocClaimed;
      expect(half).to.be.closeTo(alloc / 2n, alloc / 100n);
      await travel(3 * DAY);
      await t.launchpad.claimAllocation(tokenAddr);
      expect((await t.launchpad.curves(tokenAddr)).allocClaimed).to.equal(alloc);
      await expect(t.launchpad.claimAllocation(tokenAddr)).to.be.revertedWithCustomError(t.launchpad, "NothingPending");
    });
  });

  describe("names and addresses", () => {
    it("requires the salt to start with the creator's address", async () => {
      const { launchpad, alice, bob } = ctx;
      const p = await params(launchpad, bob.address);
      await expect(launchpad.connect(alice).create(p)).to.be.revertedWithCustomError(launchpad, "BadSalt");
    });

    it("enforces the AAAA suffix with clones and matches predictTokenAddress", async () => {
      const t = await deployAll({ suffix: true });
      const p = await params(t.launchpad, t.alice.address, { name: "Suffix", symbol: "SFX" });
      const predicted = await t.launchpad.predictTokenAddress(p.salt);
      expect(predicted.toLowerCase().endsWith("aaaa")).to.equal(true);
      const rc = await (await t.launchpad.connect(t.alice).create(p)).wait();
      expect(eventArgs(t.launchpad, rc, "Created").token).to.equal(predicted);
      await expect(t.launchpad.connect(t.alice).create(p)).to.be.reverted; // same salt twice
      const token = await ethers.getContractAt("LaunchToken", predicted);
      await expect(token.initialize("x", "y", "", 1n)).to.be.revertedWithCustomError(token, "AlreadyInitialized");
      await expect(t.template.initialize("x", "y", "", 1n)).to.be.revertedWithCustomError(token, "AlreadyInitialized");
    });

    it("refuses bad names, mixed scripts and reserved tickers", async () => {
      const { launchpad, owner, alice, rules } = ctx;
      const bad = async (over) => expect(launchpad.connect(alice).create(await params(launchpad, alice.address, over)))
        .to.be.revertedWithCustomError(rules, "BadName");
      await bad({ name: "" });
      await bad({ name: "X".repeat(33) });
      await bad({ symbol: "X".repeat(13) });
      await bad({ symbol: "NO VA" });
      await bad({ symbol: "N$" });
      await bad({ name: "Bіnance" }); // Latin with a Cyrillic look-alike letter
      await bad({ name: "bad\nname" });
      await launchpad.connect(owner).setReserved(["AGNT", "BNB", "USDT"], true);
      await expect(launchpad.connect(alice).create(await params(launchpad, alice.address, { symbol: "agnt" })))
        .to.be.revertedWithCustomError(launchpad, "ReservedSymbol");
      const ok = await createToken(launchpad, alice, { name: "代理人", symbol: "DAILI" }); // non-Latin only is fine
      expect(await ok.name()).to.equal("代理人");
      const t2 = await createToken(launchpad, alice, { name: "Nova Agent", symbol: "nova" });
      expect(await t2.symbol()).to.equal("nova");
      expect(await t2.totalSupply()).to.equal(E(1_000_000_000));
    });
  });

  describe("admin", () => {
    it("createFor: only approved launchers; the creator is recorded and earns rewards", async () => {
      const { launchpad, owner, alice, bob, carol, agentId } = ctx;
      const p = await params(launchpad, alice.address, { name: "Bot Coin", symbol: "BOT" });
      await expect(launchpad.connect(bob).createFor(alice.address, p)).to.be.revertedWithCustomError(launchpad, "NotLauncher");
      await launchpad.connect(owner).setLauncher(bob.address, true);
      const rc = await (await launchpad.connect(bob).createFor(alice.address, p)).wait();
      const ev = eventArgs(launchpad, rc, "Created");
      expect(ev.creator).to.equal(alice.address);
      await agentId.grant(carol.address);
      await launchpad.connect(carol).buy(ev.token, 0, { value: E(0.5) });
      await launchpad.distributeCreatorFees(ev.token);
      expect(await launchpad.creatorRewards(alice.address)).to.be.gt(0n);
      expect(await launchpad.creatorRewards(bob.address)).to.equal(0n);
    });

    it("guardian can pause but not unpause; sells, claims and fee collection keep working", async () => {
      const { launchpad, owner, alice, bob, guardian, agentId } = ctx;
      await agentId.grant(alice.address);
      const token = await createToken(launchpad, bob);
      await launchpad.connect(alice).buy(token.target, 0, { value: E(0.3) });
      await expect(launchpad.connect(alice).pause()).to.be.revertedWithCustomError(launchpad, "NotGuardian");
      await launchpad.connect(guardian).pause();
      await expect(launchpad.connect(guardian).unpause()).to.be.revertedWithCustomError(launchpad, "OwnableUnauthorizedAccount");
      await expect(launchpad.connect(alice).buy(token.target, 0, { value: E(0.1) })).to.be.revertedWithCustomError(launchpad, "IsPaused");
      await expect(launchpad.connect(alice).create(await params(launchpad, alice.address))).to.be.revertedWithCustomError(launchpad, "IsPaused");
      const bal = await token.balanceOf(alice.address);
      await expect(launchpad.connect(alice).sell(token.target, bal, 0)).to.emit(launchpad, "Sell");
      await expect(launchpad.connect(bob).claimFor([token.target])).to.emit(launchpad, "CreatorRewardsClaimed");
      await expect(launchpad.collectFees()).to.emit(launchpad, "FeesCollected");
      await launchpad.connect(owner).unpause();
      await expect(launchpad.connect(alice).buy(token.target, 0, { value: E(0.1) })).to.emit(launchpad, "Buy");
    });

    it("modules change only after 48 hours and the guardian can cancel a proposal", async () => {
      const { launchpad, alice, guardian, owner } = ctx;
      const otherId = await (await ethers.getContractFactory("MockAgentID")).deploy();
      await otherId.grant(alice.address);
      const newGate = await (await ethers.getContractFactory("AgentGate")).deploy([otherId.target], owner.address, guardian.address);
      expect(await launchpad.isAgent(alice.address)).to.equal(false);
      await expect(launchpad.connect(alice).proposeModule(key("gate"), newGate.target)).to.be.revertedWithCustomError(launchpad, "OwnableUnauthorizedAccount");
      await expect(launchpad.proposeModule(key("treasury"), newGate.target)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await launchpad.proposeModule(key("gate"), newGate.target);
      await travel(47 * 3600);
      await expect(launchpad.applyModule(key("gate"))).to.be.revertedWithCustomError(launchpad, "TimelockActive");
      await launchpad.connect(guardian).cancelModule(key("gate"));
      await travel(2 * 3600);
      await expect(launchpad.applyModule(key("gate"))).to.be.revertedWithCustomError(launchpad, "NothingPending");
      await launchpad.proposeModule(key("gate"), newGate.target);
      await travel(2 * DAY + 1);
      await expect(launchpad.applyModule(key("gate"))).to.emit(launchpad, "ModuleSet").withArgs(key("gate"), newGate.target);
      expect(await launchpad.isAgent(alice.address)).to.equal(true);
    });

    it("Agent Gate: registries are added after 48 h, removed instantly, and a bad registry cannot block it", async () => {
      const { gate, agentId, owner, guardian, alice, bob } = ctx;
      const erc8004 = await (await ethers.getContractFactory("MockAgentID")).deploy();
      await erc8004.grant(bob.address);
      expect(await gate.isAgent(bob.address)).to.equal(false);
      await gate.proposeRegistry(erc8004.target);
      await expect(gate.applyRegistry(erc8004.target)).to.be.revertedWithCustomError(gate, "TimelockActive");
      await travel(2 * DAY + 1);
      await gate.applyRegistry(erc8004.target);
      expect(await gate.isAgent(bob.address)).to.equal(true);

      const bomb = await (await ethers.getContractFactory("GasBombRegistry")).deploy();
      const rev = await (await ethers.getContractFactory("RevertingRegistry")).deploy();
      for (const r of [bomb, rev]) {
        await gate.proposeRegistry(r.target);
      }
      await travel(2 * DAY + 1);
      await gate.applyRegistry(bomb.target);
      await gate.applyRegistry(rev.target);
      await agentId.grant(alice.address);
      expect(await gate.isAgent(alice.address)).to.equal(true);
      expect(await gate.isAgent(owner.address)).to.equal(false);
      await expect(gate.connect(alice).removeRegistry(bomb.target)).to.be.revertedWithCustomError(gate, "NotAllowed");
      await gate.connect(guardian).removeRegistry(bomb.target);
      await gate.removeRegistry(rev.target);
      expect((await gate.registries()).length).to.equal(2);
    });

    it("keeps settings inside hard caps and limits fee/target moves to +-50% per week", async () => {
      const { launchpad, owner, alice } = ctx;
      const lp = launchpad.connect(owner);
      await expect(lp.setCreatorShareBps(3001)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setGraduationFeeBps(501)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setLaunchFee(E(0.021))).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setMetaUpdateFee(E(0.051))).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setGraduationTarget(E(51))).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setGraduationTarget(E(1.9))).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setWalletCapBps(49)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setWalletCapBps(201)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setCreatorAllocation(301, 0)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(lp.setMinCurveTime(8 * DAY)).to.be.revertedWithCustomError(launchpad, "OutOfBounds");
      await expect(launchpad.connect(alice).setLaunchFee(0n)).to.be.revertedWithCustomError(launchpad, "OwnableUnauthorizedAccount");

      // rate limit: 16 BNB can go to 8..24 within the week, not beyond
      await expect(lp.setGraduationTarget(E(7.9))).to.be.revertedWithCustomError(launchpad, "RateLimited");
      await expect(lp.setGraduationTarget(E(24.1))).to.be.revertedWithCustomError(launchpad, "RateLimited");
      await lp.setGraduationTarget(E(10));
      await lp.setGraduationTarget(E(8)); // still within the window anchored at 16
      await expect(lp.setGraduationTarget(E(6))).to.be.revertedWithCustomError(launchpad, "RateLimited");
      await travel(7 * DAY);
      await lp.setGraduationTarget(E(4)); // new window anchored at 8
      await expect(lp.setGraduationFeeBps(100)).to.be.revertedWithCustomError(launchpad, "RateLimited");
      await lp.setGraduationFeeBps(200);
      await lp.setLaunchFee(E(0.02)); // from 0 anything within the cap
    });

    it("new settings apply to new tokens only", async () => {
      const { launchpad, owner, alice, bob } = ctx;
      const first = await createToken(launchpad, alice);
      await launchpad.connect(owner).setWalletCapBps(200);
      await launchpad.connect(owner).setGraduationTarget(E(20));
      const second = await createToken(launchpad, bob);
      const c1 = await launchpad.curves(first.target);
      const c2 = await launchpad.curves(second.target);
      expect([c1.walletCapBps, c1.target, c1.graduationFee]).to.deep.equal([100n, E(16), E(0.48)]);
      expect([c2.walletCapBps, c2.target, c2.graduationFee]).to.deep.equal([200n, E(20), E(0.6)]);
    });
  });

  describe("invariants", () => {
    it("random buys and sells never leave the launchpad short of what it owes", async () => {
      const { launchpad, agentId } = ctx;
      const signers = (await ethers.getSigners()).slice(8, 28);
      for (const s of signers) await agentId.grant(s.address);
      const token = await createToken(launchpad, signers[0]);
      let seed = 42;
      const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
      for (let i = 0; i < 120; i++) {
        const s = signers[Math.floor(rnd() * signers.length)];
        const bal = await token.balanceOf(s.address);
        if (rnd() < 0.6 || bal === 0n) {
          await launchpad.connect(s).buy(token.target, 0, { value: E((rnd() * 0.4 + 0.001).toFixed(4)) }).catch(() => {});
        } else {
          await launchpad.connect(s).sell(token.target, (bal * BigInt(Math.floor(rnd() * 100) + 1)) / 100n, 0);
        }
        if (rnd() < 0.1) await launchpad.distributeCreatorFees(token.target);
        const c = await launchpad.curves(token.target);
        if (c.graduated) break;
        let owed = c.realBnb + c.creatorFees + (await launchpad.feesAccrued()) + (await launchpad.treasuryAccrued());
        for (const x of signers) owed += (await launchpad.creatorRewards(x.address)) + (await launchpad.pendingWithdrawals(x.address));
        expect(await ethers.provider.getBalance(launchpad.target)).to.be.gte(owed);
        expect(c.tokensSold).to.equal(CURVE + LP - (await token.balanceOf(launchpad.target)));
      }
    });
  });
});
