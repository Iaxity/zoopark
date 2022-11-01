<template>
  <div v-show="shownShowPhoto" class="modal__showphoto">
    <div class="modal__showphoto-background">
      <div class="modal__showphoto-content"></div>
    </div>
  </div>
</template>

<script setup>
// import { defineEmits } from "vue";

// const emit = defineEmits(["close"]);
// const closeModal = () => {
//   emit("close");
// };
</script>

<style lang="scss">
.modal__showphoto .modal__showphoto-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal__showphoto-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__showphoto {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal__showphoto-content {
  width: 562px;
  height: 341px;

  background: #14213d url(../assets/photo.jpg) no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
