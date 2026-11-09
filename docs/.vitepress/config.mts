import { readFileSync } from "node:fs";
import { defineConfig } from "vitepress";
import { locales, searchLocales } from "./locales.mts";
// numbers in the docs come from one file (packages/sdk/src/params.json, generated from contracts/config/networks.js)
import { fillParams } from "@agentic/sdk/params-text";

// docs.agenticstarter.xyz serves these pages at the root. The launchpad deployment also serves them at
// agenticstarter.xyz/docs (DOCS_BASE=/docs/, scripts/build-site.mjs) so the installed app opens them in place; in that
// copy the links to the launchpad, the presale and the airdrop stay in the app as well.
const BASE = process.env.DOCS_BASE || "/";
const at = (path: string) => `${BASE.replace(/\/$/, "")}${path}`;
const inApp = BASE !== "/";
type NavItem = { text: string; link?: string; target?: string; items?: NavItem[] };
const appLink = (link: string) => link.replace(/^https:\/\/(presale|airdrop)\.agenticstarter\.xyz\/?/, "https://agenticstarter.xyz/$1/");
function stayInApp(items: NavItem[]): NavItem[] {
  if (!inApp) return items;
  return items.map((it) =>
    it.items ? { ...it, items: stayInApp(it.items) }
    : it.link && /^https:\/\/([a-z]+\.)?agenticstarter\.xyz/.test(it.link) ? { ...it, link: appLink(it.link), target: "_self" }
    : it);
}
// the app's tab bar at the bottom of that copy (theme/AppTabs.vue) uses the app's own words in each language
const TAB_WORDS = { home: "Home", airdrop: "Airdrop", launch: "Launch", presale: "Presale", docs: "Docs", menu: "App menu" };
function appTabs(code: string) {
  let dict: Record<string, string> = {};
  try { dict = JSON.parse(readFileSync(new URL(`../../../packages/ui/src/locales/${code}.json`, import.meta.url), "utf8")); } catch { /* English */ }
  return Object.fromEntries(Object.entries(TAB_WORDS).map(([k, en]) => [k, dict[en] || en]));
}
const localesHere = Object.fromEntries(Object.entries(locales as Record<string, { themeConfig?: { nav?: NavItem[] } }>).map(([code, l]) =>
  [code, inApp ? { ...l, themeConfig: { ...l.themeConfig, nav: stayInApp(l.themeConfig?.nav ?? []), appTabs: appTabs(code) } } : l]));

export default defineConfig({
  title: "Agentic Starter Docs",
  base: BASE,
  description: "Docs for Agentic Starter — the agent-native launchpad on BNB Chain.",
  lang: "en-US",
  cleanUrls: true,
  // translation packs (i18n/<lang>.md) are sources for scripts/docs-i18n.mjs, not pages
  srcExclude: ["i18n/**", "README.md"],
  locales: { root: { label: "English", lang: "en-US" }, ...(localesHere as any) },
  lastUpdated: true,
  vite: { plugins: [{ name: "agentic-params", enforce: "pre", transform: (code: string, id: string) => (id.endsWith(".md") ? fillParams(code) : undefined) }] },
  // light by default; visitors can switch to dark (VitePress keeps the choice)
  appearance: { initialValue: "light" } as any,
  head: [
    // the theme picked on any Agentic Starter site (cookie on .agenticstarter.xyz) wins here too; inside the installed
    // app the app's own choice, dark unless picked there
    ["script", {}, `(function(){try{var a=matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;var m=document.cookie.match(a?/(?:^|; )as-app-theme=(dark|light)/:/(?:^|; )as-theme=(dark|light)/);var v=m?m[1]:a?"dark":"";if(v){localStorage.setItem("vitepress-theme-appearance",v);document.documentElement.classList.toggle("dark",v==="dark");}}catch(e){}})();`],
    ["link", { rel: "icon", href: at("/favicon.svg"), type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#FAF8F2" }],
    ["link", { rel: "icon", href: at("/favicon-32.png"), type: "image/png", sizes: "32x32" }],
    ["link", { rel: "apple-touch-icon", href: at("/apple-touch-icon.png") }],
    ["meta", { property: "og:title", content: "Agentic Starter Docs" }],
    ["meta", { property: "og:description", content: "Guides, the agent CLI and skill, contracts and the $AGNT token." }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image", content: "https://docs.agenticstarter.xyz/og.png" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@agentic_starter" }],
    ["meta", { name: "twitter:image", content: "https://docs.agenticstarter.xyz/og.png" }],
  ],
  themeConfig: {
    logo: { src: "/mark-gold.svg", alt: "Agentic Starter" },
    // the logo goes back to the launchpad home, not the docs index
    logoLink: { link: "https://agenticstarter.xyz", target: "_self" },
    siteTitle: "Agentic Starter",
    ...(inApp ? { appTabs: appTabs("en") } : {}),
    nav: stayInApp([
      { text: "Guide", link: "/guide/start" },
      { text: "For agents", link: "/agents/cli" },
      { text: "$AGNT", link: "/token/agnt" },
      { text: "Contracts", link: "/contracts" },
      {
        text: "Apps",
        items: [
          { text: "Launchpad", link: "https://agenticstarter.xyz" },
          { text: "Presale", link: "https://presale.agenticstarter.xyz" },
          { text: "Airdrop", link: "https://airdrop.agenticstarter.xyz" },
        ],
      },
    ]),
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Start here", link: "/guide/start" },
          { text: "Install the app", link: "/guide/install-app" },
          { text: "What is Agentic Starter", link: "/guide/what-is" },
          { text: "How it works", link: "/guide/how-it-works" },
          { text: "Set up an agent wallet", link: "/guide/agent-wallet" },
          { text: "Launch a token", link: "/guide/launch" },
          { text: "Buy and sell", link: "/guide/trading" },
          { text: "Ignite (burn + message)", link: "/guide/ignite" },
          { text: "Fees", link: "/guide/fees" },
          { text: "Standard tokens", link: "/guide/standard-tokens" },
          { text: "Telegram community", link: "/guide/telegram" },
          { text: "Community programmes", link: "/guide/community" },
          { text: "Stay safe", link: "/guide/safety" },
          { text: "FAQ", link: "/guide/faq" },
          { text: "Glossary", link: "/guide/glossary" },
        ],
      },
      {
        text: "For agents",
        items: [
          { text: "CLI reference", link: "/agents/cli" },
          { text: "Agent skill", link: "/agents/skill" },
          { text: "Signers", link: "/agents/signers" },
          { text: "Indexer API", link: "/agents/api" },
        ],
      },
      {
        text: "$AGNT",
        items: [
          { text: "Tokenomics", link: "/token/agnt" },
          { text: "Presale", link: "/token/presale" },
          { text: "Listing and use of funds", link: "/token/listing" },
          { text: "Airdrop", link: "/token/airdrop" },
          { text: "Staking", link: "/token/staking" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "Smart contracts", link: "/contracts" },
          { text: "Brand kit", link: "/brand" },
          { text: "Risks", link: "/risks" },
        ],
      },
    ],
    socialLinks: [
      { icon: "x", link: "https://x.com/agentic_starter" },
      { icon: "github", link: "https://github.com/agenticstarter" },
      { icon: { svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4L3 11l6 2.5M21 4l-3 16-9-6.5M21 4L9 13.5V19l3-3"/></svg>' }, link: "https://t.me/agenticstarter", ariaLabel: "Telegram" },
    ],
    search: { provider: "local", options: { locales: searchLocales as any } },
    editLink: { pattern: "https://github.com/agenticstarter/agentic-starter-agnt/edit/main/docs/:path", text: "Edit this page on GitHub" },
    footer: { message: "Crypto assets are volatile. Nothing here is financial advice.", copyright: "© Agentic Starter" },
  },
});
