<script>
export default {
  name: "AchievementsCard",
  props: {
    infoAchievements: Object,
  },
};
</script>

<template>
  <div class="achievement-card">
    <h4 class="achievement-card__title">{{ infoAchievements.title }}</h4>
    <strong class="achievement-card__data text-green">{{
      infoAchievements.dataNumber
    }}</strong>
    <span class="achievement-card__topic">{{ infoAchievements.topic }}</span>
  </div>
</template>

<style lang="scss" scoped>
.achievement-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: center;
  padding: 6.25rem 2.5rem;
  border-right: 0.0625rem solid #f1ebe5;

  .achievement-card__title {
    color: var(--second-text-color);
    margin-bottom: 2.625rem;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0 2rem;
  }
  .achievement-card__data {
    font-size: 3rem;
    margin-bottom: 2rem;
    &.text-green {
      color: var(--primary-color);
    }
  }
  .achievement-card__topic {
    font-weight: 600;
    font-size: 0.9rem;
  }
}
</style>
