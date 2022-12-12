<script>
import CoursesCard from "./CoursesCard.vue";
export default {
  name: "CoursesSection",
  components: {
    CoursesCard,
  },
  data() {
    return {
      courses: [
        {
          img: "course-02-480x298.jpg",
          price: {
            integer: "$40",
            cents: ".00",
          },
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "50 Students",
        },
        {
          img: "stock-full-hd-03-480x298.jpg",
          price: {
            integer: "Free",
            cents: "",
          },
          title: "Customer-centric Info-Tech Strategies",
          lessons: "24 Lessons",
          students: "769 Students",
        },
        {
          img: "stock-full-hd-04-480x298.jpg",
          price: {
            integer: "$19",
            cents: ".00",
          },
          title: "Open Programming Courses for Everyone: Phyton",
          lessons: "17 Lessons",
          students: "62 Students",
        },
        {
          img: "stock-full-hd-06-480x298.jpg",
          price: {
            integer: "$26",
            cents: ".00",
          },
          title: "Academic Listening and Note-taking",
          lessons: "14 Lessons",
          students: "67 Students",
        },
        {
          img: "course-featured-image-01-480x298.jpg",
          price: {
            integer: "$39",
            cents: ".00",
          },
          title: "Master jQuery in a Short Period of Time",
          lessons: "6 Lessons",
          students: "51 Students",
        },
        {
          img: "stock-full-hd-05-480x298.jpg",
          price: {
            integer: "$59",
            cents: ".00",
          },
          title: "Introduction to Javascript for Beginners",
          lessons: "14 Lessons",
          students: "76 Students",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="courses-section">
    <div class="container">
      <div class="courses-section-header">
        <span>STIMULATED TO LEARN?</span>
        <h2 class="courses-section-header__title">Featured Online Courses</h2>
      </div>
      <div class="row">
        <div class="col" v-for="course in courses">
          <CoursesCard :infoCourses="course" />
        </div>
      </div>
      <div class="btn-box">
        <button class="btn-green">
          View all courses
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style/partials/mixins.scss" as *;

#courses-section {
  background-color: var(--first-bg-color);
  padding: 6.25rem 0;
  color: var(--third-text-color);

  .courses-section-header,
  .btn-box {
    text-align: center;
  }
  .courses-section-header__title {
    font-size: 1.7rem;
    color: var(--second-text-color);
    margin-top: 0.5rem;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-bottom: 2rem;

    .col {
      width: calc(100% / 2);
      padding: 1rem;
    }
  }
  .btn-green {
    @include btn-bg-color(var(--primary-color), #fff);
  }
}
</style>
