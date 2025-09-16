<template>
  <NavbarComp />
  <main>
    <router-view />
  </main>
  <FooterComp />
</template>

<script setup lang="ts">
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';
</script>

<style scoped>
main {
  height: 100vh;
}
</style>
