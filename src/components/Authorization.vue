<template>
  <div class="auth">
    <div class="auth-top">
      <h3 class="auth-title">Войти в личный кабинет</h3>
      <p class="auth-text">
        Подписки, истории, новости <br />
        конкурсы и скидки до 60%
      </p>
    </div>
    <div class="auth-link">
      <div class="auth-icon">
        <img src="@/assets/image/trophy.svg" alt="" />
      </div>
      <input type="email" name="" id="" placeholder="Войти через Google" />
    </div>
    <div class="auth-button">
      <button><img src="@/assets/image/trophy.svg" alt="" /></button>
      <button><img src="@/assets/image/trophy.svg" alt="" /></button>
      <button><img src="@/assets/image/trophy.svg" alt="" /></button>
      <button><img src="@/assets/image/trophy.svg" alt="" /></button>
    </div>
    <div class="auth-footer">
      <p class="auth-terms">
        Авторизуясь, вы соглашаетесь с <a href="#">правилами сервиса</a> и
        <a href="#">обработки персональных данных</a>
      </p>
      <a class="reset" href="#">Забыли пароль?</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.auth {
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

  &-link {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .auth-icon {
      position: relative;
      top: 50%;
      left: 0%;
      transform: translateY(-50%);

      img {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    input {
      padding: 16px 50px 16px 45px;
      background-color: #ffffff;
      border-radius: 7px;
      border: none;
      outline: none;
    }
  }

  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;

    button {
      background-color: #ffffff;
      padding: 10px;
      border-radius: 7px;
      border: none;
      cursor: pointer;
    }
  }

  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-terms {
    font-family: "Light";
    font-size: 8px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    color: black;
    margin-bottom: 14px;
  }

  .reset {
    color: #c4c4c4;
    font-family: "Light";
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
  }
}
</style>
