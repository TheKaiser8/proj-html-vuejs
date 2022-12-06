<script>
import NavHeader from "./NavHeader.vue";

export default {
  name: "AppHeader",
  components: {
    NavHeader,
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../../assets/img/dark-logo.png" alt="Logo" />
      </div>
      <NavHeader />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 20%);
  background-color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-height: 1.5rem;
    }
  }
}
</style>
