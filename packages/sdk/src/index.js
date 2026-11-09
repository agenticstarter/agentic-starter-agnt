// Shared constants, curve math and formatting for Agentic Starter apps, indexer and CLI.
export * from "./abis.js";
export * from "./vanity.js";
import PARAMS from "./params.json" with { type: "json" };
/** Platform numbers generated from contracts/config/networks.js (contracts/scripts/params.js). */
export { PARAMS };

export const LINKS = {
  web: "https://agenticstarter.xyz",
  docs: "https://docs.agenticstarter.xyz",
  presale: "https://presale.agenticstarter.xyz",
  airdrop: "https://airdrop.agenticstarter.xyz",
  x: "https://x.com/agentic_starter",
  telegram: "https://t.me/agenticstarter",
  telegramGroup: "https://t.me/agentic_starter",
  github: "https://github.com/agenticstarter",
  youtube: "https://www.youtube.com/@AgenticStarter",
  tiktok: "https://www.tiktok.com/@agenticstarter",
  /** The full walkthrough video; add ?t=<seconds> to open a chapter. */
  guide: "https://youtu.be/Ft2AvgKxgiQ",
};

export const CHAINS = {
  56: { id: 56, name: "BNB Chain", rpc: "https://bsc-dataseed.bnbchain.org", explorer: "https://bscscan.com", dex: "https://pancakeswap.finance" },
  97: { id: 97, name: "BNB Testnet", rpc: "https://data-seed-prebsc-1-s1.bnbchain.org:8545", explorer: "https://testnet.bscscan.com", dex: "https://pancakeswap.finance" },
  31337: { id: 31337, name: "Local", rpc: "http://127.0.0.1:8545", explorer: "", dex: "" },
};

/** Deployed contract addresses per chain. Fill in after running contracts/scripts/deploy.js. */
export const ADDRESSES = {
  56: { launchpad: "", lens: "", agnt: "", presale: "", airdrop: "", staking: "", feeSplitter: "", ignite: "", standardFactory: "", liquidityHelper: "", accountEscrow: "" },
  97: { launchpad: "", lens: "", agnt: "", presale: "", airdrop: "", staking: "", feeSplitter: "", ignite: "", standardFactory: "", liquidityHelper: "", accountEscrow: "" },
};

// ---------------------------------------------------------------- launchpad rules
export const RULES = {
  totalSupply: 1_000_000_000,
  curveSupply: 800_000_000,
  lpSupply: 200_000_000,
  /** Default mainnet wallet cap (1% of supply). Each token keeps the cap it was created with. */
  maxPerWallet: 10_000_000,
  feeBps: 100,
  /** Mainnet defaults (see PARAMS.testnet for testnet). Each token keeps the values it was created with. */
  graduationBnb: PARAMS.mainnet.graduationTargetBnb,
  graduationFeeBps: PARAMS.mainnet.graduationFeeBps,
  graduationFeeBnb: PARAMS.mainnet.graduationFeeBnb,
  creatorBonusBnb: PARAMS.mainnet.creatorBonusBnb,
  launchFeeBnb: PARAMS.mainnet.launchFeeBnb,
  /** Split of the 1% curve fee */
  feeSplit: { creator: 20, buyback: 40, stakers: 30, treasury: 10 },
  tokenSuffix: "AAAA",
};

const WAD = 10n ** 18n;
const ceilDiv = (a, b) => (a + b - 1n) / b;

const mulDiv = (a, b, d) => (a * b) / d;

/**
 * Bonding curve mirror of AgentLaunchpad v3 (all values in wei, bigint). Every token keeps the settings it was
 * created with: graduation target, graduation fee and wallet cap. Virtual reserves are solved so that selling the
 * whole curve raises `target` and the last curve price equals the PancakeSwap opening price (target - fee) / LP.
 */
export function makeCurve(targetWei = 16n * WAD, graduationFeeWei = 0n, walletCapBps = 100) {
  const total = BigInt(RULES.curveSupply) * WAD;
  const lp = BigInt(RULES.lpSupply) * WAD;
  const t = BigInt(targetWei);
  const f = BigInt(graduationFeeWei);
  const denom = total * (t - f) - lp * t;
  const vPlusT = mulDiv(total * t, t - f, denom);
  const vB = vPlusT - t;
  const vT = mulDiv(vPlusT, total, t);
  const maxPerWallet = (BigInt(RULES.totalSupply) * WAD * BigInt(walletCapBps)) / 10000n;
  return { vB, vT, k: vB * vT, curveSupply: total, maxPerWallet, target: t, graduationFee: f, walletCapBps: Number(walletCapBps) };
}

/** Curve from the launchpad's `curves(token)` result (v3), so math matches the chain exactly. */
export function curveFromChain(c) {
  return {
    vB: BigInt(c.virtualBnb),
    vT: BigInt(c.virtualToken),
    k: BigInt(c.virtualBnb) * BigInt(c.virtualToken),
    curveSupply: BigInt(RULES.curveSupply) * WAD,
    maxPerWallet: (BigInt(RULES.totalSupply) * WAD * BigInt(c.walletCapBps)) / 10000n,
    target: BigInt(c.target),
    graduationFee: BigInt(c.graduationFee),
    walletCapBps: Number(c.walletCapBps),
  };
}

export function quoteBuy(curve, state, bnbGross, walletBalance = 0n) {
  const { vB, vT, k, curveSupply, maxPerWallet } = curve;
  const fullFee = (bnbGross * 100n) / 10000n;
  const net = bnbGross - fullFee;
  const room = walletBalance >= maxPerWallet ? 0n : maxPerWallet - walletBalance;
  const remaining = curveSupply - state.tokensSold;
  const cap = room < remaining ? room : remaining;
  if (cap === 0n) return { tokensOut: 0n, spent: 0n, fee: 0n, refund: bnbGross, capped: true };
  const x = vB + state.realBnb;
  const y = vT - state.tokensSold;
  let out = y - ceilDiv(k, x + net);
  let netUsed = net;
  let fee = fullFee;
  let capped = false;
  if (out > cap) {
    capped = true;
    out = cap;
    netUsed = ceilDiv(k, y - out) - x;
    if (netUsed > net) netUsed = net;
    fee = ceilDiv(netUsed * 100n, 9900n);
    if (netUsed + fee > bnbGross) fee = bnbGross - netUsed;
  }
  return { tokensOut: out, spent: netUsed + fee, fee, refund: bnbGross - netUsed - fee, capped };
}

export function quoteSell(curve, state, tokensIn) {
  const x = curve.vB + state.realBnb;
  const y = curve.vT - state.tokensSold;
  let gross = x - ceilDiv(curve.k, y + tokensIn);
  if (gross > state.realBnb) gross = state.realBnb;
  const fee = (gross * 100n) / 10000n;
  return { bnbOut: gross - fee, fee };
}

/** Price in BNB per token (number) for a curve state. */
export function spotPrice(curve, state) {
  const x = curve.vB + state.realBnb;
  const y = curve.vT - state.tokensSold;
  return Number((x * WAD) / y) / 1e18;
}

// ---------------------------------------------------------------- metadata
/** metaURI may be a data: URI, ipfs:// or https:// JSON. Returns {} when unreadable offline. */
export function parseMetaURI(uri) {
  if (!uri) return {};
  try {
    if (uri.startsWith("data:application/json;base64,")) {
      const b64 = uri.slice("data:application/json;base64,".length);
      const json = typeof atob === "function" ? atob(b64) : Buffer.from(b64, "base64").toString("utf8");
      return JSON.parse(json);
    }
    if (uri.startsWith("data:application/json,")) return JSON.parse(decodeURIComponent(uri.slice(22)));
  } catch {
    return {};
  }
  return { uri };
}

export const ipfsToHttp = (u) => (u && u.startsWith("ipfs://") ? `https://ipfs.io/ipfs/${u.slice(7)}` : u);

// ---------------------------------------------------------------- formatting
export const shortAddr = (a) => (a ? `${a.slice(0, 6)}…${a.slice(-4)}` : "");

export function timeAgo(ts, now = Date.now() / 1000) {
  if (!ts) return "—";
  const s = Math.max(1, Math.floor(now - ts));
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  return `${Math.floor(s / 86400)}d`;
}

const SUB = "₀₁₂₃₄₅₆₇₈₉";
/** Small prices DEX-style, always 4 significant digits: 0.0000000625 -> 0.0₇6250 */
export function fmtPrice(v) {
  const n = Number(v);
  if (!n) return "0";
  if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
  const s = n.toFixed(20).replace(/0+$/, "");
  const m = s.match(/^0\.(0*)(\d+)$/);
  if (!m) return s;
  const zeros = m[1].length;
  const digits = m[2].slice(0, 4).padEnd(4, "0");
  return zeros >= 4 ? `0.0${String(zeros).replace(/\d/g, (d) => SUB[d])}${digits}` : `0.${m[1]}${digits}`;
}

export function fmtCompact(v, prefix = "") {
  const n = Number(v);
  if (!Number.isFinite(n) || n === 0) return `${prefix}0`;
  const a = Math.abs(n);
  if (a >= 1e9) return `${prefix}${(n / 1e9).toFixed(2)}B`;
  if (a >= 1e6) return `${prefix}${(n / 1e6).toFixed(2)}M`;
  if (a >= 1e4) return `${prefix}${(n / 1e3).toFixed(1)}K`;
  if (a >= 1000) return `${prefix}${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  // dollar amounts always show cents ($269.70, not $269.7)
  if (a >= 1) return `${prefix}${n.toLocaleString("en-US", prefix === "$" ? { minimumFractionDigits: 2, maximumFractionDigits: 2 } : { maximumFractionDigits: 2 })}`;
  return `${prefix}${fmtPrice(n)}`;
}

export const fmtUsd = (v) => (Number(v) > 0 ? fmtCompact(v, "$") : "—");
export const fmtBnb = (v, d = 4) => `${Number(v).toLocaleString("en-US", { maximumFractionDigits: d })} BNB`;
export const fmtTokens = (v) => Number(v).toLocaleString("en-US", { maximumFractionDigits: 0 });
export const fmtPct = (v, d = 1) => `${Number(v).toFixed(d)}%`;

// ---------------------------------------------------------------- launch helpers
/** keccak256 key for an X or GitHub account in a fee split: accountKey("x", "@Alice") → keccak256("x:alice"). */
export function accountKeyText(kind, handle) {
  const h = String(handle || "").trim().replace(/^@/, "").replace(/^https?:\/\/(www\.)?(x|twitter|github)\.com\//i, "").split(/[/?#]/)[0].toLowerCase();
  return `${kind}:${h}`;
}

/** The CreateParams struct for AgentLaunchpad.create / createAndBuy / createFor. */
export function createParams({ name, symbol, metaURI = "", salt, rewardMode = 0, recipients = [] }) {
  return {
    name,
    symbol,
    metaURI,
    salt,
    quote: "0x0000000000000000000000000000000000000000",
    rewardMode,
    recipients: recipients.map((r) => ({
      wallet: r.wallet || "0x0000000000000000000000000000000000000000",
      account: r.account || "0x0000000000000000000000000000000000000000000000000000000000000000",
      bps: Number(r.bps),
    })),
  };
}

/** A ready post for an agent to share after launching (testnet and mainnet). */
export function launchPost({ symbol, name, token, testnet = false }) {
  const link = `${LINKS.web}/t/${token}${testnet ? "?chain=testnet" : ""}`;
  return `Just launched $${symbol} (${name}) on @agentic_starter, the agent-only launchpad${testnet ? " (testnet)" : ""}.\n\n${link}\n\n#AgenticStarter #BNBChain #AIAgents`;
}

// ---------------------------------------------------------------- social links (same rules on the site, CLI and bot)
/** "https://x.com/alice", "twitter.com/alice/", "@alice" or "alice" → "@alice"; anything else → null. */
export function normalizeXHandle(v) {
  const s = String(v || "").trim();
  if (!s) return null;
  const m = s.match(/^(?:https?:\/\/)?(?:www\.|mobile\.)?(?:x|twitter)\.com\/@?([A-Za-z0-9_]{1,15})\/?(?:[?#].*)?$/i) || s.match(/^@?([A-Za-z0-9_]{1,15})$/);
  return m ? `@${m[1]}` : null;
}

/** "https://t.me/group", "t.me/group" or "@group" → "https://t.me/group"; anything else → null. */
export function normalizeTelegram(v) {
  const s = String(v || "").trim();
  if (!s) return null;
  const m = s.match(/^(?:https?:\/\/)?(?:www\.)?(?:t\.me|telegram\.me)\/(\+?[A-Za-z0-9_]{4,64})\/?$/i) || s.match(/^@([A-Za-z0-9_]{4,32})$/);
  return m ? `https://t.me/${m[1]}` : null;
}
