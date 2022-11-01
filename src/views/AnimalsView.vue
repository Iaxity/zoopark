<template>
  <div>
    <div class="animals__btn_add">
      <h1>Animals</h1>
      <button @click="shownAddAnimal = true" class="modal__addanimal-add">
        Add
      </button>
      <button class="animals__btn_remove">Removed</button>
    </div>
    <Animals />
    <!-- Modal AddAnimalCard -->
    <AddAnimal v-show="shownAddAnimal" @close="shownAddAnimal = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Animals from "../components/Animals.vue";
import AddAnimal from "@/components/AddAnimal.vue";
const shownAddAnimal = ref(false);
</script>

<style lang="scss">
.animals__btn_add {
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  h1 {
    margin-right: 20px;
    color: white;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
