<template>
  <div id="app">
    <AnimalsCardView />
  </div>
</template>

<script>
import AnimalsCardView from "./views/AnimalsCardView.vue";

export default {
  name: "App",
  components: {
    AnimalsCardView,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  position: fixed;

  background: #14213d;
}
h1 {
  margin: 0;
}
#app {
  position: absolute;
  width: 956px;
  height: 641px;
}
div {
  width: 141px;
  height: 28px;
  left: 140px;
  top: 60px;

  display: flex;
  justify-content: flex-start;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;

  color: #ffffff;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
