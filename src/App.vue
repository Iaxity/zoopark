<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from "./views/Page.vue";

export default {
  name: "App",
  components: {
    Page,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;

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
</style>
