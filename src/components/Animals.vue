<template>
  <div class="animals">
    <div class="btn__animals">
      <h1 style="margin-right: 30px">Animals</h1>
      <button @click="openModalAdd()" class="btn-add">Add</button>
      <div v-if="modalOpenedAdd" class="add-animal--modal">
        <div class="add-animal--modal-background">
          <div class="add-animal--modal-content">
            <div class="add-animal--name-id">
              <h1>Add animal</h1>
            </div>
            <div class="add-animal--block">
              <div class="add-animal--string-input">
                <div class="add-animal--string">
                  <h2>Animal type</h2>
                  <h2>Animal description</h2>
                </div>
                <div class="add-animal--input">
                  <input class="add-animal-" type="text" />
                  <input class="add-animal-" type="text" />
                </div>
                <div class="upload">
                  <div class="over">
                    <div class="can--appl">
                      <button @click="exitModalAdd()" class="cancel-btn">
                        Cancel
                      </button>
                      <button class="apply">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-removed">Removed</button>
    </div>
    <div class="filter">
      <h2>Filter_1</h2>
      <input type="search" class="search-field" />
      <h2>Filter_2</h2>
      <input type="search" class="search-field" />
      <h2>Filter_3</h2>
      <input type="search" class="search-field" />
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
export default {
  data() {
    return {
      modalOpenedAdd: false,
    };
  },
  methods: {
    exitModalAdd() {
      this.modalOpenedAdd = false;
    },
    openModalAdd() {
      this.modalOpenedAdd = true;
    },
  },
};
</script>

<style lang="scss">
.btn-add {
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
.over--appl {
  padding-left: 45px;
}
.over {
  padding-left: 47px;
}
.add-animal--name-id {
  display: flex;
  justify-content: center;

  width: 562px;
  height: 72px;
  margin-bottom: 30px;

  border-radius: 10px 10px 0px 0px;
}
.upload {
  display: flex;
}
.add-animal--block {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.add-animal--string-input {
  display: flex;
  flex-wrap: wrap;
}
.add-animal--input {
  padding-left: 40px;

  display: flex;
  flex-direction: column;
}
.add-animal--string {
  display: flex;
  flex-direction: column;
}
.apply {
  width: 105px;
  height: 30px;

  margin-right: 0px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.cancel-btn {
  width: 105px;
  height: 30px;

  margin-right: 20px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.can--appl {
  padding-left: 50px;
}
.add-animal- {
  width: 218px;
  height: 31px;

  padding-left: 15px;
  margin-bottom: 7px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  opacity: 0.8;
  &:nth-child(2) {
    margin-bottom: 20px;

    height: 121px;

    background: rgba(229, 229, 229, 0.6);
    border-radius: 10px;
  }
}
.add-animal--modal .add-animal--modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.add-animal--modal-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-animal--modal {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #fca311;

    padding-bottom: 25px;
    padding-top: 25px;
  }
  h2 {
    padding-bottom: 23px;

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
.add-animal--modal-content {
  width: 490px;
  height: 336px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
