<template>
  <header>
    <nav class="header">
      <h1>{{ name }}</h1>
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
header h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  margin-right: 20px;

  color: #ffffff;
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: flex-end;
  height: 47px;
  align-items: center;
}
header {
  background: #141232;
  width: 100%;
  top: 0;
  position: fixed;
}
</style>
