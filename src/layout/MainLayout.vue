<template>
  <ZooHeader />
  <ZooNavigation />
  <main>
    <router-view />
  </main>
</template>

<script>
import ZooHeader from "../components/Header.vue";
import ZooNavigation from "../components/Navigation.vue";

export default {
  ZooHeader,
  ZooNavigation,
};
</script>

<style>
main {
  margin-left: 265px;
  margin-top: 80px;
}
</style>
