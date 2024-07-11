<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterCopyright from './components/FooterCopyright.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
<main>
  <RouterView />
</main>
<footer>
  <FooterCopyright />
</footer>
</template>

<style scoped>

</style>
