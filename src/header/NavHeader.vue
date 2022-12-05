<script>
export default {
  name: "NavHeader",
  data() {
    return {
      mainNavList: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    };
  },
};
</script>

<template>
  <nav class="main-nav">
    <ul class="list-inline">
      <li v-for="item in mainNavList">
        <a href="#"
          >{{ item }}
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="chevron-down"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon icon="fa-regular fa-circle-user" />
        </a>
      </li>
      <form action="" class="search-bar" role="search" @submit.prevent="">
        <input class="search-bar__input" type="text" placeholder="Search..." />
        <font-awesome-icon
          class="search-bar__icon"
          icon="fa-solid fa-magnifying-glass"
        />
      </form>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  color: var(--first-text-color);
  .list-inline {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 1rem;
      a {
        text-decoration: none;
        color: inherit;
        .chevron-down {
          font-size: 0.625rem;
          margin-left: 0.25rem;
        }
      }
    }
    .search-bar {
      position: relative;
      margin-left: 0.5rem;
      .search-bar__input {
        padding: 1rem;
        background-color: var(--secondary-color);
        border: none;
        border-radius: 0.625rem;
        outline: none;
      }
      .search-bar__icon {
        position: absolute;
        bottom: 50%;
        transform: translate(-50%, 50%);
        right: 0;
        color: var(--primary-color);
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
