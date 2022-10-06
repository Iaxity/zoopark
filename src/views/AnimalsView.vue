<template>
  <div>
    <Header />
    <Navigation />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Animals",
  components: {
    Header,
    Navigation,
  },
};
</script>
