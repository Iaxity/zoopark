<template>
  <div class="nav">
    <div class="logo"><h1>ZooPark</h1></div>
    <nav>
      <button style="margin-bottom: 20px">Animals card</button>
      <button style="margin-bottom: 20px">Animals</button>
      <button style="margin-bottom: 20px">User list</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
};
</script>

<style lang="scss">
nav button {
  width: 205px;
  height: 50px;
  left: 20px;
  top: 178px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: white;
  background: #332f5f;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
  &:hover {
    background: #fca311;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: rgba(0, 0, 0, 0.9);
  }
}
.nav {
  width: 246px;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 48px;

  background: #141232;
}
.logo {
  position: fixed;
  left: 20px;
  top: 86px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 42px;
  color: #fca311;
}
.nav nav {
  left: 20px;
  top: 178px;
  position: fixed;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 42px;
  color: #fca311;

  display: flex;
  flex-direction: column;
  margin: 0px 0px 30px 0px;
}
</style>
