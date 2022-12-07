<script>
export default {
  name: "TutoringCard",
  props: {
    infoTutoring: Object,
  },
};
</script>

<template>
  <div class="tutoring-card">
    <img
      class="tutoring-card__img"
      :src="`src/assets/img/${infoTutoring.img}`"
      :alt="infoTutoring.title"
    />
    <h3 class="tutoring-card__title">{{ infoTutoring.title }}</h3>
    <p class="tutoring-card__text">{{ infoTutoring.description }}</p>
    <a class="tutoring-card__link">
      <strong>
        {{ infoTutoring.link }}
      </strong>
      <font-awesome-icon
        icon="fa-solid fa-arrow-right-long"
        class="arrow-right-icon"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.tutoring-card {
  padding: 2rem;
  .tutoring-card__img {
    object-fit: cover;
    margin-bottom: 2rem;
  }
  .tutoring-card__title {
    color: var(--second-text-color);
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .tutoring-card__text {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .tutoring-card__link {
    cursor: pointer;
    font-size: 0.9rem;
    .arrow-right-icon {
      margin-left: 0.3125rem;
    }
  }
}
</style>
