<template>
  <header>
    <nav class="header">
      <PersonalArea />
      <Navigation />
      <Authorization />
    </nav>
  </header>
</template>

<script>
import PersonalArea from "./PersonalArea.vue";
import Authorization from "./Authorization.vue";
import Navigation from "./Navigation.vue";

export default {
  components: {
    PersonalArea,
    Navigation,
    Authorization,
  },
};
</script>

<style lang="scss">
.name {
  font-weight: 600;
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
  background: #141232;
  width: 100%;
  top: 0;
  position: fixed;
}
</style>
