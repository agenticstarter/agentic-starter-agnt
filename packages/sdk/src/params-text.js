// Fills {{P.path}} placeholders in docs and bot texts from params.json, so numbers live in one place.
//   {{P.mainnet.graduationTargetBnb}}          → 16
//   {{P.presale.saleTokens|n}}                 → 250,000,000
//   {{P.mainnet.walletCapBps|pct}}             → 1%   (basis points to percent)
//   {{P.presale.perWalletBnb.1}}               → 5
import PARAMS from "./params.json" with { type: "json" };

const FORMATS = {
  n: (v) => Number(v).toLocaleString("en-US"),
  pct: (v) => `${Number(v) / 100}%`,
  m: (v) => `${Number(v) / 1e6}M`,
};

export function fillParams(text, params = PARAMS) {
  return String(text).replace(/\{\{\s*P\.([\w.]+)(?:\|(\w+))?\s*\}\}/g, (all, path, fmt) => {
    const v = path.split(".").reduce((o, k) => (o == null ? o : o[k]), params);
    if (v == null || typeof v === "object") throw new Error(`Unknown or non-scalar param: ${path}`);
    return fmt ? (FORMATS[fmt] ?? ((x) => x))(v) : String(v);
  });
}
