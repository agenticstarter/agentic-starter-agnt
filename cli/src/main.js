// Agentic Starter CLI — agent-first: every command prints JSON; writes are preview → approve → execute.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { randomBytes } from "node:crypto";
import { createPublicClient, createWalletClient, decodeEventLog, encodeFunctionData, formatEther, http, parseEther, isAddress } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { bsc, bscTestnet, hardhat } from "viem/chains";
import { ADDRESSES, AgentLaunchpadAbi, LaunchpadLensAbi, IgniteBoardAbi, LaunchTokenAbi, LINKS, findSalt, createParams, accountKeyText, launchPost, normalizeXHandle, normalizeTelegram } from "./sdk.js";
import { keccak256, toBytes } from "viem";

const VERSION = "0.3.0";
const REQUEST_TTL = 5 * 60; // seconds
const HOME = process.env.AGENTIC_HOME || path.join(os.homedir(), ".agentic");
const REQ_DIR = path.join(HOME, "requests");

// ------------------------------------------------------------------ config
// `agentic init` writes ~/.agentic/config.json; environment variables override it.
const FILE_CFG = (() => {
  try { return JSON.parse(fs.readFileSync(path.join(HOME, "config.json"), "utf8")); } catch { return {}; }
})();
for (const [k, v] of Object.entries(FILE_CFG)) if (process.env[k] === undefined && typeof v === "string") process.env[k] = v;
const chainId = Number(process.env.AGENTIC_CHAIN_ID || 56);
const chain = { 56: bsc, 97: bscTestnet, 31337: hardhat }[chainId];
const cfg = {
  chainId,
  rpc: process.env.AGENTIC_RPC || chain?.rpcUrls.default.http[0],
  launchpad: process.env.AGENTIC_LAUNCHPAD || ADDRESSES[chainId]?.launchpad || "",
  lens: process.env.AGENTIC_LENS || ADDRESSES[chainId]?.lens || "",
  ignite: process.env.AGENTIC_IGNITE || ADDRESSES[chainId]?.ignite || "",
  // PancakeSwap V2 router: graduated tokens trade there
  router: process.env.AGENTIC_ROUTER || { 56: "0x10ED43C718714eb63d5aA57B78B54704E256024E", 97: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1" }[chainId] || "",
  api: process.env.AGENTIC_API || `${LINKS.web}/api`,
  explorer: chain?.blockExplorers?.default.url ?? "",
};

const ROUTER_ABI = [
  { type: "function", name: "WETH", stateMutability: "view", inputs: [], outputs: [{ type: "address" }] },
  { type: "function", name: "getAmountsOut", stateMutability: "view", inputs: [{ name: "amountIn", type: "uint256" }, { name: "path", type: "address[]" }], outputs: [{ type: "uint256[]" }] },
  { type: "function", name: "swapExactETHForTokensSupportingFeeOnTransferTokens", stateMutability: "payable", inputs: [{ name: "amountOutMin", type: "uint256" }, { name: "path", type: "address[]" }, { name: "to", type: "address" }, { name: "deadline", type: "uint256" }], outputs: [] },
  { type: "function", name: "swapExactTokensForETHSupportingFeeOnTransferTokens", stateMutability: "nonpayable", inputs: [{ name: "amountIn", type: "uint256" }, { name: "amountOutMin", type: "uint256" }, { name: "path", type: "address[]" }, { name: "to", type: "address" }, { name: "deadline", type: "uint256" }], outputs: [] },
];

/** Graduated tokens: quote and build a PancakeSwap V2 swap (no Agent ID needed, no Agentic Starter fee). */
async function pancakeTrade(client, side, token, amountIn, to, slippage) {
  if (!cfg.router) fail("No PancakeSwap router for this chain", "Set AGENTIC_ROUTER to the PancakeSwap V2 router address.");
  const wbnb = await client.readContract({ address: cfg.router, abi: ROUTER_ABI, functionName: "WETH" });
  const pathArr = side === "buy" ? [wbnb, token] : [token, wbnb];
  const amounts = await client.readContract({ address: cfg.router, abi: ROUTER_ABI, functionName: "getAmountsOut", args: [amountIn, pathArr] });
  const outAmt = amounts[amounts.length - 1];
  const minOut = (outAmt * (10000n - pctBps(slippage, 1))) / 10000n;
  const deadline = BigInt(Math.floor(Date.now() / 1000) + 20 * 60);
  const data = side === "buy"
    ? encodeFunctionData({ abi: ROUTER_ABI, functionName: "swapExactETHForTokensSupportingFeeOnTransferTokens", args: [minOut, pathArr, to, deadline] })
    : encodeFunctionData({ abi: ROUTER_ABI, functionName: "swapExactTokensForETHSupportingFeeOnTransferTokens", args: [amountIn, minOut, pathArr, to, deadline] });
  return { outAmt, minOut, tx: { to: cfg.router, data, value: side === "buy" ? amountIn.toString() : "0" } };
}

function out(obj, code = 0) {
  process.stdout.write(JSON.stringify(obj, (_k, v) => (typeof v === "bigint" ? v.toString() : v), 2) + "\n");
  process.exit(code);
}
function fail(error, fix, extra = {}) {
  out({ ok: false, error, fix, ...extra }, 1);
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const k = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) args[k] = true;
      else { args[k] = next; i++; }
    } else args._.push(a);
  }
  return args;
}

const pub = () => createPublicClient({ chain, transport: http(cfg.rpc) });

// ------------------------------------------------------------------ signer
// AGENTIC_PRIVATE_KEY — local key (testnets / dedicated agent keys).
// AGENTIC_SIGNER_CMD  — external signer: receives {chainId,to,data,value} JSON on stdin, prints the tx hash.
//                       Use this to plug in any agentic wallet CLI. AGENTIC_WALLET must hold its address.
function signerInfo() {
  if (process.env.AGENTIC_PRIVATE_KEY) {
    const acct = privateKeyToAccount(process.env.AGENTIC_PRIVATE_KEY);
    return { kind: "private-key", address: acct.address, acct };
  }
  if (process.env.AGENTIC_SIGNER_CMD) return { kind: "command", address: process.env.AGENTIC_WALLET || null, cmd: process.env.AGENTIC_SIGNER_CMD };
  return { kind: "none", address: process.env.AGENTIC_WALLET || null };
}

async function sendTx(tx) {
  const s = signerInfo();
  if (s.kind === "private-key") {
    const wallet = createWalletClient({ account: s.acct, chain, transport: http(cfg.rpc) });
    return wallet.sendTransaction({ to: tx.to, data: tx.data, value: BigInt(tx.value || 0) });
  }
  if (s.kind === "command") {
    const r = spawnSync(s.cmd, { shell: true, input: JSON.stringify({ chainId: cfg.chainId, to: tx.to, data: tx.data, value: String(tx.value || 0) }), encoding: "utf8", timeout: 300_000 });
    const hash = (r.stdout || "").match(/0x[0-9a-fA-F]{64}/)?.[0];
    if (!hash) throw new Error(`signer command returned no tx hash: ${(r.stderr || r.stdout || "").slice(0, 300)}`);
    return hash;
  }
  throw new Error("No signer configured");
}

// ------------------------------------------------------------------ helpers
function needLaunchpad() {
  if (!isAddress(cfg.launchpad)) fail("Launchpad address not configured", "Run `agentic init` or set AGENTIC_LAUNCHPAD (npm i -g @agenticstarter/cli@latest).");
  if (!isAddress(cfg.lens)) fail("Lens address not configured", "Run `agentic init` or set AGENTIC_LENS.");
}
function needToken(args) {
  if (!isAddress(args.token || "")) fail("Missing or invalid --token", "Pass the token contract address: --token 0x…");
  return args.token;
}
const pctBps = (v, d) => BigInt(Math.round(Number(v ?? d) * 100));
const fmt = (wei) => Number(formatEther(wei));

async function api(p) {
  const r = await fetch(`${cfg.api}${p}`, { signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

function saveRequest(kind, tx, summary) {
  fs.mkdirSync(REQ_DIR, { recursive: true });
  const id = randomBytes(6).toString("hex");
  const expiresAt = Math.floor(Date.now() / 1000) + REQUEST_TTL;
  fs.writeFileSync(path.join(REQ_DIR, `${id}.json`), JSON.stringify({ id, kind, tx, summary, chainId: cfg.chainId, expiresAt }));
  return { requestId: id, expiresAt, expiresInSeconds: REQUEST_TTL };
}

async function curveInfo(client, token) {
  const c = await client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "curves", args: [token] });
  const { creator, createdAt, graduated, tokensSold, realBnb, pair, target, walletCapBps } = c;
  if (creator === "0x0000000000000000000000000000000000000000") fail("Unknown token", "This address was not created by the Agentic Starter launchpad.");
  const [name, symbol, price] = await Promise.all([
    client.readContract({ address: token, abi: LaunchTokenAbi, functionName: "name" }),
    client.readContract({ address: token, abi: LaunchTokenAbi, functionName: "symbol" }),
    client.readContract({ address: cfg.lens, abi: LaunchpadLensAbi, functionName: "spotPrice", args: [token] }),
  ]);
  return {
    token, name, symbol, creator, createdAt: Number(createdAt), graduated, pair: graduated ? pair : null,
    priceBnb: fmt(price), mcapBnb: fmt(price) * 1e9, raisedBnb: fmt(realBnb), graduationBnb: fmt(target), walletCapPct: Number(walletCapBps) / 100,
    progressPct: graduated ? 100 : Number((tokensSold * 10000n) / (800_000_000n * 10n ** 18n)) / 100,
    tokensSold: fmt(tokensSold),
  };
}

function decodeReceipt(receipt) {
  const events = [];
  for (const log of receipt.logs) {
    const a = log.address.toLowerCase();
    const abi = a === cfg.launchpad.toLowerCase() ? AgentLaunchpadAbi : cfg.ignite && a === cfg.ignite.toLowerCase() ? IgniteBoardAbi : null;
    if (!abi) continue;
    try {
      const e = decodeEventLog({ abi, data: log.data, topics: log.topics });
      events.push({ event: e.eventName, ...Object.fromEntries(Object.entries(e.args).map(([k, v]) => [k, typeof v === "bigint" ? (k.toLowerCase().includes("bnb") || k === "fee" || k === "refund" || k === "amount" || k.startsWith("tokens") ? fmt(v) : v.toString()) : v])) });
    } catch { /* not ours */ }
  }
  return events;
}

// ------------------------------------------------------------------ commands
const commands = {
  async preflight() {
    const checks = [];
    const add = (name, ok, detail, fix) => checks.push({ name, ok, detail, ...(ok ? {} : { fix }) });
    const client = pub();
    let rpcOk = false;
    try {
      const id = await client.getChainId();
      rpcOk = id === cfg.chainId;
      add("rpc", rpcOk, `${cfg.rpc} (chain ${id})`, `Point AGENTIC_RPC at a BNB Chain RPC for chain ${cfg.chainId}.`);
    } catch (e) {
      add("rpc", false, e.shortMessage || e.message, "Check AGENTIC_RPC and your network connection.");
    }
    add("launchpad", isAddress(cfg.launchpad), cfg.launchpad || "not set", "Set AGENTIC_LAUNCHPAD or update the CLI.");
    const s = signerInfo();
    add("signer", s.kind !== "none" && !!s.address, s.kind === "none" ? "none" : `${s.kind} ${s.address ?? "(AGENTIC_WALLET missing)"}`,
      "Configure AGENTIC_SIGNER_CMD + AGENTIC_WALLET for your agentic wallet, or AGENTIC_PRIVATE_KEY for a dedicated test key.");
    if (rpcOk && s.address && isAddress(cfg.launchpad)) {
      const [agent, bal, paused] = await Promise.all([
        client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "isAgent", args: [s.address] }),
        client.getBalance({ address: s.address }),
        client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "paused" }),
      ]);
      add("agentId", agent, agent ? "Agent ID found" : "No Agent ID on this wallet", "Claim an Agent ID for this agentic wallet — it is required to buy on the curve. Selling works without it.");
      add("balance", bal >= parseEther("0.01"), `${fmt(bal)} BNB`, "Fund the wallet with at least 0.01 BNB for gas and buys.");
      add("launchpad-live", !paused, paused ? "paused" : "live", "Buys and launches are paused; sells still work. Check @agentic_starter on X for updates.");
    }
    out({ ok: checks.every((c) => c.ok), version: VERSION, chainId: cfg.chainId, checks });
  },

  async list(args, tab = args.tab || "trending") {
    try {
      const r = await api(`/tokens?tab=${tab}&limit=${args.limit || 20}`);
      out({ ok: true, tab, tokens: r.items.map((t) => ({ token: t.address, symbol: t.symbol, name: t.name, priceBnb: t.priceBnb, mcapBnb: t.mcapBnb, vol24Bnb: t.vol24Bnb, progressPct: Number(t.progress.toFixed(2)), graduated: t.graduated, holders: t.holders, createdAt: t.createdAt })) });
    } catch {
      needLaunchpad();
      const client = pub();
      const n = await client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "tokenCount" });
      const lim = BigInt(args.limit || 20);
      const offset = n > lim ? n - lim : 0n;
      const list = await client.readContract({ address: cfg.lens, abi: LaunchpadLensAbi, functionName: "tokensSlice", args: [offset, lim] });
      const tokens = await Promise.all([...list].reverse().map((t) => curveInfo(client, t)));
      out({ ok: true, tab: "new", source: "chain", tokens });
    }
  },
  hot: (a) => commands.list(a, "trending"),
  new: (a) => commands.list(a, "new"),
  "near-grad": (a) => commands.list(a, "graduating"),
  graduated: (a) => commands.list(a, "graduated"),

  async token(args) {
    needLaunchpad();
    const t = needToken(args);
    const info = await curveInfo(pub(), t);
    out({ ok: true, ...info, link: `${LINKS.web}/token/${t}`, ...(info.graduated ? { trade: `https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${t}` } : {}) });
  },

  async quote(args) {
    needLaunchpad();
    const token = needToken(args);
    const client = pub();
    const me = signerInfo().address || "0x0000000000000000000000000000000000000001";
    const pre = await curveInfo(client, token);
    if (pre.graduated) {
      if (args.bnb) {
        const r = await pancakeTrade(client, "buy", token, parseEther(String(args.bnb)), me, args.slippage);
        out({ ok: true, side: "buy", venue: "PancakeSwap V2", token, bnbIn: Number(args.bnb), tokensOut: fmt(r.outAmt), fee: "0.25% pool fee" });
      }
      const amount = await sellAmount(client, token, args, me);
      const r = await pancakeTrade(client, "sell", token, amount, me, args.slippage);
      out({ ok: true, side: "sell", venue: "PancakeSwap V2", token, tokensIn: fmt(amount), bnbOut: fmt(r.outAmt), fee: "0.25% pool fee" });
    }
    if (args.bnb) {
      const [tokensOut, bnbUsed, fee, refund] = await client.readContract({ address: cfg.lens, abi: LaunchpadLensAbi, functionName: "quoteBuy", args: [token, me, parseEther(String(args.bnb))] });
      out({ ok: true, side: "buy", token, bnbIn: Number(args.bnb), tokensOut: fmt(tokensOut), bnbSpent: fmt(bnbUsed), fee: fmt(fee), refund: fmt(refund), capped: refund > 0n, note: refund > 0n ? `Wallet cap (${pre.walletCapPct}% of supply) reached; the refund returns in the same transaction.` : undefined });
    }
    const amount = await sellAmount(client, token, args, me);
    const [bnbOut, fee] = await client.readContract({ address: cfg.lens, abi: LaunchpadLensAbi, functionName: "quoteSell", args: [token, amount] });
    out({ ok: true, side: "sell", token, tokensIn: fmt(amount), bnbOut: fmt(bnbOut), fee: fmt(fee) });
  },

  async buy(args) {
    needLaunchpad();
    const token = needToken(args);
    if (!args.bnb) fail("Missing --bnb", "Pass the BNB amount to spend, e.g. --bnb 0.1");
    const s = signerInfo();
    if (!s.address) fail("No wallet configured", "Run `agentic preflight` and follow the signer fix.");
    const client = pub();
    const value = parseEther(String(args.bnb));
    const pre = await curveInfo(client, token);
    if (pre.graduated) {
      const r = await pancakeTrade(client, "buy", token, value, s.address, args.slippage);
      const summary = { action: "buy", venue: "PancakeSwap V2", token, symbol: pre.symbol, bnbIn: Number(args.bnb), tokensOut: fmt(r.outAmt), minTokensOut: fmt(r.minOut), fee: "0.25% pool fee, no Agentic Starter fee" };
      out({ ok: true, preview: summary, ...saveRequest("buy", r.tx, summary), next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
    }
    const [agent, q] = await Promise.all([
      client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "isAgent", args: [s.address] }),
      client.readContract({ address: cfg.lens, abi: LaunchpadLensAbi, functionName: "quoteBuy", args: [token, s.address, value] }),
    ]);
    if (!agent) fail("Wallet has no Agent ID", "Only Agent ID holders can buy on the curve. Claim one for this wallet, then retry.");
    const [tokensOut, bnbUsed, fee, refund] = q;
    if (tokensOut === 0n) fail("Wallet cap reached", `This wallet already holds ${pre.walletCapPct}% of the supply. Sell some or use another agent wallet.`);
    const minOut = (tokensOut * (10000n - pctBps(args.slippage, 1))) / 10000n;
    const tx = { to: cfg.launchpad, data: encodeFunctionData({ abi: AgentLaunchpadAbi, functionName: "buy", args: [token, minOut] }), value: value.toString() };
    const info = await curveInfo(client, token);
    const summary = { action: "buy", token, symbol: info.symbol, bnbIn: Number(args.bnb), tokensOut: fmt(tokensOut), minTokensOut: fmt(minOut), bnbSpent: fmt(bnbUsed), fee: fmt(fee), refund: fmt(refund), progressPct: info.progressPct, nearGraduation: info.progressPct > 92 };
    out({ ok: true, preview: summary, ...saveRequest("buy", tx, summary), next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
  },

  async sell(args) {
    needLaunchpad();
    const token = needToken(args);
    const s = signerInfo();
    if (!s.address) fail("No wallet configured", "Run `agentic preflight` and follow the signer fix.");
    const client = pub();
    const amount = await sellAmount(client, token, args, s.address);
    if (amount === 0n) fail("Nothing to sell", "This wallet holds none of the token.");
    const pre = await curveInfo(client, token);
    if (pre.graduated) {
      const allowance = await client.readContract({ address: token, abi: LaunchTokenAbi, functionName: "allowance", args: [s.address, cfg.router] });
      if (allowance < amount) {
        // step 1 of 2: let the PancakeSwap router spend the token, then run the same sell again
        const tx = { to: token, data: encodeFunctionData({ abi: LaunchTokenAbi, functionName: "approve", args: [cfg.router, amount] }), value: "0" };
        const summary = { action: "approve", venue: "PancakeSwap V2", token, symbol: pre.symbol, amount: fmt(amount), why: "PancakeSwap needs permission to move this token before the sell" };
        out({ ok: true, preview: summary, ...saveRequest("approve", tx, summary), next: "Step 1 of 2. After executing this approval, run the same sell command again." });
      }
      const r = await pancakeTrade(client, "sell", token, amount, s.address, args.slippage);
      const summary = { action: "sell", venue: "PancakeSwap V2", token, symbol: pre.symbol, tokensIn: fmt(amount), bnbOut: fmt(r.outAmt), minBnbOut: fmt(r.minOut), fee: "0.25% pool fee, no Agentic Starter fee" };
      out({ ok: true, preview: summary, ...saveRequest("sell", r.tx, summary), next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
    }
    const [bnbOut, fee] = await client.readContract({ address: cfg.lens, abi: LaunchpadLensAbi, functionName: "quoteSell", args: [token, amount] });
    const minOut = (bnbOut * (10000n - pctBps(args.slippage, 1))) / 10000n;
    const tx = { to: cfg.launchpad, data: encodeFunctionData({ abi: AgentLaunchpadAbi, functionName: "sell", args: [token, amount, minOut] }), value: "0" };
    const summary = { action: "sell", token, tokensIn: fmt(amount), bnbOut: fmt(bnbOut), minBnbOut: fmt(minOut), fee: fmt(fee), approvalNeeded: false };
    out({ ok: true, preview: summary, ...saveRequest("sell", tx, summary), next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
  },

  async create(args) {
    needLaunchpad();
    const name = String(args.name || "").trim();
    const symbol = String(args.symbol || "").trim().toUpperCase();
    if (!name || name.length > 32) fail("Invalid --name", "1–32 characters.");
    if (!/^[A-Z0-9]{1,12}$/.test(symbol)) fail("Invalid --symbol", "1–12 letters or digits.");
    if (args.logo && !/^(https:\/\/|ipfs:\/\/)/.test(String(args.logo))) {
      // a local file: upload it (pinned to IPFS by the Agentic Starter API) and use the returned URI
      const file = path.resolve(String(args.logo));
      if (!fs.existsSync(file)) fail("--logo file not found", "Pass a local image path, or an https:// / ipfs:// URL.");
      const buf = fs.readFileSync(file);
      if (buf.length > 1024 * 1024) fail("Logo is larger than 1 MB", "Resize the image and try again.");
      const ext = path.extname(file).toLowerCase();
      const type = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp" }[ext];
      if (!type) fail("Unsupported logo format", "Use PNG, JPG, GIF or WEBP.");
      const r = await fetch(`${cfg.api}/upload`, { method: "POST", headers: { "Content-Type": type }, body: buf, signal: AbortSignal.timeout(60_000) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.uri) fail("Logo upload failed", j.error || `HTTP ${r.status}`);
      args.logo = j.uri;
    }
    if (args.twitter && !normalizeXHandle(args.twitter)) fail("Bad --twitter value", "Use an X profile link or @handle.");
    if (args.telegram && !normalizeTelegram(args.telegram)) fail("Bad --telegram value", "Use a t.me link or @group.");
    const meta = Object.fromEntries(Object.entries({ description: args.description, image: args.logo, website: args.website,
      twitter: args.twitter ? normalizeXHandle(args.twitter) : undefined, telegram: args.telegram ? normalizeTelegram(args.telegram) : undefined })
      .filter(([, v]) => typeof v === "string" && v));
    const metaURI = Object.keys(meta).length ? `data:application/json;base64,${Buffer.from(JSON.stringify(meta)).toString("base64")}` : "";
    if (metaURI.length > 1024) fail("Metadata too long", "Shorten the description (max ~600 characters with links).");
    const buyBnb = args.buy ? parseEther(String(args.buy)) : 0n;
    const s = signerInfo();
    if (buyBnb > 0n && s.address) {
      const agent = await pub().readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "isAgent", args: [s.address] });
      if (!agent) fail("Wallet has no Agent ID", "Launch without --buy, or claim an Agent ID first.");
    }
    if (!s.address) fail("No wallet configured", "Set AGENTIC_PRIVATE_KEY or run agentic preflight.");
    // Every token address ends with the platform suffix (AAAA). The salt starts with the creator's address,
    // so it only works for this wallet. Finding one takes a few seconds.
    const client = pub();
    const [launchFee, mask, suffix, initCodeHash, paused] = await Promise.all([
      client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "launchFeeFor", args: [s.address] }),
      client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "suffixMask" }),
      client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "suffix" }),
      client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "tokenInitCodeHash" }),
      client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "paused" }),
    ]);
    if (paused) fail("Launches are paused", "The launchpad is not open right now. Check the website for the opening date.");
    let salt;
    let tokenAddress = null;
    if (mask === 0n) {
      salt = `${s.address.toLowerCase()}${randomBytes(12).toString("hex")}`;
    } else {
      const hex = suffix.toString(16).toUpperCase().padStart(mask.toString(16).length, "0");
      const found = findSalt({ launchpad: cfg.launchpad, creator: s.address, initCodeHash, suffix: hex });
      salt = found.salt;
      tokenAddress = found.address;
    }
    const value = launchFee + buyBnb;
    const recipients = parseSplit(args);
    const p = createParams({ name, symbol, metaURI, salt, rewardMode: args.cashback ? 1 : 0, recipients });
    const data = buyBnb > 0n
      ? encodeFunctionData({ abi: AgentLaunchpadAbi, functionName: "createAndBuy", args: [p, 0n] })
      : encodeFunctionData({ abi: AgentLaunchpadAbi, functionName: "create", args: [p] });
    const summary = {
      action: "create", name, symbol, metadata: meta, tokenAddress, firstBuyBnb: fmt(buyBnb), launchFeeBnb: fmt(launchFee),
      rewardMode: args.cashback ? "cashback (the creator part goes back to traders)" : "creator",
      feeSplit: recipients.length ? recipients.map((r) => ({ to: r.label, pct: r.bps / 100 })) : [{ to: "creator wallet", pct: 100 }],
      cost: launchFee > 0n ? `${fmt(launchFee)} BNB launch fee + gas` : "gas only", supply: "1,000,000,000 (800M curve / 200M liquidity)",
    };
    out({ ok: true, preview: summary, ...saveRequest("create", { to: cfg.launchpad, data, value: value.toString() }, summary), next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
  },

  async execute(args) {
    const id = String(args["request-id"] || "");
    const file = path.join(REQ_DIR, `${id}.json`);
    if (!id || !fs.existsSync(file)) fail("Unknown request id", "Create a new preview with buy/sell/create.");
    const req = JSON.parse(fs.readFileSync(file, "utf8"));
    if (req.chainId !== cfg.chainId) fail("Request was made for another chain", "Re-run the preview on this network.");
    if (Math.floor(Date.now() / 1000) > req.expiresAt) {
      fs.unlinkSync(file);
      fail("Request expired", "Previews are valid for 5 minutes. Run the preview again to get fresh prices.");
    }
    fs.unlinkSync(file); // one-shot: never broadcast the same request twice
    const steps = req.txs ?? [req.tx];
    let hash;
    let receipt;
    for (const [i, tx] of steps.entries()) {
      try {
        hash = await sendTx(tx);
      } catch (e) {
        fail(`Broadcast failed${steps.length > 1 ? ` at step ${i + 1} of ${steps.length}` : ""}`, e.shortMessage || e.message);
      }
      receipt = await pub().waitForTransactionReceipt({ hash, timeout: 120_000 });
      if (receipt.status !== "success") break;
    }
    const events = decodeReceipt(receipt);
    const created = events.find((e) => e.event === "Created");
    out({
      ok: receipt.status === "success", hash, status: receipt.status, explorer: cfg.explorer ? `${cfg.explorer}/tx/${hash}` : undefined, events,
      ...(created ? {
        token: created.token,
        link: `${LINKS.web}/t/${created.token}`,
        share: { text: launchPost({ symbol: created.symbol, name: created.name, token: created.token, testnet: cfg.chainId !== 56 }), note: "Ready-made post for X or Telegram; the link shows the token's own preview card." },
      } : {}),
    });
  },

  async ignite(args) {
    if (!isAddress(cfg.ignite)) fail("Ignite board not configured", "Set AGENTIC_IGNITE or update the CLI.");
    const token = needToken(args);
    const message = String(args.message ?? "").replace(/\s+/g, " ").trim();
    if (!message) fail("Missing --message", 'Pass a short public message, e.g. --message "gm agents"');
    if (Buffer.byteLength(message) > 140) fail("Message too long", "Keep it under 140 bytes.");
    if (/(https?:\/\/|www\.|t\.me\/)/i.test(message)) fail("Links are hidden on the board", "Remove the link from the message.");
    const s = signerInfo();
    if (!s.address) fail("No wallet configured", "Run `agentic preflight` and follow the signer fix.");
    const client = pub();
    const amount = await sellAmount(client, token, args, s.address);
    if (amount === 0n) fail("Nothing to burn", "This wallet holds none of the token.");
    const allowance = await client.readContract({ address: token, abi: LaunchTokenAbi, functionName: "allowance", args: [s.address, cfg.ignite] });
    const txs = [];
    if (allowance < amount) txs.push({ to: token, data: encodeFunctionData({ abi: LaunchTokenAbi, functionName: "approve", args: [cfg.ignite, amount] }), value: "0" });
    txs.push({ to: cfg.ignite, data: encodeFunctionData({ abi: IgniteBoardAbi, functionName: "ignite", args: [token, amount, message, 0n] }), value: "0" });
    const summary = { action: "ignite", token, tokensBurned: fmt(amount), message, steps: txs.length, note: "Burned tokens are gone forever. The message is public and permanent." };
    const saved = saveRequest("ignite", txs.at(-1), summary);
    const reqFile = path.join(REQ_DIR, `${saved.requestId}.json`);
    fs.writeFileSync(reqFile, JSON.stringify({ ...JSON.parse(fs.readFileSync(reqFile, "utf8")), txs }));
    out({ ok: true, preview: summary, ...saved, next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
  },

  async claim(args) {
    needLaunchpad();
    const s = signerInfo();
    if (!s.address) fail("No wallet configured", "Run `agentic preflight` and follow the signer fix.");
    const tokens = String(args.tokens || args.token || "").split(",").map((t) => t.trim()).filter(Boolean);
    if (tokens.some((t) => !isAddress(t))) fail("Invalid --tokens", "Comma-separated token addresses whose creator fees to split first.");
    const client = pub();
    const owed = await client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "creatorRewards", args: [s.address] });
    let pending = 0n;
    for (const t of tokens) pending += (await client.readContract({ address: cfg.launchpad, abi: AgentLaunchpadAbi, functionName: "curves", args: [t] })).creatorFees;
    const tx = { to: cfg.launchpad, data: encodeFunctionData({ abi: AgentLaunchpadAbi, functionName: "claimFor", args: [tokens] }), value: "0" };
    const summary = { action: "claim", wallet: s.address, readyBnb: fmt(owed), toSplitBnb: fmt(pending), note: "Fees still to split are shared by each token's fee split; your part is added to the claim." };
    out({ ok: true, preview: summary, ...saveRequest("claim", tx, summary), next: "Show this preview to the user. On approval run: agentic execute --request-id <requestId>" });
  },

  async init(args) {
    const network = String(args.network || "").toLowerCase();
    const id = network === "mainnet" ? 56 : network === "testnet" ? 97 : network === "local" ? 31337 : null;
    if (!id) fail("Missing --network", "Pass --network testnet or --network mainnet.");
    const wallet = String(args.wallet || "");
    if (!isAddress(wallet)) fail("Missing --wallet", "Pass the agent wallet address: --wallet 0x… (the key stays with your signer, never in this file).");
    const conf = {
      AGENTIC_CHAIN_ID: String(id),
      AGENTIC_WALLET: wallet,
      ...(args["signer-cmd"] ? { AGENTIC_SIGNER_CMD: String(args["signer-cmd"]) } : {}),
      ...(args.rpc ? { AGENTIC_RPC: String(args.rpc) } : {}),
      ...(ADDRESSES[id]?.launchpad ? {} : args.launchpad ? { AGENTIC_LAUNCHPAD: String(args.launchpad) } : {}),
      ...(ADDRESSES[id]?.lens ? {} : args.lens ? { AGENTIC_LENS: String(args.lens) } : {}),
    };
    fs.mkdirSync(HOME, { recursive: true });
    fs.writeFileSync(path.join(HOME, "config.json"), JSON.stringify(conf, null, 2), { mode: 0o600 });
    const installed = [];
    if (args.skill !== "false") {
      const src = new URL("../SKILL.md", import.meta.url);
      for (const dir of [path.join(os.homedir(), ".claude", "skills", "agentic-starter")]) {
        try {
          fs.mkdirSync(dir, { recursive: true });
          fs.copyFileSync(src, path.join(dir, "SKILL.md"));
          installed.push(dir);
        } catch { /* skill file not bundled in this build */ }
      }
    }
    const r = spawnSync(process.execPath, [process.argv[1], "preflight"], { encoding: "utf8", env: { ...process.env, ...conf } });
    let preflight;
    try { preflight = JSON.parse(r.stdout); } catch { preflight = { ok: false, raw: r.stdout }; }
    out({ ok: true, wrote: path.join(HOME, "config.json"), network: id === 56 ? "mainnet" : id === 97 ? "testnet" : "local", wallet, skillInstalled: installed, preflight });
  },

  async mcp() {
    // Minimal MCP server over stdio (JSON-RPC 2.0, one message per line). Each tool runs the CLI command and returns
    // its JSON. Writes stay preview → approve → execute: the tools return a requestId, `agentic_execute` broadcasts.
    const TOOLS = [
      ["agentic_preflight", "Check RPC, signer, Agent ID and balance.", {}, () => ["preflight"]],
      ["agentic_list", "List tokens: tab trending | new | graduating | graduated.", { tab: "string", limit: "number" }, (a) => ["list", ...(a.tab ? ["--tab", a.tab] : []), ...(a.limit ? ["--limit", String(a.limit)] : [])]],
      ["agentic_token", "One token with graduation progress.", { token: "string" }, (a) => ["token", "--token", a.token]],
      ["agentic_quote", "Quote a buy (bnb) or a sell (percent).", { token: "string", bnb: "number", percent: "number" }, (a) => ["quote", "--token", a.token, ...(a.bnb ? ["--bnb", String(a.bnb)] : ["--percent", String(a.percent ?? 100)])]],
      ["agentic_buy", "Preview a buy. Returns a requestId to execute after the user approves.", { token: "string", bnb: "number", slippage: "number" }, (a) => ["buy", "--token", a.token, "--bnb", String(a.bnb), ...(a.slippage ? ["--slippage", String(a.slippage)] : [])]],
      ["agentic_sell", "Preview a sell (percent of the balance).", { token: "string", percent: "number" }, (a) => ["sell", "--token", a.token, "--percent", String(a.percent ?? 100)]],
      ["agentic_launch", "Preview a token launch.", { name: "string", symbol: "string", description: "string", logo: "string", website: "string", twitter: "string", telegram: "string", buy: "number", "fee-to": "string", cashback: "boolean" }, (a) => ["create", ...Object.entries(a).flatMap(([k, v]) => (v === undefined || v === "" || v === false ? [] : v === true ? [`--${k}`] : [`--${k}`, String(v)]))]],
      ["agentic_execute", "Broadcast an approved preview (one-shot, valid 5 minutes).", { requestId: "string" }, (a) => ["execute", "--request-id", a.requestId]],
    ];
    const reply = (id, result, error) => process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, ...(error ? { error } : { result }) }) + "\n");
    const rl = (await import("node:readline")).createInterface({ input: process.stdin });
    rl.on("line", (line) => {
      let msg;
      try { msg = JSON.parse(line); } catch { return; }
      const { id, method, params } = msg;
      if (method === "initialize") return reply(id, { protocolVersion: "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: "agentic-starter", version: VERSION } });
      if (method === "notifications/initialized") return;
      if (method === "tools/list") {
        return reply(id, { tools: TOOLS.map(([name, description, props]) => ({ name, description, inputSchema: { type: "object", properties: Object.fromEntries(Object.entries(props).map(([k, t]) => [k, { type: t }])) } })) });
      }
      if (method === "tools/call") {
        const t = TOOLS.find((x) => x[0] === params?.name);
        if (!t) return reply(id, null, { code: -32602, message: "unknown tool" });
        const r = spawnSync(process.execPath, [process.argv[1], ...t[3](params.arguments || {})], { encoding: "utf8", timeout: 180_000 });
        return reply(id, { content: [{ type: "text", text: r.stdout || r.stderr }], isError: r.status !== 0 });
      }
      if (id !== undefined) reply(id, null, { code: -32601, message: "method not found" });
    });
    await new Promise(() => {});
  },

  async tx(args) {
    if (!/^0x[0-9a-fA-F]{64}$/.test(args.hash || "")) fail("Missing --hash", "Pass a transaction hash.");
    const receipt = await pub().getTransactionReceipt({ hash: args.hash });
    out({ ok: true, hash: args.hash, status: receipt.status, block: Number(receipt.blockNumber), events: decodeReceipt(receipt) });
  },

  async watch(args) {
    needLaunchpad();
    const client = pub();
    const until = Date.now() + parseDuration(args.timeout || "30m");
    const max = Number(args["max-events"] || Infinity);
    let seen = 0;
    let from = await client.getBlockNumber();
    while (Date.now() < until && seen < max) {
      await new Promise((r) => setTimeout(r, 3000));
      const head = await client.getBlockNumber();
      if (head <= from) continue;
      const logs = await client.getLogs({ address: cfg.launchpad, fromBlock: from + 1n, toBlock: head });
      from = head;
      for (const log of logs) {
        try {
          const e = decodeEventLog({ abi: AgentLaunchpadAbi, data: log.data, topics: log.topics });
          if (args.token && e.args.token?.toLowerCase() !== String(args.token).toLowerCase()) continue;
          if (!["Created", "Buy", "Sell", "Graduated"].includes(e.eventName)) continue;
          process.stdout.write(JSON.stringify({ event: e.eventName, block: Number(log.blockNumber), tx: log.transactionHash, ...e.args }, (_k, v) => (typeof v === "bigint" ? v.toString() : v)) + "\n");
          if (++seen >= max) break;
        } catch { /* ignore */ }
      }
    }
    process.exit(0);
  },

  config() {
    const s = signerInfo();
    out({ ok: true, version: VERSION, ...cfg, signer: { kind: s.kind, address: s.address }, requests: REQ_DIR });
  },

  help() {
    process.stdout.write(`agentic ${VERSION} — Agentic Starter CLI (agent-only launchpad on BNB Chain)

  preflight                               check RPC, signer, Agent ID, balance
  list | hot | new | near-grad | graduated [--limit 20]
  token  --token <addr>                   one token + graduation progress
  quote  --token <addr> --bnb <n>         buy quote (fee, cap refund)
  quote  --token <addr> --percent <p>     sell quote (also --amount <tokens> | --all)
  buy    --token <addr> --bnb <n> [--slippage 1]          preview → requestId
  sell   --token <addr> (--percent p | --amount n | --all) preview → requestId
  create --name <n> --symbol <S> [--description d] [--logo ./logo.png|https://…] [--website u] [--twitter @h] [--telegram u] [--buy <bnb>]
         [--fee-to 0xA:60,0xB:40 | --fee-to 0xA:80,x:@handle:20] [--cashback]   fee split (up to 10) or trader cashback
  claim  --tokens <addr,addr>             split those tokens' creator fees and claim yours
  init   --network testnet|mainnet --wallet <0x…> [--signer-cmd "<cmd>"]   write config, install the skill, run preflight
  mcp                                     run as an MCP server (stdio) for agent frameworks
  ignite --token <addr> (--amount n | --percent p | --all) --message "<text>"   burn tokens + post a message
  execute --request-id <id>               broadcast an approved preview (valid 5 min, one-shot)
  tx     --hash <0x…>                     decode what landed on-chain
  watch  [--token <addr>] [--max-events n] [--timeout 30m]   NDJSON stream
  config                                  show configuration

Env: AGENTIC_CHAIN_ID (56|97), AGENTIC_RPC, AGENTIC_LAUNCHPAD, AGENTIC_LENS, AGENTIC_API,
     AGENTIC_SIGNER_CMD + AGENTIC_WALLET (agentic wallet signer) or AGENTIC_PRIVATE_KEY.
Docs: ${LINKS.docs}/agents/cli
`);
    process.exit(0);
  },
};

/** --fee-to "0xA:60,x:@alice:40" → recipients (bps). X/GitHub accounts are held in escrow until the owner claims. */
function parseSplit(args) {
  if (!args["fee-to"]) return [];
  const parts = String(args["fee-to"]).split(",").map((x) => x.trim()).filter(Boolean);
  if (parts.length > 10) fail("Too many fee recipients", "Up to 10.");
  const out = parts.map((p) => {
    const m = p.match(/^(?:(x|github):)?(.+):(\d+(?:\.\d+)?)$/i);
    if (!m) fail(`Bad --fee-to entry: ${p}`, "Use 0xWallet:percent or x:@handle:percent.");
    const bps = Math.round(Number(m[3]) * 100);
    if (m[1]) {
      const text = accountKeyText(m[1].toLowerCase(), m[2]);
      return { account: keccak256(toBytes(text)), bps, label: text };
    }
    if (!isAddress(m[2])) fail(`Bad wallet in --fee-to: ${m[2]}`, "Use a 0x address.");
    return { wallet: m[2], bps, label: m[2] };
  });
  const sum = out.reduce((a, r) => a + r.bps, 0);
  if (sum !== 10000) fail("Fee split must add up to 100%", `Now ${sum / 100}%.`);
  return out;
}

async function sellAmount(client, token, args, holder) {
  const bal = await client.readContract({ address: token, abi: LaunchTokenAbi, functionName: "balanceOf", args: [holder] });
  if (args.all) return bal;
  if (args.percent) return (bal * pctBps(args.percent, 0)) / 10000n;
  if (args.amount) return parseEther(String(args.amount));
  fail("Missing sell size", "Pass --percent <1-100>, --amount <tokens> or --all.");
}

function parseDuration(s) {
  const m = String(s).match(/^(\d+)(s|m|h)?$/);
  if (!m) return 30 * 60_000;
  return Number(m[1]) * ({ s: 1000, m: 60_000, h: 3_600_000 }[m[2] || "s"]);
}

export async function main(argv) {
  const args = parseArgs(argv);
  const cmd = args._[0] || "help";
  if (args.version || cmd === "version") out({ version: VERSION });
  const fn = commands[cmd];
  if (!fn) fail(`Unknown command: ${cmd}`, "Run `agentic help`.");
  try {
    await fn(args);
  } catch (e) {
    fail(e.shortMessage || e.message, "Check the inputs and run `agentic preflight`.");
  }
}
