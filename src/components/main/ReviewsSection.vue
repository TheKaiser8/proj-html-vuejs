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
          title: "It's a choice of quality for people with special needs",
          text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          reviewer: {
            avatar: "testimonial-avata-03.jpg",
            name: "FLORENCE THEMES",
            role: "/ Multimedia Admin",
          },
        },
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
    <div class="reviews-section-footer">
      <h3 class="reviews-section-footer__subtitle">
        Start today for getting
        <span class="text-green">Online Certification</span>
      </h3>
      <h2 class="reviews-section-footer__title">
        You can be your own guiding star with our help!
      </h2>
      <button class="btn-green">Get started now</button>
      <div class="bg-img incomplete-circles">
        <img src="../../assets/img/maxcoach-shape-02.png" />
      </div>
      <div class="bg-img three-lines">
        <img src="../../assets/img/maxcoach-shape-01.png" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style/partials/mixins.scss" as *;

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
    }
  }
  .text-green {
    color: var(--primary-color);
    font-weight: 400;
  }
  .row {
    display: flex;
    margin-top: 3rem;
    .col {
      width: calc(100% / 3);
    }
  }
  .reviews-section-footer {
    color: var(--second-text-color);
    text-align: center;
    padding-top: 5.625rem;
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 14%;
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 50%;
      border: 0.4375rem solid #e6dcd2;
    }
    .reviews-section-footer__subtitle {
      font-weight: 600;
    }
    .reviews-section-footer__title {
      margin-bottom: 2rem;
    }
    .btn-green {
      @include btn-bg-color(var(--primary-color), #fff);
    }
    .bg-img {
      position: absolute;
      &.incomplete-circles {
        bottom: -15%;
        right: 11%;
      }
      &.three-lines {
        left: 15%;
        bottom: 15%;
      }
    }
  }
}
</style>
