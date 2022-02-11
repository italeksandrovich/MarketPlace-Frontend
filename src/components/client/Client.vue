<template>
  <div class="client">
    <div class="client-top">
      <div class="client-arrow">
        <button class="arrow">
          <img src="@/assets/image/icons/arrow-left.svg" alt="" />
        </button>
      </div>
      <div class="client-info">
        <div class="client-img-wrapper">
          <div class="client-img">
            <img src="@/assets/image/icons/iconforphoto.png" alt="" />
          </div>
        </div>
        <div class="client-name">
          <h3 class="name">Имя Фамилия</h3>
          <p class="specialization">Специализация</p>
        </div>
      </div>
      <div class="client-dashboard" @click="setStatus(true)">
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
          <button @click="showInfo">
            <img src="@/assets/image/icon.svg" alt="" />
            <span>Описание</span>
          </button>
          <button @click="showFeedback">
            <img src="@/assets/image/icon.svg" alt="" />
            <span>Отзывы</span>
          </button>
        </div>
        <div class="master-general-info" v-if="selected">
          <p>здесь будет описание мастера</p>
        </div>
        <div class="client-feedback" v-if="!selected">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="rating in ratings" :key="rating.name">
              <div class="feedbacks">
                <h4 class="feedbacks-title">Имя</h4>
                <RatingStar
                  v-model="rating.value"
                  :name="rating.name"
                  :disabled="rating.disabled"
                />
                <p class="feedbacks-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore libero iure, id consectetur illo dignissimos eum
                  pariatur debitis modi expedita
                  <span class="read-less" v-if="!readMore">...</span>
                  <span class="read-more" v-if="readMore">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores sit fugiat omnis aliquid eum distinctio!</span
                  >
                  <button
                    class="feedbacks-more"
                    @click="showMore"
                    v-if="!readMore"
                  >
                    Читать больше
                  </button>
                  <button
                    class="feedbacks-less"
                    @click="showLess"
                    v-if="readMore"
                  >
                    Скрыть
                  </button>
                </p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="client-map">
          <YandexMap v-model="activeCard" :adresses="cards" />
        </div>
        <div class="client-cards" v-if="cards.length">
          <ClientCard :item="cards[activeCard]" />
        </div>
        <div class="client-need-info">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="rating in ratings" :key="rating.name">
              <div class="masters-button-wrapper">
                <button class="masters-work">
                  <img src="@/assets/image/icons/trophy.svg" alt="" />
                  <span> Работы</span>
                </button>
                <button class="masters-work">
                  <img src="@/assets/image/icons/girl.svg" alt="" />
                  <span> Рабочее место</span>
                </button>
                <button class="masters-work">
                  <img src="@/assets/image/icons/photocam.svg" alt="" />
                  <span> Все фото</span>
                </button>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import RatingStar from "@/components/client/RatingStar";
import YandexMap from "@/components/client/YandexMap";
import ClientCard from "@/components/client/ClientCard.vue";
import { mapMutations } from "vuex";

export default {
  name: "client",
  components: {
    Swiper,
    SwiperSlide,
    RatingStar,
    YandexMap,
    ClientCard,
  },
  directives: {
    swiper: directive,
  },

  data() {
    return {
      selected: false,
      readMore: false,
      activeCard: 0,
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
      swiperOptions: {
        dots: false,
        pagination: {
          el: ".swiper-pagination",
          autoHeight: false,
          effect: "cards",
        },
      },
      ratings: [
        {
          value: 1,
          name: "card_1",
          disabled: false,
        },
        {
          value: 1,
          name: "card_2",
          disabled: false,
        },
        {
          value: 1,
          name: "card_3",
          disabled: false,
        },
        {
          value: 1,
          name: "card_4",
          disabled: false,
        },
      ],
      cards: [
        {
          imgUrl: require("@/assets/image/icons/iconforphoto.png"),
          name: "ooo beauty",
          adresses: ["ddf", "iii", "dkf"],
          coords: [55.783654, 37.384519],
          subway: ["ffvfvf", "skjk", "ksuhdsu"],
        },
        {
          imgUrl: require("@/assets/image/icons/iconforphoto.png"),
          name: "hair salon",
          adresses: ["ddf", "kejdj", "ekhuf"],
          coords: [55.683659, 37.584515],
          subway: ["sssccs", "shgdj", "sljjd"],
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      setStatus: "SET_SIDEBAR_STATUS",
    }),
    showMore() {
      this.readMore = true;
    },
    showLess() {
      this.readMore = false;
    },

    showInfo() {
      this.selected = true;
    },
    showFeedback() {
      this.selected = false;
    },
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
.client {
  background: #ffffff;

  &-top {
    display: flex;
    gap: 50px;
  }

  .arrow {
    width: 32px;
    height: 32px;
    padding: 7px 9px 7px 7px;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c9c9c9;
    width: 113px;
    height: 113px;
    margin-bottom: 50px;
    border-radius: 20px;
  }

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
    width: 50px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  &-name {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      color: #141313;
      font-weight: 200;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .specialization {
      color: #141313;
      font-weight: 700;
      font-size: 16px;
    }
  }

  &-dashboard {
    cursor: pointer;
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
    margin-bottom: 8px;
  }

  &-rate {
    display: flex;
    align-items: center;
    flex: 1;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 20px 10px;
    white-space: nowrap;

    &:not(:nth-child(odd)) {
      margin: 10px;
    }

    p {
      color: #000000;
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
      font-size: 14px;
      text-align: center;
    }
  }

  &-all-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;

    button {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 13px 20px 13px 20px;
      border-radius: 10px;
      border: none;
      outline: none;
      cursor: pointer;

      &:hover {
        background: #19a0fc;
        font-weight: 600;

        span {
          color: #ffffff;
          font-size: 12px;
        }
      }
    }

    span {
      margin-top: 5px;
      color: #141313;
      font-size: 12px;
      margin-left: 5px;
    }
  }

  &-feedback {
    margin-bottom: 73px;
  }

  .feedbacks {
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 17px 30px 30px;
    border-radius: 10px;

    &-title {
      color: #000000;
      font-size: 12px;
      font-weight: 400;
    }

    button {
      color: #19a0fc;
      background: transparent;
      font-size: 14px;
      font-weight: 800;
      border: none;
      cursor: pointer;
    }
  }

  .master-general-info {
    background: #f9f9f9;
    padding: 17px 30px 30px;
    margin-bottom: 73px;
    border-radius: 10px;
  }

  .masters-button-wrapper {
    display: flex;
    align-items: center;
  }

  .masters-work {
    background: #f9f9f9;
    display: flex;
    align-items: center;
    padding: 14px 16px;
    border-radius: 10px;
    white-space: nowrap;

    &:not(:nth-child(odd)) {
      margin: 8px;
    }

    span {
      color: #141313;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
