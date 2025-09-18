<template>
  <NavbarComp />
  <main>
    <router-view />
  </main>
  <FooterComp />
</template>

<script setup lang="ts">
</script>

<style scoped>
main {
  height: 100vh;
}
</style>
