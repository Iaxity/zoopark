<template>
  <div>
    <div class="animalscard__btn_add">
      <h1>Animals card</h1>
      <button @click="shownAddAnimal = true" class="modal__addanimalcard-add">
        Add
      </button>
      <button class="animalscard__btn_remove">Removed</button>
    </div>
    <AnimalsCard />
    <!-- Modal AddAnimalCard -->
    <AddAnimalCard v-show="shownAddAnimal" @close="shownAddAnimal = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AnimalsCard from "@/components/AnimalsCard.vue";
import AddAnimalCard from "@/components/AddAnimalCard.vue";

const shownAddAnimal = ref(false);
</script>

<style lang="scss">
.animalscard__btn_add {
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
