<template>
  <div class="header">
    <button @click="openModalPersonal()" class="name">{{ name }}</button>
    <div v-if="modalOpenedPersonal" class="personal-modal">
      <div class="personal-modal-background">
        <div class="personal-modal-content">
          <div class="person-name-id">
            <h1 style="padding-right: 20px">{{ name }}</h1>
            <h3>id {{ id }}</h3>
          </div>
          <div class="person-block">
            <div class="person-string-input">
              <div class="person-string">
                <h2>Name</h2>
                <h2>Password</h2>
                <h2>E-mail</h2>
                <h2>Phone</h2>
              </div>
              <div class="person-input">
                <input placeholder="Name" class="personal" type="text" />
                <input
                  placeholder="Password"
                  class="personal"
                  type="password"
                />
                <input placeholder="E-mail" class="personal" type="text" />
                <input placeholder="Phone" class="personal" type="text" />
                <div class="can-del">
                  <button @click="exitModalPersonal()" class="cancel">
                    Cancel
                  </button>
                  <button class="delete">Delete profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="openModalAuth()" class="logout">Logout</button>
    <div v-if="modalOpenedAuth" class="auth-modal">
      <div class="auth-modal-background">
        <div class="auth-modal-content">
          <div class="log-pass">
            <h1>Authorization</h1>
            <input placeholder="Login" class="auth" type="text" />
            <input placeholder="Password" class="auth" type="password" />
            <div class="reg-log">
              <button class="registration-btn" @click="exitModalAuth()">
                Registration
              </button>
              <div v-if="openModalReg()" class="registration-modal">
                <div class="registration-modal-background">
                  <div class="registration-modal-content">
                    <div class="reg-name-id">
                      <h1 style="padding-right: 20px">{{ name }}</h1>
                      <h3>id {{ id }}</h3>
                    </div>
                    <div class="reg-block">
                      <div class="reg-string-input">
                        <div class="reg-string">
                          <h2>Name</h2>
                          <h2>Password</h2>
                          <h2>E-mail</h2>
                          <h2>Phone</h2>
                        </div>
                        <div class="reg-input">
                          <input
                            placeholder="Name"
                            class="registration"
                            type="text"
                          />
                          <input
                            placeholder="Password"
                            class="registration"
                            type="password"
                          />
                          <input
                            placeholder="E-mail"
                            class="registration"
                            type="text"
                          />
                          <input
                            placeholder="Phone"
                            class="registration"
                            type="text"
                          />
                          <div class="can-del">
                            <button class="cancel">Cancel</button>
                            <button class="ok">OK</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      name: "Vitaly",
      id: "34834942",
      modalOpenedPersonal: false,
      modalOpenedAuth: false,
      modalOpenedReg: false,
    };
  },
  methods: {
    exitModalPersonal() {
      this.modalOpenedPersonal = false;
    },
    exitModalAuth() {
      this.modalOpenedAuth = false;
    },
    openModalReg() {
      this.modalOpenedReg = true;
    },
    openModalPersonal() {
      this.modalOpenedPersonal = true;
    },
    openModalAuth() {
      this.modalOpenedAuth = true;
    },
  },
};
</script>

<style lang="scss">
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

  background: #fca311;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
}
.name {
  background: none;
  border: 0px solid;

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
.registration {
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
.registration-btn {
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
.reg-name-id {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-content: center;
  flex-wrap: wrap;

  width: 562px;
  height: 72px;
  margin-bottom: 30px;

  border-radius: 10px 10px 0px 0px;
  background-color: #141232;
}
.can-del {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reg-block {
  padding-left: 45px;

  display: flex;
  flex-direction: column;
}
.reg-string-input {
  display: flex;
}
.reg-input {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.reg-string {
  display: flex;
  flex-direction: column;
}
.ok {
  width: 160px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}
.cancel {
  width: 105px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}
.registration {
  width: 265px;
  height: 38px;

  padding-left: 15px;
  margin-bottom: 20px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  opacity: 0.8;
}
.registration-modal .registration-modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.registration-modal-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.registration-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #ffffff;

    padding-bottom: 30px;
    padding-left: 45px;
    padding-top: 30px;
  }
  h2 {
    padding-bottom: 40px;

    font-family: "Roboto";
    font-style: normal;
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
.registration-modal-content {
  width: 562px;
  height: 417px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
.person-name-id {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-content: center;
  flex-wrap: wrap;

  width: 562px;
  height: 72px;
  margin-bottom: 30px;

  border-radius: 10px 10px 0px 0px;
  background-color: #141232;
}
.can-del {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.person-block {
  padding-left: 45px;

  display: flex;
  flex-direction: column;
}
.person-string-input {
  display: flex;
}
.person-input {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.person-string {
  display: flex;
  flex-direction: column;
}
.delete {
  width: 160px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}
.cancel {
  width: 105px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}
.personal {
  width: 265px;
  height: 38px;

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
.personal-modal .personal-modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.personal-modal-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.personal-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #ffffff;

    padding-bottom: 30px;
    padding-left: 45px;
    padding-top: 30px;
  }
  h2 {
    padding-bottom: 40px;

    font-family: "Roboto";
    font-style: normal;
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
.personal-modal-content {
  width: 562px;
  height: 417px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
