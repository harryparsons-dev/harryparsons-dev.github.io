<script setup>
defineProps({
  activePage: {
    type: String,
    required: true
  }
})

const emit = defineEmits({
  navigate: (page) => ['about', 'project', 'contact'].includes(page)
})

const navigationItems = [
  { label: 'About', value: 'about' },
  { label: 'Project', value: 'project' },
  { label: 'Contact', value: 'contact' }
]
</script>

<template>
  <header class="border-b border-default bg-default/80 backdrop-blur">
    <UContainer class="flex min-h-16 items-center justify-between gap-4 py-3">
      <span class="text-lg font-semibold text-highlighted">Portfolio</span>

      <nav aria-label="Primary navigation">
        <ul class="flex flex-wrap items-center justify-end gap-1">
          <li v-for="item in navigationItems" :key="item.value">
            <UButton
              :label="item.label"
              color="neutral"
              :variant="activePage === item.value ? 'soft' : 'ghost'"
              :aria-current="activePage === item.value ? 'page' : undefined"
              @click="emit('navigate', item.value)"
            />
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
