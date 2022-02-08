<template>
  <section id="plans" class="plan-section">
    <save-app-popup
      v-if="appPopup"
      v-show="appPopup"
      @close="onToggleAppPopup"
      @submitted="onShowSuccessPopup"
    />
    <success-popup
      v-if="successPopup"
      v-show="successPopup"
      @close="onCloseSuccessPopup"
    />
    <div class="plan-section__grid">
      <div class="plan-section__left">
        <h2 class="plan-section__header">
          Планировки
        </h2>
        <div class="plan-section__variants-wrap">
          <div v-if="$breakpoints.xs" class="content-slider-wrap--mobile">
            <VueSlickCarousel
              v-if="hasVariants"
              v-show="hasVariants"
              ref="sliderContent"
              v-bind="sliderSettings"
              :as-nav-for="$refs.sliderImg"
            >
              <div
                v-for="(vrnt, idx) in apartments[currentLayout].variants"
                :key="`variant_description_${idx}`"
                class="plan-section__variants-description"
              >
                <h3>{{ vrnt.title }}</h3>
                <p v-html="vrnt.content"></p>
              </div>
            </VueSlickCarousel>
          </div>
          <div class="plan-section__variants">
            <div class="plan-section__variants-top">
              <div class="plan-section__variants-buttons">
                <button
                  v-for="(apart, idx) in apartments"
                  :key="apart.type + apart.rooms"
                  :class="[
                    'plan-section__variants-button',
                    currentLayout === idx && 'active',
                    apart.type === 'penthouse' && 'plan-section__variants-button--long'
                  ]"
                  @click="onChangeLayout(idx)"
                >
                  {{ apart.type === 'penthouse' ? 'Пентхаус' : apart.rooms }}
                </button>
              </div>
            </div>
            <div v-if="$breakpoints.sm" class="content-slider-wrap--tablet">
              <VueSlickCarousel
                v-if="hasVariants"
                v-show="hasVariants"
                ref="sliderContent"
                v-bind="sliderSettings"
                :as-nav-for="$refs.sliderImg"
              >
                <div
                  v-for="(vrnt, idx) in apartments[currentLayout].variants"
                  :key="`variant_description_${idx}`"
                  class="plan-section__variants-description"
                >
                  <h3>{{ vrnt.title }}</h3>
                  <p v-html="vrnt.content"></p>
                </div>
              </VueSlickCarousel>
            </div>
            <div
              v-show="hasVariants && oneVariant"
              class="plan-section__variants-bot"
            >
              <div class="plan-section__variants-buttons--small__wrap">
                <span>Варианты</span>
                <div class="plan-section__variants-buttons--small">
                  <button
                    v-for="(vrnt, idx) in apartments[currentLayout].variants"
                    :key="idx"
                    :class="[
                      'plan-section__variants-button--small',
                      currentVariant === idx && 'active'
                    ]"
                    @click="onChangeVariant(idx)"
                  >
                    {{ idx + 1 }}
                  </button>
                </div>
              </div>
              <div v-show="hasVariants && oneVariant" class="plan-section__variants-arrows mobile">
                <arrow-left @click="onPrev" />
                <arrow-right @click="onNext" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="!$breakpoints.xs && !$breakpoints.sm" class="content-slider-wrap">
          <VueSlickCarousel
            v-if="hasVariants"
            v-show="hasVariants"
            ref="sliderContent"
            v-bind="sliderSettings"
            :as-nav-for="$refs.sliderImg"
          >
            <div
              v-for="(vrnt, idx) in apartments[currentLayout].variants"
              :key="`variant_description_${idx}`"
              class="plan-section__variants-description"
            >
              <h3>{{ vrnt.title }}</h3>
              <p v-html="vrnt.content"></p>
            </div>
          </VueSlickCarousel>
        </div>
        <div class="variants-controls">
          <div
            v-show="hasVariants && oneVariant"
            class="plan-section__variants-bot--tablet"
          >
            <span>Варианты</span>
            <div class="plan-section__variants-buttons--small">
              <button
                v-for="(vrnt, idx) in apartments[currentLayout].variants"
                :key="idx"
                :class="[
                  'plan-section__variants-button--small',
                  currentVariant === idx && 'active'
                ]"
                @click="onChangeVariant(idx)"
              >
                {{ idx + 1 }}
              </button>
            </div>
          </div>
          <div v-show="hasVariants && oneVariant" class="plan-section__variants-arrows">
            <button @click="onPrev">
              <arrow-left />
            </button>
            <button @click="onNext">
              <arrow-right />
            </button>
          </div>
        </div>
        <div v-show="hasVariants" class="plan-section__bottom">
          <app-button v-if="apartments[currentLayout].variants[currentVariant].walk" :link="apartments[currentLayout].variants[currentVariant].walk" text="Погулять по квартире" alignment="baseline" />
          <app-button v-if="apartments[currentLayout].variants[currentVariant].detail" :link="'https://smart-catalog.profitbase.ru/catalog/projects/houses?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'" text="Узнать цену" alignment="baseline" />
          <app-button v-if="apartments[currentLayout].variants[currentVariant].download" :link="apartments[currentLayout].variants[currentVariant].download" text="Скачать презентацию" alignment="baseline" />
          <app-button v-if="apartments[currentLayout].variants[currentVariant].download" text="Забронировать" alignment="baseline" @click="onToggleAppPopup" />
        </div>
      </div>
      <div class="slider-wrap">
        <div v-if="apartments[currentLayout].variants[currentVariant].size" class="flat-size">
          {{ apartments[currentLayout].variants[currentVariant].size }}
        </div>
        <div class="plan-backdrop">
          <plan-backdrop />
        </div>
        <div class="plan-backdrop-large">
          <plan-backdrop-large />
        </div>
        <div class="plan-backdrop-medium">
          <plan-backdrop-medium />
        </div>
        <VueSlickCarousel
          v-if="hasVariants"
          v-show="hasVariants"
          ref="sliderImg"
          v-bind="sliderSettings"
          :as-nav-for="$refs.sliderContent"
          @afterChange="afterChange"
        >
          <div
            v-for="(vrnt, idx) in apartments[currentLayout].variants"
            :key="`variant_img_${idx}`"
            class="plan-section__right"
          >
            <div v-show="vrnt.built" class="plan-section__right-inner">
              <img :src="vrnt.img" :alt="vrnt.imgAlt">
              <plus
                v-for="mapPoint in vrnt.points"
                :key="mapPoint.content"
                v-tooltip="{
                  triggers: ['hover', 'focus', 'click'],
                  offset: [0, 8],
                  class: 'layouts-tooltip-theme',
                  content: mapPoint.content
                }"
                class="plan-section__right-layout-point"
                :class="mapPoint.name"
              />
            </div>
          </div>
        </VueSlickCarousel>
      </div>

      <div v-if="hasVariants" v-show="!apartments[currentLayout].variants[currentVariant].built">
        Скоро
      </div>
      <div v-show="hasVariants" class="plan-section__bottom tablet">
        <app-button v-if="apartments[currentLayout].variants[currentVariant].walk" :link="apartments[currentLayout].variants[currentVariant].walk" text="Погулять по квартире" alignment="baseline" />
        <app-button v-if="apartments[currentLayout].variants[currentVariant].detail" :link="'https://smart-catalog.profitbase.ru/catalog/projects/houses?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'" text="Узнать цену" alignment="baseline" />
        <app-button v-if="apartments[currentLayout].variants[currentVariant].download" :link="apartments[currentLayout].variants[currentVariant].download" text="Скачать презентацию" alignment="baseline" />
        <app-button v-if="apartments[currentLayout].variants[currentVariant].download" text="Забронировать" alignment="baseline" @click="onToggleAppPopup" />
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import apartments from './apartments'
import ArrowLeft from '~/assets/img/plan-l.svg'
import ArrowRight from '~/assets/img/plan-r.svg'
import Plus from '~/assets/img/plus.svg'
import AppButton from '~/components/Base/AppButton'
import SaveAppPopup from '~/components/Base/Popup/SaveAppPopup'
import SuccessPopup from '~/components/Base/Popup/SuccessPopup'
import PlanBackdrop from '~/assets/img/plan-backdrop.svg'
import PlanBackdropLarge from '~/assets/img/plan-backdrop-l.svg'
import PlanBackdropMedium from '~/assets/img/plan-backdrop-m.svg'

export default {
  name: 'PlanSection',
  components: {
    AppButton,
    ArrowLeft,
    ArrowRight,
    Plus,
    VueSlickCarousel,
    PlanBackdrop,
    PlanBackdropLarge,
    PlanBackdropMedium,
    SaveAppPopup,
    SuccessPopup
  },
  data () {
    return {
      currentLayout: 0,
      currentVariant: 0,
      apartments,
      sliderSettings: {
        dots: false,
        arrows: false,
        fade: true,
        speed: 200,
        autoplay: false
      },
      appPopup: false,
      successPopup: false
    }
  },
  computed: {
    hasVariants () {
      return this.apartments[this.currentLayout].variants.length > 0
    },
    oneVariant () {
      return this.apartments[this.currentLayout].variants.length > 1
    }
  },
  methods: {
    onNext () {
      const layout = this.apartments[this.currentLayout]
      this.currentVariant = this.currentVariant + 1
      if (this.currentVariant >= layout.variants.length) {
        this.currentVariant = 0
        this.$refs.sliderContent.goTo(this.currentVariant)
        return
      }
      this.$refs.sliderContent.next()
      this.$refs.sliderImg.next()
    },
    onPrev () {
      const layout = this.apartments[this.currentLayout]
      this.currentVariant = this.currentVariant - 1
      if (this.currentVariant === -1) {
        this.currentVariant = layout.variants.length - 1
        this.$refs.sliderContent.goTo(this.currentVariant)
        return
      }
      this.$refs.sliderContent.prev()
      this.$refs.sliderImg.prev()
    },
    onChangeLayout (layout) {
      if (layout >= this.apartments.length) {
        return
      }
      this.currentLayout = layout
      this.currentVariant = 0
      requestAnimationFrame(() => {
        if (!this.$refs.sliderContent || !this.$refs.sliderImg) {
          return
        }
        this.$refs.sliderContent.goTo(this.currentVariant)
        this.$refs.sliderImg.goTo(this.currentVariant)
      })
    },
    onChangeVariant (idx) {
      if (idx >= this.apartments[this.currentLayout].variants.length) {
        return
      }
      this.currentVariant = idx
      this.$refs.sliderContent.goTo(idx)
      this.$refs.sliderImg.goTo(idx)
    },
    onToggleAppPopup () {
      this.appPopup = !this.appPopup
      this.successPopup = false
    },
    onShowSuccessPopup () {
      this.appPopup = false
      this.successPopup = true
    },
    onCloseSuccessPopup () {
      this.appPopup = false
      this.successPopup = false
    },
    afterChange (index) {
      this.currentVariant = index
    }
  }
}
</script>

<style lang="scss" scoped>
.plan-section {
  padding-bottom: 90px;
  padding-top: 150px;
  background: #2B2B2B;
  min-height: max-content;
  overflow: hidden;
  @include xl {
    padding-top: 300px;
    padding-bottom: 117px;
  }
  @include md {
    padding-top: 107px;
    padding-bottom: 41px;
  }
  @include sm {
    padding-top: 55px;
    padding-bottom: 40px;
  }
  @include xs {
    padding: 45px 15px;
    min-height: auto;
    max-width: 100vw;
  }
  @include tablet-md- {
    padding: 29px 0 76px;
    position: relative;
  }

  &__grid {
    display: grid;
    grid-template-columns: 355px 950px;
    gap: 230px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: inherit;
    @include xl {
      grid-template-columns: 711px 1990px;
      gap: 461px;
      padding: 0 387px;
      align-items: center;
    }
    @include lg {
      padding: 0 270px;
    }
    @include md {
      grid-template-columns: 302px 675px;
      gap: 165px;
      padding: 0 139px;
    }
    @include sm-l {
      grid-template-columns: 302px 675px;
      gap: 43px;
      padding: 0 25px;
    }
    @include sm {
      grid-template-columns: 718px;
      gap: 0;
      padding: 0 25px;
    }
    @include xs {
      grid-template-columns: calc(100vw - 30px);
      gap: 0;
    }
    @include tablet-md- {
      max-width: max-content;
      position: relative;
      grid-template-columns: 718px;
      padding: 0 22px;
      display: flex;
      // justify-content: space-between;
      align-self: start;
    }
  }

  &__left {
    @include tablet-md- {
      width: 40%;
    }
  }

  &__header {
    font-weight: 600;
    font-size: 44px;
    line-height: 55px;
    color: #fff;
    margin-bottom: 55px;
    @include xl {
      font-size: 88.0029px;
      line-height: 110px;
      margin-bottom: 112px;
    }
    @include lg- {
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 40px;
    }
    @include xs {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    @include tablet-md- {
      margin-bottom: 16px;
    }
    @include mobile-landscape {
      margin-bottom: 0;
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    @include xl {
      gap: 56px;
    }
    @include lg- {
      gap: 20px;
    }
    @include sm {
      display: none;
    }
    @include xs {
      display: none;
    }

    &.tablet {
      display: none;
      @include sm-l- {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @include tablet-md- {
        position: absolute;
        left: 22px;
        bottom: 0;
      }
    }

    /deep/ .app-button {
      width: 300px;
      height: 70px;
      font-size: 20px;
      color: #fff;
      border-radius: 5px;
      border: 1.40556px solid #FFFFFF;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: none;
      font-weight: 400;
      &:active,
      &:focus {
        outline: none;
        border-color: transparent;
        background: $accent;
        color: #000;
      }
      @include -sm-l {
        &:hover {
          outline: none;
          border-color: transparent;
          background: $accent;
        }
      }
      @include xl {
        width: 600px;
        height: 140px;
        font-size: 40px;
      }
      @include lg- {
        border-radius: 4px;
        width: 220px;
        height: 50px;
        font-size: 14px;
      }
      @include sm {
        width: 348px;
      }
      @include xs {
        width: 100%;
        font-size: 10px;
        font-weight: 600;
        padding-right: 0;
        padding-left: 0;
        height: 36px;
      }
      @include tablet-md- {
        width: max-content;
        border-width: 0.51px;
        width: 110px;
        height: auto;
        padding: 8px 0;
        font-size: 7.84px;
        line-height: 12.23px;
        font-weight: 600;
      }

      &:hover {
        background-color: $accent;
        color: #000;
      }
    }
  }

  &__variants {
    @include sm {
      display: grid;
      grid-template-columns: 253px 1fr;
      gap: 20px;
      margin-bottom: 23px;
    }
    @include tablet-md- {
        display: grid;
        grid-template-columns: 253px 1fr;
        grid-gap: 20px;
        gap: 20px;
        margin-bottom: 23px;
        display: flex;
        flex-direction: column;
      }

    &-wrap {
      @include xs {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 20px;
      }
      @include tablet-md- {
        display: grid;
        grid-template-columns: 253px 1fr;
        grid-gap: 20px;
        gap: 20px;
        display: flex;
        flex-direction: column;
      }
    }

    &-arrows {
      width: 155px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 120px;
      color: #E8B973;
      transition: color 0.2ms;
      @include xl {
        width: 310px;
        margin-bottom: 200px;
      }
      @include lg- {
        width: 110px;
      }
      @include sm {
        margin-bottom: 0;
      }
      @include tablet-md- {
        margin-bottom: 0;
      }

      &.mobile {
        display: none;
        @include xs {
          grid-row: 1 / 2;
          grid-column: 2 / 3;
          display: block;
          margin-bottom: -9px;
          width: 49px;
          align-self: flex-start;
          height: 10px;
          position: relative;
          top: -3px;
        }
      }

      & button {
        padding: 0;
        border: 0;
        background-color: transparent;
        color: #ffffff;
        transition: color 0.2s ease;
        line-height: 0;
        cursor: pointer;

        &:hover {
          color: $accent;
        }
      }

      svg {
        cursor: pointer;
        @include xl {
          width: 121px;
          height: auto;
        }
        @include lg- {
          width: 43px;
          height: auto;
        }
      }
    }

    &-top {
      margin-bottom: 30px;
      @include xl {
        margin-bottom: 61px;
      }
      @include lg- {
        margin-bottom: 22px;
      }
      @include xs {
        margin-bottom: 17px;
      }
      @include tablet-md- {
        margin-bottom: 0;
      }
    }

    &-buttons {
      display: flex;
      gap: 15px;
      @include xl {
        gap: 33px;
      }
      @include lg- {
        gap: 12px;
      }
      @include xs {
        gap: 6px;
      }
      @include tablet-md- {
        gap: 6px;
      }

      &--small {
        display: flex;
        gap: 12px;
        margin-left: 60px;
        @include xl {
          gap: 24px;
        }
        @include lg- {
          gap: 8px;
        }
        @include xs {
          grid-column: 1 / 3;
          flex-wrap: wrap;
          margin-left: 0;
          gap: 2px;
        }
        @include tablet-md- {
          margin-left: 0;
        }

        &__wrap {
          display: flex;
          @include xs {
            display: grid;
            grid-column: 1 / 3;
          }
        }
      }
    }

    &-button {
      width: 54px;
      height: 54px;
      border: 1.40556px solid #E8B973;
      border-radius: 22.489px;
      font-family: $base-font;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      transition: background-color 0.2s ease;
      color: #fff;
      cursor: pointer;
      @include xl {
        width: 106px;
        height: 106px;
        border: 2.81122px solid #E8B973;
        border-radius: 44.9795px;
        font-size: 40.0013px;
      }
      @include lg- {
        width: 38px;
        height: 38px;
        font-size: 14px;
        border-radius: 16px;
      }
      @include xs {
        width: 21px;
        height: 21px;
        border: 0.570415px solid #E8B973;
        border-radius: 9.12665px;
        font-size: 8px;
      }
      @include tablet-md- {
        width: max-content;
        padding: 5px 6px 4px;
        font-size: 8px;
        line-height: 13.69px;
        width: 21.93px;
        height: 21.68px;
      }

      &--long {
        width: 140px;
        @include xl {
          width: 280px;
        }
        @include lg- {
          width: 100px;
        }
        @include xs {
          width: 56px;
        }
        @include tablet-md- {
          width: 56px;
        }
      }

      &.active {
        background-color: $accent;
      }

      &--small {
        width: 33px;
        height: 33px;
        font-size: 20px;
        line-height: 34px;
        font-family: $base-font;
        font-style: italic;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        transition: background-color 0.2s ease;
        border-radius: 40px;
        border: none;
        cursor: pointer;
        @include xl {
          font-size: 32.001px;
          line-height: 67px;
          width: 66px;
          height: 66px;
          border-radius: 78.7141px;
        }
        @include lg- {
          width: 24px;
          height: 24px;
          font-size: 14px;
        }
        @include xs {
          font-size: 9px;
          border-radius: 17.0075px;
        }
        @include tablet-md- {
          font-size: 9px;
          line-height: 14.58px;
          width: 14.58px;
          height: 14px;
        }

        &.active {
          background-color: $accent;
        }
      }
    }

    &-bot {
      display: flex;
      align-items: center;
      margin-bottom: 60px;
      @include xl {
        margin-bottom: 120px;
      }
      @include lg- {
        margin-bottom: 40px;
      }
      @include sm {
        display: none;
      }
      @include xs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        svg {
          width: 20px;
          height: auto;
        }
      }
      @include tablet-md- {
        display: none;
      }

      &--tablet {
        display: none;
        @include sm {
          color: #fff;
          display: flex;
          align-items: center;
        }
        @include tablet-md- {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
          span {
            font-size: 8px;
            line-height: 14.58px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #fff;
          }
        }
      }

      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 33.73px;
        color: #fff;
        @include xl {
          font-size: 32.001px;
          line-height: 67px;
        }
        @include lg- {
          font-size: 12px;
          line-height: 24px;
        }
        @include xs {
          display: block;
          font-size: 8px;
          line-height: 14.58px;
          margin-bottom: 8px;
        }
      }
    }

    &-description {
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      color: #fff;
      margin-bottom: 60px;
      h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        margin: 20px 0;
        @include xl {
          font-size: 52px;
          line-height: 72px;
        }
      }
      @include xl {
        font-size: 36.0012px;
        line-height: 60px;
        margin-bottom: 100px;
      }
      @include lg- {
        font-size: 14px;
        line-height: 24px;
      }
      @include sm {
        margin-bottom: 0;
        h3 {
          font-size: 16px;
          line-height: 20px;
          margin: 0 0 10px;
        }
      }
      @include xs {
        font-size: 10px;
        line-height: 16px;
        h3 {
          font-size: 12px;
          line-height: 18px;
          margin: 0 0 10px;
        }
      }
      @include tablet-md- {
        font-size: 10px;
        line-height: 16px;
        margin: 0;
      }
    }
  }

  &__right {
    position: relative;
    z-index: 2;
    max-width: 100%;

    &-inner {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        margin-left: auto;
        @include xl {
          max-width: 1624px;
          margin-top: 110px;
        }
        @include lg {
          margin: 164px auto 0;
        }
        @include md {
          max-width: 557px;
          margin-top: 65px;
        }
        @include sm-l {
          max-width: 675px;
          margin-top: 47px;
          margin-right: auto;
          margin-left: 12px;
        }
        @include sm {
          max-width: 675px;
          margin-top: 5px;
          margin-left: 20px;
        }
        @include xs {
          background-size: cover;
          max-width: 100%;
        }
        @include tablet-md- {
          margin: 0;
        }
      }
      @include sm {
        max-width: 675px;
      }
      @include xs {
        max-width: 100%;
        margin: 0 auto;
      }
      @include tablet-md- {
        max-width: 420px;
        // margin: 0 auto;
        margin: 0;
      }
      @include mobile-landscape {
        max-width: 320px;
        margin-left: 40px;
      }
    }

    &-layout-point {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      width: 45px;
      height: 45px;
      outline: none;
      @include lg- {
        width: 32px;
        height: 32px;
      }
      @include xl {
        width: 90px;
        height: 90px;
      }
      @include xs {
        width: 18px;
        height: 18px;
      }
      @include tablet-md- {
        width: 14.16px;
        height: 14.16px;
      }
    }
  }
}

.flat-size {
  position: absolute;
  padding: 4px 12px;
  background: #E8B973;
  font-style: normal;
  font-weight: bold;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  @include xl {
    width: 248px;
    height: 115px;
    top: 500px;
    left: 38px;
    font-size: 54px;
    line-height: 61px;
    border-radius: 15px;
  }
  @include lg {
    width: 114px;
    height: 52.62px;
    top: 359px;
    left: -70px;
    font-size: 25px;
    line-height: 28px;
    border-radius: 7px;
  }
  @include md {
    width: 98px;
    height: 45px;
    top: 185px;
    left: 38px;
    font-size: 21px;
    line-height: 24px;
    border-radius: 6px;
  }
  @include sm-l {
    // width: 69px;
    height: 32px;
    top: 215px;
    left: 20px;
    font-size: 15px;
    line-height: 17px;
    border-radius: 4px;
  }
  @include sm {
    padding: 7px 12px;
    height: 32px;
    top: 45px;
    right: 40px;
    left: unset;
    font-size: 15px;
    line-height: 17px;
    border-radius: 4px;
  }
  @include xs {
    padding: 4px 7px;
    height: 17.54px;
    top: 10px;
    right: 0;
    left: unset;
    font-size: 8px;
    line-height: 9px;
    border-radius: 2px;
  }
  @include tablet-md- {
    padding: 4px 7px;
    height: 17.54px;
    top: -10px;
    right: 220px;
    left: unset;
    font-size: 8.18px;
    line-height: 9.35px;
    border-radius: 2px;
  }
  @include mobile-landscape {
    top: 56px;
    right: auto;
    left: 60px;
  }
}

.slider-wrap {
  position: relative;
  @include sm {
    margin-bottom: 40px;
  }
  @include xs {
    margin-bottom: 40px;
    max-width: 100%;
  }
  @include tablet-md- {
    flex-grow: 1;
    max-width: 675px;
    position: relative;
    margin-bottom: 0;
    margin-top: 80px;
  }

  .plan-backdrop {
    position: absolute;
    // right: -200px;
    // top: -140px;
    right: -213px;
    top: -62px;
    @include xl {
      display: none;
    }
    @include lg- {
      display: none;
    }
    @include tablet-md- {
      top: -165px;
      right: 220px;
      pointer-events: none;
      display: block;
      max-width: 680px;
      svg {
        height: 600px;
      }
    }
    @include mobile-landscape {
      top: -120px;
      right: 320px;
      svg {
        height: 420px;
      }
    }
  }

  .plan-backdrop-large {
    display: none;
    @include xl {
      display: block;
      position: absolute;
      right: -400px;
      top: -280px;
    }
  }

  .plan-backdrop-medium {
    display: none;
    position: absolute;
    pointer-events: none;
    @include md {
      display: block;
      right: -200px;
      top: -100px;
    }
    @include sm-l {
      display: block;
      right: -260px;
      top: -100px;
    }
    @include sm {
      display: block;
      right: -230px;
      top: -100px;
    }
    @include tablet-md- {
      display: none;
    }
  }
}

.content-slider-wrap {
  @include sm {
    display: none;
  }
  @include xs {
    display: none;
  }

  &--tablet {
    display: none;
    @include sm {
      display: block;
      width: 434px;
    }
    @include tablet-md- {
      font-size: 8px;
      line-height: 14.58px;
      display: block;
      //width: 434px;
      width: 100%;
    }
  }

  &--mobile {
    display: none;
    @include xs {
      display: block;
    }
    @include tablet-md- {
      max-width: 300px;
      // max-height: 100px;
    }
  }
}

.variants-controls {
  display: block;
  @include sm {
    display: grid;
    grid-template-columns: minmax(254px, min-content) 110px;
    gap: 20px;
    margin-bottom: 70px;
  }
  @include xs {
    display: none;
  }
  @include tablet-md- {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

svg {
  &.a1 {
    top: 165px;
    left: 325px;
    @include xl {
      top: 350px;
      left: 1030px;
    }
    @include lg {
      top: 206px;
      left: 395px;
    }
    @include md {
      top: 118px;
      left: 346px;
    }
    @include sm-l {
      top: 146px;
      left: 292px;
    }
    @include sm {
      top: 148px;
      left: 297px;
    }
    @include xs {
      top: 62px;
      left: 117px;
    }
    @include tablet-md- {
      top: 23%;
      left: 41%;
    }
  }

  &.a2 {
    top: 425px;
    left: 182px;
    @include xl {
      top: 875px;
      left: 749px;
    }
    @include lg {
      top: 509px;
      left: 225px;
    }
    @include md {
      top: 299px;
      left: 247px;
    }
    @include sm-l {
      top: 362px;
      left: 174px;
    }
    @include sm {
      top: 363px;
      left: 181px;
    }
    @include xs {
      top: 156px;
      left: 68px;
    }
    @include tablet-md- {
      top: 57%;
      left: 25%;
    }
  }

  &.a3 {
    top: 200px;
    left: 586px;
    @include xl {
      top: 420px;
      left: 1580px;
    }
    @include lg {
      top: 250px;
      left: 712px;
    }
    @include md {
      top: 143px;
      left: 533px;
    }
    @include sm-l {
      top: 179px;
      left: 516px;
    }
    @include sm {
      top: 179px;
      left: 525px;
    }
    @include xs {
      top: 73px;
      left: 216px;
    }
    @include tablet-md- {
      top: 27%;
      left: 75%;
    }
  }

  &.a4 {
    top: 434px;
    left: 475px;
    @include xl {
      top: 897px;
      left: 1343px;
    }
    @include lg {
      top: 526px;
      left: 582px;
    }
    @include md {
      top: 306px;
      left: 452px;
    }
    @include sm-l {
      top: 373px;
      left: 423px;
    }
    @include sm {
      top: 374px;
      left: 431px;
    }
    @include xs {
      top: 158px;
      left: 173px;
    }
    @include tablet-md- {
      top: 58%;
      left: 62%;
    }
  }

  &.b1 {
    top: 109px;
    left: 370px;
    @include xl {
      top: 229px;
      left: 1131px;
    }
    @include lg {
      top: 140px;
      left: 450px;
    }
    @include md {
      top: 76px;
      left: 380px;
    }
    @include md- {
      top: 99px;
      left: 333px;
    }
    @include sm {
      top: 98px;
      left: 341px;
    }
    @include xs {
      top: 39px;
      left: 136px;
    }
    @include tablet-md- {
      top: 17%;
      left: 48%;
    }
  }

  &.b2 {
    top: 247px;
    left: 613px;
    @include xl {
      top: 510px;
      left: 1627px;
    }
    @include lg {
      top: 302px;
      left: 745px;
    }
    @include md {
      top: 173px;
      left: 550px;
    }
    @include md- {
      top: 212px;
      left: 542px;
    }
    @include sm {
      top: 211px;
      left: 550px;
    }
    @include xs {
      top: 89px;
      left: 223px;
    }
    @include tablet-md- {
      top: 36%;
      left: 79%;
    }

  }

  &.b3 {
    top: 307px;
    left: 219px;
    @include xl {
      top: 639px;
      left: 815px;
    }
    @include lg {
      top: 376px;
      left: 265px;
    }
    @include md {
      top: 218px;
      left: 272px;
    }
    @include md- {
      top: 268px;
      left: 199px;
    }
    @include sm {
      top: 260px;
      left: 207px;
    }
    @include xs {
      top: 110px;
      left: 79px;
    }
    @include tablet-md- {
      top: 44%;
      left: 27%;
    }

  }

  &.b4 {
    top: 475px;
    left: 349px;
    @include xl {
      top: 983px;
      left: 1087px;
    }
    @include lg {
      top: 580px;
      left: 427px;
    }
    @include md {
      top: 339px;
      left: 363px;
    }
    @include md- {
      top: 415px;
      left: 316px;
    }
    @include sm {
      top: 405px;
      left: 327px;
    }
    @include xs {
      top: 175px;
      left: 127px;
    }
    @include tablet-md- {
      top: 67%;
      left: 46%;
    }
  }

  &.c1 {
    top: 120px;
    left: 260px;
    @include xl {
      top: 260px;
      left: 909px;
    }
    @include lg {
      top: 157px;
      left: 317px;
    }
    @include md {
      top: 86px;
      left: 303px;
    }
    @include sm-l {
      top: 110px;
      left: 236px;
    }
    @include sm {
      top: 110px;
      left: 245px;
    }
    @include xs {
      top: 43px;
      left: 96px;
    }
    @include tablet-md- {
      top: 19%;
      left: 33%;
    }
  }

  &.c2 {
    top: 219px;
    left: 490px;
    @include xl {
      top: 451px;
      left: 1377px;
    }
    @include lg {
      top: 270px;
      left: 596px;
    }
    @include md {
      top: 157px;
      left: 460px;
    }
    @include sm-l {
      top: 193px;
      left: 434px;
    }
    @include sm {
      top: 191px;
      left: 443px;
    }
    @include xs {
      top: 80px;
      left: 177px;
    }
    @include tablet-md- {
      top: 29%;
      left: 62%;
    }

  }

  &.c3 {
    top: 371px;
    left: 179px;
    @include xl {
      top: 767px;
      left: 740px;
    }
    @include lg {
      top: 454px;
      left: 224px;
    }
    @include md {
      top: 262px;
      left: 245px;
    }
    @include sm-l {
      top: 323px;
      left: 171px;
    }
    @include sm {
      top: 322px;
      left: 178px;
    }
    @include xs {
      top: 135px;
      left: 64px;
    }
    @include tablet-md- {
      top: 50%;
      left: 23%;
    }
  }

  &.c4 {
    top: 383px;
    left: 583px;
    @include xl {
      top: 800px;
      left: 1563px;
    }
    @include lg {
      top: 473px;
      left: 702px;
    }
    @include md {
      top: 274px;
      left: 528px;
    }
    @include sm-l {
      top: 335px;
      left: 511px;
    }
    @include sm {
      top: 334px;
      left: 519px;
    }
    @include xs {
      top: 141px;
      left: 213px;
    }
    @include tablet-md- {
      top: 52%;
      left: 74%;
    }
  }

  &.d1 {
    top: 186px;
    left: 293px;
    @include xl {
      top: 384px;
      left: 971px;
    }
    @include lg {
      top: 230px;
      left: 356px;
    }
    @include md {
      top: 130px;
      left: 322px;
    }
    @include sm-l {
      top: 161px;
      left: 263px;
    }
    @include sm {
      top: 162px;
      left: 272px;
    }
    @include xs {
      top: 26%;
      left: 39%;
    }
    @include tablet-md- {
      top: 26%;
      left: 39%;
    }
  }

  &.d2 {
    top: 272px;
    left: 548px;
    @include xl {
      top: 561px;
      left: 1491px;
    }
    @include lg {
      top: 336px;
      left: 662px;
    }
    @include md {
      top: 195px;
      left: 503px;
    }
    @include sm-l {
      top: 239px;
      left: 484px;
    }
    @include sm {
      top: 238px;
      left: 489px;
    }
    @include xs {
      top: 40%;
      left: 70%;
    }
    @include tablet-md- {
      top: 40%;
      left: 70%;
    }
  }

  &.d3 {
    top: 381px;
    left: 199px;
    @include xl {
      top: 785px;
      left: 764px;
    }
    @include lg {
      top: 460px;
      left: 237px;
    }
    @include md {
      top: 271px;
      left: 255px;
    }
    @include sm-l {
      top: 329px;
      left: 180px;
    }
    @include sm {
      top: 331px;
      left: 189px;
    }
    @include xs {
      top: 55%;
      left: 25%;
    }
    @include tablet-md- {
      top: 55%;
      left: 25%;
    }
  }

  &.d4 {
    top: 537px;
    left: 347px;
    @include xl {
      top: 1102px;
      left: 1083px;
    }
    @include lg {
      top: 642px;
      left: 419px;
    }
    @include md {
      top: 380px;
      left: 360px;
    }
    @include sm-l {
      top: 458px;
      left: 311px;
    }
    @include sm {
      top: 458px;
      left: 317px;
    }
    @include xs {
      top: 72%;
      left: 49%;
    }
    @include tablet-md- {
      top: 72%;
      left: 49%;
    }
  }
  &.d5 {
    top: 128px;
    left: 535px;
    @include xl {
      top: 1102px;
      left: 1083px;
    }
    @include lg {
      top: 128px;
      left: 535px;
    }
    @include md {
      top: 72px;
      left: 431px;
    }
    @include sm-l {
      top: 93px;
      left: 392px;
    }
    @include sm {
      top: 96px;
      left: 407px;
    }
    @include xs {
      top: 16%;
      left: 57.5%;
    }
    @include tablet-md- {
      top: 16%;
      left: 57.5%;
    }
  }

  &.e1 {
    top: 102px;
    left: 396px;
    @include xl {
      top: 209px;
      left: 1180px;
    }
    @include lg {
      top: 126px;
      left: 476px;
    }
    @include md {
      top: 70px;
      left: 397px;
    }
    @include sm-l {
      top: 89px;
      left: 350px;
    }
    @include sm {
      top: 91px;
      left: 357px;
    }
    @include xs {
      top: 12%;
      left: 49%;
    }
    @include tablet-md- {
      top: 12%;
      left: 49%;
    }
  }

  &.e2 {
    top: 185px;
    left: 519px;
    @include xl {
      top: 388px;
      left: 1429px;
    }
    @include lg {
      top: 231px;
      left: 629px;
    }
    @include md {
      top: 132px;
      left: 481px;
    }
    @include sm-l {
      top: 165px;
      left: 460px;
    }
    @include sm {
      top: 165px;
      left: 467px;
    }
    @include xs {
      top: 25%;
      left: 65%;
    }
    @include tablet-md- {
      top: 28%;
      left: 67%;
    }
  }

  &.e3 {
    top: 318px;
    left: 243px;
    @include xl {
      top: 661px;
      left: 869px;
    }
    @include lg {
      top: 390px;
      left: 294px;
    }
    @include md {
      top: 227px;
      left: 287px;
    }
    @include sm-l {
      top: 278px;
      left: 221px;
    }
    @include sm {
      top: 275px;
      left: 226px;
    }
    @include xs {
      top: 44%;
      left: 31%;
    }
    @include tablet-md- {
      top: 44%;
      left: 31%;
    }
  }

  &.e4 {
    top: 404px;
    left: 503px;
    @include xl {
      top: 830px;
      left: 1411px;
    }
    @include lg {
      top: 483px;
      left: 612px;
    }
    @include md {
      top: 287px;
      left: 471px;
    }
    @include sm-l {
      top: 345px;
      left: 446px;
    }
    @include sm {
      top: 346px;
      left: 454px;
    }
    @include xs {
      top: 53%;
      left: 64%;
    }
    @include tablet-md- {
      top: 53%;
      left: 64%;
    }
  }
  &.e5 {
    top: 404px;
    left: 503px;
    @include xl {
      top: 830px;
      left: 1411px;
    }
    @include lg {
      top: 615px;
      left: 415px;
    }
    @include md {
      top: 360px;
      left: 362px;
    }
    @include sm-l {
      top: 439px;
      left: 306px;
    }
    @include sm {
      top: 439px;
      left: 306px;
    }
    @include xs {
      top: 69%;
      left: 44%;
    }
    @include tablet-md- {
      top: 72%;
      left: 42%;
    }
  }

  &.f1 {
    top: 112px;
    left: 445px;
    @include xl {
      top: 229px;
      left: 1284px;
    }
    @include lg {
      top: 134px;
      left: 544px;
    }
    @include md {
      top: 80px;
      left: 435px;
    }
    @include sm-l {
      top: 96px;
      left: 398px;
    }
    @include sm {
      top: 96px;
      left: 406px;
    }
    @include xs {
      top: 15%;
      left: 58%;
    }
    @include tablet-md- {
      top: 15%;
      left: 58%;
    }
  }

  &.f2 {
    top: 276px;
    left: 576px;
    @include xl {
      top: 588px;
      left: 1543px;
    }
    @include lg {
      top: 337px;
      left: 693px;
    }
    @include md {
      top: 198px;
      left: 524px;
    }
    @include sm-l {
      top: 240px;
      left: 506px;
    }
    @include sm {
      top: 241px;
      left: 512px;
    }
    @include xs {
      top: 39%;
      left: 73.2%;
    }
    @include tablet-md- {
      top: 39%;
      left: 73.2%;
    }
  }

  &.f3 {
    top: 430px;
    left: 98px;
    @include xl {
      top: 887px;
      left: 553px;
    }
    @include lg {
      top: 518px;
      left: 119px;
    }
    @include md {
      top: 305px;
      left: 184px;
    }
    @include sm-l {
      top: 368px;
      left: 97px;
    }
    @include sm {
      top: 371px;
      left: 105px;
    }
    @include xs {
      top: 57.6%;
      left: 12.6%;
    }
    @include tablet-md- {
      top: 57.6%;
      left: 12.6%;
    }
  }

  &.f4 {
    top: 426px;
    left: 383px;
    @include xl {
      top: 870px;
      left: 1162px;
    }
    @include lg {
      top: 515px;
      left: 471px;
    }
    @include md {
      top: 300px;
      left: 389px;
    }
    @include sm-l {
      top: 365px;
      left: 348px;
    }
    @include sm {
      top: 365px;
      left: 355px;
    }
    @include xs {
      top: 57%;
      left: 50%;
    }
    @include tablet-md- {
      top: 57%;
      left: 50%;
    }
  }
  &.f5 {
    top: 266px;
    left: 383px;
    @include xl {
      top: 870px;
      left: 1162px;
    }
    @include lg {
      top: 286px;
      left: 399px;
    }
    @include md {
      top: 166px;
      left: 350px;
    }
    @include sm-l {
      top: 201px;
      left: 297px;
    }
    @include sm {
      top: 202px;
      left: 302px;
    }
    @include xs {
      top: 30.7%;
      left: 42.7%;
    }
    @include tablet-md- {
      top: 30.7%;
      left: 42.7%;
    }
  }

  &.g1 {
    top: 100px;
    left: 504px;
    @include xl {
      top: 207px;
      left: 1408px;
    }
    @include lg {
      top: 129px;
      left: 618px;
    }
    @include md {
      top: 68px;
      left: 476px;
    }
    @include sm-l {
      top: 90px;
      left: 449px;
    }
    @include sm {
      top: 90px;
      left: 457px;
    }
    @include xs {
      top: 14%;
      left: 64%;
    }
    @include tablet-md- {
      top: 16%;
      left: 67%;
    }
  }

  &.g2 {
    top: 279px;
    left: 225px;
    @include xl {
      top: 591px;
      left: 831px;
    }
    @include lg {
      top: 345px;
      left: 279px;
    }
    @include md {
      top: 192px;
      left: 281px;
    }
    @include sm-l {
      top: 244px;
      left: 211px;
    }
    @include sm {
      top: 246px;
      left: 218px;
    }
    @include xs {
      top: 40%;
      left: 28.4%;
    }
    @include tablet-md- {
      top: 42%;
      left: 29%;
    }
  }

  &.g3 {
    top: 296px;
    left: 580px;
    @include xl {
      top: 622px;
      left: 1524px;
    }
    @include lg {
      top: 365px;
      left: 694px;
    }
    @include md {
      top: 207px;
      left: 520px;
    }
    @include sm-l {
      top: 256px;
      left: 505px;
    }
    @include sm {
      top: 256px;
      left: 512px;
    }
    @include xs {
      top: 42%;
      left: 70%;
    }
    @include tablet-md- {
      top: 44%;
      left: 71%;
    }
  }

  &.g4 {
    top: 469px;
    left: 216px;
    @include xl {
      top: 997px;
      left: 815px;
    }
    @include lg {
      top: 588px;
      left: 270px;
    }
    @include md {
      top: 333px;
      left: 270px;
    }
    @include sm-l {
      top: 413px;
      left: 203px;
    }
    @include sm {
      top: 419px;
      left: 211px;
    }
    @include xs {
      top: 72%;
      left: 27%;
    }
    @include tablet-md- {
      top: 72%;
      left: 27%;
    }
  }
  &.g5 {
    top: 469px;
    left: 216px;
    @include xl {
      top: 827px;
      left: 1121px;
    }
    @include lg {
      top: 479px;
      left: 442px;
    }
    @include md {
      top: 279px;
      left: 377px;
    }
    @include sm-l {
      top: 341px;
      left: 324px;
    }
    @include sm {
      top: 338px;
      left: 333px;
    }
    @include xs {
      top: 58%;
      left: 37%;
    }
    @include tablet-md- {
      top: 61%;
      left: 46%;
    }
  }

  &.h1 {
    top: 212px;
    left: 328px;
    @include xl {
      top: 440px;
      left: 1040px;
    }
    @include lg {
      top: 262px;
      left: 406px;
    }
    @include md {
      top: 151px;
      left: 349px;
    }
    @include sm-l {
      top: 186px;
      left: 297px;
    }
    @include sm {
      top: 185px;
      left: 309px;
    }
    @include xs {
      top: 77px;
      left: 121px;
    }
    @include tablet-md- {
      top: 30%;
      left: 43%;
    }
  }

  &.h2 {
    top: 123px;
    left: 507px;
    @include xl {
      top: 265px;
      left: 1423px;
    }
    @include lg {
      top: 157px;
      left: 625px;
    }
    @include md {
      top: 89px;
      left: 478px;
    }
    @include sm-l {
      top: 113px;
      left: 455px;
    }
    @include sm {
      top: 112px;
      left: 467px;
    }
    @include xs {
      top: 45px;
      left: 188px;
    }
    @include tablet-md- {
      top: 20%;
      left: 66%;
    }
  }

  &.h3 {
    top: 445px;
    left: 281px;
    @include xl {
      top: 927px;
      left: 949px;
    }
    @include lg {
      top: 545px;
      left: 341px;
    }
    @include md {
      top: 317px;
      left: 315px;
    }
    @include sm-l {
      top: 388px;
      left: 254px;
    }
    @include sm {
      top: 389px;
      left: 262px;
    }
    @include xs {
      top: 164px;
      left: 104px;
    }
    @include tablet-md- {
      top: 65%;
      left: 36%;
    }
  }

  &.h4 {
    top: 296px;
    left: 635px;
    @include xl {
      top: 609px;
      left: 1679px;
    }
    @include lg {
      top: 362px;
      left: 770px;
    }
    @include md {
      top: 210px;
      left: 566px;
    }
    @include sm-l {
      top: 256px;
      left: 562px;
    }
    @include sm {
      top: 257px;
      left: 569px;
    }
    @include xs {
      top: 107px;
      left: 232px;
    }
    @include tablet-md- {
      top: 43%;
      left: 82%;
    }
  }
  &.h5 {
    top: 350px;
    left: 125px;
    @include xl {
      top: 706px;
      left: 606px;
    }
    @include lg {
      top: 420px;
      left: 139px;
    }
    @include md {
      top: 245px;
      left: 201px;
    }
    @include sm-l {
      top: 296px;
      left: 116px;
    }
    @include sm {
      top: 297px;
      left: 126px;
    }
    @include xs {
      top: 124px;
      left: 40px;
    }
    @include tablet-md- {
      top: 45%;
      left: 22%;
    }
  }
  &.l1 {
    top: 514px;
    left: 216px;
    @include xl {
      top: 870px;
      left: 734px;
    }
    @include md {
      top: 299px;
      left: 239px;
    }
    @include sm-l {
      top: 364px;
      left: 165px;
    }
    @include sm {
      top: 367px;
      left: 170px;
    }
    @include xs {
      top: 51.6%;
      left: 22%;
    }
    @include tablet-md- {
      top: 55%;
      left: 23%;
    }
  }
  &.l2 {
    top: 198px;
    left: 670px;
    @include xl {
      top: 338px;
      left: 1499px;
    }
    @include md {
      top: 116px;
      left: 509px;
    }
    @include sm-l {
      top: 143px;
      left: 485px;
    }
    @include sm {
      top: 141px;
      left: 495px;
    }
    @include xs {
      top: 20.7%;
      left: 70.2%;
    }
    @include tablet-md- {
      top: 20.7%;
      left: 70.2%;
    }
  }
  &.l3 {
    top: 432px;
    left: 593px;
    @include xl {
      top: 739px;
      left: 1377px;
    }
    @include md {
      top: 250px;
      left: 462px;
    }
    @include sm-l {
      top: 307px;
      left: 433px;
    }
    @include sm {
      top: 307px;
      left: 441px;
    }
    @include xs {
      top: 44%;
      left: 62.4%;
    }
    @include tablet-md- {
      top: 44%;
      left: 62.4%;
    }
  }
  &.l4 {
    top: 727px;
    left: 460px;
    @include xl {
      top: 1231px;
      left: 1146px;
    }
    @include md {
      top: 424px;
      left: 388px;
    }
    @include sm-l {
      top: 519px;
      left: 344px;
    }
    @include sm {
      top: 513px;
      left: 350px;
    }
    @include xs {
      top: 75%;
      left: 48%;
    }
    @include tablet-md- {
      top: 77%;
      left: 49%;
    }
  }
  &.j1 {
    top: 693px;
    left: 242px;
    @include xl {
      top: 1175px;
      left: 776px;
    }
    @include md {
      top: 403px;
      left: 261px;
    }
    @include sm-l {
      top: 494px;
      left: 184px;
    }
    @include sm {
      top: 494px;
      left: 191px;
    }
    @include xs {
      top: 72%;
      left: 24.6%;
    }
    @include tablet-md- {
      top: 75%;
      left: 27%;
    }
  }
  &.j2 {
    top: 444px;
    left: 493px;
    @include xl {
      top: 776px;
      left: 1200px;
    }
    @include md {
      top: 263px;
      left: 406px;
    }
    @include sm-l {
      top: 321px;
      left: 362px;
    }
    @include sm {
      top: 321px;
      left: 370px;
    }
    @include xs {
      top: 47.6%;
      left: 51.5%;
    }
    @include tablet-md- {
      top: 47.6%;
      left: 51.5%;
    }
  }
  &.j3 {
    top: 290px;
    left: 644px;
    @include xl {
      top: 493px;
      left: 1461px;
    }
    @include md {
      top: 167px;
      left: 490px;
    }
    @include sm-l {
      top: 211px;
      left: 468px;
    }
    @include sm {
      top: 209px;
      left: 480px;
    }
    @include xs {
      top: 30%;
      left: 66.4%;
    }
    @include tablet-md- {
      top: 30%;
      left: 66.4%;
    }
  }
  &.k1 {
    top: 358px;
    left: 176px;
    @include xl {
      top: 604px;
      left: 656px;
    }
    @include md {
      top: 207px;
      left: 215px;
    }
    @include sm-l {
      top: 253px;
      left: 138px;
    }
    @include sm {
      top: 252px;
      left: 146px;
    }
    @include xs {
      top: 47.4%;
      left: 17%;
    }
    @include tablet-md- {
      top: 50%;
      left: 19%;
    }
  }
  &.k2 {
    top: 135px;
    left: 438px;
    @include xl {
      top: 226px;
      left: 1116px;
    }
    @include md {
      top: 77px;
      left: 376px;
    }
    @include sm-l {
      top: 98px;
      left: 323px;
    }
    @include sm {
      top: 97px;
      left: 332px;
    }
    @include xs {
      top: 17.6%;
      left: 46%;
    }
    @include tablet-md- {
      top: 20%;
      left: 47%;
    }
  }
  &.k3 {
    top: 339px;
    left: 699px;
    @include xl {
      top: 567px;
      left: 1560px;
    }
    @include md {
      top: 196px;
      left: 525px;
    }
    @include sm-l {
      top: 240px;
      left: 510px;
    }
    @include sm {
      top: 241px;
      left: 522px;
    }
    @include xs {
      top: 44.4%;
      left: 72.5%;
    }
    @include tablet-md- {
      top: 47%;
      left: 73%;
    }
  }
  &.k4 {
    top: 523px;
    left: 460px;
    @include xl {
      top: 891px;
      left: 1138px;
    }
    @include md {
      top: 310px;
      left: 379px;
    }
    @include sm-l {
      top: 376px;
      left: 337px;
    }
    @include sm {
      top: 375px;
      left: 346px;
    }
    @include xs {
      top: 69.8%;
      left: 47.2%;
    }
    @include tablet-md- {
      top: 74%;
      left: 48%;
    }
  }
  &.m1 {
    top: 649px;
    left: 359px;
    @include xl {
      top: 1097px;
      left: 969px;
    }
    @include md {
      top: 375px;
      left: 326px;
    }
    @include sm-l {
      top: 459px;
      left: 263px;
    }
    @include sm {
      top: 461px;
      left: 272px;
    }
    @include xs {
      top: 70.5%;
      left: 37%;
    }
    @include tablet-md- {
      top: 75%;
      left: 39%;
    }
  }
  &.m2 {
    top: 473px;
    left: 551px;
    @include xl {
      top: 795px;
      left: 1307px;
    }
    @include md {
      top: 270px;
      left: 439px;
    }
    @include sm-l {
      top: 332px;
      left: 403px;
    }
    @include sm {
      top: 335px;
      left: 408px;
    }
    @include xs {
      top: 50.5%;
      left: 57.4%;
    }
    @include tablet-md- {
      top: 54%;
      left: 58%;
    }
  }
  &.m3 {
    top: 294px;
    left: 727px;
    @include xl {
      top: 496px;
      left: 1605px;
    }
    @include md {
      top: 168px;
      left: 537px;
    }
    @include sm-l {
      top: 206px;
      left: 530px;
    }
    @include sm {
      top: 206px;
      left: 539px;
    }
    @include xs {
      top: 32%;
      left: 74.5%;
    }
    @include tablet-md- {
      top: 33%;
      left: 78%;
    }
  }
  &.n1 {
    top: 384px;
    left: 153px;
    @include xl {
      top: 653px;
      left: 633px;
    }
    @include md {
      top: 223px;
      left: 209px;
    }
    @include sm-l {
      top: 269px;
      left: 121px;
    }
    @include sm {
      top: 273px;
      left: 131px;
    }
    @include xs {
      top: 47%;
      left: 16%;
    }
    @include tablet-md- {
      top: 48%;
      left: 16%;
    }
  }
  &.n2 {
    top: 277px;
    left: 656px;
    @include xl {
      top: 461px;
      left: 1483px;
    }
    @include md {
      top: 160px;
      left: 503px;
    }
    @include sm-l {
      top: 197px;
      left: 479px;
    }
    @include sm {
      top: 198px;
      left: 487px;
    }
    @include xs {
      top: 33%;
      left: 69%;
    }
    @include tablet-md- {
      top: 33%;
      left: 69%;
    }
  }
  &.n3 {
    top: 398px;
    left: 507px;
    @include xl {
      top: 669px;
      left: 1225px;
    }
    @include md {
      top: 230px;
      left: 411px;
    }
    @include sm-l {
      top: 282px;
      left: 372px;
    }
    @include sm {
      top: 283px;
      left: 380px;
    }
    @include xs {
      top: 47%;
      left: 52.6%;
    }
    @include tablet-md- {
      top: 51%;
      left: 54%;
    }
  }
  &.n4 {
    top: 652px;
    left: 471px;
    @include xl {
      top: 1101px;
      left: 1155px;
    }
    @include md {
      top: 377px;
      left: 392px;
    }
    @include sm-l {
      top: 464px;
      left: 347px;
    }
    @include sm {
      top: 462px;
      left: 354px;
    }
    @include xs {
      top: 78%;
      left: 48.9%;
    }
    @include tablet-md- {
      top: 81%;
      left: 51%;
    }
  }
  &.o1 {
    top: 531px;
    left: 371px;
    @include xl {
      top: 904px;
      left: 1002px;
    }
    @include md {
      top: 313px;
      left: 336px;
    }
    @include sm-l {
      top: 379px;
      left: 275px;
    }
    @include sm {
      top: 378px;
      left: 285px;
    }
    @include xs {
      top: 45%;
      left: 39%;
    }
    @include tablet-md- {
      top: 45%;
      left: 39%;
    }
  }
  &.o2 {
    top: 252px;
    left: 487px;
    @include xl {
      top: 424px;
      left: 1213px;
    }
    @include md {
      top: 149px;
      left: 403px;
    }
    @include sm-l {
      top: 179px;
      left: 362px;
    }
    @include sm {
      top: 178px;
      left: 375px;
    }
    @include xs {
      top: 21.4%;
      left: 51.6%;
    }
    @include tablet-md- {
      top: 21.4%;
      left: 51.6%;
    }
  }
  &.o3 {
    top: 568px;
    left: 750px;
    @include xl {
      top: 961px;
      left: 1645px;
    }
    @include md {
      top: 329px;
      left: 558px;
    }
    @include sm-l {
      top: 400px;
      left: 544px;
    }
    @include sm {
      top: 399px;
      left: 553px;
    }
    @include xs {
      top: 47.6%;
      left: 78.5%;
    }
    @include tablet-md- {
      top: 47.6%;
      left: 78.5%;
    }
  }
  &.o4 {
    top: 806px;
    left: 479px;
    @include xl {
      top: 1378px;
      left: 1175px;
    }
    @include md {
      top: 473px;
      left: 396px;
    }
    @include sm-l {
      top: 573px;
      left: 353px;
    }
    @include sm {
      top: 573px;
      left: 361px;
    }
    @include xs {
      top: 68.6%;
      left: 49.5%;
    }
    @include tablet-md- {
      top: 71%;
      left: 53%;
    }
  }
  &.o5 {
    top: 970px;
    left: 295px;
    @include xl {
      top: 1650px;
      left: 860px;
    }
    @include md {
      top: 568px;
      left: 285px;
    }
    @include sm-l {
      top: 687px;
      left: 220px;
    }
    @include sm {
      top: 684px;
      left: 228px;
    }
    @include xs {
      top: 82%;
      left: 30%;
    }
    @include tablet-md- {
      top: 84%;
      left: 31%;
    }
  }
}
</style>

<style lang="scss">
.layouts-tooltip-theme {
  max-width: 280px;
  z-index: 10;
  & .v-popper__inner {
    background: #fff;
    color: black;
    border-radius: 4px;
    padding: 13px 24px;
    min-width: 96px;
    font-family: $base-font;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    @include xl {
      font-size: 24px;
      line-height: 40px;
      padding: 26px 50px;
      border-radius: 12px;
      min-width: 753px;
    }
    @include lg- {
      padding: 9px 18px;
      font-size: 9px;
      line-height: 14px;
    }
    @include md {
      font-size: 9px;
      line-height: 16px;
    }
    @include sm-l {
      font-size: 9px;
      line-height: 14px;
    }
    @include sm- {
      min-width: auto;
      max-width: 120px;
      padding: 7px 8px;
      font-size: 7px;
      line-height: 10px;
      font-weight: 600;

    }
  }

  & .v-popper__arrow-container {
    border-color: transparent;
    display: none;
  }
}
</style>
