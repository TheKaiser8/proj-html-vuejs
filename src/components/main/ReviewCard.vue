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
    <div class="review-card__reviewer">
      <img
        class="review-card__avatar"
        :src="`src/assets/img/${infoReview.reviewer.avatar}`"
        :alt="infoReview.reviewer.name"
      />
      <div class="review-card__info">
        <h5 class="review-card__name">
          {{ infoReview.reviewer.name }}
        </h5>
        <small>{{ infoReview.reviewer.role }}</small>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 3rem;
  background-color: var(--third-bg-color);
  margin: 0 1.5rem;
  border-radius: 0.3125rem;
  .review-card__title {
    color: var(--second-text-color);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .review-card__text {
    margin-bottom: 2.5rem;
  }
  .review-card__reviewer {
    display: flex;
    align-items: center;
    .review-card__avatar {
      height: 4.375rem;
      width: 4.375rem;
      border-radius: 50%;
      object-fit: cover;
    }
    .review-card__info {
      margin-left: 1.25rem;
      .review-card__name {
        color: var(--second-text-color);
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }
}
</style>
