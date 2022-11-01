<template>
  <div v-show="shownPersonalArea" class="modal__personalarea">
    <div class="modal__personalarea-background">
      <div class="modal__personalarea-content">
        <div class="modal__personalarea-name_id">
          <h1 style="padding-right: 20px">{{ name }}</h1>
          <h3>id {{ id }}</h3>
        </div>
        <div class="modal__personalarea-block">
          <div class="modal__personalarea-string_input">
            <div class="modal__personalarea-string">
              <h2>Name</h2>
              <h2>Password</h2>
              <h2>E-mail</h2>
              <h2>Phone</h2>
            </div>
            <div class="modal__personalarea-input">
              <input
                placeholder="Name"
                class="modal__personalarea-inp"
                type="text"
              />
              <input
                placeholder="Password"
                class="modal__personalarea-inp"
                type="password"
              />
              <input
                placeholder="E-mail"
                class="modal__personalarea-inp"
                type="text"
              />
              <input
                placeholder="Phone"
                class="modal__personalarea-inp"
                type="text"
              />
              <div class="can-del">
                <button
                  class="modal__personalarea-cancel_btn"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <!-- Modal DeleteProfile -->
                <button
                  @click="shownDeleteProfile = true"
                  class="modal__personalarea-delete_btn"
                >
                  Delete profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteProfile
    v-show="shownDeleteProfile"
    @close="showDeleteProfile = false"
  />
</template>

<script setup>
import { ref, defineEmits } from "vue";
import DeleteProfile from "@/components/DeleteProfile.vue";
const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
const shownDeleteProfile = ref(false);
</script>

<style lang="scss">
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
.modal__personalarea-name_id {
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
.modal__personalarea-block {
  padding-left: 45px;

  display: flex;
  flex-direction: column;
}
.modal__personalarea-string_input {
  display: flex;
}
.modal__personalarea-input {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.modal__personalarea-string {
  display: flex;
  flex-direction: column;
}
.modal__personalarea-delete_btn {
  width: 160px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;

  margin-left: 25px;
}
.modal__personalarea-cancel_btn {
  width: 105px;
  height: 40px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  cursor: pointer;
}
.modal__personalarea-inp {
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
.modal__personalarea .modal__personalarea-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal__personalarea-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__personalarea {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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
.modal__personalarea-content {
  width: 562px;
  height: 417px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
