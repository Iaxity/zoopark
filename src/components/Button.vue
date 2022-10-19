<template>
  <button id="modal-authorization" class="logout">Logout</button>
</template>

<script>
export default {
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
.logout {
  width: 90px;
  height: 30px;
  margin-right: 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.9);

  background: #fca311;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;
}
</style>
