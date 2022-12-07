<script>
import AppHero from "./AppHero.vue";
import CoursesSection from "./CoursesSection.vue";
import TutoringSection from "./TutoringSection.vue";
import GetStartedSection from "./GetStartedSection.vue";
import ReviewsSection from "./ReviewsSection.vue";
import AchievementsSection from "./AchievementsSection.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    CoursesSection,
    TutoringSection,
    GetStartedSection,
    ReviewsSection,
    AchievementsSection,
  },
};
</script>

<template>
  <AppHero />
  <CoursesSection />
  <TutoringSection />
  <GetStartedSection />
  <ReviewsSection />
  <AchievementsSection />
</template>

<style lang="scss" scoped></style>
