<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/components/layout/EmptyLayout";
import MainLayout from "@/components/layout/MainLayout";

export default {
  name: "app",
  components: { EmptyLayout, MainLayout },
  computed: {
    layout() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + "-layout";
      }

      return "empty-layout";
    },
  },
};
</script>

<style lang="scss"></style>
