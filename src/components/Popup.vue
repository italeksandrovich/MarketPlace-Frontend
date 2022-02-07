<template>
  <div class="popup" :class="{ show: value }">
    <div class="popup-overlay" @click="$emit('input', false)"></div>
    <div class="popup-wrapper" :class="size">
      <div class="popup-close">
        <button class="popup-close__item" @click="$emit('input', false)">
          <img src="@/assets/image/icons/close.svg" alt="Закрыть" />
        </button>
      </div>

      <div class="popup-body">
        <slot name="body"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    value: {},
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  opacity: 0;
  transition: all 0.5s;
  padding: 20px;
  background-color: #f9f9f9;

  &.show {
    opacity: 1;
    z-index: 10000;

    .popup {
      &-overlay {
        opacity: 1;
      }

      &-wrapper {
        transform: translateY(0%);
      }
    }
  }

  &-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($color: #535252, $alpha: 0.75);
  }

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    z-index: 1001;
    max-height: 80vh;
    transform: translateY(-70%);
    transition: all 0.5s;

    &.sm {
      width: 320px;
    }

    &.md {
      width: 550px;
    }

    &.lg {
      width: 880px;
      padding: 35px;
    }
  }

  &-header {
    position: relative;
    display: flex;
    padding: 0px 35px 10px 0;
    min-height: 30px;

    &__title {
      font-family: Heavy;
      font-size: 24px;
      color: #1b1b1b;

      p {
        font-size: 25px;
        color: #1b1b1b;
      }
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: 10px 0;
  }

  &-footer {
    padding: 10px 0 0;
  }

  &-close {
    position: absolute;
    top: 15px;
    right: 0;
    transform: translateY(-50%);

    &__item {
      width: 32px;
      height: 32px;
      position: absolute;
      top: 0px;
      right: 10px;
      background-color: #ffffff;
      border-radius: 50px;
      border: none;
      padding: 8px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
