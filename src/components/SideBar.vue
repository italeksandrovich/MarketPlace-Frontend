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
        <button
          class="sidebar-actions__item btn"
          @click="$emit('sign', 'login')"
        >
          Войти
        </button>
        <button
          class="sidebar-actions__item btn"
          @click="$emit('sign', 'register')"
        >
          Зарегистрироваться
        </button>
      </div>
      <div class="sidebar-actions-links">
        <router-link class="link" active-class="active" to="/masters">
          <div class="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path
                d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
              ></path>
            </svg>
          </div>
          <p class="link-name">Моя страница</p>
        </router-link>
        <router-link class="link" active-class="active" to="/favorities-page">
          <div class="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path
                d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
              ></path>
            </svg>
          </div>
          <p class="link-name">Избранное</p>
        </router-link>
        <router-link class="link" active-class="active" to="/partners-page">
          <div class="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path
                d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
              ></path>
            </svg>
          </div>
          <p class="link-name">Партнёры</p>
        </router-link>
        <router-link class="link" active-class="active" to="/partners-list">
          <div class="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path
                d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
              ></path>
            </svg>
          </div>
          <p class="link-name">Список Партнёров</p>
        </router-link>
      </div>
    </div>

    <div class="sidebar-footer"></div>
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
  data() {
    return {
      isActive: false,
    };
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

  &-header {
    padding: 10px 15px;
  }

  &-close {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    padding: 7px;
    background: #ffffff;
    border-radius: 50px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    margin: 50px 0;
  }

  &-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-actions__item {
    &:hover {
      background: #19a0fc;
    }

    &.btn {
      margin-bottom: 10px;
      cursor: pointer;
    }
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
    cursor: pointer;

    &:hover,
    &.active {
      background: #19a0fc;

      svg {
        fill: #ffffff;
      }

      p {
        color: #ffffff;
      }
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

    &-icon {
      width: 25px;
      height: 25px;
      margin-right: 12px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-name {
      color: #141313;
      background: transparent;
      font-size: 200;
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
