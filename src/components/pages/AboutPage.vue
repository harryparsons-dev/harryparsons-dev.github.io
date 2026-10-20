<template>
  <div>
    <section class="relative py-14 sm:py-20" aria-labelledby="about-heading">
      <p class="eyebrow mb-7">Software developer</p>
      <h1 id="about-heading" class="page-title text-gradient max-w-3xl pb-2">Harry Parsons</h1>
      <div class="mt-7 flex flex-col justify-between gap-7 xl:flex-row xl:items-end">
        <p class="body-copy max-w-[450px]">I build websites and web applications. I graduated from the University of Birmingham with a First Class degree in Computer Science.</p>
        <div class="flex shrink-0 flex-wrap items-center gap-6">
          <UButton :to="{ name: 'project' }" class="action-button" color="neutral">View projects <span aria-hidden="true">↗</span></UButton>
          <RouterLink :to="{ name: 'contact' }" class="text-link">Get in touch <span aria-hidden="true">↗</span></RouterLink>
        </div>
      </div>
    </section>
    <section aria-labelledby="selected-heading" class="border-t border-site-line pt-7">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 id="selected-heading" class="eyebrow">01 / Selected project</h2>
        <RouterLink :to="{ name: 'project' }" class="text-link">View project <span aria-hidden="true">↗</span></RouterLink>
      </div>
      <div class="grid gap-5">
        <RouterLink :to="{ name: 'project' }" class="project-preview glass reveal group overflow-hidden rounded-3xl">
          <div class="project-image overflow-hidden px-7 pt-7 sm:px-12 sm:pt-10">
            <div class="overflow-hidden rounded-t-xl border border-site-line bg-site-panel shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.34,1.4,0.5,1)] group-hover:-translate-y-2">
              <div class="flex items-center gap-1 border-b border-site-line px-3 py-2"><span v-for="dot in 3" :key="dot" class="size-1 rounded-full bg-site-line" /><span class="ml-auto font-mono text-[8px] text-site-muted">oliviaparsons.art</span></div>
              <img src="/images/projects/olivia-parsons/home.webp" alt="Olivia Parsons art portfolio, featuring a blue figurative drawing" width="1440" height="1000" class="w-full">
            </div>
          </div>
          <div class="flex items-center justify-between gap-4 border-t border-[var(--glass-edge)] p-5 sm:p-6">
            <div><p class="eyebrow mb-2 text-[9px]">Client project / 2022</p><h3 class="text-xl font-medium tracking-tight">Olivia Parsons</h3><p class="mt-2 text-xs text-site-muted">Art portfolio & content management</p></div>
            <span aria-hidden="true" class="glass-inset flex size-10 shrink-0 items-center justify-center rounded-full transition-colors group-hover:border-site-accent group-hover:bg-site-accent group-hover:text-[var(--site-button-text)]">↗</span>
          </div>
        </RouterLink>
      </div>
    </section>
    <section class="reveal mt-10 grid gap-7 border-t border-site-line pt-7 sm:grid-cols-[1fr_2fr]" aria-labelledby="approach-heading">
      <h2 id="approach-heading" class="eyebrow">02 / Experience</h2>
      <div><p class="body-copy max-w-xl">My work includes frontend development, content management systems, and self-hosted backends. For the Olivia Parsons portfolio, I connected a React frontend to Strapi and PostgreSQL on a Raspberry Pi.</p><div class="mt-5 flex flex-wrap gap-2"><span v-for="skill in ['React', 'Vue', 'Strapi', 'PostgreSQL']" :key="skill" class="tag">{{ skill }}</span></div></div>
    </section>
  </div>
</template>

<style scoped>
.project-image { height: 265px; }
@media (max-width: 639px) { .project-image { height: 180px; } }
</style>
