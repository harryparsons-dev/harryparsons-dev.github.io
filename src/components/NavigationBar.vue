<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navigationItems = [
  { label: 'About', name: 'about' },
  { label: 'Project', name: 'project' },
  { label: 'Contact', name: 'contact' }
]
</script>

<template>
  <header class="border-b border-default bg-default/80 backdrop-blur">
    <UContainer class="flex min-h-16 items-center justify-between gap-4 py-3">
      <span class="text-lg font-semibold text-highlighted">Portfolio</span>

      <nav aria-label="Primary navigation">
        <ul class="flex flex-wrap items-center justify-end gap-1">
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
