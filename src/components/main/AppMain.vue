<script>
import AppHero from "./AppHero.vue";
import CoursesSection from "./CoursesSection.vue";
import TutoringSection from "./TutoringSection.vue";
import GetStartedSection from "./GetStartedSection.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    CoursesSection,
    TutoringSection,
    GetStartedSection,
  },
};
</script>

<template>
  <AppHero />
  <CoursesSection />
  <TutoringSection />
  <GetStartedSection />
</template>

<style lang="scss" scoped></style>
