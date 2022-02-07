<template>
  <div :class="['sidebar', { open: value }]">
    <div class="sidebar-header">
      <button class="sidebar-close" @click="$emit('input', false)">
        <img src="@/assets/image/icons/close.svg" alt="" />
      </button>
    </div>

    <div class="sidebar-body">
      <!-- <div class="sidebar-info">
        UserInfo
      </div> -->
      <div class="sidebar-actions">
        <button class="sidebar-actions-item" @click="$emit('sign', 'login')">
          Войти
        </button>
        <button
          class="sidebar-actions__item"
          @click="$emit('sign', 'register')"
        >
          Зарегистрироваться
        </button>
      </div>
      <div class="sidebar-actions-links">
        <div class="link">
          <div class="link-icon">
            <img src="@/assets/image/icons/home.svg" alt="" />
          </div>
          <button class="link-name">Моя страница</button>
        </div>
        <div class="link">
          <div class="link-icon">
            <img src="@/assets/image/icons/home.svg" alt="" />
          </div>
          <button class="link-name">Моя страница</button>
        </div>
        <div class="link">
          <div class="link-icon">
            <img src="@/assets/image/icons/home.svg" alt="" />
          </div>
          <button class="link-name">Моя страница</button>
        </div>
        <div class="link">
          <div class="link-icon">
            <img src="@/assets/image/icons/home.svg" alt="" />
          </div>
          <button class="link-name">Моя страница</button>
        </div>
      </div>
    </div>

    <div class="sidebar-footer">Footer</div>
  </div>
</template>

<script>
  export default {
    name: "sidebar",
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70vw;
    height: 100vh;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background: #f9f9f9;
    transition: 0.4s;
    transform: translateX(-100%);
    z-index: 100;

    &.open {
      transform: translateX(0);
    }

    &-body {
      display: flex;
      flex-direction: column;
      margin: 50px 0;
    }

    &-footer {
      margin-top: auto;
    }

    &-actions {
      display: flex;
      flex-direction: column;
    }

    &-actions-links {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
    }
    .link {
      display: flex;
      align-items: center;
      padding: 20px 15px;
      transition: 0.3s;

      &:hover {
        background: rgba($color: #5ba0f0, $alpha: 0.3);
      }

      &-icon {
        width: 25px;
        height: 25px;
        margin-right: 12px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &-name {
        color: #141313;
        background: transparent;
        font-family: "Light";
        font-size: 14px;
        border: none;
        outline: none;
      }
    }

    &-close {
      width: 32px;
      height: 32px;
      padding: 10px;
      border-radius: 50px;
      border: none;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
