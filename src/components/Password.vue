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
          transform: scale(0.9);
          -webkit-transform: scale(0.9);
          transform-origin: 0 0;
          -webkit-transform-origin: 0 0;
        "
      >
      </vue-recaptcha>
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
  background-color: #f9f9f9;
  padding: 16px 16px 45px 16px;
  position: relative;
  max-width: 300px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;

  &-title {
    color: #141313;
    font-family: Heavy;
    font-size: 12px;
    text-align: center;
  }

  &-text {
    color: #141313;
    font-family: Light;
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    margin: 20px 0 20px 0;
  }

  &-main {
    input {
      padding: 17px 100px 17px 15px;
      margin-bottom: 5px;
      color: #141313;
      font-family: "Light";
      font-size: 12px;
      font-weight: 400;
      border-radius: 8px;
      border: none;
      outline: none;
    }
  }
}
</style>
