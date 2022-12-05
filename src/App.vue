<script>
import AppTitle from './components/AppTitle.vue';
export default {
  components: {
    AppTitle
  }
}
</script>

<template>
  <div class="container">
    <AppTitle/>
  </div>
  <div class="container-small">
    <AppTitle/>
  </div>
</template>

<style lang="scss">
@import './style/global.scss';
</style>
