/**
 * Writes packages/sdk/src/params.json from config/networks.js: the one place the docs, the sites and the bot read
 * platform numbers from (graduation target and fee, wallet cap, fees, presale model, tokenomics).
 * `node scripts/params.js --check` fails when the committed file is out of date (used in CI).
 */
const fs = require("fs");
const path = require("path");
const { networks, PRESALE, TOKENOMICS, RESERVED_TICKERS } = require("../config/networks");

const pick = (n) => ({
  graduationTargetBnb: Number(n.graduationTarget),
  graduationFeeBps: n.graduationFeeBps,
  graduationFeeBnb: +(Number(n.graduationTarget) * n.graduationFeeBps / 10000).toFixed(6),
  creatorBonusBps: 2000,
  creatorBonusBnb: +(Number(n.graduationTarget) * n.graduationFeeBps / 10000 * 0.2).toFixed(6),
  targetBoundsBnb: [Number(n.minTarget), 50],
  walletCapBps: n.walletCapBps,
  walletCapBoundsBps: [n.minWalletCapBps, n.maxWalletCapBps],
  minWalletsToGraduate: Math.ceil(10000 * 0.8 / n.walletCapBps),
  curveFeeBps: 100,
  curveFeeSplitBps: { creator: 2000, buybackBurn: 4000, stakers: 3000, treasury: 1000 },
  launchFeeBnb: Number(n.launchFee),
  metaUpdateFeeBnb: Number(n.metaUpdateFee),
  creatorAllocBps: n.creatorAllocBps,
  creatorAllocUnlockDays: n.creatorAllocUnlock / 86400,
  rateLimitPerWeekPct: n.rateLimited ? 50 : null,
  tokenSuffix: n.suffix,
  standardTokenFeesBnb: { random: 0.01, vanity9999: 0.02, advanced: 0.05, advancedTax: 0.1 },
});

const out = {
  testnet: pick(networks[97]),
  mainnet: pick(networks[56]),
  presale: {
    floorAgntPerBnb: Number(PRESALE.floorRate),
    saleTokens: Number(PRESALE.saleTokens),
    floorCapBnb: Number(PRESALE.saleTokens) / Number(PRESALE.floorRate),
    softCapBnb: Number(PRESALE.softCap),
    perWalletBnb: [Number(PRESALE.minBuy), Number(PRESALE.maxBuy)],
    earlyBonusPct: PRESALE.bonusBps / 100,
    earlyBonusHours: PRESALE.bonusHours,
    earlyBonusCap: Number(PRESALE.bonusCap),
    days: PRESALE.days,
    listing: { priceVsFinalPresale: 1, bnbToPoolPct: 80, bnbToTreasuryPct: 20, maxPoolAgnt: 200_000_000 },
    useOfFundsPct: { security: 30, listing: 30, marketing: 25, operations: 15 },
  },
  tokenomicsMillions: TOKENOMICS,
  reservedTickers: RESERVED_TICKERS,
};

const dest = path.join(__dirname, "..", "..", "packages", "sdk", "src", "params.json");
const text = JSON.stringify(out, null, 2) + "\n";
if (process.argv.includes("--check")) {
  const cur = fs.existsSync(dest) ? fs.readFileSync(dest, "utf8") : "";
  if (cur !== text) {
    console.error("packages/sdk/src/params.json is out of date: run node contracts/scripts/params.js");
    process.exit(1);
  }
  console.log("params.json up to date");
} else {
  fs.writeFileSync(dest, text);
  console.log(`wrote ${path.relative(process.cwd(), dest)}`);
}
