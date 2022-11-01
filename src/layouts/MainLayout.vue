<template>
  <!-- Header -->
  <Header />
  <!-- Sidebar Navigation -->
  <Sidebar />

  <main>
    <router-view />
  </main>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<style lang="scss">
main {
  margin-left: 265px;
  margin-top: 80px;
  height: 100%;
}
</style>
