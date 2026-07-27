<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navigationItems = [
  { label: 'About', name: 'about' },
  { label: 'Projects', name: 'project' },
  { label: 'Education', name: 'education' },
  { label: 'Contact', name: 'contact' }
]
</script>

<template>
  <header class="border-b border-default bg-default/80 backdrop-blur">
    <UContainer class="flex flex-col items-start gap-2 py-3 sm:min-h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span class="text-lg font-semibold text-highlighted">Portfolio</span>

      <nav class="w-full sm:w-auto" aria-label="Primary navigation">
        <ul class="flex flex-wrap items-center gap-1 sm:justify-end">
          <li v-for="item in navigationItems" :key="item.name">
            <UButton
              :label="item.label"
              :to="{ name: item.name }"
              color="neutral"
              :variant="route.name === item.name ? 'soft' : 'ghost'"
              :aria-current="route.name === item.name ? 'page' : undefined"
            />
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
