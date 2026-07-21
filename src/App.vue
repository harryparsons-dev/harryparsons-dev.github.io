<template>
  <UApp>
    <div class="min-h-screen">
      <NavigationBar />

      <main>
        <UContainer class="py-16 sm:py-24">
          <RouterView />
        </UContainer>
      </main>
    </div>
  </UApp>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>
