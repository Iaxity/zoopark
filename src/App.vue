<template>
  <div id="app">
    <Header />
    <MainLayout />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainLayout from "./layout/MainLayout.vue";

export default {
  name: "App",
  components: {
    Header,
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

  font-family: "Roboto";
  font-weight: 400;
  line-height: 10px;
  text-align: center;
  color: #ffffff;
  background: white;
  border-spacing: 3px;
}
td,
th {
  background: #4c5c81;
  padding: 15px;
  font-size: 20px;
  font-weight: 400;
}
</style>
