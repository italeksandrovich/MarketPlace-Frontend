<template>
  <div :class="['sidebar', { open: value }]">
    <div class="sidebar-header">
      <button class="sidebar-close" @click="$emit('input', false)">
        <img src="@/assets/image/close.svg" alt="" />
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
        <button class="sidebar-actions-item" @click="$emit('sign', 'register')">
          Зарегистрироваться
        </button>
      </div>
      <div class="sidebar-actions-links">
        <div class="link">
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
          <button class="link-name">Моя страница</button>
        </div>
        <div class="link">
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
          <button class="link-name">Календaрь</button>
        </div>
        <div class="link">
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
          <button class="link-name">Уведомления</button>
        </div>
        <div class="link">
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
          <button class="link-name">Поддержка</button>
        </div>
      </div>
    </div>

    <div class="sidebar-footer">
      <div class="footer-icon">
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
      <button class="exit">Выход</button>
    </div>
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

  &-header {
    padding: 15px 0 0 15px;
  }

  &-close {
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background: #ffffff;
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

  &-footer {
    margin-top: auto;
  }

  &-actions {
    display: flex;
    flex-direction: column;
  }

  &-actions-item {
    color: #141313;
    background: #ffffff;
    font-family: Heavy;
    font-size: 12px;
    padding: 23px 49px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      background: #19a0fc;
    }
  }

  &-actions-links {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    cursor: pointer;
  }

  .link {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    transition: 0.3s;

    &:hover {
      background: #19a0fc;
      svg {
        fill: #ffffff;
      }

      .link-name {
        color: #ffffff;
      }
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

  &-footer {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    transition: 0.3s;

    &:hover {
      background: #19a0fc;

      svg {
        fill: #ffffff;
      }

      .exit {
        color: #ffffff;
      }
    }

    .footer-icon {
      margin-right: 10px;
    }
    .exit {
      color: #141313;
      background: transparent;
      font-family: "Light";
      font-size: 14px;
      border: none;
      outline: none;
    }
  }
}
</style>
