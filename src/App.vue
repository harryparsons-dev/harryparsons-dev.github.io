<template>
  <UApp>
    <div class="min-h-screen">
      <a href="#main-content" class="skip-link">Skip to content</a>
      <NavigationBar />
      <main id="main-content" tabindex="-1" class="site-main">
        <div class="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-14 xl:px-20">
          <header class="flex min-h-24 items-center justify-between gap-4 border-b border-site-line text-xs text-site-muted">
            <span>Portfolio <span class="mx-2 text-site-muted">/</span> <span class="text-site-ink">{{ route.meta.label }}</span></span>
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
import NavigationBar from './components/NavigationBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
