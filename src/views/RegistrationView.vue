<template>
  <div class="registration">
    <div class="registration-background">
      <div class="registration-content">
        <div class="registration-name_id">
          <h1>Registration</h1>
        </div>
        <div class="registration-block">
          <div class="registration-string_input">
            <div class="registration-string">
              <h2>Name</h2>
              <h2>Password</h2>
              <h2>E-mail</h2>
              <h2>Phone</h2>
            </div>
            <div class="registration-input">
              <input
                v-model="user.name"
                placeholder="Name"
                class="registration-inp"
                type="text"
              />
              <input
                v-model="user.password"
                placeholder="Password"
                class="registration-inp"
                type="password"
              />
              <input
                v-model="user.email"
                placeholder="E-mail"
                class="registration-inp"
                type="text"
              />
              <input
                v-model="user.phone"
                placeholder="Phone"
                class="registration-inp"
                type="text"
              />
              <div class="can-del">
                <button
                  @click="goToAuthorization"
                  class="registration-cancel_btn"
                >
                  Cancel
                </button>
                <button @click="registrateUser" class="registration-delete_btn">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { createUser } from "@/services/reg-service";
import { reactive } from "vue";

const user = reactive({
  name: "",
  email: "",
  phone: "",
  password: "",
});

const registrateUser = async () => {
  if (
    user.name === "" ||
    user.email === "" ||
    user.phone === "" ||
    user.password === ""
  ) {
    alert("Заполнены не все поля");
    return;
  }
  const response = await createUser(
    user.name,
    user.email,
    user.phone,
    user.password
  );
  localStorage.setItem("name", response.user);
  router.push({ name: "AnimalsCard" });
};
const goToAuthorization = () => {
  router.push({ name: "Authorization" });
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
.registration-name_id {
  display: flex;
  justify-content: center;
  align-items: baseline;
  align-content: center;

  margin-top: 30px;
  margin-bottom: 30px;

  border-radius: 10px 10px 0px 0px;
}
.can-del {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.registration-block {
  display: flex;
  flex-direction: column;
}
.registration-string_input {
  display: flex;
  justify-content: center;
}
.registration-input {
  padding-left: 20px;

  display: flex;
  flex-direction: column;
}
.registration-string {
  display: flex;
  flex-direction: column;
}
.registration-delete_btn {
  width: 75px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  margin-left: 10px;

  cursor: pointer;
}
.registration-cancel_btn {
  width: 103px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}
.registration-inp {
  width: 265px;
  height: 40px;

  padding-left: 15px;
  margin-bottom: 20px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;

  opacity: 0.8;
}
.registration .registration-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.registration-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.registration {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #fca311;
  }
  h2 {
    padding-bottom: 35px;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }
}
.registration-content {
  width: 450px;
  height: 417px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
