<script setup>
const modules = [
  'Data Structures and Algorithms',
  'Full Stack Development',
  'Operating Systems and Systems Programming',
  'Security and Networks',
  'Advanced Networking',
  'Artificial Intelligence 1 & 2'
]

const aLevels = [
  { subject: 'Maths', grade: 'A*' },
  { subject: 'Computer Science', grade: 'A' },
  { subject: 'Physics', grade: 'A' }
]
</script>

<template>
  <section aria-labelledby="education-heading" class="pt-14 sm:pt-20">
    <p class="eyebrow mb-7">
      03 / Academic background
    </p>
    <h1
      id="education-heading"
      class="page-title"
    >
      Education
    </h1>
    <p class="body-copy mt-6 max-w-xl">
      My qualifications and selected university modules.
    </p>

    <div class="mt-12 grid gap-6 sm:mt-16">
      <article class="overflow-hidden rounded-xl border border-site-line bg-site-panel">
        <div class="p-5 sm:p-9">
          <p class="eyebrow">
            01 / University
          </p>

          <div class="mt-5 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <h2 class="text-2xl font-medium tracking-tight sm:text-3xl">
                University of Birmingham
              </h2>
              <p class="body-copy mt-2">
                BSc Computer Science
              </p>
            </div>

            <UBadge
              label="First Class Honours"
              color="primary"
              variant="soft"
              size="lg"
              class="w-fit rounded-full bg-site-accent-soft px-3 py-1.5 text-xs text-site-accent ring-0"
            />
          </div>

          <section class="mt-8 border-t border-site-line pt-7" aria-labelledby="modules-heading">
            <h3 id="modules-heading" class="eyebrow">
              Selected modules
            </h3>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li
                v-for="module in modules"
                :key="module"
                class="flex items-start gap-3 rounded-md bg-site-inset px-4 py-3 text-sm leading-6 text-site-muted"
              >
                <span
                  class="mt-2 size-1.5 shrink-0 rounded-full bg-site-accent"
                  aria-hidden="true"
                />
                <span>{{ module }}</span>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article class="rounded-xl border border-site-line bg-site-panel p-5 sm:p-9">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="eyebrow">
              02 / A Levels
            </p>
            <h2 class="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
              Exeter School
            </h2>
            <p class="mt-2 text-muted">
              Exeter, Devon
            </p>
          </div>

          <p class="eyebrow">
            2019–2021
          </p>
        </div>

        <dl class="mt-8 grid gap-3 sm:grid-cols-3">
          <div
            v-for="qualification in aLevels"
            :key="qualification.subject"
            class="rounded-lg border border-site-line bg-site-inset p-5"
          >
            <dt class="text-sm font-medium text-muted">
              {{ qualification.subject }}
            </dt>
            <dd class="mt-3 text-4xl font-medium tracking-tight text-site-accent">
              {{ qualification.grade }}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
