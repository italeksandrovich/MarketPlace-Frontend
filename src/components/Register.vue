<template>
  <div class="register">
    <h3 class="register-title">Регистрация в личный кабинет</h3>
    <form class="register-main" @submit.prevent="submit">
      <div class="register-icon">
        <img src="@/assets/image/icons/trophy.svg" alt="" />
      </div>
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="Email для входа"
      />
      <div class="register-icon mail">
        <img src="@/assets/image/icons/trophy.svg" alt="" />
      </div>
      <input v-model="form.phone" type="text" required placeholder="Телефон" />
      <div class="register-message">
        <div class="message-icon">
          <img src="@/assets/image/icons/info.svg" alt="" />
        </div>
        <div class="message-send">
          <p>
            На этот номер вы получите SMS с кодом подтверждения и информацию о
            записи
          </p>
          <button>Отправить еще раз(2) через 30 сек</button>
        </div>
      </div>
      <button class="submit" type="submit" :disabled="invalid">
        Зарегистрироваться
      </button>
      <div class="register-privacy">
        <input v-model="checkbox" type="checkbox" name="" id="done" required />
        <label for="done"
          >Я принимаю <a href="#">условия соглашения</a> и
          <a href="#">разрешаю оброботку персональных данных</a>
        </label>
      </div>
    </form>
    <button @click="$emit('changeStatus', 'login')" class="enter">Войти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        phone: "",
      },
      checkbox: false,
    };
  },
  computed: {
    invalid() {
      if (this.form.email && this.form.phone && this.checkbox) {
        return false;
      }

      return true;
    },
  },
  methods: {
    submit() {
      this.$emit("submited", { ...this.form, status: "register" });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  background-color: #f9f9f9;
  padding: 16px 16px 20px 16px;
  position: relative;
  max-width: 300px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &-title {
    color: #141313;
    font-size: 12px;
    text-align: center;
    margin: 16px 0 35px 0;
  }

  &-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;

    input {
      padding: 16px 50px 16px 45px;
      margin-bottom: 6px;
      background-color: #ffffff;
      border-radius: 7px;
      border: none;
      outline: none;
    }

    .register-icon {
      position: absolute;
      top: 10%;
      left: 5%;
      transform: translateY(-50%);

      &.mail {
        top: 27%;
      }
    }
  }

  &-message {
    display: flex;
    align-items: center;
    margin-bottom: 27px;

    .message-icon {
      margin-right: 5px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      font-size: 10px;
    }

    button {
      color: #19a0fc;
      font-size: 10px;
      background: transparent;
      border: none;
      outline: none;
    }
  }

  .submit {
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

  &-privacy {
    display: flex;
    align-items: center;

    label {
      font-weight: 200;
      font-size: 10px;
    }

    input {
      margin-right: 5px;
    }
  }

  [type="checkbox"] {
    opacity: 0;

    & + label {
      position: relative;
      display: inline-block;
      padding-left: 20px;
      color: black;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        outline: none;
        background: #ffffff;
        border: none;
      }
    }
    &:checked + label::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-image: url("../assets/image/icons/check.svg");
      background-size: contain;
    }
  }

  .enter {
    color: #c4c4c4;
    font-weight: 200;
    font-size: 10px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #141313;
    }
  }
}
</style>
