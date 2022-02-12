<template>
  <div class="client-card">
    <div class="client-card-header">
      <div class="client-icon">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <div class="client-body">
      <div :class="[{open : adressStatus}, 'client-items', 'adresses']">
        <div class="item-header" @click="adressStatus = !adressStatus">
          <div class="item-header__icon">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
              />
            </svg>
          </div>
          <h6 class="item-header__text">Адрес</h6>
        </div>
        <ul class="item-body">
          <li
            class="item__content adress"
            v-for="(adress, idx) in adresses"
            :key="idx"
          >
            {{ adress }}
          </li>
        </ul>
      </div>
      <div :class="[{ open : subwayStatus }, 'client-items', 'subway']" >
        <div class="item-header" @click="subwayStatus = !subwayStatus">
          <div class="item-header__icon">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
              />
            </svg>
          </div>
          <h6 class="item-header__text">Метро</h6>
        </div>
        <ul class="item-body">
          <li
            class="item__content sub"
            v-for="(element, idx) in subway"
            :key="idx"
          >
            {{ element }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "client-card",
  data() {
    return {
      adressStatus: false,
      subwayStatus: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed:{
    adresses(){
      if(this.item.adresses.length < 2) {
        return this.item.adresses
      }

      if(this.adressStatus) {
        return this.item.adresses
      }

      return this.item.adresses.slice(0, 2)
    },
    subway() {
      if(this.subwayStatus) {
        return this.item.subway
      }

      return []
    }
  }
};
</script>

<style lang="scss" scoped>
.client {
  &-card {
    background: #f9f9f9;
    width: 200px;
    height: auto;
    padding: 51px 16px 16px 26px;
    border-radius: 10px;
    position: relative;

    &-header {
      position: absolute;
      top: 0;
      transform: translateY(-50%);
    }
  }

  &-items {
    display: flex;
    flex-direction: column;
    color: #141313;

    &.open {
      color: #939393;

      .item__content {
        color: #141313;
      }

      .item-header__icon {
        transform: rotate(180deg);
      }
    }
  }

  &-icon {
    background: #c4c4c4;
    padding: 15px;
    border-radius: 10px;
  }

  .item {
    &-header {
      display: flex;
      align-items: center;

      &__icon {
        display: flex;
        align-items: center;
        width: 5px;
        height: 5px;
        margin-right: 5px;
        transition: 0.3s;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      &__text {
        font-size: 14px;
        font-weight: 400;
      }
    }

    &__body{
      position: relative;
    }

    &__content { 
      list-style: none;
      color: #939393;
      font-size: 12px;
      font-weight: 400px;

      &.sub::before{
         content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #c4c4c4;
          margin-right: 4px;
          border-radius: 50%;
          left: 17px;
          transform: translateY(5px);
          
      }
      

      &.adress{
        margin-bottom: 17px;
        list-style: none; 
     
      }
       
      &:not(:last-child){
        margin-bottom: 5px;
      }
      
    }
  }
}
</style>
