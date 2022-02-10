<template>
  <div>
    <div class="filter-block">
      <div class="filter-button-calendar" @click="showCaledar = true">
        Сегодня, 27 Января
        <img src="@/assets/image/icons/selectArrow.svg" alt="arrow" />
      </div>
      <div v-if="showCaledar" class="filter-calednar__block">
        <div class="filter-calednar__header">
          <button class="arrow" @click="showCaledar = false">
            <img src="@/assets/image/icons/arrow.svg" alt="" />
          </button>
        </div>
        <div class="filter-calednar__body">
          <ul class="calednar-list">
            <li class="calednar-item btn w-100 p-3 btn-white">
              Сегодня, 27 Января
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Завтра, 28 Января
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Суббота, 29 Января
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Воскресенье, 30 Января
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Понедельник, 31 Января
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Втоник, 1 Февраля
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Среда, 2 Февраля
            </li>
            <li class="calednar-item btn w-100 p-3 btn-white">
              Четверг, 3 Февраля
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnersFilter",
  data(){
    return{
      showCaledar:false,
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  &-block {
    background-color: #f9f9f9;
    padding: 13px;
    margin: 8px 0;
    border-radius: 8px;
  }
  &-button-calendar {
    padding: 16px;
    text-align: center;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-left: 13px;
    }
  }
  &-calednar {
    &__block {
      width: 100%;
      height: 100vh;
      overflow-y: auto;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #f9f9f9;
      z-index: 4;
      margin-top: 56px;
      .arrow {
        width: 32px;
        height: 32px;
        padding: 7px 9px 7px 7px;
        border-radius: 50px;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-left: 5px;
          transform: rotate(-180deg);
        }
      }
    }
    &__header {
      position: fixed;
      top: 0;
      padding: 12px;
      width: 100%;
      background-color: #f9f9f9;
    }
    &__body {
      padding: 0 13px;
      .calednar-item {
        background-color: #fff;
        margin-bottom: 10px;
        color: #141313;
      }
    }
  }
}
</style>
