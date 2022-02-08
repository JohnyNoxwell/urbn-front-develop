<template>
  <section id="mainSection" class="main-section">
    <!--    <app-header />-->
    <div class="main-section__content">
      <h1 class="main-section__header">
        Уникальный&nbsp;проект <br>
        от Пересвет-Юг
      </h1>
      <div class="main-section__info">
        <div class="info-col">
          <span class="info-col__header">Место</span>
          <span class="info-col__content">Исторический центр Ворошиловского района</span>
        </div>
        <div class="info-col">
          <span class="info-col__header">Среда</span>
          <span class="info-col__content">Комфортное пространство для жизни</span>
        </div>
        <div class="info-col">
          <span class="info-col__header">Отделка</span>
          <span class="info-col__content">White box</span>
        </div>
      </div>
      <div class="main-section__mobile-description">
        <mark-icon />
        <span>Исторический центр Ворошиловского района</span>
      </div>
      <app-button
        text="Скачать буклет"
        class="main-section__btn"
        link="technopark.pdf"
        download
      />
    </div>
    <div class="carousel">
      <VueSlickCarousel :dots="true" :arrows="true" v-bind="carouselSettings">
        <div class="carousel__item">
          <img src="~/assets/img/g4.jpg" alt="">
        </div>
        <div class="carousel__item">
          <img src="~/assets/img/g2.jpg" alt="">
        </div>
        <div class="carousel__item">
          <img src="~/assets/img/g3.jpg" alt="">
        </div>
        <div class="carousel__item">
          <img src="~/assets/img/g1.jpg" alt="">
        </div>
        <template #customPaging>
          <div class="carousel__dot" />
        </template>
        <template #prevArrow>
          <div class="carousel__arrow--left carousel__arrow">
            <arrow-left />
          </div>
        </template>
        <template #nextArrow>
          <div class="carousel__arrow--right carousel__arrow">
            <arrow-right />
          </div>
        </template>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import AppHeader from '../AppHeader'
import AppButton from '../Base/AppButton'
import ArrowRight from '~/assets/img/ar-r.svg'
import ArrowLeft from '~/assets/img/ar-l.svg'
import MarkIcon from '~/assets/img/mark.svg'

export default {
  name: 'MainSection',
  components: {
    AppButton, VueSlickCarousel, ArrowRight, ArrowLeft, MarkIcon
    // AppHeader
  },
  data () {
    return {
      carouselSettings: {
        swipe: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-section {
  padding: 105px 0 80px;
  // min-height: 100vh;
  height: 100vh;
  min-height: 0;
  position: relative;
  overflow: hidden;
  @include xl {
    padding-bottom: 160px;
  }
  @include md {
    padding-bottom: 56px;
  }
  @include sm {
    padding-bottom: 150px;
  }

  &__mobile-description {
    display: none;
    @include xs {
      display: flex;
      align-items: center;
      margin-bottom: 23px;
      svg {
        margin-right: 18px;
      }
      span {
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #fff;
      }
    }
    @include tablet-md- {
      max-width: 288px;
    }
  }

  &__header {
    font-weight: bold;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 58px;
    @include xl {
      font-size: 144px;
      line-height: 160px;
      margin-bottom: 116px;
    }
    @include md {
      font-size: 52px;
      line-height: 60px;
      margin-bottom: 32px;
    }
    @include sm-l {
      font-size: 52px;
      line-height: 60px;
      margin-bottom: 32px;
    }
    @include sm {
      font-size: 52px;
      line-height: 60px;
      margin-bottom: 16px;
    }
    @include xs {
      font-weight: bold;
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }

  &__content {
    margin-top: auto;
    padding-left: 148px;
    position: relative;
    max-width: 885px;
    display: grid;
    z-index: 2;
    pointer-events: none;
    @include xl {
      padding-left: 296px;
      max-width: 1670px;
    }
    @include md {
      padding-left: 136px;
      max-width: 647px;
    }
    @include sm-l {
      padding-left: 28px;
      max-width: 647px;
    }
    @include sm {
      padding-left: 28px;
    }
    @include xs {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  &__btn {
    padding: 6px 30px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1;
    position: absolute;
    top: 110px;
    right: -80px;
    pointer-events: auto;
    @include xl {
      font-size: 24px;
      line-height: 40px;
      padding: 12px 61px;
      border: 2px solid #FFFFFF;
      border-radius: 64px;
      right: -260px;
      top: 220px;
    }
    @include md {
      top: 76px;
      right: -120px;
    }
    @include sm-l {
      top: 76px;
      right: -20px;
    }
    @include sm {
      position: static;
      width: 160px;
      margin: 0;
      padding: 12px 0;
      display: flex;
      justify-content: center;
      border-radius: 32px;
    }
    @include xs {
      position: static;
      border: 0.444444px solid #FFFFFF;
      border-radius: 14.2222px;
      font-weight: 600;
      font-size: 12px;
      line-height: 9px;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @include tablet-md- {
      position: absolute;
      right: 34px;
      margin-top: -38px;
      max-width: 215px;
      max-height: 35.71px;
    }
    @media (max-width: 608px) and (orientation: landscape) {
      max-width: 200px;
    }
  }

  &__info {
    display: grid;
    grid-template-columns: 245px 200px 343px;
    @include xl {
      grid-template-columns: 590px 400px 686px;
    }
    @include md {
      grid-template-columns: 221px 188px 190px;
    }
    @include sm-l {
      grid-template-columns: 221px 188px 190px;
    }
    @include sm {
      grid-template-columns: 221px 188px 190px;
      margin-bottom: 30px;
    }
    @include xs {
      display: none;
    }
  }

  .info {

    &-col {
      min-width: 110px;
      color: #fff;
      display: flex;
      flex-direction: column;
      line-height: 20px;

      &:nth-child(1) {
        padding-right: 27px;
      }

      &:nth-child(2) {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        padding: 0 39px;
        line-height: 20px;
        @include xl {
          padding-left: 78px;
          border-left: 2px solid #fff;
          border-right: 2px solid #fff;
          .info-col__content {
            line-height: 40px;
          }
        }
      }

      &:nth-child(3) {
        padding-left: 39px;
        @include xl {
          padding-left: 78px;
          .info-col__content {
            line-height: 40px;
          }
        }
      }

      &__header {
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 5px;
        @include xl {
          font-size: 36px;
          line-height: 64px;
        }
        @include md {
          font-size: 14px;
          line-height: 32px;
        }
        @include sm-l {
          font-size: 14px;
          line-height: 32px;
        }
        @include sm {
          font-size: 14px;
          line-height: 32px;
        }
      }

      &__content {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        @include xl {
          font-size: 32px;
          line-height: 52px;
        }
        @include md {
          font-size: 12px;
          line-height: 20px;
        }
        @include sm-l {
          font-size: 12px;
          line-height: 20px;
        }
        @include sm {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
      &-col {
        &:nth-child(1) {
          .info-col__content {
            @include xl {
              line-height: 52px;
            }
          }
        }
      }
  }

}

.carousel {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  &__item {
    height: 100vh;
    min-height: 100vh;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 50%);
      opacity: 0.2;
    }
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s linear;
    @include xl {
      width: 16px;
      height: 16px;
    }
    @include xs {
      width: 5.55px;
      height: 5.55px;
    }
  }

  &__arrow {
    width: 10px;
    height: 18px;
    cursor: pointer;
    display: block;
    position: absolute;
    bottom: 55px;
    @include xl {
      width: 20px;
      height: 36px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    @include sm {
      bottom: 80px;
    }
    @include xs {
      display: none;
    }

    &--right {
      right: 33px;
      transform: translate(-50%, -50%);
      @include xl {
        right: 72px;
      }
      @include sm {
        right: auto;
        left: 220px;
      }
    }

    &--left {
      right: 255px;
      transform: translate(-50%, -50%);
      z-index: 1;
      @include xl {
        right: 504px;
      }
      @include sm {
        left: 30px;
        right: auto;
      }
    }
  }

  /deep/ .slick-dots {
    display: flex !important;
    padding: 0;
    font-size: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    bottom: 55px;
    right: 65px;
    transform: translate(-50%, -50%);
    z-index: 2;
    @include xl {
      right: 100px;
      gap: 40px;
    }
    @include sm {
      right: auto;
      left: 35px;
      bottom: 82px;
      transform: translate(50%, -50%);
    }
    @include xs {
      bottom: 35px;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
    @include tablet-md- {
      bottom: 20px;
    }

    .slick-active {
      .carousel__dot {
        width: 16px !important;
        height: 16px !important;
        @include xl {
          width: 32px !important;
          height: 32px !important;
        }
        @include xs {
          width: 11px !important;
          height: 11px !important;
        }
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    @include md- {
      object-fit: cover;
    }
    @include xs {
      object-fit: cover;
    }
  }
}
</style>
