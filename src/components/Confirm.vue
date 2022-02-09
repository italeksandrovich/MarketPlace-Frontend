<template>
  <div class="confirm">
    <div class="confirm-top">
      <h3 class="confirm-title">Подтвердите номер телефона</h3>
      <p class="confirm-text">
        Сейчас мы вам позвоним Введите последние 4 цифры номера, с которого
        поступит звонок. Отвечать на звонок не нужно
      </p>
    </div>
    <form class="confirm-main">
      <input type="text" name="" id="" placeholder="Код подтверждения" />
      <button class="confirm-button">Подтвердить</button>
    </form>
    <button class="recall">Позвонить повторно можно будет через 56 c.</button>
  </div>
</template>

<script>
export default {
  name: "confirm",
};
</script>

<style lang="scss" scoped>
.confirm {
  &-top {
    display: flex;
    flex-direction: column;
  }

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
      padding: 17px 17px 15px;
      margin-bottom: 5px;
      color: #141313;
      font-size: 12px;
      font-weight: 400;
      border-radius: 8px;
      border: none;
      outline: none;
    }
  }

  &-button {
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
  }

  .recall {
    color: #c4c4c4;
    background: transparent;
    font-family: Light;
    font-size: 10px;
    border: none;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>
