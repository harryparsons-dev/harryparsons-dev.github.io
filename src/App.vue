<template>
  <UApp>
    <div class="min-h-screen">
      <NavigationBar
        :active-page="activePage"
        @navigate="activePage = $event"
      />

      <main>
        <UContainer class="py-16 sm:py-24">
          <component :is="currentPage" />
        </UContainer>
      </main>
    </div>
  </UApp>
</template>

<script setup>
import { computed, ref } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import ProjectPage from './components/pages/ProjectPage.vue'

const activePage = ref('about')

const pages = {
  about: AboutPage,
  project: ProjectPage,
  contact: ContactPage
}

const currentPage = computed(() => pages[activePage.value])
</script>
