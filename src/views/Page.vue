<template>
  <div class="page">
    <Header />
    <Navigation />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Page",
  components: {
    Header,
    Navigation,
  },
};
</script>
