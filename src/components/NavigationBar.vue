<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const navigation = ref(null)
const indicatorStyle = ref({ opacity: 0 })
const indicatorReady = ref(false)
let resizeObserver

// Moves the glass pill behind whichever link is the current page.
function placeIndicator() {
  const active = navigation.value?.querySelector('[aria-current="page"]')
  if (!active) {
    indicatorStyle.value = { opacity: 0 }
    return
  }
  indicatorStyle.value = {
    opacity: 1,
    width: `${active.offsetWidth}px`,
    height: `${active.offsetHeight}px`,
    transform: `translate(${active.offsetLeft}px, ${active.offsetTop}px)`
  }
}

watch(() => route.name, () => nextTick(placeIndicator))

onMounted(() => {
  placeIndicator()
  // Turn on the slide animation only after the first placement, so it does not fly in on load.
  requestAnimationFrame(() => { indicatorReady.value = true })
  resizeObserver = new ResizeObserver(placeIndicator)
  resizeObserver.observe(navigation.value)
})

onUnmounted(() => resizeObserver?.disconnect())
const navigationItems = [
  { label: 'About', name: 'about', symbol: '◉', number: '01' },
  { label: 'Projects', name: 'project', symbol: '▦', number: '02' },
  { label: 'Education', name: 'education', symbol: '◇', number: '03' },
  { label: 'Contact', name: 'contact', symbol: '↗', number: '04' }
]
</script>

<template>
  <aside class="sidebar glass fixed inset-y-0 left-0 z-20 flex flex-col">
    <RouterLink :to="{ name: 'about' }" aria-label="Harry Parsons, home" class="brand flex items-center gap-3">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#252620] text-base font-semibold tracking-tight text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_8px_20px_-8px_rgb(0_0_0/0.5)]">HP<span class="text-[#fd8055]">.</span></span>
      <span class="sidebar-detail text-sm font-semibold tracking-tight">Harry Parsons<span class="mt-1 block text-xs font-normal text-site-muted">Software developer</span></span>
    </RouterLink>
    <div class="nav-section mt-16 px-2 lg:px-6">
      <p class="sidebar-detail mb-4 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-site-muted">Explore</p>
      <nav ref="navigation" aria-label="Primary navigation" class="relative">
        <span aria-hidden="true" class="nav-indicator glass-strong" :class="{ 'is-ready': indicatorReady }" :style="indicatorStyle" />
        <ul class="space-y-2">
          <li v-for="item in navigationItems" :key="item.name">
            <RouterLink :to="{ name: item.name }" :aria-current="route.name === item.name ? 'page' : undefined" class="nav-link" :class="{ 'is-active': route.name === item.name }">
              <span aria-hidden="true" class="nav-symbol">{{ item.symbol }}</span>
              <span class="nav-label">{{ item.label }}</span>
              <span aria-hidden="true" class="sidebar-detail ml-auto font-mono text-[10px] opacity-50">{{ item.number }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="nav-footer mt-auto px-2 pb-6 pt-8 lg:px-6">
      <ThemeToggle />
      <div class="sidebar-detail mt-5 px-3">
        <a href="https://github.com/harryparsons-dev" target="_blank" rel="noopener noreferrer" aria-label="Harry Parsons on GitHub (opens in a new tab)" class="flex items-center justify-between text-xs text-site-muted hover:text-site-accent">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar { width: var(--sidebar-width); overflow: hidden; border-width: 0 1px 0 0; border-radius: 0 24px 24px 0; }
.brand { margin: 30px auto 0; }
.sidebar-detail { display: none; }
.nav-link { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 5px; border-radius: 16px; padding: 12px 2px; color: var(--site-muted); transition: background 180ms, color 180ms; }
.nav-link:hover { background: var(--glass-inset); color: var(--site-ink); }
.nav-link.is-active { background: transparent; color: var(--site-ink); font-weight: 600; }
.nav-link.is-active .nav-symbol { color: var(--site-accent); }
.nav-indicator { position: absolute; top: 0; left: 0; border-radius: 16px; pointer-events: none; }
/* Springy easing gives the pill a liquid, slightly elastic glide */
.nav-indicator.is-ready { transition: transform 560ms cubic-bezier(0.34, 1.45, 0.5, 1), width 400ms ease, height 400ms ease, opacity 200ms; }
.nav-symbol { font-size: 20px; line-height: 1; }
.nav-label { font-size: 9px; }
@media (min-width: 1024px) {
  .brand { margin: 32px 28px 0; }
  .sidebar-detail { display: block; }
  .nav-link { flex-direction: row; gap: 13px; padding: 15px 14px; }
  .nav-label { font-size: 13px; }
  .nav-symbol { font-size: 18px; }
}
/* Tighten spacing on short screens so the sidebar fits without scrolling */
@media (max-height: 640px) {
  .brand { margin-top: 16px; }
  .nav-section { margin-top: 20px; }
  .nav-footer { padding-top: 12px; padding-bottom: 12px; }
}
</style>
