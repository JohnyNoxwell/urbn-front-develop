<template>
  <section class="interior">
    <div class="interior__container">
      <h2 class="interior__header">
        Интерьер подъездов URBN
      </h2>
      <p class="interior__descr">
        Интерьер подъездов &laquo;URBN&raquo; воплощает в&nbsp;себе лучшие решения дизайна, безопасности и&nbsp;рационального использования пространства. Здесь важна каждая деталь: начиная с&nbsp;отделочных материалов и&nbsp;заканчивая местом для соседского клуба, зоны ожидания гостей и&nbsp;колясочной.
      </p>
      <div class="interior__controls">
        <button type="button" @click="onPrev">
          <arr-left />
        </button>
        <button type="button" @click="onNext">
          <arr-right />
        </button>
      </div>
      <span class="interior__slide-descr" v-html="getTitle"></span>
      <div class="interior__nav-numbers">
        <span
          v-for="(slide, idx) in slides"
          :key="idx"
          class="interior__nav-number"
          :class="[slideNum === idx && 'active']"
          @click="onSlideTo(idx)"
        >
          <template v-if="idx < 9">
            {{ '0' + (idx + 1) }}
          </template>
          <template v-else>
            {{ idx + 1 }}
          </template>
        </span>
      </div>
      <div class="interior__slider">
        <VueSlickCarousel
          ref="interiorSlider"
          :dots="false"
          :arrows="false"
          :fade="true"
          :swipe="true"
          @beforeChange="onBeforeChange"
        >
          <div
            v-for="(slide, idx) in slides"
            :key="idx"
          >
            <img
              :src="slide.imageBig"
              :alt="slide.title"
              draggable="false"
              @click="onFullscreen"
              @dragstart="ffFix"
            >
          </div>
        </VueSlickCarousel>
      </div>
      <gallery-popup
        v-if="fullscreen"
        :initial-slide="slideNum"
        :slides="slides"
        @beforeChange="onBeforeChange"
        @close="onFullscreenClose"
        @prev="onPrev"
        @next="onNext"
      />
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import ArrLeft from '~/assets/img/ar2-l.svg'
import ArrRight from '~/assets/img/ar2-r.svg'
import GalleryPopup from '~/components/Base/GalleryPopup'

export default {
  name: 'InteriorSection',
  components: {
    VueSlickCarousel,
    ArrLeft,
    ArrRight,
    GalleryPopup
  },
  data () {
    return {
      slideNum: 0,
      title: '',
      arr: [],
      slides: [
        {
          title: 'Зона ожидания гостей',
          image: 'interior/interior-1.jpg',
          imageBig: 'interior/interior-1@2x.jpg'
        },
        {
          title: 'Холл первого этажа',
          image: 'interior/interior-2.jpg',
          imageBig: 'interior/interior-2@2x.jpg'
        },
        {
          title: 'Место хранения колясок и&nbsp;велосипедов',
          image: 'interior/interior-8.jpg',
          imageBig: 'interior/interior-8@2x.jpg'
        },
        {
          title: 'Просторные коридоры',
          image: 'interior/interior-3.jpg',
          imageBig: 'interior/interior-3@2x.jpg'
        },
        {
          title: 'Вход в&nbsp;квартиру',
          image: 'interior/interior-4.jpg',
          imageBig: 'interior/interior-4@2x.jpg'
        },
        {
          title: 'Современные лифты OTIS с&nbsp;доступом в&nbsp;подземный паркинг',
          image: 'interior/interior-6.jpg',
          imageBig: 'interior/interior-6@2x.jpg'
        },
        {
          title: 'Панель домофона в&nbsp;теплом тамбуре',
          image: 'interior/interior-7.jpg',
          imageBig: 'interior/interior-7@2x.jpg'
        }
      ],
      fullscreen: false
    }
  },
  computed: {
    getTitle () {
      return this.arr.find((el, idx) => this.slideNum === idx)
    }
  },
  mounted () {
    this.arr = this.slides.map(obj => obj.title)
  },
  methods: {
    onNext () {
      this.$refs.interiorSlider.next()
    },
    onPrev () {
      this.$refs.interiorSlider.prev()
    },
    onBeforeChange (_prevIndex, nextIndex) {
      this.slideNum = nextIndex
    },
    onSlideTo (slideIdx) {
      this.$refs.interiorSlider.goTo(slideIdx)
    },
    onFullscreen () {
      this.fullscreen = true
    },
    onFullscreenClose () {
      this.fullscreen = false
    },
    ffFix (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.interior {
  padding: 243px 186px 240px 193px;
  background-color: #2D2D2D;
  color: #fff;
  min-height: auto;
  @include xl {
    padding: 358px 0 480px 366px;
    min-height: auto;
    height: 100%;
  }
  @include md {
    padding: 107px 0 117px 0;
  }
  @include sm-l {
    padding: 161px 27px;
  }
  @include sm {
    padding: 139px 28px 112px;
    min-height: 100%;
    max-height: 100%;
  }
  @include sm- {
    padding: 60px 0 62px;
    display: block;
    min-height: auto;
  }
  @include tablet-md- {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @include mobile-landscape {
    padding: 30px 22px 31px;
  }
  &__container {
      display: grid;
      grid-template-columns: 404px 1fr;
      grid-auto-rows: 164px 320px 50px 143px 21px;
      align-items: start;
      max-height: 586px;
      column-gap: 87px;
      height: 100%;
      max-height: 100%;
      min-height: 100%;
      @include xl {
        grid-template-columns: 840px 2100px;
        grid-auto-rows: auto;
        column-gap: 142px;
        min-height: 100%;
        max-height: 100%;
      }
      @include md {
        grid-auto-rows: 101px 243px 39px 135px 28px;
        grid-template-columns: 354px 676px;
        column-gap: 122px;
        margin: 0 auto;
      }
      @include sm-l {
        grid-template-columns: 337px auto;
        grid-auto-rows: auto;
        column-gap: 35px;
      }
      @include sm {
        grid-template-columns: repeat(8, 1fr);
        column-gap: 0;
        grid-auto-rows: auto;
        min-height: inherit;
      }
      @include sm- {
        grid-template-columns: repeat(8, 1fr);
        column-gap: 0;
        grid-auto-rows: auto;
        // padding: 60px 0 62px;
        min-height: auto;
      }
      @include tablet-md- {
        grid-template-columns: minmax(276px, auto) auto auto;
        width: 100%;
        column-gap: 0;
        grid-template-rows: 62px 154px 75px;
      }
      @include mobile-landscape {
        grid-template-columns: minmax(241px, auto) auto minmax(322px, auto);
        grid-template-rows: 62px 194px 40px;
      }
  }
  &__header {
    grid-column: 1 / 2;
    align-self: start;
    font-weight: 600;
    font-size: 44px;
    line-height: 1.21875;
    color: #fff;
    @include xl {
      font-size: 88.0029px;
      line-height: 108px;
    }
    @include lg- {
      font-size: 32px;
      line-height: 39px;
    }
    @include sm-l {
      margin-bottom: 50px;
    }
    @include md {
      grid-column: 2 span;
      grid-row: 1 / 2;
      max-width: 354px;
    }
    @include sm {
      grid-column: 8 span;
      grid-row: 1 / 2;
      margin-bottom: 50px;
    }
    @include sm- {
      padding-left: 17px;
      grid-column: 8 span;
      grid-row: 1 / 2;
      max-width: 220px;
      font-size: 20px;
      line-height: 1.2;
      margin-bottom: 40px;
    }
    @include tablet-md- {
      max-width: 211px;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 20px;
      padding-left: 0;
      padding-right: 20px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }
  &__descr {
      grid-column: 1 / 2;
      grid-row: 1 span;
      font-weight: normal;
      font-size: 18px;
      line-height: 1.666;
      color: #fff;
      @include xl {
        font-size: 36.0012px;
        line-height: 60px;
        margin-bottom: 100px;
      }
      @include lg- {
        font-size: 14px;
        line-height: 24px;
      }
      @include md {
        grid-column: 1 span;
        grid-row: 2 / 3;
        margin-top: 12px;
        font-size: 14px;
      }
      @include sm-l {
        margin-bottom: 50px;
      }
      @include sm {
        grid-column: 8 span;
        grid-row: 2 / 3;
        margin-bottom: 40px;
      }
      @include sm- {
        grid-column: 1 / 17;
        grid-row: 2 / 3;
        padding-left: 17px;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 33px;
        padding-right: 5px;
      }
      @include tablet-md- {
        max-width: 331px;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 14px;
        padding-right: 27px;
        padding-left: 0;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      @include mobile-landscape {
        padding-right: 14px;
      }
  }
  &__controls {
      grid-column: 1 / 2;
      grid-row: 1 span;
      align-self: start;
      button {
        padding: 0;
        border: 0;
        background-color: transparent;
        color: #ffffff;
        transition: color 0.2s ease;
        line-height: 0;
        cursor: pointer;
        &:not(:last-of-type) {
          margin-right: 15px;
          @include sm- {
            margin-right: 11px;
          }
          @include tablet-md- {
            margin-right: 11px;
          }
          @include mobile-landscape {
            margin-right: 6px;
          }
        }
        &:hover {
          color: $accent;
        }
        svg {
          width: 50px;
          height: 50px;
          @include xl {
            width: 100px;
            height: 100px;
          }
          @include lg- {
            width: 39px;
            height: 39px;
          }
          @include sm- {
            width: 31px;
            height: 31px;
          }
          @include tablet-md- {
            width: 31px;
            height: 31px;
          }
        }
      }
      @include sm-l {
        align-self: end;
      }
      @include sm {
        grid-column: 8 span;
        grid-row: 5 / 6;
      }
      @include sm- {
        grid-column: 6 / 9 span;
        grid-row: 6 / 7;
        padding-right: 17px;
        justify-self: end;
      }
      @include tablet-md- {
        padding-right: 0;
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        display: flex;
        justify-self: auto;
        align-self: center;
      }
  }
  &__slide-descr {
      grid-column: 1 / 2;
      grid-row: 1 span;
      align-self: center;
      font-family: $base-font;
      font-weight: 300;
      font-size: 28px;
      line-height: 32px;
      color: $accent;
      @include xl {
        font-size: 56px;
        line-height: 64px;
        min-height: 144px;
      }
      @include lg- {
        font-size: 24px;
        width: 440px;
      }
      @include md- {
        margin-top: 47px;
      }
      @include sm-l- {
        display: flex;
        align-items: center;
        height: 96px;
      }
      @include sm-l {
        max-width: 428px;
        min-height: 64px;
        display: flex;
        align-items: flex-end;
        margin: 0;
        grid-column: 2 / 3;
        grid-row: 4 / 5;
        justify-content: flex-end;
        justify-self: flex-end;
        text-align: right;
        margin-top: 20px;
      }
      @include sm {
        grid-column: 5 / 9;
        grid-row: 6 / 7;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        min-width: 390px;
        min-height: 64px;
        margin: 0;
        justify-self: end;
        align-self: end;
        text-align: right;
      }
      @include sm- {
        width: max-content !important;
        max-width: 355px;
        min-height: 64px;
        grid-column: 8 span;
        grid-row: 5 / 6;
        padding-left: 17px;
        align-self: start;
        font-size: 20px;
        margin: 0;
        margin-bottom: 26px;
      }
      @include tablet-md- {
        margin: 0 0 0 auto;
        padding-left: 0;
        text-align: right;
        justify-self: center;
        max-width: 430px;
        min-height: auto;
        grid-column: 2 / 4;
        grid-row: 3 / 4;
      }
      @include mobile-landscape {
        padding-left: 5px;
        font-size: 16px;
        line-height: 1.1;
        align-self: center;
        max-width: 300px;
      }
  }
  &__nav-numbers {
      grid-column: 1 / 2;
      grid-row: 1 span;
      align-self: center;
      @include xl {
        align-self: end;
      }
      @include sm-l {
        grid-column: 1 / 2;
        grid-row: 4 / 5;
        align-self: end;
      }
      @include sm {
        grid-column: 1 / 5;
        grid-row: 6 / 7;
        align-self: end;
      }
      @include sm- {
        grid-column: 1 / 6 span;
        grid-row: 6 / 7;
        padding-left: 17px;
        align-self: center;
      }
      @include tablet-md- {
        padding-left: 0;
        max-width: max-content;
        align-self: center;
        justify-self: flex-end;
        grid-column: 1 / 2;
        grid-row: 3 / 4;
      }
  }
  &__nav-number {
    font-family: $base-font;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #d5d5d5;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 18px;
      @include lg- {
        margin-right: 12px;
      }
      @include sm- {
        margin-right: 5px;
      }
    }
    &.active {
      color: $accent;
    }
    @include xl {
      font-size: 36px;
      line-height: 56px;
    }
    @include lg- {
      font-size: 14px;
    }
    @include sm- {
      font-size: 11px;
    }
    @include tablet-md- {
      font-size: 11px;
      line-height: 28px;
    }
  }
  &__slider {
      grid-column: 2 / 3;
      grid-row: 1 / 6;
      overflow: hidden;
      height: 698px;
      .slick-slider {
        height: inherit;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      @include xl {
        height: 1397px;
      }
      @include md {
        grid-column: 2 / 3;
        grid-row: 2 / 6;
        height: 450px;
      }
      @include sm-l {
        grid-column: 2 / 3;
        grid-row: 1 / 4;
        height: 399px;
      }
      @include sm {
        grid-column: 8 span;
        grid-row: 3 / 4;
        height: 397px;
        margin-bottom: 40px;
        height: 474px;
      }
      @include sm- {
        grid-column: 8 span;
        grid-row: 3 / 4;
        margin-bottom: 20px;
        height: 214px;
      }
      @include tablet-md- {
        flex-grow: 1;
        flex-shrink: 1;
        margin-bottom: 0;
        grid-column: 2 / 4;
        grid-row: 1 / 3;
        width: inherit;
        height: inherit;
        max-width: 595px;
      }
      @include mobile-landscape {
        width: inherit;
        height: inherit;
        // overflow: hidden;
      }
  }
}
</style>
