<script>
export default {
  name: "GetStartedSection",
};
</script>

<template>
  <section id="get-started-section">
    <div class="container row">
      <div class="col-big60">
        <div class="poster">
          <img
            class="poster__img"
            src="../../assets/img/home-2-popup-video-poster.jpg"
            alt=""
          />
          <img
            class="poster__icon"
            src="../../assets/img/icon-youtube-play.png"
            alt=""
          />
          <div class="bg-img green-crosses">
            <img src="../../assets/img/maxcoach-shape-07.png" />
          </div>
          <div class="bg-img green-dots">
            <img src="../../assets/img/maxcoach-shape-05.png" />
          </div>
        </div>
      </div>
      <div class="col-small40">
        <div class="get-started-section-header">
          <span>GET STARTED <strong>EFFORTLESSLY</strong></span>
          <h2 class="get-started-section-header__title">
            Enjoy Our <span class="text-green">Companionship</span>
          </h2>
          <p class="get-started-section-header__text">
            Sneek peek into what has in store for you on our online teaching and
            mentoring portal. Seek for some hidden hints of early-bird rewards
            as well.
          </p>
          <a class="get-started-section-header__link" href="#">
            <strong class="text-green">
              Download free guidebook
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </strong>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#get-started-section {
  padding: 2rem 0;
  color: var(--third-text-color);
  margin-bottom: 6.25rem;

  .row {
    display: flex;
    .col-big60 {
      width: 60%;
      .poster {
        position: relative;
        .poster__img {
          border-radius: 5px;
        }
        .poster__icon {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          top: 50%;
        }
        .bg-img {
          position: absolute;
          &.green-crosses {
            bottom: -24%;
            right: -2%;
            z-index: -1;
          }
          &.green-dots {
            top: 12%;
            left: -15%;
            z-index: -1;
          }
        }
      }
    }
    .col-small40 {
      width: 40%;
      margin-left: 5rem;
      padding: 3rem 0;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -12%;
        left: -10%;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 0.75rem solid #ecc5ab;
      }
      .get-started-section-header__title {
        font-size: 2.25rem;
        color: var(--second-text-color);
        margin-top: 1rem;
        margin-bottom: 2rem;
        .text-green {
          color: var(--primary-color);
          font-weight: 400;
        }
      }
      .get-started-section-header__text {
        margin-bottom: 4rem;
      }
      .get-started-section-header__link {
        text-decoration: none;
        cursor: pointer;
        font-size: 0.9rem;
        .text-green {
          color: var(--primary-color);
        }
      }
    }
  }
}
</style>
