export * from "./abis.js";
export declare const TOKEN_SUFFIX: string;
export declare function checksumHex(addrHex: string): string;
export declare function create2Address(deployer: string, salt: string, initCodeHash: string): string;
export declare function hasSuffix(address: string, suffix?: string): boolean;
export declare function findSalt(o: { launchpad: string; creator: string; initCodeHash: string; suffix?: string; matchCase?: boolean; maxTries?: number }): { salt: `0x${string}`; address: string; tries: number };

/** Platform numbers per network, generated from contracts/config/networks.js. */
export interface NetParams {
  graduationTargetBnb: number; graduationFeeBps: number; graduationFeeBnb: number; creatorBonusBps: number; creatorBonusBnb: number;
  targetBoundsBnb: [number, number]; walletCapBps: number; walletCapBoundsBps: [number, number]; minWalletsToGraduate: number;
  curveFeeBps: number; curveFeeSplitBps: { creator: number; buybackBurn: number; stakers: number; treasury: number };
  launchFeeBnb: number; metaUpdateFeeBnb: number; creatorAllocBps: number; creatorAllocUnlockDays: number; rateLimitPerWeekPct: number | null; tokenSuffix: string;
}
export declare const PARAMS: { testnet: NetParams; mainnet: NetParams; presale: Record<string, unknown>; tokenomicsMillions: Record<string, number> };

export declare const LINKS: {
  web: string; docs: string; presale: string; airdrop: string;
  x: string; telegram: string; telegramGroup: string; github: string;
  youtube: string; tiktok: string; guide: string;
};
export declare const CHAINS: Record<number, { id: number; name: string; rpc: string; explorer: string; dex: string }>;
export declare const ADDRESSES: Record<number, { launchpad: string; agnt: string; presale: string; airdrop: string; staking: string; feeSplitter: string; ignite: string }>;
export declare const RULES: {
  totalSupply: number; curveSupply: number; lpSupply: number; maxPerWallet: number; feeBps: number; graduationBnb: number;
  graduationFeeBnb: number; launchFeeBnb: number; tokenSuffix: string;
  feeSplit: { creator: number; buyback: number; stakers: number; treasury: number };
};
export interface Curve { vB: bigint; vT: bigint; k: bigint; curveSupply: bigint; maxPerWallet: bigint; target: bigint; graduationFee: bigint; walletCapBps: number }
export interface CurveState { tokensSold: bigint; realBnb: bigint }
export declare function makeCurve(targetWei?: bigint, graduationFeeWei?: bigint, walletCapBps?: number): Curve;
export declare function curveFromChain(c: { virtualBnb: bigint; virtualToken: bigint; walletCapBps: number | bigint; target: bigint; graduationFee: bigint }): Curve;
export declare function quoteBuy(curve: Curve, state: CurveState, bnbGross: bigint, walletBalance?: bigint):
  { tokensOut: bigint; spent: bigint; fee: bigint; refund: bigint; capped: boolean };
export declare function quoteSell(curve: Curve, state: CurveState, tokensIn: bigint): { bnbOut: bigint; fee: bigint };
export declare function spotPrice(curve: Curve, state: CurveState): number;
export interface TokenMeta { description?: string; image?: string; website?: string; twitter?: string; telegram?: string; uri?: string }
export declare function parseMetaURI(uri: string | undefined | null): TokenMeta;
export declare function ipfsToHttp(u: string | undefined): string | undefined;
export declare function shortAddr(a?: string): string;
export declare function timeAgo(ts?: number, now?: number): string;
export declare function fmtPrice(v: number | string): string;
export declare function fmtCompact(v: number | string, prefix?: string): string;
export declare function fmtUsd(v: number | string): string;
export declare function fmtBnb(v: number | string, d?: number): string;
export declare function fmtTokens(v: number | string): string;
export declare function fmtPct(v: number | string, d?: number): string;
export declare function normalizeXHandle(v: string | null | undefined): string | null;
export declare function normalizeTelegram(v: string | null | undefined): string | null;
/** "x:alice" / "github:bob": the text hashed (keccak256) into an AccountFeeEscrow account key. */
export declare function accountKeyText(kind: "x" | "github" | string, handle: string): string;
