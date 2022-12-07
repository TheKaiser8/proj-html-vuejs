<script>
import AppHero from "./AppHero.vue";
import CoursesSection from "./CoursesSection.vue";
import TutoringSection from "./TutoringSection.vue";
import GetStartedSection from "./GetStartedSection.vue";
import ReviewsSection from "./ReviewsSection.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    CoursesSection,
    TutoringSection,
    GetStartedSection,
    ReviewsSection,
  },
};
</script>

<template>
  <AppHero />
  <CoursesSection />
  <TutoringSection />
  <GetStartedSection />
  <ReviewsSection />
</template>

<style lang="scss" scoped></style>
