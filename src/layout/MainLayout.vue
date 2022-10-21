<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
main {
  margin-left: 265px;
  margin-top: 80px;
}
</style>
