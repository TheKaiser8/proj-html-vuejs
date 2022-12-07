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
        <div class="col-big60">
          <img
            class="hero-image"
            src="../../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
            alt="Hero image"
          />
          <div class="bg-img grey-dots">
            <img
              v-for="n in 2"
              src="../../assets/img/maxcoach-shape-08.png"
              class="grey-dots__img"
            />
          </div>
          <div class="bg-img green-crosses">
            <img
              src="../../assets/img/maxcoach-shape-07.png"
              class="green-crosses__img"
            />
          </div>
          <div class="bg-img incomplete-circles">
            <img
              src="../../assets/img/maxcoach-shape-02.png"
              class="incomplete-circles__img"
            />
          </div>
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
    .col-big60 {
      width: 60%;
      text-align: right;
      position: relative;

      .hero-image {
        border-radius: 50%;
      }
      .grey-dots::before {
        content: "";
        display: block;
        position: absolute;
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        border: 0.625rem solid #ecc5ab;
        bottom: 15%;
      }
      .bg-img {
        position: absolute;

        &.grey-dots {
          top: 40%;
          left: -6%;
          z-index: -1;
          transform: translate(50%, -50%);
          transform: rotate(270deg);

          .grey-dots__img {
            margin-right: 1rem;
          }
        }
        &.green-crosses {
          bottom: 1%;
          right: 10%;
          z-index: -1;
        }

        &.incomplete-circles {
          top: 20%;
          right: -17%;
        }
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
