<template>
  <div class="header">
    <header>
      <nav>
        <h1>{{ name }}</h1>
        <Button :text="Logout" :color="yellow" />
      </nav>
    </header>
  </div>
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
.header {
  width: 100%;
  margin: 0 auto;
  position: fixed;
}
header {
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
