<template>
  <div class="home">
    <Popup v-model="deletePopupShow" class="confirm-popup" size="sm">
      <template #body>
        <div class="confirm-body">
          <Authorization />
          <Register />
          <Password />
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
import VueRecaptcha from "vue-recaptcha";
import Authorization from "@/components/Authorization.vue";
import Register from "@/components/Register.vue";
import Password from "@/components/Password.vue";

export default {
  name: "Home",
  components: { Popup, VueRecaptcha, Authorization, Register, Password },
  data() {
    return {
      deletePopupShow: true,
      sitekey: "6LfmDFceAAAAANN9yFUJDus0dpPab4GLNARhnS9A",
    };
  },
  methods: {
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function (response) {
      console.log("Verify: " + response);
    },
    onExpired: function () {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
