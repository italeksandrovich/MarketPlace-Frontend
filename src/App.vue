<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout'
  import MainLayout from '@/layouts/MainLayout'

  export default {
    name: 'App',
    components: {EmptyLayout, MainLayout},
    computed: {
      layout() {
        if (this.$route.meta.layout) {
          return this.$route.meta.layout + '-layout'
        }

        return 'empty-layout'
      }
    }
  }
</script>

<style lang="scss">
  @import '~vuetify/src/styles/main';
  @import './assets/scss/main';
</style>
