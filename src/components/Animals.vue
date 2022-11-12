<template>
  <div class="animals">
    <div class="animals__filter">
      <h2>Filter_1</h2>
      <input type="search" class="animals__search" />
      <h2>Filter_2</h2>
      <input type="search" class="animals__search" />
      <h2>Filter_3</h2>
      <input type="search" class="animals__search" />
    </div>
    <div class="table">
      <table>
        <tr>
          <th>Id</th>
          <th>king_of_animal</th>
          <th>actions</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <button @click="isEditAnimalShown = true" class="edit" />
            <button @click="isDeleteAnimalShown = true" class="delete-btn" />
          </td>
        </tr>
      </table>
    </div>
  </div>
  <DeleteEntryAnimal
    v-show="isDeleteAnimalShown"
    @close="isDeleteAnimalShown = false"
  />
  <EditAnimal v-show="isEditAnimalShown" @close="isEditAnimalShown = false" />
</template>

<script setup>
import { ref } from "vue";
import DeleteEntryAnimal from "./DeleteEntryAnimal.vue";
import EditAnimal from "@/components/EditAnimal.vue";

const isEditAnimalShown = ref(false);
const isDeleteAnimalShown = ref(false);
</script>

<style lang="scss">
.animals__btn_remove {
  background: #fca311;
  border-radius: 10px;
  width: 110px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.animals__filter {
  align-items: center;
  display: flex;
  padding-bottom: 15px;
  padding-top: 10px;
  h2 {
    margin-right: 5px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
}
.animals__search {
  width: 95px;
  height: 25px;
  left: 332px;
  top: 167px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  margin-right: 10px;
}
.animals__btn {
  display: flex;
  align-items: center;
  padding-bottom: 25px;
}
.animals {
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: #ffffff;
  align-items: center;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
