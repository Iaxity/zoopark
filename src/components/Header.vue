<template>
  <header>
    <nav>
      <h1 style="margin-right: 30px; cursor: pointer">{{ name }}</h1>
      <Button />
    </nav>
  </header>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  name: "Header",
  components: {
    Button,
  },
  data: () => {
    return {
      name: "Vitaly",
    };
  },
};
</script>

<style lang="scss">
header {
  width: 100%;
  margin: 0 auto;
  left: 0px;
  top: 1px;

  position: fixed;
  background: #141232;
  & nav {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
    justify-content: flex-end;

    padding: 10px 30px 10px 0px;
    color: #ffffff;
  }
}
</style>
