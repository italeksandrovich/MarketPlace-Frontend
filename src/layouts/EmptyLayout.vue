<template>
  <div class="main-layout">
    <div class="main-sidebar">
      <SideBar :value="isOpen" @input="setStatus" @sign="openPopup" />
    </div>
    <div class="main-page">
      <div class="container">
        <slot />
      </div>
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "empty-layout",
  components: { SideBar, Popup, Authorization, Register, Password, Confirm },
  data() {
    return {
      status: "",
      authPopupShow: false,
      authPopup: {},
    };
  },
  computed: {
    ...mapState({
      isOpen: (state) => state.sidebarStatus,
    }),
  },
  methods: {
    ...mapMutations({
      setStatus: "SET_SIDEBAR_STATUS",
    }),
    openPopup(status) {
      this.setStatus(false);
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

  .main {
    &-header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      background: #ffffff;
      padding: 15px;
    }

    &-page {
      padding: 15px;
      flex: 1;
      overflow: hidden auto;
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
