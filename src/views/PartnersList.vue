<template>
  <div class="partners-list">
    <div class="container">
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
        <div class="user-info__footer">
          <p class="textCenter">80% клиентов рекомендуют</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PartnersList'
  }
</script>

<style lang="scss" scoped>

  .user-info {
    margin-bottom: 16px;

    &__header {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      margin-bottom: 8px;
    }
    &__img {
      position: relative;
      width: 71px;
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
        width: 34px;
        height: 34px;
        object-fit: contain;
      }
    }
    .verified {
      position: absolute;
      background-color: #fff;
      border-bottom-right-radius: 8px;
      width: 23px;
      height: 23px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;

      img {
        width: 16px;
        height: 14px;
        object-fit: contain;
      }
    }
    &__content {
      h5 {
        color: #141313;
        margin-bottom: 4px;
      }
      p {
        color: #939393;
      }
    }
    &__body {
      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        li {
          flex: 0 0 33.33333%;
          max-width: 33.33333%;
          padding-left: 4px;
          padding-right: 4px;
          margin-bottom: 8px;

          > div {
            padding: 8px;
          }
        }
      }
    }
    &__footer {
      padding: 15px 8px;

      p {
        font-size: 14px;
        color: #141313;
      }
    }
  }

</style>
