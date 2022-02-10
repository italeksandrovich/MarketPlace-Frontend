<template>
  <div class="user-info">
    <div class="user-info__header">
      <div class="user-info__img">
            <span class="verified">
              <img src="@/assets/image/icons/iconpartnerraiting.png" alt="">
            </span>
        <img src="@/assets/image/icons/iconforphoto.png" alt="">
      </div>
      <div class="user-info__content">
        <h5>Имя <br> Фамилия</h5>
        <p>Терапевт, психиатр, хирург невролог</p>
      </div>
    </div>
    <div class="user-info__body">
      <ul>
        <li>
          <div class="textCenter">Рейтинг <br> 4.8</div>
        </li>
        <li>
          <div class="textCenter">Отзывы <br> 1000</div>
        </li>
        <li>
          <div class="textCenter">Стаж <br> 2 г.</div>
        </li>
      </ul>
    </div>
    <div class="user-info__recommends">
      <p class="textCenter">80% клиентов рекомендуют</p>
    </div>
    <div class="user-tabs__header">
      <div class="user-tabs user-tabs__active">
        <img src="@/assets/image/icon.svg" alt="icon"/>Компания 1
      </div>
      <div class="user-tabs"><img src="@/assets/image/icon.svg" alt="icon"/>Компания 2</div>
    </div>
    <div class="user-tabs__body">
      <div class="user-tabs__list">
        <div class="user-tabs__item user-tabs__item-active">
          <div>
            <b>Услуги</b>
          </div>
          <ul>
            <li>Первичный осмотр <span>Стоимость: 590₽ </span></li>
            <li>Услуга <span>Стоимость: 0₽ </span></li>
            <li class="w-100"><b>Адрес</b> <span>Россия, г. Москва. Ул. 2-я Кабельная. Дом 2. Строение 25, 26, 37.. Офис №308 </span>
            </li>
            <li>Авиамоторная <span>310 м<</span></li>
            <li>Авиамоторная <span>310 м<</span></li>
          </ul>
        </div>
        <!--        <div class="user-tabs__item">-->
        <!--          <div>-->
        <!--            <b>Услуги</b>-->
        <!--          </div>-->
        <!--          <ul>-->
        <!--            <li>Первичный осмотр <span>Стоимость: 590₽ </span></li>-->
        <!--            <li>Услуга <span>Стоимость: 0₽ </span></li>-->
        <!--            <li class="w-100"><b>Адрес</b> <span>Россия, г. Москва. Ул. 2-я Кабельная. Дом 2. Строение 25, 26, 37.. Офис №308 </span>-->
        <!--            </li>-->
        <!--            <li>Авиамоторная <span>310 м<</span></li>-->
        <!--            <li>Авиамоторная <span>310 м<</span></li>-->
        <!--          </ul>-->
        <!--        </div>-->
      </div>
    </div>

    <div class="user-info__text">
      <img src="@/assets/image/icon.svg" alt="icon"/>
      Выберите желаемое время и
      ожидайте подтверждения
    </div>

    <div class="tabs__header">
      <div class="tabs tabs__active">
        Среда, 26
      </div>
      <div class="tabs">Среда, 26</div>
      <div class="tabs">Среда, 26</div>
      <div class="tabs">Среда, 26</div>
      <div class="tabs">Среда, 26</div>
    </div>

    <div class="tabs__header">
      <div class="tabs tabs-min">08:00</div>
      <div class="tabs tabs-min">09:00</div>
      <div class="tabs tabs-min">10:00</div>
      <div class="tabs tabs-min">14:00</div>
      <div class="tabs tabs-min">15:00</div>
      <div class="tabs tabs-min">17:00</div>
      <div class="tabs tabs-min">19:00</div>
    </div>
    <div class="user-info__recommends mb-0">
      <p class="textCenter">Следующий прием: Ср, 27 января</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "PartnersCart"
}
</script>

<style lang="scss" scoped>
.mb-0{
  margin-bottom: 0 !important;
}
.user-info {
  margin-bottom: 16px;
  background-color: #f9f9f9;
  //background-color: red;
  padding: 14px;
  border-radius: 12px;
  margin-bottom: 10px;
  &__header {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  &__img {
    position: relative;
    width: 70px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: #c4c4c4;
    border-radius: 8px;
    padding: 8px;
    margin-right: 16px;

    img {
      width: 42px;
      height: 42px;
      object-fit: contain;
    }
  }

  .verified {
    position: absolute;
    background-color: #fff;
    border-radius: 8px;
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -5px;
    left: -8px;

    img {
      width: 16px;
      height: 14px;
      object-fit: contain;
    }
  }

  &__content {
    flex: 1;

    h5 {
      color: #141313;
      margin-bottom: 4px;
      line-height: 1.2;
    }

    p {
      color: #939393;
      font-size: 10px;
      line-height: 1.2;
    }
  }

  &__body {
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      align-items: center;

      li {
        flex: 0 0 33.33333%;
        max-width: calc(33.33333% - 10px);
        padding-left: 4px;
        padding-right: 4px;
        margin-bottom: 8px;
        background-color: #fff;
        border-radius: 12px;
        font-size: 12px;
        color: rgb(0, 0, 0);
        line-height: 1.2;

        > div {
          padding: 4px 8px;
        }
      }
    }
  }

  &__recommends {
    padding: 12px 8px;
    background-color: #fff;
    border-radius: 12px;
    margin-bottom: 32px;

    p {
      font-size: 14px;
      line-height: 1;
      color: #141313;
    }
  }

  &__text {
    font-size: 14px;
    color: #141313;
    line-height: 1.2;
    margin: 12px 0;
    display: flex;

    img {
      display: block;
      margin-right: 10px;
    }
  }
}

.user-tabs {
  padding: 13px 35px;
  background-color: #fff;
  border-radius: 8px;
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.2;

  img {
    margin-right: 10px;
  }

  &__active {
    font-weight: bold;
    color: #fff;
    background-color: #19a0fc;
  }

  &__header {
    display: flex;
    overflow-x: auto;
    margin: 0 -14px 18px;
    padding: 0 14px;
  }

  &__body {
    font-size: 12px;
    line-height: 1.2;
    color: rgb(20, 19, 19);
    padding: 0 10px;
  }

  &__list {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        margin-bottom: 13px;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #c4c4c4;
          border-radius: 50%;
          left: -10px;
          top: 4px;
        }

        span {
          display: block;
          color: rgb(147, 147, 147);
          margin-top: 5px;
        }
      }

      .w-100 {
        width: 100%;
      }
    }
  }

  &__item {
    &-active {
    }
  }
}
.tabs {
  padding: 18px 22px;
  background-color: #fff;
  border-radius: 8px;
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.2;
  &-min{
    padding: 5px 12px;
  }
  &__active {
    font-weight: bold;
    color: #fff;
    background-color: #19a0fc;
  }

  &__header {
    display: flex;
    overflow-x: auto;
    margin: 0 -14px 18px;
    padding: 0 14px;
  }
}
</style>
