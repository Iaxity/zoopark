<template>
  <button @click="openModal()" class="logout">Logout</button>
  <div v-if="modalOpened" class="auth-modal">
    <div class="auth-modal-background">
      <div class="auth-modal-content">
        <div class="log-pass">
          <h1>Authorization</h1>
          <input placeholder="Login" class="auth" type="text" />
          <input placeholder="Password" class="auth" type="password" />
          <div class="reg-log">
            <Registration />
            <button class="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from "./Registration.vue";
export default {
  components: {
    Registration,
  },
  props: {
    text: String,
    color: String,
  },
  data() {
    return {
      modalOpened: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpened = true;
    },
  },
};
</script>

<style lang="scss">
a {
  color: white;
  text-decoration: underline;
}
.reg-log {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.log-pass {
  display: flex;
  flex-direction: column;
}
.login {
  width: 207px;
  height: 65px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: rgba(0, 0, 0, 0.9);

  cursor: pointer;
}
.auth {
  width: 449px;
  height: 65px;

  padding-left: 20px;
  margin-bottom: 30px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;

  opacity: 0.8;
}
.auth-modal .auth-modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.auth-modal-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #fca311;

    padding-bottom: 30px;
    padding-left: 75px;
  }
}
.auth-modal-content {
  width: 679px;
  height: 440px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logout {
  width: 90px;
  height: 30px;
  margin-right: 20px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.9);

  background: #fca311;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
}
</style>
