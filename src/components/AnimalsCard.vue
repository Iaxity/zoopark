<template>
  <div class="animalscard">
    <div class="animalscard__filter">
      <h2>Filter_1</h2>
      <input type="search" class="animalscard__search" />
      <h2>Filter_2</h2>
      <input type="search" class="animalscard__search" />
      <h2>Filter_3</h2>
      <input type="search" class="animalscard__search" />
    </div>
    <div class="animalscard__table">
      <table>
        <tr>
          <th>Id</th>
          <th>aviary number</th>
          <th>animal</th>
          <th>birthday</th>
          <th>moniker</th>
          <th>description</th>
          <th>food</th>
          <th>actions</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button @click="shownEditAnimal = true" class="edit" />
            <button @click="shownDeleteAnimal = true" class="delete-btn" />
          </td>
        </tr>
      </table>
    </div>
  </div>
  <EditAnimalCard v-show="shownEditAnimal" @close="shownEditAnimal = false" />
  <DeleteAnimalCard
    v-show="shownDeleteAnimal"
    @close="shownDeleteAnimal = false"
  />
  <ShowPhoto v-show="shownShowPhoto" @close="shownShowPhoto = false" />
</template>

<script setup>
import { ref } from "vue";
import EditAnimalCard from "@/components/EditAnimalCard.vue";
import DeleteAnimalCard from "@/components/DeleteEntryAnimalCard.vue";
import ShowPhoto from "@/components/ShowPhoto.vue";

const shownEditAnimal = ref(false);
const shownDeleteAnimal = ref(false);
</script>

<style lang="scss">
.edit {
  width: 25px;
  height: 25px;

  border: 0px solid;
  background: url(../assets/svg/edit.svg);

  margin-right: 20px;
}
.delete-btn {
  width: 25px;
  height: 25px;

  border: 0px solid;
  background: url(../assets/svg/delete-btn.svg);
}
.btn-add {
  margin-right: 20px;
  background: #fca311;
  border-radius: 10px;
  width: 85px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
}
.animalscard__btn_remove {
  background: #fca311;
  border-radius: 10px;
  width: 110px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
}

.animalscard__filter {
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
.animalscard__search {
  width: 95px;
  height: 25px;
  background: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  margin-right: 10px;
}

.animalscard {
  flex-direction: column;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: #ffffff;
  align-items: center;
  z-index: 10;
  h1 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
