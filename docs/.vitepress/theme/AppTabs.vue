<script setup lang="ts">
// The app's tab bar at the bottom of the docs, in the copy at agenticstarter.xyz/docs when it shows the app view (the
// installed app, or a phone browser where the visitor picked the app view): one tap back to the launchpad, the
// airdrop and the presale.
// Same look as the tab bar of the other parts (packages/ui/src/app.tsx, AppTabBar).
import { computed, onMounted, ref } from "vue";
import { useData, withBase } from "vitepress";

type Labels = { home: string; airdrop: string; launch: string; presale: string; docs: string; menu: string };
const EN: Labels = { home: "Home", airdrop: "Airdrop", launch: "Launch", presale: "Presale", docs: "Docs", menu: "App menu" };
const { theme, localeIndex } = useData();
const show = ref(false);
const L = computed<Labels>(() => ({ ...EN, ...((theme.value as { appTabs?: Partial<Labels> }).appTabs ?? {}) }));
const code = computed(() => (localeIndex.value === "root" ? "" : localeIndex.value));
// the other parts open in the docs' language
const to = (path: string) => (code.value ? `${path}?lang=${code.value}` : path);
const docsHome = computed(() => withBase(code.value ? `/${code.value}/` : "/"));

onMounted(() => {
  const q = (s: string) => window.matchMedia?.(s).matches ?? false;
  let pref: string | null = document.cookie.match(/(?:^|; )as-browser-layout=(app|web)/)?.[1] ?? null;
  if (!pref) { try { pref = localStorage.getItem("as-browser-layout"); } catch { pref = null; } }
  const standalone = q("(display-mode: standalone)") || (navigator as Navigator & { standalone?: boolean }).standalone === true;
  show.value = standalone ? q("(max-width: 1080px)") : q("(max-width: 760px)") && pref === "app";
  document.documentElement.classList.toggle("has-app-tabs", show.value);
});
</script>

<template>
  <!-- target="_self": the other parts are not docs pages, so the docs' own router must not take these links -->
  <nav v-if="show" class="as-tabs" :aria-label="L.menu">
    <a class="as-tab" :href="to('/')" target="_self">
      <span class="as-tab-ic">
        <svg width="23" height="23" viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M50 16V50M20.56 67L50 50L79.44 67M37.88 43L20.56 33M62.12 43L79.44 33M50 64V84" stroke="currentColor" stroke-width="6.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </span>
      <span class="as-tab-lbl">{{ L.home }}</span>
    </a>
    <a class="as-tab" :href="to('/airdrop/')" target="_self">
      <span class="as-tab-ic">
        <svg class="aic" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path class="fil" d="M3.5 10.5C3.5 6.1 7.3 3 12 3s8.5 3.1 8.5 7.5c-1.4-1-2.85-1-4.25 0-1.4-1-2.85-1-4.25 0-1.4-1-2.85-1-4.25 0-1.4-1-2.85-1-4.25 0z" />
          <path d="M7.75 10.5C7.9 6.6 9.6 3.7 12 3c2.4.7 4.1 3.6 4.25 7.5" />
          <path d="M3.5 10.5 10 17.2M20.5 10.5 14 17.2M12 10.5v6.7" />
          <rect class="acc" x="9.6" y="17.2" width="4.8" height="3.8" rx="1.1" />
        </svg>
      </span>
      <span class="as-tab-lbl">{{ L.airdrop }}</span>
    </a>
    <a class="as-tab" :href="to('/launch')" target="_self">
      <span class="as-tab-ic">
        <svg class="aic" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path class="fil" d="M12 2.6c2.7 2 4.1 5.1 4.1 8.9v4.3H7.9v-4.3c0-3.8 1.4-6.9 4.1-8.9z" />
          <circle class="acc" cx="12" cy="9.4" r="1.8" />
          <path d="M7.9 12.2 5.3 15.1V18l2.6-2.2M16.1 12.2l2.6 2.9V18l-2.6-2.2" />
          <path class="acs" d="M10.3 16.4c.1 1.5.7 2.7 1.7 3.6 1-.9 1.6-2.1 1.7-3.6" />
        </svg>
      </span>
      <span class="as-tab-lbl">{{ L.launch }}</span>
    </a>
    <a class="as-tab" :href="to('/presale/')" target="_self">
      <span class="as-tab-ic">
        <svg class="aic" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path class="acc" d="M13.4 2.6 5.1 13.3c-.3.4 0 .9.5.9h5.6l-.9 6.9c-.1.6.6.9 1 .4l8.3-10.7c.3-.4 0-.9-.5-.9h-5.6l.9-6.9c.1-.6-.6-.9-1-.4z" />
        </svg>
      </span>
      <span class="as-tab-lbl">{{ L.presale }}</span>
    </a>
    <a class="as-tab on" :href="docsHome" aria-current="page">
      <span class="as-tab-ic">
        <svg class="aic" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path class="fil" d="M5 5a2 2 0 0 1 2-2h12v15H7a2 2 0 0 0-2 2z" />
          <path d="M5 20a2 2 0 0 0 2 1h12" />
          <path class="acc" d="M10 3v7l2-1.5 2 1.5V3z" />
        </svg>
      </span>
      <span class="as-tab-lbl">{{ L.docs }}</span>
    </a>
  </nav>
</template>

<style>
:root { --as-tabbar-h: 58px; --as-tab-on: #c98d00; }
.dark { --as-tab-on: #ffc93c; }
.as-tabs {
  display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); align-items: stretch;
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 25;
  height: calc(var(--as-tabbar-h) + env(safe-area-inset-bottom, 0px));
  padding: 0 max(4px, env(safe-area-inset-right, 0px)) env(safe-area-inset-bottom, 0px) max(4px, env(safe-area-inset-left, 0px));
  background: color-mix(in srgb, #ffffff 94%, transparent);
  backdrop-filter: saturate(180%) blur(18px); -webkit-backdrop-filter: saturate(180%) blur(18px);
  border-top: 1px solid var(--vp-c-divider);
}
.dark .as-tabs { background: color-mix(in srgb, var(--vp-c-bg) 92%, transparent); }
.as-tab {
  box-sizing: border-box; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
  padding-top: 2px; color: var(--vp-c-text-3); font: 500 10.5px/1.15 var(--vp-font-family-base); text-align: center;
  text-decoration: none; touch-action: manipulation; -webkit-tap-highlight-color: transparent;
}
.as-tab:hover { color: var(--vp-c-text-2); }
.as-tab.on { color: var(--vp-c-text-1); font-weight: 600; }
.as-tab-ic { display: grid; place-items: center; width: 30px; height: 26px; transition: transform .12s; }
.as-tab:active .as-tab-ic { transform: scale(.88); }
.as-tab:focus-visible .as-tab-ic { outline: 2px solid #ffc93c; outline-offset: 2px; border-radius: 8px; }
.as-tab.on .as-tab-ic { color: var(--as-tab-on); }
.as-tab .aic .acc { fill: none; stroke: currentColor; }
.as-tab .aic .acs { stroke: currentColor; }
.as-tab.on .aic .acc { fill: currentColor; }
.as-tab.on .aic .fil { fill: currentColor; fill-opacity: .16; }
.as-tab-lbl { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 0 2px; }
/* the page ends above the bar */
.has-app-tabs body { padding-bottom: calc(var(--as-tabbar-h) + env(safe-area-inset-bottom, 0px)); }
</style>
