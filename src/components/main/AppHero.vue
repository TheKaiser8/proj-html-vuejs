<script>
export default {
  name: "AppHero",
  data() {
    return {
      hero: {
        title: "Distant learning for further expansion",
        text: "Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.",
      },
    };
  },
};
</script>

<template>
  <section id="hero">
    <div class="container">
      <div class="col-small40">
        <h1 class="hero-title">{{ hero.title }}</h1>
        <p class="hero-text">{{ hero.text }}</p>
      </div>
      <div class="col-small60">
        <img
          class="hero-image"
          src="../../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
          alt="Hero image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#hero {
  padding: 3.75rem 0;
  .container {
    display: flex;
    align-items: center;
    .col-small40 {
      width: 40%;
      .hero-title {
        font-size: 2.25rem;
        color: var(--second-text-color);
        margin-bottom: 1.5rem;
      }
      .hero-text {
        color: var(--third-text-color);
      }
    }
    .col-small60 {
      width: 60%;
      text-align: right;
      .hero-image {
        border-radius: 50%;
      }
    }
  }
}
</style>
