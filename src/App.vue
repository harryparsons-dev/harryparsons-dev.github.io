<template>
  <UApp>
    <LiquidBackdrop />
    <div class="min-h-screen">
      <a href="#main-content" class="skip-link">Skip to content</a>
      <NavigationBar />
      <main id="main-content" tabindex="-1" class="site-main">
        <div class="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-14 xl:px-20">
          <header class="sticky top-3 z-10 pt-3 sm:top-4 sm:pt-4">
            <div class="glass-strong flex min-h-12 items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 text-xs text-site-muted">
              <span class="truncate">Portfolio <span aria-hidden="true" class="mx-2">/</span> <span class="font-medium text-site-ink">{{ route.meta.label }}</span></span>
              <a href="https://github.com/harryparsons-dev" target="_blank" rel="noopener noreferrer" aria-label="Harry Parsons on GitHub (opens in a new tab)" class="glass-inset shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-medium text-site-ink transition-colors hover:text-site-accent">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </header>
          <RouterView v-slot="{ Component }">
            <component :is="Component" :key="route.path" class="page-enter" />
          </RouterView>
          <footer class="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-site-line py-7 text-xs text-site-muted">
            <span>© {{ new Date().getFullYear() }} Harry Parsons</span>
          </footer>
        </div>
      </main>
    </div>
  </UApp>
</template>

<script setup>
import LiquidBackdrop from './components/LiquidBackdrop.vue'
import NavigationBar from './components/NavigationBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
