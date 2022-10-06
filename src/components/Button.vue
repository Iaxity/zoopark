<template>
  <button
    style="
      width: 90px;
      height: 30px;
      left: 836px;
      top: 9px;

      background: #fca311;
      border-radius: 10px;

      cursor: pointer;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      color: rgba(0, 0, 0, 0.9);
    "
  >
    Logout
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss">
button {
  width: 205px;
  height: 50px;
  left: 20px;
  top: 178px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: white;
  background: #332f5f;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
  &:hover {
    background: #fca311;
  }
}
</style>
