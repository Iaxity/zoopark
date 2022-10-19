<template>
  <div class="modal-authorization">
    <h1>Authorization</h1>
    <input
      type="search"
      class="search-field"
      placeholder=""
      value=""
      name="s"
    />
    <input
      type="search"
      class="search-field"
      placeholder=""
      value=""
      name="s"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search-field {
  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #000000;

  opacity: 0.8;
}
.modal-authorization {
  display: flex;
  justify-content: center;
  background: #14213d;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #fca311;
  }
}
</style>
