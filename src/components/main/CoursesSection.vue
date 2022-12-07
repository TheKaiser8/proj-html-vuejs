<script>
import CoursesCard from "./CoursesCard.vue";
export default {
  name: "CoursesSection",
  components: {
    CoursesCard,
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
        <div class="col" v-for="n in 6">
          <CoursesCard />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#courses-section {
  background-color: var(--first-bg-color);
  padding: 6.25rem 0;
  color: var(--third-text-color);
  .courses-section-header {
    text-align: center;
  }
  .courses-section-header__title {
    font-size: 1.5rem;
    color: var(--second-text-color);
  }
  .row {
    display: flex;
    flex-wrap: wrap;

    .col {
      width: calc(100% / 2);
    }
  }
}
</style>
