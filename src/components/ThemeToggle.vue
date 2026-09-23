<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
let preference
try { preference = localStorage.getItem('portfolio-theme') } catch { /* Storage may be disabled. */ }

function applyTheme(dark) {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]').content = dark ? '#191a18' : '#faf9f6'
}

function toggleTheme() {
  preference = isDark.value ? 'light' : 'dark'
  applyTheme(preference === 'dark')
  try { localStorage.setItem('portfolio-theme', preference) } catch { /* Keep the toggle usable without storage. */ }
}

function syncSystemTheme(event) {
  if (preference !== 'light' && preference !== 'dark') applyTheme(event.matches)
}

onMounted(() => systemTheme.addEventListener('change', syncSystemTheme))
onUnmounted(() => systemTheme.removeEventListener('change', syncSystemTheme))
</script>

<template>
  <UButton
    color="neutral"
    variant="ghost"
    role="switch"
    :aria-checked="isDark"
    aria-label="Dark mode"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="theme-toggle w-full justify-center rounded-lg text-site-muted hover:bg-site-inset lg:justify-start"
    @click="toggleTheme"
  >
    <span aria-hidden="true" class="text-xl leading-none">{{ isDark ? '☾' : '☀' }}</span>
    <span class="text-[9px] lg:text-xs">{{ isDark ? 'Dark' : 'Light' }}<span class="hidden lg:inline"> mode</span></span>
    <span aria-hidden="true" class="switch-track ml-auto hidden lg:block" :class="{ enabled: isDark }"><span /></span>
  </UButton>
</template>

<style scoped>
.theme-toggle { min-height: 52px; flex-direction: column; gap: 6px; }
.switch-track { width: 28px; padding: 3px; border-radius: 20px; background: var(--site-line); }
.switch-track span { display: block; width: 10px; height: 10px; border-radius: 50%; background: var(--site-muted); transition: transform 150ms; }
.switch-track.enabled { background: var(--site-accent-soft); }
.switch-track.enabled span { transform: translateX(12px); background: var(--site-accent); }
@media (min-width: 1024px) { .theme-toggle { flex-direction: row; gap: 12px; padding: 12px; } }
</style>
