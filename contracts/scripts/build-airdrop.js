/**
 * Turns a Spark Points snapshot into a claimable season.
 *   node scripts/build-airdrop.js points.csv <season> <totalAgnt> > seasons/<season>.js   (published with the airdrop site)on
 * points.csv: either "address,points", or the admin export (GET /airdrop/admin/export.csv), which has
 * "Wallet", "Eligible" and "Total points" columns: only eligible wallets are kept.
 * Each wallet gets totalAgnt * points / sum(points). Then call SparkAirdrop.openSeason(root, total, deadline).
 */
const fs = require("fs");
const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");

const [file, season = "1", totalAgnt = "10000000", days = "30"] = process.argv.slice(2);
const csv = (l) => (l.match(/("([^"]|"")*"|[^,]*)(,|$)/g) || []).map((c) => c.replace(/,$/, "").replace(/^"|"$/g, "").replace(/""/g, '"').trim());
const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean);
const head = csv(lines[0]).map((h) => h.toLowerCase());
const iA = head.indexOf("wallet") >= 0 ? head.indexOf("wallet") : 0;
const iP = head.indexOf("total points") >= 0 ? head.indexOf("total points") : 1;
const iE = head.indexOf("eligible");
const rows = lines.slice(1).map(csv)
  .filter((r) => iE < 0 || r[iE] === "yes")
  .map((r) => [r[iA], r[iP]])
  .filter(([a, p]) => /^0x[0-9a-fA-F]{40}$/.test(a || "") && Number(p) > 0)
  .map(([a, p]) => [a.toLowerCase(), BigInt(Math.floor(Number(p)))]);
const sum = rows.reduce((s, [, p]) => s + p, 0n);
const total = BigInt(totalAgnt) * 10n ** 18n;
const claims = rows.map(([a, p]) => [a, ((total * p) / sum).toString()]);
const tree = StandardMerkleTree.of(claims, ["address", "uint256"]);
const out = { season: Number(season), root: tree.root, total: claims.reduce((s, [, v]) => s + BigInt(v), 0n).toString(), deadline: Math.floor(Date.now() / 1000) + Number(days) * 86400, claims: {} };
for (const [i, v] of tree.entries()) out.claims[v[0]] = { amount: v[1], proof: tree.getProof(i) };
process.stdout.write(JSON.stringify(out, null, 1));
console.error(`Season ${season}: ${claims.length} wallets, ${Number(out.total) / 1e18} AGNT, root ${tree.root}, deadline ${out.deadline}`);
