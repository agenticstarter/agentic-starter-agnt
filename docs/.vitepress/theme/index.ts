import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import AppTabs from "./AppTabs.vue";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./brand.css";

// switching light / dark here is remembered for the other Agentic Starter sites as well (same cookie they use), and
// the phone's status bar follows it
function shareTheme() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const domain = /(^|\.)agenticstarter\.xyz$/.test(location.hostname) ? "; domain=.agenticstarter.xyz" : "";
  const bar = () => document.querySelector('meta[name="theme-color"]')?.setAttribute("content", root.classList.contains("dark") ? "#0B0B0C" : "#FAF8F2");
  bar();
  let last = root.classList.contains("dark");
  new MutationObserver(() => {
    const dark = root.classList.contains("dark");
    if (dark === last) return;
    last = dark;
    bar();
    const app = matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
    document.cookie = `${app ? "as-app-theme" : "as-theme"}=${dark ? "dark" : "light"}; path=/; max-age=31536000; samesite=lax${domain}`;
  }).observe(root, { attributes: true, attributeFilter: ["class"] });
}

// The copy at agenticstarter.xyz/docs (base /docs/) runs inside the installed app.
const IN_APP = import.meta.env.BASE_URL !== "/";
const SECTION_HOST = /^(presale|airdrop|docs)\.agenticstarter\.xyz$/;

// Links to the launchpad, the presale and the airdrop (and these docs written out in full) open in the app itself, not
// in a browser sheet. Links without a target are the docs' own pages and VitePress handles them.
function stayInApp() {
  window.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as Element | null)?.closest?.("a[href]");
    if (!(a instanceof HTMLAnchorElement) || !a.target || a.hasAttribute("download")) return;
    let u: URL;
    try { u = new URL(a.href); } catch { return; }
    const m = u.hostname.match(SECTION_HOST);
    if (!m && u.hostname !== "agenticstarter.xyz" && u.origin !== location.origin) return;
    if (!m && u.pathname.startsWith("/download/")) return; // files (the Android app) download as usual
    e.preventDefault();
    location.assign(`${m ? `/${m[1]}` : ""}${u.pathname}${u.search}${u.hash}`);
  });
}

// The docs have no lock screen of their own. Opened from the unlocked app in the same visit (packages/ui/src/
// applock.tsx, "as-lock-session"), they keep the visit going, so going back to the app does not ask again, unless
// the phone was away longer than the lock time. Opened any other way, going to the app asks as usual.
type Visit = { at: number; away: number | null };
function passUnlock() {
  const KEY = "as-lock-session";
  const read = (): Visit | null => { try { return JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch { return null; } };
  const write = (v: Visit | null) => { try { if (v) sessionStorage.setItem(KEY, JSON.stringify(v)); else sessionStorage.removeItem(KEY); } catch { /* blocked */ } };
  let after = 0;
  try {
    const c = JSON.parse(localStorage.getItem("as-lock") || "null") as { after?: number } | null;
    if (!c) return;
    after = (Number(c.after) || 0) * 1000;
  } catch { return; }
  const v = read();
  const now = Date.now();
  let trusted = !!v && typeof v.at === "number" && (v.away ? now >= v.away && now - v.away < after : now >= v.at && now - v.at < 15_000);
  if (!trusted) { write(null); return; }
  let hiddenAt = 0;
  let leaving = false;
  const onScreen = () => { if (trusted && document.visibilityState === "visible") write({ at: Date.now(), away: null }); };
  onScreen();
  window.setInterval(onScreen, 5000);
  document.addEventListener("visibilitychange", () => {
    if (leaving) return; // a page that is going also turns hidden: that is not the background
    if (document.visibilityState === "hidden") { hiddenAt = Date.now(); if (trusted) write({ at: hiddenAt, away: hiddenAt }); return; }
    if (hiddenAt && Date.now() - hiddenAt >= after) { trusted = false; write(null); return; }
    onScreen();
  });
  window.addEventListener("pagehide", () => {
    const going = document.visibilityState === "visible" || (hiddenAt > 0 && Date.now() - hiddenAt < 1000);
    if (trusted && going) write({ at: Date.now(), away: null });
    leaving = going;
  });
  window.addEventListener("pageshow", () => { leaving = false; });
}

// First visit on an English page, browser in a language the docs have: a small card in that language offers the
// translated page. Asked once for all Agentic Starter sites (the "as-lang-asked" cookie), same card as on the sites.
const LANG_CODES = ["zh", "ko", "ja", "es", "pt", "ru", "tr", "id", "vi", "hi", "uk", "th", "fil", "ar", "ur"];
const LANG_NAMES: Record<string, string> = { zh: "简体中文", ko: "한국어", ja: "日本語", es: "Español", pt: "Português (BR)", ru: "Русский", tr: "Türkçe", id: "Bahasa Indonesia", vi: "Tiếng Việt", hi: "हिन्दी", uk: "Українська", th: "ไทย", fil: "Filipino", ar: "العربية", ur: "اردو" };
const packs = import.meta.glob<Record<string, string>>("../../../../packages/ui/src/locales/*.json", { import: "default" });
function offerLanguage() {
  const read = (k: string) => { const m = document.cookie.match(new RegExp(`(?:^|; )${k}=([^;]*)`)); return m ? decodeURIComponent(m[1]) : localStorage.getItem(k); };
  if (read("as-lang-asked")) return;
  const base = import.meta.env.BASE_URL;
  const path = location.pathname.startsWith(base) ? location.pathname.slice(base.length) : location.pathname.slice(1);
  if (LANG_CODES.some((c) => path === c || path.startsWith(`${c}/`))) return; // already a translated page
  if (path && !/^(guide\/|token\/|risks)/.test(path)) return; // pages that exist only in English
  let code: string | null = null;
  for (const raw of navigator.languages?.length ? navigator.languages : [navigator.language]) {
    const c = String(raw).toLowerCase();
    if (c.startsWith("en")) return;
    const k = c === "tl" || c.startsWith("fil") ? "fil" : c.split("-")[0];
    if (LANG_CODES.includes(k)) { code = k; break; }
  }
  if (!code) return;
  const domain = /(^|\.)agenticstarter\.xyz$/.test(location.hostname) ? "; domain=.agenticstarter.xyz" : "";
  const asked = () => { document.cookie = `as-lang-asked=1; path=/; max-age=31536000; samesite=lax${domain}`; try { localStorage.setItem("as-lang-asked", "1"); } catch { /* blocked */ } };
  const lang = code;
  setTimeout(() => {
    packs[`../../../../packages/ui/src/locales/${lang}.json`]?.().then((d) => {
      const tr = (k: string) => (d[k] || k).replace(/\{lang\}/g, LANG_NAMES[lang]);
      const card = document.createElement("div");
      card.className = "lang-offer";
      card.setAttribute("role", "dialog");
      card.lang = lang;
      card.dir = lang === "ar" || lang === "ur" ? "rtl" : "ltr";
      card.innerHTML = `<span class="lang-offer-agen" aria-hidden="true"><svg width="44" height="44" viewBox="0 0 200 200"><g transform="translate(75 -4) scale(0.5)"><path d="M50 16V50M20.56 67L50 50L79.44 67M37.88 43L20.56 33M62.12 43L79.44 33M50 64V84" fill="none" stroke="#FFC93C" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="25" y="52" width="150" height="140" rx="46" fill="#FFC93C"/><ellipse cx="56" cy="134" rx="10" ry="7" fill="#E8B4F8"/><ellipse cx="144" cy="134" rx="10" ry="7" fill="#E8B4F8"/><rect x="71.5" y="95" width="13" height="26" rx="6.5" fill="#0B0B0C"/><path d="M112 114Q122 100 132 114" fill="none" stroke="#0B0B0C" stroke-width="7" stroke-linecap="round"/><path d="M82 144Q100 162 118 144" fill="none" stroke="#0B0B0C" stroke-width="7" stroke-linecap="round"/></svg></span><div class="lang-offer-body"><p></p><div class="lang-offer-row"><button type="button" class="lo-yes"></button><button type="button" class="lo-no"></button></div></div>`;
      card.querySelector("p")!.textContent = tr("This site is available in {lang}. Switch to {lang}?");
      const yes = card.querySelector<HTMLButtonElement>(".lo-yes")!;
      const no = card.querySelector<HTMLButtonElement>(".lo-no")!;
      yes.textContent = tr("Yes, switch");
      no.textContent = tr("Keep English");
      yes.onclick = () => { asked(); location.assign(`${base}${lang}/${path}`); };
      no.onclick = () => { asked(); card.remove(); };
      document.body.appendChild(card);
    }).catch(() => {});
  }, 1200);
}

export default {
  ...DefaultTheme,
  // in the app, the docs carry the app's tab bar
  Layout: IN_APP ? () => h(DefaultTheme.Layout, null, { "layout-bottom": () => h(AppTabs) }) : DefaultTheme.Layout,
  enhanceApp(ctx: Parameters<NonNullable<typeof DefaultTheme.enhanceApp>>[0]) {
    DefaultTheme.enhanceApp?.(ctx);
    if (typeof window === "undefined") return;
    shareTheme();
    try { offerLanguage(); } catch { /* storage blocked */ }
    if (IN_APP) { stayInApp(); passUnlock(); }
  },
};
