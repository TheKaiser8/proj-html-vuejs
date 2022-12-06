<script>
export default {
  name: "ClientHero",
  props: {
    infoClient: Object,
  },
};
</script>

<template>
  <div class="client-img">
    <img :src="infoClient.img" :alt="infoClient.name" />
  </div>
</template>

<style lang="scss" scoped>
.client-img {
  filter: opacity(0.5);
}
</style>
