<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <UCard
    as="article"
    :aria-labelledby="`${project.id}-heading`"
    class="h-full rounded-3xl shadow-lg shadow-purple-950/5"
    :ui="{ body: 'flex h-full flex-col p-6 sm:p-8' }"
  >
    <p class="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
      {{ project.category }}
    </p>
    <h3 :id="`${project.id}-heading`" class="mt-4 text-2xl font-bold tracking-tight text-highlighted">
      {{ project.title }}
    </h3>
    <p class="mt-4 leading-7 text-muted">
      {{ project.description }}
    </p>

    <ul class="mt-5 list-disc space-y-2 pl-5 leading-7 text-muted">
      <li v-for="highlight in project.highlights" :key="highlight">
        {{ highlight }}
      </li>
    </ul>

    <ul class="mt-6 flex flex-wrap gap-2" :aria-label="`${project.title} technologies`">
      <li v-for="technology in project.technologies" :key="technology">
        <UBadge :label="technology" color="neutral" variant="soft" size="lg" />
      </li>
    </ul>

    <div class="mt-auto pt-8">
      <div v-if="project.links.length" class="flex flex-wrap gap-3">
        <UButton
          v-for="link in project.links"
          :key="link.url"
          :label="link.label"
          :to="link.url"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          variant="outline"
          size="lg"
          :aria-label="`${project.title}: ${link.label} on GitHub (opens in a new tab)`"
        />
      </div>
      <p v-else-if="project.sourceNote" class="text-sm text-muted">
        {{ project.sourceNote }}
      </p>
    </div>
  </UCard>
</template>
