<template>
  <div class="password">
    <div class="password-top">
      <h3 class="password-title">Восстановление пароля</h3>
      <p class="password-text">
        Введите номер телефона или почтовый адрес. Мы вышлем вам код
        подтверждения
      </p>
    </div>
    <div class="password-main">
      <input type="text" name="" id="" placeholder="Введите ваши данные" />
      <vue-recaptcha
        ref="recaptcha"
        theme
        @verify="onVerify"
        @expired="onExpired"
        :load-recaptcha-script="true"
        sitekey="6LfmDFceAAAAANN9yFUJDus0dpPab4GLNARhnS9A"
        style="
          transform: scale(0.85);
          -webkit-transform: scale(0.85);
          transform-origin: 0 0;
          -webkit-transform-origin: 0 0;
        "
      >
      </vue-recaptcha>
      <button
        class="receive"
        type="submit"
        @click="$emit('receiveCode', 'confirm')"
      >
        Получить код
      </button>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "Password",
  components: { VueRecaptcha },
  data: () => ({
    sitekey: "6LfmDFceAAAAANN9yFUJDus0dpPab4GLNARhnS9A",
  }),
  methods: {
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function (response) {
      console.log("Verify: " + response);
    },
    onExpired: function () {},
  },
};
</script>

<style lang="scss" scoped>
.password {
  position: relative;
  max-width: 300px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;

  &-title {
    color: #141313;
    font-size: 12px;
    text-align: center;
  }

  &-text {
    color: #141313;
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    margin: 20px 0 20px 0;
  }

  &-main {
    display: flex;
    flex-direction: column;

    input {
      padding: 17px 100px 17px 15px;
      margin-bottom: 5px;
      color: #141313;
      font-size: 12px;
      font-weight: 400;
      border-radius: 8px;
      border: none;
      outline: none;
    }

    .receive {
      color: #ffffff;
      background: #c4c4c4;
      font-size: 11px;
      font-weight: 400;
      text-align: center;
      padding: 23px 50px;
      margin-bottom: 12px;
      border-radius: 10px;
      border: none;
      cursor: pointer;

      &:hover {
        color: #ffffff;
        background: #19a0fc;
      }

      &:disabled {
        background: #c4c4c4;
        cursor: not-allowed;
      }
    }
  }
}
</style>
