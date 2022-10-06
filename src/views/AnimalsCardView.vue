<template>
  <div>
    <Header />
    <Navigation />
    <AnimalsCard />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navigation from "../components/Navigation.vue";
import AnimalsCard from "../components/AnimalsCard.vue";

export default {
  name: "AnimalsCardView",
  components: {
    Header,
    Navigation,
    AnimalsCard,
  },
};
</script>
