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
        <button class="btn-green">
          <font-awesome-icon
            icon="fa-solid fa-download"
            class="download-icon"
          />
          Download free guide
        </button>
        <small class="small-text">
          Have questions?
          <strong class="text-green">
            Get Free Sample
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </strong>
        </small>
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
@use "../../style/partials/mixins.scss" as *;

#hero {
  padding: 3.75rem 0;
  color: var(--third-text-color);

  .container {
    display: flex;
    align-items: center;
    .col-small40 {
      display: flex;
      flex-direction: column;
      width: 40%;
      .hero-title {
        font-size: 2.25rem;
        color: var(--second-text-color);
        margin-bottom: 1.5rem;
      }
      .hero-text {
        margin-bottom: 2.5rem;
      }
      .btn-green {
        @include btn-bg-color(var(--primary-color), #fff);

        .download-icon {
          margin-right: 0.75rem;
        }
      }
      .small-text {
        margin-top: 1.875rem;

        .text-green {
          color: var(--primary-color);
        }
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
