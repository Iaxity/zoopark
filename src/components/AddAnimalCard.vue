<template>
  <div v-show="isAddAnimalShown" class="modal__addanimalcard">
    <div class="modal__addanimalcard-background">
      <div class="modal__addanimalcard-content">
        <div class="modal__addanimalcard-item">
          <h1>Add animal card</h1>
        </div>
        <div class="modal__addanimalcard-block">
          <div class="modal__addanimalcard-string_input">
            <div class="modal__addanimalcard-string">
              <h2>Animal type</h2>
              <h2>Animal birthday</h2>
              <h2>Aviary number</h2>
              <h2>Moniker</h2>
              <h2>Animal food</h2>
              <h2>Description</h2>
            </div>
            <div class="modal__addanimalcard-input">
              <input
                v-model="animal.Animaltype"
                class="modal__addanimalcard-inp"
                type="text"
              />
              <input
                v-model="animal.Animalbirthday"
                class="modal__addanimalcard-inp"
                type="text"
              />
              <input
                v-model="animal.Aviarynumber"
                class="modal__addanimalcard-inp"
                type="text"
              />
              <input
                v-model="animal.Moniker"
                class="modal__addanimalcard-inp"
                type="text"
              />
              <input
                v-model="animal.Animalfood"
                class="modal__addanimalcard-inp"
                type="text"
              />
              <input
                v-model="animal.Description"
                class="modal__addanimalcard-inp"
                type="text"
              />
            </div>
            <div class="modal__addanimalcard-photo">
              <h2>Upload a photo</h2>
              <div class="modal__addanimalcard-over">
                <div class="modal__addanimalcard-over_photo">
                  <button class="modal__addanimalcard-overview">
                    Overview
                  </button>
                  <button
                    @click="shownShowPhoto"
                    class="modal__addanimalcard-show_photo"
                  ></button>
                </div>
                <div class="modal__addanimalcard-cancel_apply">
                  <button
                    @click="closeModal"
                    class="modal__addanimalcard-cancel_btn"
                  >
                    Cancel
                  </button>
                  <button
                    @click="addNewAnimal"
                    class="modal__addanimalcard-apply_btn"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, reactive, ref } from "vue";

const shownShowPhoto = ref(false);

const emit = defineEmits(["close"]);
const closeModal = () => {
  animal.Animalbirthday = "";
  animal.Animaltype = "";
  animal.Aviarynumber = "";
  animal.Moniker = "";
  animal.Animalfood = "";
  animal.Description = "";
  emit("close");
};
const addNewAnimal = () => {
  closeModal();
};
const animal = reactive({
  Animaltype: "",
  Animalbirthday: "",
  Aviarynumber: "",
  Moniker: "",
  Animalfood: "",
  Description: "",
});
const isAddAnimalShown = ref(false);
</script>

<style lang="scss">
.modal__addanimalcard-add {
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
.modal__addanimalcard-over_photo {
  display: flex;
  padding-bottom: 20px;
}
.modal__addanimalcard-over--appl {
  padding-left: 45px;
}
.modal__addanimalcard-over {
  padding-left: 47px;
}
.modal__addanimalcard-overview {
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
.modal__addanimalcard-show_photo {
  background: #14213d url(../assets/preview_photo.jpg) no-repeat center / cover;

  width: 151px;
  height: 109px;

  border-radius: 10px;
  border: 0px solid;
}
.modal__addanimalcard-item {
  display: flex;
  justify-content: center;

  width: 562px;
  height: 72px;
  margin-bottom: 30px;

  border-radius: 10px 10px 0px 0px;
}
.modal__addanimalcard-photo {
  display: flex;
}
.modal__addanimalcard-block {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.modal__addanimalcard-string_input {
  display: flex;
  flex-wrap: wrap;
}
.modal__addanimalcard-input {
  padding-left: 40px;

  display: flex;
  flex-direction: column;
}
.modal__addanimalcard-string {
  display: flex;
  flex-direction: column;
}
.modal__addanimalcard-apply_btn {
  width: 105px;
  height: 30px;

  margin-right: 0px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.modal__addanimalcard-cancel_btn {
  width: 105px;
  height: 30px;

  margin-right: 20px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.modal__addanimalcard-cancel_apply {
  padding-left: 50px;
}
.modal__addanimalcard-inp {
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
.modal__addanimalcard .modal__addanimalcard-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal__addanimalcard-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__addanimalcard {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

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
.modal__addanimalcard-content {
  width: 583px;
  height: 685px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
