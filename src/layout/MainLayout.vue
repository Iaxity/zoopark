<template>
  <Header />
  <Sidebar />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>
main {
  margin-left: 265px;
  margin-top: 80px;
}
</style>
