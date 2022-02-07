<template>
  <div class="client">
    <div class="client-top">
      <!-- <div class="client-arrow">
        <button class="arrow">
          <img src="@/assets/image/arrow.svg" alt="" />
        </button>
      </div> -->
      <div class="client-info">
        <div class="client-img">
          <img src="@/assets/image/avatar.svg" alt="" />
        </div>
        <div class="client-name">
          <h3 class="name">Имя Фамилия</h3>
          <p class="specialization">Специализация</p>
        </div>
      </div>
      <div class="client-dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 32 32"
          style="fill: #c9c9c9"
        >
          <path
            d="M 11,0 H 4 A 4,4 0 0 0 0,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 V 4 A 4,4 0 0 0 11,0 Z m 2,11 a 2,2 0 0 1 -2,2 H 4 A 2,2 0 0 1 2,11 V 4 A 2,2 0 0 1 4,2 h 7 a 2,2 0 0 1 2,2 z M 28,0 h -7 a 4,4 0 0 0 -4,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 V 4 A 4,4 0 0 0 28,0 Z m 2,11 a 2,2 0 0 1 -2,2 H 21 A 2,2 0 0 1 19,11 V 4 a 2,2 0 0 1 2,-2 h 7 a 2,2 0 0 1 2,2 z M 11,17 H 4 a 4,4 0 0 0 -4,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 v -7 a 4,4 0 0 0 -4,-4 z m 2,11 a 2,2 0 0 1 -2,2 H 4 A 2,2 0 0 1 2,28 v -7 a 2,2 0 0 1 2,-2 h 7 a 2,2 0 0 1 2,2 z M 28,17 h -7 a 4,4 0 0 0 -4,4 v 7 a 4,4 0 0 0 4,4 h 7 a 4,4 0 0 0 4,-4 v -7 a 4,4 0 0 0 -4,-4 z m 2,11 a 2,2 0 0 1 -2,2 h -7 a 2,2 0 0 1 -2,-2 v -7 a 2,2 0 0 1 2,-2 h 7 a 2,2 0 0 1 2,2 z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="client-body">
      <div class="client-main-info">
        <div class="client-info-wrapper">
          <div class="client-rate star">
            <div class="star">
              <img src="@/assets/image/star.svg" alt="" />
            </div>
            <p class="num">4.8</p>
          </div>
          <div class="client-rate">
            <p>Отзывов 10</p>
          </div>
          <div class="client-rate">
            <p>Стаж 2 г.</p>
          </div>
        </div>
        <div class="client-recommend">
          <p>80% клиентов рекомендуют</p>
        </div>
      </div>
      <div class="client-general">
        <div class="client-all-infos">
          <button>
            <img src="@/assets/image/icon.svg" alt="" />
            <span>Описание</span>
          </button>
          <button>
            <img src="@/assets/image/icon.svg" alt="" />
            <span>Отзывы</span>
          </button>
        </div>
        <div class="client-feedback">
          <Slider
            v-for="(t, ix) in comment"
            :key="ix"
            :name="t.name"
            :text="t.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/client/Slider.vue";
export default {
  name: "client",
  components: { Slider },
  data() {
    return {
      comment: [
        {
          name: "Имя",
          text: "Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов. ",
        },
        {
          name: "Имя",
          text: "Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов. ",
        },
        {
          name: "Имя",
          text: "Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов. ",
        },
        {
          name: "Имя",
          text: "Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов.Разнообразный и богатый опыт говоринты на роль ключевых факторов. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.client {
  &-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .client-top {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  &-img {
    width: 100px;
    height: 100px;
    margin-bottom: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-name {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      color: #141313;
      font-family: "Light";
      font-size: 16px;
      margin-bottom: 10px;
    }

    .specialization {
      color: #141313;
      font-family: "Heavy";
      font-size: 16px;
    }
  }

  &-main-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }

  &-info-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }

  &-rate {
    display: flex;
    align-items: center;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 20px 10px;

    p {
      color: #000000;
      font-family: Light;
      font-size: 12px;
    }

    &.star {
      padding: 15px 10px;
    }
  }

  &-recommend {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 20px 10px;

    p {
      color: #000000;
      font-family: Light;
      font-size: 12px;
      text-align: center;
    }
  }

  &-all-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 20px;
      border-radius: 10px;
      border: none;
      outline: none;
      cursor: pointer;

      &:hover {
        background: #19a0fc;

        span {
          color: #ffffff;
          font-family: "Heavy";
          font-size: 12px;
        }
      }
    }

    span {
      margin-top: 5px;
      color: #141313;
      font-family: "Light";
      font-size: 12px;
      margin-left: 5px;
    }
  }
}
</style>
