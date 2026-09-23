<script setup>
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const navigationItems = [
  { label: 'About', name: 'about', symbol: '◉', number: '01' },
  { label: 'Projects', name: 'project', symbol: '▦', number: '02' },
  { label: 'Education', name: 'education', symbol: '◇', number: '03' },
  { label: 'Contact', name: 'contact', symbol: '↗', number: '04' }
]
</script>

<template>
  <aside class="sidebar fixed inset-y-0 left-0 z-20 flex flex-col border-r border-site-line bg-site-sidebar">
    <RouterLink :to="{ name: 'about' }" aria-label="Harry Parsons, home" class="brand flex items-center gap-3">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#252620] text-lg font-semibold tracking-tighter text-white">hp<span class="text-[#fd8055]">.</span></span>
      <span class="sidebar-detail text-sm font-semibold tracking-tight">Harry Parsons<span class="mt-1 block text-xs font-normal text-site-muted">Software developer</span></span>
    </RouterLink>
    <div class="mt-16 px-2 lg:px-6">
      <p class="sidebar-detail mb-4 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-site-muted">Explore</p>
      <nav aria-label="Primary navigation">
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
    <div class="mt-auto px-2 pb-6 pt-8 lg:px-6">
      <ThemeToggle />
      <div class="sidebar-detail mt-5 px-3">
        <a href="https://github.com/harryparsons-dev" target="_blank" rel="noopener noreferrer" aria-label="Harry Parsons on GitHub (opens in a new tab)" class="flex items-center justify-between text-xs text-site-muted hover:text-site-accent">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar { width: var(--sidebar-width); overflow-y: auto; }
.brand { margin: 30px auto 0; }
.sidebar-detail { display: none; }
.nav-link { display: flex; flex-direction: column; align-items: center; gap: 5px; border-radius: 9px; padding: 12px 2px; color: var(--site-muted); transition: background 180ms, color 180ms; }
.nav-link:hover { background: var(--site-inset); color: var(--site-ink); }
.nav-link.is-active { background: var(--site-button); color: var(--site-button-text); }
.nav-symbol { font-size: 20px; line-height: 1; }
.nav-label { font-size: 9px; }
@media (min-width: 1024px) {
  .brand { margin: 32px 28px 0; }
  .sidebar-detail { display: block; }
  .nav-link { flex-direction: row; gap: 13px; padding: 15px 14px; }
  .nav-label { font-size: 13px; }
  .nav-symbol { font-size: 18px; }
}
</style>
