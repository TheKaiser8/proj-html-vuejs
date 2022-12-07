<script>
import ReviewCard from "./ReviewCard.vue";

export default {
  name: "ReviewsSection",
  components: {
    ReviewCard,
  },
  data() {
    return {
      reviews: [
        {
          title: "High level of efficiency and scientific teaching methods",
          text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
          reviewer: {
            avatar: "testimonial-avata-02.jpg",
            name: "MINA HOLLACE",
            role: "/ Freelancer",
          },
        },
        {
          title: "It's a choice of quality for people with special needs",
          text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          reviewer: {
            avatar: "testimonial-avata-03.jpg",
            name: "FLORENCE THEMES",
            role: "/ Multimedia Admin",
          },
        },
        {
          title:
            "Professional team of specialist and passionate mentors at reach",
          text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
          reviewer: {
            avatar: "testimonial-avata-04.jpg",
            name: "MADLEY PONDOR",
            role: "/ IT Specialist",
          },
        },
      ],
    };
  },
};
</script>

<template>
  <section id="reviews-section">
    <div class="reviews-section-header">
      <span>GREAT WORDS ABOUT MAXCOACH</span>
      <h2 class="reviews-section-header__title">
        Our <span class="text-green">top learners'</span> verbatim
      </h2>
    </div>
    <div class="row">
      <div class="col" v-for="review in reviews">
        <ReviewCard :infoReview="review" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#reviews-section {
  background-color: var(--second-bg-color);
  padding: 6.25rem 1.875rem;
  color: var(--third-text-color);
  .reviews-section-header {
    text-align: center;
    .reviews-section-header__title {
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
    margin-top: 3rem;
    .col {
      width: calc(100% / 3);
    }
  }
}
</style>
