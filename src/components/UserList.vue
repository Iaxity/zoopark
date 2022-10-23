<template>
  <div class="userlist">
    <div class="btn__animals">
      <h1>UserList</h1>
      <button class="btn-removed">Removed</button>
    </div>
    <div class="filter">
      <h2>Filter_1</h2>
      <input
        type="search"
        class="search-field"
        placeholder=""
        value=""
        name="s"
      />
      <h2>Filter_2</h2>
      <input
        type="search"
        class="search-field"
        placeholder=""
        value=""
        name="s"
      />
      <h2>Filter_3</h2>
      <input
        type="search"
        class="search-field"
        placeholder=""
        value=""
        name="s"
      />
    </div>
    <div class="table">
      <table>
        <tr>
          <th>Id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>password</th>
          <th>actions</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.btn-removed {
  background: #fca311;
  border-radius: 10px;
  width: 110px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.search-field {
  width: 95px;
  height: 25px;
  left: 332px;
  top: 167px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  margin-right: 10px;
}
.btn__animals {
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  h1 {
    margin-right: 20px;
  }
}
.filter {
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
