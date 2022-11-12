<template>
  <div class="header">
    <div class="header__content">
      <button
        @click="shownPersonalArea = true"
        class="modal__personalarea-name"
      >
        <!-- {{ name }} -->
      </button>
      <button @click="goToAuthorization" class="authorization_logout">
        Logout
      </button>
    </div>
  </div>
  <PersonalArea v-show="shownPersonalArea" @close="shownPersonalArea = false" />
</template>

<script setup>
import { ref } from "vue";
import PersonalArea from "@/components/PersonalArea.vue";
import router from "@/router";

// const name = ref(localStorage.getItem("name"));

const shownPersonalArea = ref(false);
const goToAuthorization = () => {
  localStorage.removeItem("name");
  router.push({ name: "Authorization" });
};
</script>

<style lang="scss">
.authorization_logout {
  width: 90px;
  height: 30px;
  margin-right: 20px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  background: #fca311;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
}
.header {
  background: #141232;
  width: 100%;
  top: 0;
  position: fixed;
  &__content {
    display: flex;
    justify-content: flex-end;
    height: 47px;
    align-items: center;
  }
}
.modal__personalarea-name {
  background: none;
  border: 0px solid;

  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  margin-right: 20px;

  color: #ffffff;
  cursor: pointer;
}
</style>
