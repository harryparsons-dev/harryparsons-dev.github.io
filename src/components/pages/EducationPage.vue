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
  <section aria-labelledby="education-heading">
    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
      Academic background
    </p>
    <h1
      id="education-heading"
      class="text-4xl font-bold tracking-tight text-highlighted sm:text-5xl"
    >
      Education
    </h1>
    <p class="mt-5 max-w-2xl text-lg leading-8 text-muted">
      A strong foundation in computer science, from core systems and algorithms
      to full-stack development and artificial intelligence.
    </p>

    <div class="mt-12 grid gap-6 sm:mt-16">
      <article class="overflow-hidden rounded-3xl border border-default bg-default shadow-xl shadow-purple-950/5">
        <div class="p-6 sm:p-10 lg:p-12">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
            University
          </p>

          <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 class="text-2xl font-bold tracking-tight text-highlighted sm:text-3xl">
                University of Birmingham
              </h2>
              <p class="mt-2 text-lg font-medium text-muted">
                BSc Computer Science
              </p>
            </div>

            <UBadge
              label="First Class Honours"
              color="primary"
              variant="soft"
              size="lg"
              class="w-fit"
            />
          </div>

          <section class="mt-8 border-t border-default pt-8" aria-labelledby="modules-heading">
            <h3 id="modules-heading" class="text-lg font-semibold text-highlighted">
              Selected modules
            </h3>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li
                v-for="module in modules"
                :key="module"
                class="flex items-start gap-3 rounded-xl bg-muted px-4 py-3 text-muted"
              >
                <span
                  class="mt-2 size-1.5 shrink-0 rounded-full bg-purple-600"
                  aria-hidden="true"
                />
                <span>{{ module }}</span>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article class="rounded-3xl border border-default bg-default p-6 shadow-xl shadow-purple-950/5 sm:p-10 lg:p-12">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
              A Levels
            </p>
            <h2 class="mt-4 text-2xl font-bold tracking-tight text-highlighted sm:text-3xl">
              Exeter School
            </h2>
            <p class="mt-2 text-muted">
              Exeter, Devon
            </p>
          </div>

          <p class="font-medium text-muted">
            2019–2021
          </p>
        </div>

        <dl class="mt-8 grid gap-3 sm:grid-cols-3">
          <div
            v-for="qualification in aLevels"
            :key="qualification.subject"
            class="rounded-2xl border border-default bg-muted p-5"
          >
            <dt class="text-sm font-medium text-muted">
              {{ qualification.subject }}
            </dt>
            <dd class="mt-2 text-2xl font-bold text-highlighted">
              {{ qualification.grade }}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
