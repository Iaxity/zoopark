<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from "./layout/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  font-family: Roboto;
}
body {
  margin: 0;
  background: #14213d;
}
a {
  color: white;
  text-decoration: underline;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto";
  font-style: normal;
  margin: 0;
  text-decoration: none;
}
table {
  width: 98%;
  height: 85%;

  font-weight: 400;
  line-height: 10px;
  text-align: center;
  color: #ffffff;
  background: white;
  border-spacing: 3px;
}
button {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.9);
}
td,
th {
  background: #4c5c81;
  padding: 15px;
  font-size: 20px;
  font-weight: 400;
}
</style>
