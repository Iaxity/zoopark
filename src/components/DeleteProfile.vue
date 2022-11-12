<template>
  <div v-show="isDeleteProfileShown" class="modal__deleteprofile">
    <div class="modal__deleteprofile-background">
      <div class="modal__deleteprofile-content">
        <div class="modal__deleteprofile-item">
          <h1>Are you sure want to delete your profile?</h1>
        </div>
        <div class="modal__deleteprofile-block">
          <div class="modal__deleteprofile-string_input">
            <div class="modal__deleteprofile-photo">
              <button
                @click="deleteProfile"
                class="modal__deleteprofile-apply_btn"
              >
                Yes
              </button>
              <button @click="close" class="modal__deleteprofile-cancel_btn">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
const deleteProfile = () => {
  closeModal();
};
const isDeleteProfileShown = ref(false);
</script>

<style lang="scss">
.modal__deleteprofile-add {
  margin-right: 20px;
  background: #fca311;
  border-radius: 10px;
  width: 85px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.modal__deleteprofile-over_photo {
  display: flex;
  padding-bottom: 20px;
}
.modal__deleteprofile-over--appl {
  padding-left: 45px;
}
.modal__deleteprofile-over {
  padding-left: 47px;
}
.modal__deleteprofile-overview {
  width: 106px;
  height: 30px;

  margin-bottom: 20px;
  margin-right: 25px;

  border: 1px solid #fca311;
  border-radius: 10px;

  background: none;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
}
.modal__deleteprofile-show_photo {
  background: #14213d url(../assets/preview_photo.jpg) no-repeat center / cover;

  width: 151px;
  height: 109px;

  border-radius: 10px;
  border: 0px solid;
}
.modal__deleteprofile-item {
  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  border-radius: 10px 10px 0px 0px;
}
.modal__deleteprofile-photo {
  display: flex;
}
.modal__deleteprofile-block {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.modal__deleteprofile-string_input {
  display: flex;
  flex-wrap: wrap;
}
.modal__deleteprofile-input {
  padding-left: 40px;

  display: flex;
  flex-direction: column;
}
.modal__deleteprofile-string {
  display: flex;
  flex-direction: column;
}
.modal__deleteprofile-apply_btn {
  width: 105px;
  height: 30px;

  margin-right: 0px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.modal__deleteprofile-cancel_btn {
  width: 105px;
  height: 30px;

  margin-right: 20px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.modal__deleteprofile-cancel_apply {
  padding-left: 50px;
}
.modal__deleteprofile-inp {
  width: 262px;
  height: 35px;

  padding-left: 15px;
  margin-bottom: 7px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  opacity: 0.8;
  &:nth-child(5) {
    margin-bottom: 20px;
  }
  &:nth-child(6) {
    margin-bottom: 20px;

    width: 262px;
    height: 130px;

    background: rgba(229, 229, 229, 0.6);
    border-radius: 10px;
    z-index: 0;
  }
}
.modal__deleteprofile .modal__deleteprofile-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal__deleteprofile-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__deleteprofile {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #fca311;

    padding-bottom: 25px;
    padding-top: 25px;
  }
  h2 {
    padding-bottom: 23px;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:nth-child(6) {
      padding-top: 3px;
    }
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }
}
.modal__deleteprofile-content {
  width: 262px;
  height: 201px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
