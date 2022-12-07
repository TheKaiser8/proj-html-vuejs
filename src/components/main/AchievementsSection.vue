<script>
import AchievementsCard from "./AchievementsCard.vue";

export default {
  name: "AchievementsSection",
  components: {
    AchievementsCard,
  },
  data() {
    return {
      achievements: [
        {
          title: "Successfully trained",
          dataNumber: "1790",
          topic: "ENROLLED LEARNERS",
        },
        {
          title: "Proudly Received",
          dataNumber: "19",
          topic: "COUNTRYWIDE AWARDS",
        },
        {
          title: "Firmly Established",
          dataNumber: "24",
          topic: "LOCAL BRANCHES",
        },
        {
          title: "Getting Featured on",
          dataNumber: "1090",
          topic: "BLOG POSTS",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="achievements-section">
    <div class="container">
      <div class="row">
        <div class="col" v-for="achievement in achievements">
          <AchievementsCard :infoAchievements="achievement" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#achievements-section {
  color: var(--third-text-color);

  .row {
    display: flex;
    flex-wrap: wrap;

    .col {
      width: calc(100% / 4);
    }
    .col:first-child .achievement-card {
      border-left: 0.0625rem solid #f1ebe5;
    }
  }
}
</style>
