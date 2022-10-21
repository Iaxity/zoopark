<template>
  <div class="animalscard">
    <div class="btn-table">
      <div class="btn__animals">
        <h1>Animals card</h1>
        <button @click="openModalAddCard()" class="btn-add">Add</button>
        <div v-if="modalOpenedAddCard" class="add-animal-card-modal">
          <div class="add-animal-card-modal-background">
            <div class="add-animal-card-modal-content">
              <div class="add-animal-card-name-id">
                <h1>Add animal card</h1>
              </div>
              <div class="add-animal-card-block">
                <div class="add-animal-card-string-input">
                  <div class="add-animal-card-string">
                    <h2>Animal type</h2>
                    <h2>Animal birthday</h2>
                    <h2>Aviary number</h2>
                    <h2>Moniker</h2>
                    <h2>Animal food</h2>
                    <h2>Description</h2>
                  </div>
                  <div class="add-animal-card-input">
                    <input class="add-animal-card" type="text" />
                    <input class="add-animal-card" type="text" />
                    <input class="add-animal-card" type="text" />
                    <input class="add-animal-card" type="text" />
                    <input class="add-animal-card" type="text" />
                    <input class="add-animal-card" type="text" />
                  </div>
                  <div class="upload">
                    <h2>Upload a photo</h2>
                    <div class="over">
                      <div class="over--photo">
                        <button class="overview">Overview</button>
                        <div class="show_photo"></div>
                      </div>
                      <div class="can--appl">
                        <button class="cancel-btn">Cancel</button>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpenedAddCard: false,
      modalExit: false,
    };
  },
  methods: {
    exitModal() {
      this.modalExit = true;
    },
    openModalAddCard() {
      this.modalOpenedAddCard = true;
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
}
.btn-removed {
  background: #fca311;
  border-radius: 10px;
  width: 110px;
  height: 45px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
}
.btn-table {
  display: flex;
  flex-direction: column;
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
.search-field {
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
  h1 {
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
.overview {
  width: 106px;
  height: 30px;

  margin-bottom: 20px;
  margin-right: 20px;

  border: 1px solid #fca311;
  border-radius: 10px;

  background: none;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
}
.show_photo {
  background: url(../assets/preview_photo.jpg), #14213d;
  border-radius: 10px;
}
.add-animal-card-name-id {
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
.add-animal-card-block {
  padding-left: 30px;

  display: flex;
  flex-direction: column;
}
.add-animal-card-string-input {
  display: flex;
  flex-wrap: wrap;
}
.add-animal-card-input {
  padding-left: 40px;

  display: flex;
  flex-direction: column;
}
.add-animal-card-string {
  display: flex;
  flex-direction: column;
}
.apply {
  width: 105px;
  height: 30px;

  background: #fca311;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: rgba(0, 0, 0, 0.9);
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

  color: rgba(0, 0, 0, 0.9);
}
.can--appl {
  display: flex;
}
.add-animal-card {
  width: 262px;
  height: 35px;

  padding-left: 15px;
  margin-bottom: 7px;

  background: rgba(229, 229, 229, 0.6);
  border-radius: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  opacity: 0.8;
  &:nth-child(5) {
    margin-bottom: 20px;
  }
  &:nth-child(6) {
    margin-bottom: 20px;

    width: 262px;
    height: 130px;

    background: rgba(229, 229, 229, 0.6);
    border-radius: 10px;
  }
}
.add-animal-card-modal .add-animal-card-modal-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.add-animal-card-modal-background {
  background-color: rgba(10, 10, 10, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-animal-card-modal {
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
.add-animal-card-modal-content {
  width: 583px;
  height: 637px;

  background-color: #14213d;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 5px rgba(20, 33, 61, 0.15);

  display: flex;
  flex-direction: column;
}
</style>
