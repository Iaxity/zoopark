<template>
  <div class="nav">
    <div class="nav__logo"><h1>ZooPark</h1></div>
    <nav class="nav__btns">
      <button
        class="nav__btn"
        @click="goToAnimalsCardView"
        style="margin-bottom: 20px"
      >
        Animals card
      </button>
      <button
        class="nav__btn"
        @click="goToAnimalsView"
        style="margin-bottom: 20px"
      >
        Animals
      </button>
      <button
        class="nav__btn"
        @click="goToUserListView"
        style="margin-bottom: 20px"
      >
        User list
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goToAnimalsCardView() {
      this.$router.push({ name: "AnimalsCard" });
    },
    goToAnimalsView() {
      this.$router.push({ name: "Animals" });
    },
    goToUserListView() {
      this.$router.push({ name: "UserList" });
    },
  },
};
</script>

<style lang="scss">
.nav__btn {
  // @media (max-width: 900px) {
  //   width: 150px;

  //   font-size: 16px;
  // }
  width: 205px;
  height: 50px;
  background: #363363;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: #fca311;
    color: rgba(0, 0, 0, 0.9);
  }
}
.nav {
  display: flex;
  flex-direction: column;

  background: #141232;

  top: 47px;
  left: 0;
  height: 100%;
  width: 246px;
  position: fixed;
  // @media (max-width: 900px) {
  //   width: 200px;
  // }
}
.nav__btns {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.nav__logo {
  font-weight: 500;
  font-size: 18px;
  line-height: 42px;

  color: #fca311;

  display: flex;

  padding: 35px 0px 45px 20px;
}
</style>
