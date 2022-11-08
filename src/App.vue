<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
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
  font-weight: 400;
  line-height: 10px;
  text-align: center;
  color: #ffffff;
  background: white;
  border-spacing: 3px;
  width: 70%;
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
  line-height: 20px;
  width: 20px;
  height: 15px;
}
</style>
