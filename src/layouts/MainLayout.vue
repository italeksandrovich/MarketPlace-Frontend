<template>
  <div class="main-layout">
    <div class="main-sidebar">
      <SideBar v-model="isOpen" @sign="openPopup" />
    </div>
    
    <div class="main-page">
      <!--<div class="main-header" @click="isOpen = true">
        <button class="arrow">
          <img src="@/assets/image/icons/arrow.svg" alt="" />
        </button>
      </div>-->
      <slot />
      <!--<div class="container">
      
      </div>-->
    </div>

    <!-- there is no footer in layout -->
    <!-- <div class="main-footer">Footer</div> -->

    <Popup v-model="authPopupShow" class="confirm-popup" size="sm">
      <template #body>
        <div class="confirm-body">
          <Authorization
            v-if="status === 'login'"
            @changeStatus="status = $event"
          />
          <Register
            v-if="status === 'register'"
            @submited="submit"
            @changeStatus="status = $event"
          />
          <Password
            v-if="status === 'reset-password'"
            @receiveCode="status = $event"
          />

          <Confirm v-if="status === 'confirm'" />
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
import Confirm from "@/components/Confirm.vue";
import SideBar from "@/components/SideBar";

export default {
  name: "main-layout",
  components: { SideBar, Popup, Authorization, Register, Password, Confirm },
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F4F5FD;
  .main {
    &-header {
    /*  position: fixed;
      top: 0;
      right: 0;
      left: 0;*/
      background: #ffffff;
      padding: 15px;
      z-index: 3;
    }
    &-sidebar{
      width: 100px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
    }
    &-page {
     /* padding: 80px 10px 15px;*/
      flex: 1;
      /*overflow: hidden auto;*/
      border-radius: 32px 0 0 32px;
      margin-left: 100px;
      max-width: calc(100% - 100px);
      background: #ffffff;
    }

    &-footer {
      padding: 15px;
    }
  }

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
