<script>
import AppTitle from "./components/AppTitle.vue";
export default {
  components: {
    AppTitle,
  },
};
</script>

<template>
  <div class="container">
    <AppTitle />
  </div>
  <div class="container-small">
    <AppTitle />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";

// import Google Font Popppins
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
</style>
