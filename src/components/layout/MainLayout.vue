<template>
  <div class="main-layout">
    <div class="main-sidebar">
      <SideBar v-model="isOpen" @sign="openPopup" />
    </div>
    <div class="container">
      <div class="main-header" @click="isOpen = true">
        <button class="arrow">
          <img src="@/assets/image/arrow.svg" alt="" />
        </button>
      </div>
      <div class="main-page">
        <slot />
      </div>
      <div class="main-footer">Footer</div>
    </div>

    <Popup v-model="authPopupShow" class="confirm-popup" size="sm">
      <template #body>
        <div class="confirm-body">
          <Authorization v-if="status === 'login'" />
          <Register
            v-if="status === 'register'"
            @submited="submit"
            @changeStatus="status = $event"
          />
          <Password v-if="status === 'reset-password'" />
        </div>
      </template>

      <template #footer>
        <div class="confirm-footer"></div>
      </template>
    </Popup>
  </div>
</template>

<script>
import Popup from "@/components/Popup";
import Authorization from "@/components/Authorization.vue";
import Register from "@/components/Register.vue";
import Password from "@/components/Password.vue";
import SideBar from "@/components/SideBar";

export default {
  name: "main-layout",
  components: { SideBar, Popup, Authorization, Register, Password },
  data() {
    return {
      isOpen: true,
      status: "",
      authPopupShow: false,
      authPopup: {},
    };
  },
  methods: {
    openPopup(status) {
      this.isOpen = false;
      this.status = status;
      this.authPopupShow = true;
    },
    submit({ status, ...args }) {
      if (status === "login") {
        return this.login(args);
      }
      if (status === "register") {
        return this.register(args);
      }
      if (status === "reset-password") {
        return this.reset(args);
      }
    },

    register(arg) {
      console.log(arg);
      this.status = "login";
    },

    login(arg) {
      console.log(arg);
      this.authPopupShow = false;
    },

    reset(arg) {
      console.log(arg);
      this.authPopupShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
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
}
</style>
