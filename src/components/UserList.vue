<template>
  <div class="userlist">
    <div class="userlist__btn">
      <h1>UserList</h1>
      <button class="userlist__btn_remove">Removed</button>
    </div>
    <div class="userlist__filter">
      <h2>Filter_1</h2>
      <input type="search" class="userlist__search" />
      <h2>Filter_2</h2>
      <input type="search" class="userlist__search" />
      <h2>Filter_3</h2>
      <input type="search" class="userlist__search" />
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>password</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usersList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.password }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserlist } from "@/services/userlist-sevice";
// const users = ref(null);
const usersList = ref(null);
onMounted(async () => {
  const response = await getUserlist(0, 8);
  usersList.value = response;
});
</script>

<style lang="scss">
.userlist__btn_remove {
  background: #fca311;
  border-radius: 10px;
  width: 110px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.userlist__search {
  width: 95px;
  height: 25px;
  left: 332px;
  top: 167px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  margin-right: 10px;
}
.userlist__btn {
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  h1 {
    margin-right: 20px;
  }
}
.userlist__filter {
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
.userlist {
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: #ffffff;
  padding-bottom: 20px;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
