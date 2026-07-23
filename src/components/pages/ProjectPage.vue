<template>
  <section aria-labelledby="projects-heading">
    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
      Selected work
    </p>
    <h1
      id="projects-heading"
      class="text-4xl font-bold tracking-tight text-highlighted sm:text-5xl"
    >
      Projects
    </h1>
    <p class="mt-5 max-w-2xl text-lg leading-8 text-muted">
      Web experiences built around real people, practical constraints, and
      maintainable technology.
    </p>

    <article class="mt-12 overflow-hidden rounded-3xl border border-default bg-default shadow-xl shadow-purple-950/5 sm:mt-16">
      <div class="p-6 sm:p-10 lg:p-12">
        <div class="flex flex-wrap items-center gap-3 text-sm font-medium text-muted">
          <span>Client project</span>
          <span aria-hidden="true">·</span>
          <time datetime="2022">2022</time>
        </div>

        <div class="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
              Olivia Parsons Art Portfolio
            </h2>
            <p class="mt-4 max-w-3xl text-lg leading-8 text-muted">
              A custom art portfolio and content platform that gives the client
              full control of their galleries, exhibitions, and artwork without
              needing to touch the code.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              label="Visit live site"
              to="https://oliviaparsons.art/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="lg"
              aria-label="Visit the Olivia Parsons art portfolio (opens in a new tab)"
            />
            <UButton
              label="View source"
              to="https://github.com/harryparsons-dev/OPA_frontend"
              target="_blank"
              rel="noopener noreferrer"
              color="neutral"
              variant="outline"
              size="lg"
              aria-label="View the Olivia Parsons frontend source on GitHub (opens in a new tab)"
            />
          </div>
        </div>

        <ul class="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
          <li v-for="technology in ['React', 'Strapi', 'PostgreSQL', 'Raspberry Pi', 'Cloudflare', 'Cloudinary']" :key="technology">
            <UBadge :label="technology" color="neutral" variant="soft" size="lg" />
          </li>
        </ul>
      </div>

      <figure class="border-y border-default bg-muted">
        <img
          src="/images/projects/olivia-parsons/home.webp"
          alt="Olivia Parsons portfolio homepage displaying a blue figurative drawing"
          class="aspect-[36/25] w-full object-cover object-top"
          width="1440"
          height="1000"
        >
        <figcaption class="sr-only">
          The Olivia Parsons portfolio homepage.
        </figcaption>
      </figure>

      <div class="grid gap-10 p-6 sm:p-10 lg:grid-cols-3 lg:p-12">
        <section aria-labelledby="project-brief-heading">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
            The brief
          </p>
          <h3 id="project-brief-heading" class="mt-3 text-xl font-semibold text-highlighted">
            Simple content ownership
          </h3>
          <p class="mt-3 leading-7 text-muted">
            The client needed an affordable website they could update
            independently. I worked closely with them on the visual design, then
            built the React frontend by hand and connected it to Strapi for
            authenticated content management.
          </p>
        </section>

        <section aria-labelledby="project-approach-heading">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
            The approach
          </p>
          <h3 id="project-approach-heading" class="mt-3 text-xl font-semibold text-highlighted">
            A low-cost full stack
          </h3>
          <p class="mt-3 leading-7 text-muted">
            Strapi manages the content, authentication, and PostgreSQL data.
            Self-hosting the backend on a Raspberry Pi keeps ongoing server
            costs close to zero, while Cloudflare Tunnels provide secure remote
            access without exposing the home network directly.
          </p>
        </section>

        <section aria-labelledby="project-challenge-heading">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-purple-600">
            The challenge
          </p>
          <h3 id="project-challenge-heading" class="mt-3 text-xl font-semibold text-highlighted">
            Reliable media delivery
          </h3>
          <p class="mt-3 leading-7 text-muted">
            Configuring the self-hosted database and backend was the most
            demanding part. Cloudinary solved the media-storage bottleneck by
            serving optimized images and video, with the considered trade-off
            that the CMS still depends on the host internet connection.
          </p>
        </section>
      </div>

      <div class="grid gap-px border-t border-default bg-default sm:grid-cols-2">
        <figure class="bg-muted">
          <img
            src="/images/projects/olivia-parsons/gallery.webp"
            alt="The 2025 artwork gallery showing a year filter and a responsive image grid"
            class="aspect-[36/25] w-full object-cover object-top"
            width="1440"
            height="1000"
            loading="lazy"
          >
          <figcaption class="px-5 py-4 text-sm text-muted">
            CMS-managed artwork gallery
          </figcaption>
        </figure>

        <figure class="bg-muted">
          <img
            src="/images/projects/olivia-parsons/exhibition.webp"
            alt="An exhibition detail page with project text and artwork photography"
            class="aspect-[36/25] w-full object-cover object-top"
            width="1440"
            height="1000"
            loading="lazy"
          >
          <figcaption class="px-5 py-4 text-sm text-muted">
            Structured exhibition content
          </figcaption>
        </figure>
      </div>
    </article>
  </section>
</template>
