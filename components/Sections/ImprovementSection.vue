<template>
  <section class="improvement">
    <div class="improvement__container">
      <h2 class="improvement__header">
        Благоустройство
      </h2>
      <p class="improvement__descr">
        Одной из&nbsp;главных характеристик &laquo;URBN&raquo; является
        приватный двор без машин. Пешеходная эстакада, уличный кинотеатр, сухой
        фонтан, зоны активного и&nbsp;тихого отдыха&nbsp;&mdash; станут отличным
        поводом проводить больше времени на&nbsp;свежем воздухе.
      </p>
      <div class="improvement__controls">
        <button type="button" @click="onPrev">
          <arr-left />
        </button>
        <button type="button" @click="onNext">
          <arr-right />
        </button>
      </div>
      <span class="improvement__slide-descr" v-html="getTitle" :aria-label="getTitle"></span>
      <div class="improvement__nav-numbers">
        <span
          v-for="(slide, idx) in slides"
          :key="idx"
          class="improvement__nav-number"
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
      <div class="improvement__slider">
        <VueSlickCarousel
          ref="improveSlider"
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
import GalleryPopup from '~/components/Base/GalleryPopup'
import ArrLeft from '~/assets/img/ar2-l.svg'
import ArrRight from '~/assets/img/ar2-r.svg'

export default {
  name: 'Improvement',
  components: {
    VueSlickCarousel,
    ArrLeft,
    ArrRight,
    GalleryPopup
  },
  data () {
    return {
      slideNum: 0,
      arr: [],
      slides: [
        {
          title: 'С&nbsp;высоты птичьего полёта',
          image: 'improvement/improvement-1.jpg',
          imageBig: 'improvement/improvement-1@2x.jpg'
        },
        {
          title: 'Зоны тихого отдыха',
          image: 'improvement/improvement-2.jpg',
          imageBig: 'improvement/improvement-2@2x.jpg'
        },
        {
          title: 'Вид на&nbsp;кинотеатр </br> и&nbsp;спортивную площадку',
          image: 'improvement/improvement-3.jpg',
          imageBig: 'improvement/improvement-3@2x.jpg'
        },
        {
          title: 'Озеленение зоны двора',
          image: 'improvement/improvement-4.jpg',
          imageBig: 'improvement/improvement-4@2x.jpg'
        },
        {
          title: 'Парковая зона двора',
          image: 'improvement/improvement-6.jpg',
          imageBig: 'improvement/improvement-6@2x.jpg'
        },
        {
          title: 'Зоны активного отдыха </br> на&nbsp;эксплуатируемой кровле паркинга',
          image: 'improvement/improvement-7.jpg',
          imageBig: 'improvement/improvement-7@2x.jpg'
        },
        {
          title: 'Вечернее освещение двора',
          image: 'improvement/improvement-8.jpg',
          imageBig: 'improvement/improvement-8@2x.jpg'
        },
        {
          title: 'Медицинская клиника и&nbsp;фитнес',
          image: 'improvement/improvement-9.jpg',
          imageBig: 'improvement/improvement-9@2x.jpg'
        },
        {
          title: 'Летняя терраса кафе во&nbsp;дворе для&nbsp;жителей',
          image: 'improvement/improvement-10.jpg',
          imageBig: 'improvement/improvement-10@2x.jpg'
        },
        {
          title: 'Офис управляющей компании',
          image: 'improvement/improvement-11.jpg',
          imageBig: 'improvement/improvement-11@2x.jpg'
        },
        {
          title: 'Площадка для&nbsp;выгула собак',
          image: 'improvement/improvement-12.jpg',
          imageBig: 'improvement/improvement-12@2x.jpg'
        },
        {
          title: 'Торговая галерея с&nbsp;кафе, пекарней, фермерской лавкой и&nbsp;не&nbsp;только',
          image: 'improvement/improvement-13.jpg',
          imageBig: 'improvement/improvement-13@2x.jpg'
        },
        {
          title: 'Центральная площадь с&nbsp;уличным кинотеатром и&nbsp;фонтаном',
          image: 'improvement/improvement-14.jpg',
          imageBig: 'improvement/improvement-14@2x.jpg'
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
      this.$refs.improveSlider.next()
    },
    onPrev () {
      this.$refs.improveSlider.prev()
    },
    onBeforeChange (_prevIndex, nextIndex) {
      this.slideNum = nextIndex
    },
    onSlideTo (slideIdx) {
      this.$refs.improveSlider.goTo(slideIdx)
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
.improvement {
  padding: 243px 186px 240px 193px;
  background-color: $dark-gray;
  color: #fff;
  min-height: auto;
  overflow: hidden;
  @include xl {
    padding: 486px 0 480px 386px;
    min-height: 100vh;
  }
  @include md {
    padding: 107px 0 117px 0;
  }
  @include sm-l {
    padding: 161px 27px;
  }
  @include sm {
    padding: 139px 28px 142px;
    min-height: 100%;
  }
  @include sm- {
    padding: 60px 0 62px;
    display: block;
    min-height: auto;
  }
  @include tablet-md- {
    padding: 41px 27px 161px;
    // min-height: 100vh;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @include mobile-landscape {
    padding: 30px 22px 31px;
  }
  &__container {
      display: grid;
      grid-template-columns: 420px 1fr;
      grid-auto-rows: 103px 254px 50px 159px 34px;
      align-items: start;
      max-height: 100%;
      column-gap: 70px;
      min-height: 100%;
      height: 100%;
      @include xl {
        grid-template-columns: 840px 2100px;
        grid-auto-rows: auto;
        column-gap: 142px;
      }
      @include md {
        grid-auto-rows: 98px 207px 39px 164px 28px;
        grid-template-columns: 331px 768px;
        column-gap: 54px;
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
        min-height: auto;
      }
      @include tablet-md- {
        grid-template-columns: minmax(221px, auto) auto auto;
        column-gap: 0;
        grid-template-rows: 41px 172px 96px auto;
      }
      @include mobile-landscape {
        grid-template-columns: minmax(241px, auto) auto minmax(320px, auto);
        grid-template-rows: 41px 134px 65px auto;
      }
  }
  &__header {
    grid-column: 1 / 2;
    align-self: start;
    font-weight: 600;
    font-size: 44px;
    line-height: 39px;
    color: #fff;
    @include xl {
      font-size: 88.0029px;
      line-height: 78px;
    }
    @include lg- {
      font-size: 32px;
      line-height: 39px;
    }
    @include sm-l {
      margin-bottom: 44px;
    }
    @include md {
      grid-column: 2 span;
      grid-row: 1 / 2;
      margin-bottom: 62px;
    }
    @include sm {
      grid-column: 8 span;
      grid-row: 1 / 2;
      margin-bottom: 39px;
    }
    @include sm- {
      padding-left: 17px;
      grid-column: 8 span;
      grid-row: 1 / 2;
      font-size: 20px;
      line-height: 1.95;
      margin-bottom: 40px;
    }
    @include tablet-md- {
      font-size: 20px;
      line-height: 21px;
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
        font-size: 14px;
      }
      @include sm-l {
        margin-bottom: 51px;
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
      }
      @include tablet-md- {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 14px;
        padding-right: 27px;
        padding-left: 0;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        max-width: 320px;
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
        justify-self: auto;
        padding-right: 0;
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        display: flex;
        align-self: center;
      }
      @include mobile-landscape {
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
      line-height: 35px;
      color: $accent;
      @include xl {
        font-size: 56px;
        line-height: 76px;
      }
      @include lg- {
        font-size: 24px;
        line-height: 32px;
      }
      @include md- {
        margin-top: 47px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }
      @include sm-l- {
        height: 84px;
        display: flex;
        align-items: center;
      }
      @include sm-l {
        max-width: 484px;
        min-height: 64px;
        margin: 0;
        grid-column: 2 / 3;
        grid-row: 4 / 5;
        justify-self: end;
        text-align: right;
        margin-top: 40px;
      }
      @include sm {
        grid-column: 5 / 9;
        min-width: 390px;
        min-height: 64px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        grid-row: 6 / 7;
        margin: 0;
        justify-self: end;
        align-self: end;
        text-align: right;
      }
      @include sm- {
        grid-column: 8 span;
        grid-row: 5 / 6;
        padding-left: 17px;
        min-height: 50px;
        justify-content: flex-start;
        font-size: 20px;
        line-height: 28px;
        margin: 0;
        margin-bottom: 26px;
      }
      @include tablet-md- {
        //margin-bottom: auto;
        align-self: center;
        text-align: right;
        padding-left: 0;
        min-height: max-content;
        // max-width: 330px;
        margin-top: 0;
        margin-left: auto;
        grid-column: 2 / 4;
        grid-row: 3 / 4;
      }
      @include mobile-landscape {
        justify-content: flex-end;
        margin: 0;
        padding-left: 5px;
        font-size: 16px;
        line-height: 1.1;
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
        align-self: flex-end;
        justify-self: flex-start;
        grid-column: 1 / 2;
        grid-row: 4 / 5;
      }
      @include mobile-landscape {
        grid-column: 1 / 4;
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
        @include mobile-landscape {
          margin-right: 3px;
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
        font-size: 14px;
        line-height: 28px;
      }
      @include mobile-landscape {
        font-size: 11px;
        line-height: 28px;
      }
  }
  &__slider {
      grid-column: 2 / 3;
      grid-row: 1 / 6;
      overflow: hidden;
      height: 586px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      @include xl {
        height: 1172px;
      }
      @include md {
        grid-column: 2 / 3;
        grid-row: 2 / 6;
      }
      @include sm-l {
        grid-column: 2 / 3;
        grid-row: 1 / 4;
        height: 332px;
      }
      @include sm {
        grid-column: 8 span;
        grid-row: 3 / 4;
        height: 397px;
        margin-bottom: 40px;
      }
      @include sm- {
        grid-column: 8 span;
        grid-row: 3 / 4;
        margin-bottom: 20px;
        height: 180px;
      }
      @include tablet-md- {
        flex-grow: 1;
        flex-shrink: 1;
        margin-bottom: 0;
        grid-column: 2 / 4;
        grid-row: 1 / 3;
        width: inherit;
        max-width: 595px;
        height: inherit;
      }
      @include mobile-landscape {
        width: inherit;
        height: 179px;
      }
  }
}
</style>
