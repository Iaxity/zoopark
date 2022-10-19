<template>
  <div class="animals">
    <div class="btn__animals">
      <h1 style="margin-right: 30px">Animals</h1>
      <button class="btn-add">Add</button>
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
          <th>king_of_animal</th>
          <th>actions</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
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
.btn-add {
  margin-right: 20px;
  background: #fca311;
  border-radius: 10px;
  width: 85px;
  height: 45px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.btn-removed {
  background: #fca311;
  border-radius: 10px;
  width: 110px;
  height: 45px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.filter {
  align-items: center;
}
.search-field {
  background: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
}
.animals {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  color: #ffffff;
  padding-bottom: 20px;
  align-items: center;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
}
</style>
