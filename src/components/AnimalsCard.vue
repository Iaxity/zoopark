<template>
  <div>
    <h1 style="margin-right: 30px">Animals card</h1>
    <button
      style="
        width: 85px;
        height: 45px;
        left: 836px;
        top: 9px;

        background: #fca311;
        border-radius: 10px;
        margin: 0px 30px 30px 0px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        color: rgba(0, 0, 0, 0.9);
      "
    >
      Add
    </button>
    <button
      style="
        width: 110px;
        height: 45px;
        left: 836px;
        top: 9px;

        background: #fca311;
        border-radius: 10px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        color: rgba(0, 0, 0, 0.9);
      "
    >
      Removed
    </button>
    <h2
      style="
        position: fixed;
        width: 59px;
        height: 21px;
        left: 268px;
        top: 169px;
      "
    >
      Filter_1
    </h2>
  </div>
  <div>
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
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
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
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableAnimalsCard",
  components: {},
};
</script>

<style>
table {
  position: fixed;
  left: 267px;
  top: 206px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;

  width: 100%; /* Ширина таблицы */
  background: white; /* Цвет фона таблицы */
  color: white; /* Цвет текста */
  border-spacing: 3px; /* Расстояние между ячейками */
}
td,
th {
  background: #4c5c81;
  padding: 20px; /* Поля вокруг текста */
}
</style>
