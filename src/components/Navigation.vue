<template>
  <div class="nav">
    <nav>
      <h1>ZooPark</h1>
      <Button :text="Animalscard" />
      <Button :text="Animals" />
      <Button :text="Userlist" />
    </nav>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Navigation",
  components: {
    Button,
  },
};
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  width: 246px;
  height: 100%;
  position: fixed;

  background: #141232;
}
.nav nav {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 42px;
  color: #fca311;

  padding: 80px 0px 0px 20px;
  justify-content: flex-start;
}
</style>
