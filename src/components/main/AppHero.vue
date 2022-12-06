<script>
import ClientHero from "./ClientHero.vue";

export default {
  name: "AppHero",
  components: {
    ClientHero,
  },
  data() {
    return {
      hero: {
        title: "Distant learning for further expansion",
        text: "Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.",
      },
      clients: [
        {
          img: "src/assets/img/client-logo-01.png",
          name: "Stylus",
        },
        {
          img: "src/assets/img/client-logo-02.png",
          name: "Tree",
        },
        {
          img: "src/assets/img/client-logo-03.png",
          name: "Brook",
        },
        {
          img: "src/assets/img/client-logo-04.png",
          name: "Pencil",
        },
        {
          img: "src/assets/img/client-logo-05.png",
          name: "Its Alive!",
        },
        {
          img: "src/assets/img/client-logo-06.png",
          name: "Sixbase",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="hero">
    <div class="container">
      <div class="row">
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
            <a class="small-text__link" href="#">
              <strong class="text-green">
                Get Free Sample
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </strong>
            </a>
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
      <div class="row client">
        <ClientHero v-for="client in clients" :infoClient="client" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../style/partials/mixins.scss" as *;

#hero {
  padding: 3.75rem 0;
  color: var(--third-text-color);

  .row {
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
        .small-text__link {
          text-decoration: none;
          .text-green {
            color: var(--primary-color);
          }
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
    &.client {
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
      margin-top: 3.5rem;
    }
  }
}
</style>
