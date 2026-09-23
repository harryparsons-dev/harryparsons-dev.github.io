<template>
  <section aria-labelledby="projects-heading" class="pt-14 sm:pt-20">
    <p class="eyebrow mb-7">
      02 / Selected work
    </p>
    <h1
      id="projects-heading"
      class="page-title"
    >
      Projects
    </h1>
    <p class="body-copy mt-6 max-w-xl">
      Websites and applications I’ve built, with details on the technology and implementation.
    </p>

    <article class="mt-12 overflow-hidden rounded-xl border border-site-line bg-site-panel sm:mt-16">
      <div class="p-5 sm:p-9">
        <div class="eyebrow flex flex-wrap items-center gap-3">
          <span>Client project</span>
          <span aria-hidden="true">·</span>
          <time datetime="2022">2022</time>
        </div>

        <div class="mt-5 grid gap-6">
          <div>
            <h2 class="text-2xl font-medium tracking-tight sm:text-4xl">
              Olivia Parsons Art Portfolio
            </h2>
            <p class="body-copy mt-4 max-w-2xl">
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
              class="action-button"
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
              class="rounded-md px-5 text-xs"
            />
          </div>
        </div>

        <ul class="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
          <li v-for="technology in ['React', 'Strapi', 'PostgreSQL', 'Raspberry Pi', 'Cloudflare', 'Cloudinary']" :key="technology">
            <span class="tag">{{ technology }}</span>
          </li>
        </ul>
      </div>

      <figure class="border-y border-site-line bg-site-inset p-5 sm:p-10">
        <img
          src="/images/projects/olivia-parsons/home.webp"
          alt="Olivia Parsons portfolio homepage displaying a blue figurative drawing"
          class="aspect-[36/25] w-full rounded-md object-cover object-top shadow-lg"
          width="1440"
          height="1000"
        >
        <figcaption class="sr-only">
          The Olivia Parsons portfolio homepage.
        </figcaption>
      </figure>

      <div class="grid gap-9 p-5 sm:p-9 xl:grid-cols-3">
        <section aria-labelledby="project-brief-heading">
          <p class="eyebrow">
            01 / The brief
          </p>
          <h3 id="project-brief-heading" class="mt-3 text-xl font-semibold text-highlighted">
            Simple content ownership
          </h3>
          <p class="body-copy mt-3">
            The client needed an affordable website they could update
            independently. I worked closely with them on the visual design, then
            built the React frontend by hand and connected it to Strapi for
            authenticated content management.
          </p>
        </section>

        <section aria-labelledby="project-approach-heading">
          <p class="eyebrow">
            02 / The approach
          </p>
          <h3 id="project-approach-heading" class="mt-3 text-xl font-semibold text-highlighted">
            A low-cost full stack
          </h3>
          <p class="body-copy mt-3">
            Strapi manages the content, authentication, and PostgreSQL data.
            Self-hosting the backend on a Raspberry Pi keeps ongoing server
            costs close to zero, while Cloudflare Tunnels provide secure remote
            access without exposing the home network directly.
          </p>
        </section>

        <section aria-labelledby="project-challenge-heading">
          <p class="eyebrow">
            03 / The challenge
          </p>
          <h3 id="project-challenge-heading" class="mt-3 text-xl font-semibold text-highlighted">
            Reliable media delivery
          </h3>
          <p class="body-copy mt-3">
            Configuring the self-hosted database and backend was the most
            demanding part. Cloudinary solved the media-storage bottleneck by
            serving optimized images and video, with the trade-off
            that the CMS still depends on the host internet connection.
          </p>
        </section>
      </div>

      <div class="grid gap-5 border-t border-site-line bg-site-sidebar p-5 sm:grid-cols-2 sm:p-9">
        <figure>
          <img
            src="/images/projects/olivia-parsons/gallery.webp"
            alt="The 2025 artwork gallery showing a year filter and a responsive image grid"
            class="aspect-[36/25] w-full rounded-md border border-site-line object-cover object-top"
            width="1440"
            height="1000"
            loading="lazy"
          >
          <figcaption class="pt-3 text-xs text-site-muted">
            CMS-managed artwork gallery
          </figcaption>
        </figure>

        <figure>
          <img
            src="/images/projects/olivia-parsons/exhibition.webp"
            alt="An exhibition detail page with project text and artwork photography"
            class="aspect-[36/25] w-full rounded-md border border-site-line object-cover object-top"
            width="1440"
            height="1000"
            loading="lazy"
          >
          <figcaption class="pt-3 text-xs text-site-muted">
            Structured exhibition content
          </figcaption>
        </figure>
      </div>
    </article>
  </section>
</template>
