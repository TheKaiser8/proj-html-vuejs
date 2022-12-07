<script>
export default {
  name: "CoursesCard",
};
</script>

<template>
  <div class="courses-card">
    <img
      class="courses-card__img"
      src="../../assets/img/course-02-480x298.jpg"
      alt=""
    />
    <div class="courses-card__info">
      <strong class="text-green">$40.<small>00</small></strong>
      <h4 class="courses-card__info--title">
        Learning to Write as a Professional Author
      </h4>
      <small>
        <font-awesome-icon icon="fa-regular fa-file-lines" />
        20 Lessons
      </small>
      <small>
        <font-awesome-icon icon="fa-solid fa-stamp" />
        50 Students
      </small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses-card {
  display: flex;
  align-items: center;
  .courses-card__img {
    height: 10.625rem;
    width: 10.625rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .text-green {
    color: var(--primary-color);
  }
  .courses-card__info--title {
    color: var(--second-text-color);
  }
}
</style>
