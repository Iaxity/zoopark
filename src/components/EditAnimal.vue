<template>
  <div v-show="shownEditAnimal" class="modal__addanimal">
    <div class="modal__addanimal-background">
      <div class="modal__addanimal-content">
        <div class="modal__addanimal-item">
          <h1>Edit animal</h1>
        </div>
        <div class="modal__addanimal-block">
          <div class="modal__addanimal-string_input">
            <div class="modal__addanimal-string">
              <h2>Animal type</h2>
              <h2>Animal description</h2>
            </div>
            <div class="modal__addanimal-input">
              <input class="modal__addanimal-inp" type="text" />
              <input class="modal__addanimal-inp" type="text" />
              <div class="modal__cancel_apply_btn">
                <button @click="close" class="modal__addanimal-cancel_btn">
                  Cancel
                </button>
                <button @click="close" class="modal__addanimal-apply_btn">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalAddAnimalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style lang="scss">
.modal__addanimal-add {
  margin-right: 20px;
  background: #fca311;
  border-radius: 10px;
  width: 85px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
.modal__addanimal-item {
  display: flex;
  justify-content: center;

  border-radius: 10px 10px 0px 0px;
}
.modal__addanimal-block {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.modal__addanimal-string_input {
  display: flex;
  flex-wrap: wrap;
}
.modal__addanimal-input {
  padding-left: 20px;

  display: flex;
  flex-direction: column;
}
.modal__addanimal-string {
  display: flex;
  flex-direction: column;
}
.modal__addanimal-apply_btn {
  width: 120px;
  height: 30px;

  margin-right: 0px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.9);
}
.modal__addanimal-cancel_btn {
  width: 120px;
  height: 30px;

  margin-right: 20px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.9);
}
.modal__cancel_apply_btn {
  display: flex;
  justify-content: flex-end;
}
.modal__addanimal-inp {
  width: 272px;
  height: 31px;

  padding-left: 15px;
  margin-bottom: 20px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  opacity: 0.8;
  &:nth-child(2) {
    margin-bottom: 15px;

    height: 121px;

    background: rgba(229, 229, 229, 0.6);
    border-radius: 10px;
  }
}
.modal__addanimal .modal__addanimal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal__addanimal-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__addanimal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #fca311;

    padding-bottom: 25px;
    padding-top: 25px;
  }
  h2 {
    padding-bottom: 34px;

    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:nth-child(6) {
      padding-top: 3px;
    }
  }
  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }
}
.modal__addanimal-content {
  width: 580px;
  height: 346px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
