<script>
import TutoringCard from "./TutoringCard.vue";
export default {
  name: "TutoringSection",
  components: {
    TutoringCard,
  },
  data() {
    return {
      tutoringList: [
        {
          img: "home-2-image-box-01.png",
          title: "Customize Preferences",
          description:
            "Learners are given the right to arrange and customize their study schedule and timetable based on preferences.",
          link: "Start here",
        },
        {
          img: "about-us-02-image-box-02.png",
          title: "Cloud Storage",
          description:
            "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
          link: "Get Free Quote",
        },
        {
          img: "home-2-image-box-03.png",
          title: "Multimedia Channels",
          description:
            "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
          link: "Start now",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="tutoring-section">
    <div class="container">
      <div class="tutoring-section-header">
        <span>MAXCOACH AVAILABLE COURSES</span>
        <h2 class="tutoring-section-header__title">
          Access <span class="text-green">Smart Tutoring</span> Program For
          Benefits
        </h2>
      </div>
      <div class="row">
        <div class="col" v-for="item in tutoringList">
          <TutoringCard :infoTutoring="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#tutoring-section {
  padding: 6.25rem 0;
  color: var(--third-text-color);
  .tutoring-section-header {
    text-align: center;
    .tutoring-section-header__title {
      font-size: 1.7rem;
      color: var(--second-text-color);
      margin-top: 0.5rem;

      .text-green {
        color: var(--primary-color);
        font-weight: 400;
      }
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -2rem;
    padding-top: 4rem;
    .col {
      width: calc(100% / 3);
    }
  }
}
</style>
