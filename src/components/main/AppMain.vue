<script>
import AppHero from "./AppHero.vue";
import CoursesSection from "./CoursesSection.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    CoursesSection,
  },
};
</script>

<template>
  <AppHero />
  <CoursesSection />
</template>

<style lang="scss" scoped></style>
