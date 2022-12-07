<script>
export default {
  name: "ReviewCard",
  props: {
    infoReview: Object,
  },
};
</script>

<template>
  <div class="review-card">
    <h4 class="review-card__title">{{ infoReview.title }}</h4>
    <p class="review-card__text">{{ infoReview.text }}</p>

    <img
      class="review-card__avatar"
      :src="`src/assets/img/${infoReview.reviewer.avatar}`"
      :alt="infoReview.reviewer.name"
    />
    <h5>{{ infoReview.reviewer.name }}</h5>
    <span>{{ infoReview.reviewer.role }}</span>
  </div>
</template>

<style lang="scss" scoped>
.review-card {
  padding: 3rem;
  background-color: var(--third-bg-color);
  margin: 0 1.5rem;
  border-radius: 0.3125rem;
  .review-card__avatar {
    height: 4.375rem;
    width: 4.375rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .review-card__title {
    color: var(--second-text-color);
    margin-bottom: 1.5rem;
  }
  .review-card__text {
    margin-bottom: 2.5rem;
  }
}
</style>
