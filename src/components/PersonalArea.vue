<template>
  <button @click="openModal()" class="name">{{ name }}</button>
  <div v-if="modalOpened" class="personal-modal">
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
              <input placeholder="Password" class="personal" type="password" />
              <input placeholder="E-mail" class="personal" type="text" />
              <input placeholder="Phone" class="personal" type="text" />
              <div class="can-del">
                <button class="cancel">Cancel</button>
                <button class="delete">Delete profile</button>
              </div>
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
.name {
  background: none;
  border: 0px solid;
}
.delete {
  width: 160px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.9);

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

  color: rgba(0, 0, 0, 0.9);

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
