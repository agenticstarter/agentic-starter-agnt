// Builds the translated docs from one pack per language.
//
//   node scripts/docs-i18n.mjs            (reads i18n/<lang>.md in the docs folder, writes <lang>/… and .vitepress/locales.mts)
//
// A pack is plain Markdown with markers:
//   === CONFIG ===          key = value lines (menu labels, page chrome)
//   === FILE guide/launch.md ===   the translated page
// Links in a pack are written like the English pages (/guide/launch). Links to translated pages get the
// language prefix (/es/guide/launch); links to English-only pages (CLI, API, contracts) stay as they are.
import fs from "node:fs";
import path from "node:path";

// the docs live in docs/ in the public repository and apps/docs/ in the full workspace
const DOCS = [path.resolve(import.meta.dirname, "../docs"), path.resolve(import.meta.dirname, "../apps/docs")].find((d) => fs.existsSync(path.join(d, "i18n")));
const PACKS = path.join(DOCS, "i18n");
// same order as the sites' language menu (packages/ui/src/i18n.tsx)
const LANGS = {
  zh: { label: "简体中文", lang: "zh-Hans" }, ko: { label: "한국어", lang: "ko" }, ja: { label: "日本語", lang: "ja" },
  es: { label: "Español", lang: "es" }, pt: { label: "Português (BR)", lang: "pt-BR" }, ru: { label: "Русский", lang: "ru" },
  tr: { label: "Türkçe", lang: "tr" }, id: { label: "Bahasa Indonesia", lang: "id" }, vi: { label: "Tiếng Việt", lang: "vi" },
  hi: { label: "हिन्दी", lang: "hi" }, uk: { label: "Українська", lang: "uk" }, th: { label: "ไทย", lang: "th" },
  fil: { label: "Filipino", lang: "fil" }, ar: { label: "العربية", lang: "ar", dir: "rtl" }, ur: { label: "اردو", lang: "ur", dir: "rtl" },
};
export const TRANSLATED = ["index.md", "guide/start.md", "guide/install-app.md", "guide/glossary.md", "guide/what-is.md", "guide/how-it-works.md", "guide/agent-wallet.md", "guide/launch.md", "guide/trading.md",
  "guide/ignite.md", "guide/fees.md", "guide/standard-tokens.md", "guide/telegram.md", "guide/community.md", "guide/safety.md", "guide/faq.md",
  "token/agnt.md", "token/presale.md", "token/listing.md", "token/airdrop.md", "token/staking.md", "risks.md"];
const slug = (f) => "/" + f.replace(/\.md$/, "").replace(/(^|\/)index$/, "$1");
const translatedLinks = new Set(TRANSLATED.map(slug));

function relink(md, code) {
  // ](/guide/x) and ](/guide/x#anchor) and frontmatter "link: /guide/x"
  const fix = (p) => {
    const [base, hash] = p.split("#");
    return translatedLinks.has(base) ? `/${code}${base === "/" ? "/" : base}${hash ? "#" + hash : ""}` : p;
  };
  return md
    .replace(/\]\((\/[^)\s]*)\)/g, (_m, p) => `](${fix(p)})`)
    .replace(/^(\s*link:\s*)(\/\S*)$/gm, (_m, a, p) => a + fix(p))
    // our apps open in the reader's language too
    .replace(/\]\((https:\/\/(?:presale\.|airdrop\.)?agenticstarter\.xyz(?:\/[^)\s?#]*)?)\)/g, (_m, u) => `](${u}?lang=${code})`);
}

const locales = {};
const problems = [];
for (const [code, meta] of Object.entries(LANGS)) {
  const file = path.join(PACKS, `${code}.md`);
  if (!fs.existsSync(file)) continue;
  const raw = fs.readFileSync(file, "utf8");
  const parts = raw.split(/^=== (CONFIG|FILE (\S+)) ===\s*$/m);
  const c = {};
  const pages = {};
  for (let i = 1; i < parts.length; i += 3) {
    const body = parts[i + 2].replace(/^\n+/, "").replace(/\s+$/, "") + "\n";
    if (parts[i] === "CONFIG") {
      for (const line of body.split("\n")) {
        const m = line.match(/^(\w+)\s*=\s*(.*)$/);
        if (m) c[m[1]] = m[2].trim();
      }
    } else pages[parts[i + 1]] = body;
  }
  for (const f of TRANSLATED) {
    if (!pages[f]) { problems.push(`${code}: missing ${f}`); continue; }
    const out = path.join(DOCS, code, f);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, relink(pages[f], code));
  }
  const need = ["start", "installApp", "glossary", "guide", "forAgents", "contracts", "apps", "launchpad", "presale", "airdrop", "whatIs", "how", "wallet", "launch", "trading", "ignite",
    "fees", "standardTokens", "telegram", "community", "safety", "listing", "faq", "cli", "skill", "signers", "api", "tokenomics", "presalePage", "airdropPage", "staking", "reference", "contractsPage", "brand",
    "risks", "inEnglish", "outline", "prev", "next", "updated", "top", "menu", "appearance", "toLight", "toDark", "langMenu", "footer", "edit",
    "search", "noResults", "nfTitle", "nfQuote", "nfLink", "description"];
  for (const k of need) if (!c[k]) problems.push(`${code}: config ${k} missing`);
  const en = (t) => `${t} (${c.inEnglish})`;
  const p = (s) => `/${code}${s}`;
  locales[code] = {
    label: meta.label,
    lang: meta.lang,
    ...(meta.dir ? { dir: meta.dir } : {}),
    link: `/${code}/`,
    description: c.description,
    themeConfig: {
      nav: [
        { text: c.guide, link: p("/guide/start") },
        { text: c.forAgents, link: "/agents/cli" },
        { text: "$AGNT", link: p("/token/agnt") },
        { text: c.contracts, link: "/contracts" },
        { text: c.apps, items: [
          { text: c.launchpad, link: `https://agenticstarter.xyz?lang=${code}`, target: "_blank" },
          { text: c.presale, link: `https://presale.agenticstarter.xyz?lang=${code}`, target: "_blank" },
          { text: c.airdrop, link: `https://airdrop.agenticstarter.xyz?lang=${code}`, target: "_blank" },
        ] },
      ],
      sidebar: {
        [`/${code}/`]: [
          { text: c.guide, items: [
            { text: c.start, link: p("/guide/start") }, { text: c.installApp, link: p("/guide/install-app") }, { text: c.whatIs, link: p("/guide/what-is") }, { text: c.how, link: p("/guide/how-it-works") },
            { text: c.wallet, link: p("/guide/agent-wallet") }, { text: c.launch, link: p("/guide/launch") },
            { text: c.trading, link: p("/guide/trading") }, { text: c.ignite, link: p("/guide/ignite") },
            { text: c.fees, link: p("/guide/fees") }, { text: c.standardTokens, link: p("/guide/standard-tokens") },
            { text: c.telegram, link: p("/guide/telegram") }, { text: c.community, link: p("/guide/community") },
            { text: c.safety, link: p("/guide/safety") }, { text: c.faq, link: p("/guide/faq") },
            { text: c.glossary, link: p("/guide/glossary") },
          ] },
          { text: c.forAgents, items: [
            { text: en(c.cli), link: "/agents/cli" }, { text: en(c.skill), link: "/agents/skill" },
            { text: en(c.signers), link: "/agents/signers" }, { text: en(c.api), link: "/agents/api" },
          ] },
          { text: "$AGNT", items: [
            { text: c.tokenomics, link: p("/token/agnt") }, { text: c.presalePage, link: p("/token/presale") },
            { text: c.listing, link: p("/token/listing") },
            { text: c.airdropPage, link: p("/token/airdrop") }, { text: c.staking, link: p("/token/staking") },
          ] },
          { text: c.reference, items: [
            { text: en(c.contractsPage), link: "/contracts" }, { text: en(c.brand), link: "/brand" }, { text: c.risks, link: p("/risks") },
          ] },
        ],
      },
      outline: { label: c.outline },
      docFooter: { prev: c.prev, next: c.next },
      lastUpdated: { text: c.updated },
      returnToTopLabel: c.top,
      sidebarMenuLabel: c.menu,
      darkModeSwitchLabel: c.appearance,
      lightModeSwitchTitle: c.toLight,
      darkModeSwitchTitle: c.toDark,
      langMenuLabel: c.langMenu,
      footer: { message: c.footer, copyright: "© Agentic Starter" },
      editLink: { pattern: "https://github.com/agenticstarter/agentic-starter-agnt/edit/main/docs/:path", text: c.edit },
      notFound: { title: c.nfTitle, quote: c.nfQuote, linkLabel: c.nfLink, linkText: c.nfLink },
    },
    search: { button: c.search, noResults: c.noResults },
  };
}

const searchLocales = Object.fromEntries(Object.entries(locales).map(([code, l]) => [code, { translations: { button: { buttonText: l.search.button, buttonAriaLabel: l.search.button }, modal: { noResultsText: l.search.noResults } } }]));
for (const l of Object.values(locales)) delete l.search;
fs.writeFileSync(path.join(DOCS, ".vitepress", "locales.mts"),
  "// generated by scripts/docs-i18n.mjs from the docs i18n/*.md packs — edit the packs, not this file\n" +
  `export const locales = ${JSON.stringify(locales, null, 1)};\n` +
  `export const searchLocales = ${JSON.stringify(searchLocales, null, 1)};\n`);
console.log(`docs: ${Object.keys(locales).length} languages × ${TRANSLATED.length} pages`);
if (problems.length) {
  console.log(problems.join("\n"));
  process.exitCode = 1;
}
