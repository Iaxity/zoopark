<template>
  <div class="authotization">
    <div class="authotization_background">
      <div class="authotization_content">
        <div class="authorization_login_password">
          <h1>Authorization</h1>
          <input
            v-model="email"
            placeholder="Login"
            class="authorization_input"
            type="text"
          />
          <input
            v-model="password"
            placeholder="Password"
            class="authorization_input"
            type="password"
          />
          <div class="authorization_reg_log">
            <button @click="goToRegistration" class="registration_reg_btn">
              Registration
            </button>
            <button @click="login" class="authorization_log_btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { auth } from "@/services/auth-service";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = async () => {
  const response = await auth(email, password);
  localStorage.setItem("name", response.user);
  router.push({ name: "AnimalsCard" });
};
const goToRegistration = () => {
  router.push({ name: "Registration" });
};
</script>

<style lang="scss">
.registration_reg_btn {
  border: 0px solid;
  background: none;
  cursor: pointer;

  color: white;
  text-decoration: underline;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-decoration-line: underline;
}
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
.authorization_reg_log {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.authorization_login_password {
  display: flex;
  flex-direction: column;
}
.authorization_log_btn {
  width: 207px;
  height: 65px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  cursor: pointer;
}
.authorization_input {
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
.authotization .authotization_background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 49;
}

.authotization_background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.authotization {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #fca311;

    padding-bottom: 30px;
    padding-left: 75px;
  }
}
.authotization_content {
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
</style>
