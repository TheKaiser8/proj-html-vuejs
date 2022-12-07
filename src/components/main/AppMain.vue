<script>
import AppHero from "./AppHero.vue";
import CoursesSection from "./CoursesSection.vue";
import TutoringSection from "./TutoringSection.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    CoursesSection,
    TutoringSection,
  },
};
</script>

<template>
  <AppHero />
  <CoursesSection />
  <TutoringSection />
</template>

<style lang="scss" scoped></style>
