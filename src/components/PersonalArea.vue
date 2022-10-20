<template>
  <button @click="openModal()" class="name">{{ name }}</button>
  <div v-if="modalOpened" class="personal-modal">
    <div class="personal-modal-background">
      <div class="personal-modal-content">
        <div class="log-pass">
          <div class="name-id">
            <h1>{{ name }}</h1>
          </div>
          <input placeholder="Name" class="personal" type="text" />
          <input placeholder="Password" class="personal" type="password" />
          <input placeholder="E-mail" class="personal" type="text" />
          <input placeholder="Phone" class="personal" type="text" />
          <div class="reg-log">
            <button class="cancel">Cancel</button>
            <button class="delete">Delete profile</button>
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
.name-id {
  width: 562px;
  height: 72px;

  border-radius: 10px 10px 0px 0px;
  background-color: #141232;
}
.name {
  background: none;
  border: 0px solid;
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
  height: 40px;

  padding-left: 20px;
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

    color: #fca311;

    padding-bottom: 30px;
    padding-left: 75px;
  }
}
.personal-modal-content {
  width: 562px;
  height: 417px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
