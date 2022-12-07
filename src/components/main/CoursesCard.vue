<script>
export default {
  name: "CoursesCard",
  props: {
    infoCourses: Object,
  },
};
</script>

<template>
  <div class="courses-card">
    <img
      class="courses-card__img"
      :src="`src/assets/img/${infoCourses.img}`"
      :alt="infoCourses.title"
    />
    <div class="courses-card__info">
      <strong class="courses-card__info--price"
        >{{ infoCourses.price.integer
        }}<small>{{ infoCourses.price.cents }}</small>
      </strong>
      <h4 class="courses-card__info--title">{{ infoCourses.title }}</h4>
      <small>
        <font-awesome-icon
          icon="fa-regular fa-file-lines"
          class="icon-lessons"
        />
        {{ infoCourses.lessons }}
      </small>
      <small class="courses-card__info--students">
        <font-awesome-icon icon="fa-solid fa-stamp" class="icon-students" />
        {{ infoCourses.students }}
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
  .courses-card__info {
    margin: 0 1.5rem;
    .courses-card__info--price {
      color: var(--primary-color);
    }
    .courses-card__info--title {
      color: var(--second-text-color);
      margin: 1rem 0;
    }
    .courses-card__info--students {
      margin-left: 1.5rem;
    }
    .icon-lessons,
    .icon-students {
      margin-right: 0.3125rem;
    }
  }
}
</style>
