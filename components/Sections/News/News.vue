<template>
  <section class="news-section" id="news">
    <div class="newsHeader">
      <div class="news-header-wrap">
        <h3>Новости</h3>
        <div class="controls">
          <button
            type="button"
            class="arrowLeft"
            @click="onPrev"
          >
            <arrow />
          </button>
          <button
            type="button"
            class="arrowRight"
            @click="onNext"
          >
            <arrow />
          </button>
        </div>
        <news-filter />
      </div>
      <nuxt-link to="news" class="btn-link">Все новости</nuxt-link>
    </div>
    <div class="news">
      <vue-slick-carousel
        v-if="news && news.length"
        ref="carousel"
        v-bind="carouselSettings"
      >
        <NewsItem
          v-for="item in news"
          :id="item.id"
          :key="item.title"
          :date="item.date"
          :title="item.title"
          :teaser="item.teaser"
          :picture="item.img"
        />
      </vue-slick-carousel>
      <div v-else>
        Новости не найдены
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import NewsItem from './NewsItem.vue'
import NewsFilter from './NewsFilter'
import Arrow from './arrow-left.svg'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'News',
  components: {
    VueSlickCarousel,
    NewsItem,
    NewsFilter,
    Arrow
  },
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      carouselSettings: {
        dots: false,
        arrows: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
        variableWidth: true
      },
      attributes: {
        ref: 'openIndicator',
        role: 'presentation',
        class: 'vs__open-indicator'
      }
    }
  },
  methods: {
    onPrev () {
      this.$refs.carousel.prev()
    },
    onNext () {
      this.$refs.carousel.next()
    }
  }
}
</script>

<style lang="scss" scoped>
.news-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2B2B2B;
  color: #FFFFFF;
  padding: 130px 0;
  min-height: auto;
  overflow: visible;
  position: relative;
  @include md- {
    min-height: auto;
  }
  @include sm- {
    padding: 50px 0 70px;
  }
  .btn-link {
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    text-decoration-line: underline;
    color: #E8B973;
  }
}

.newsHeader {
  display: flex;
  align-items: center;
  margin-bottom: 75px;
  justify-content: space-between;
  @include xl {
    padding-left: 387px;
    padding-right: 387px;
    margin-bottom: 146px;
  }
  @include lg {
    padding-left: 270px;
    padding-right: 270px;
  }
  @include md {
    padding-left: 139px;
    padding-right: 139px;
  }
  @include sm-l {
    padding-left: 25px;
    padding-right: 25px;
  }
  @include sm {
    padding-left: 25px;
    padding-right: 25px;
  }
  @include sm- {
    padding-left: 14px;
    padding-right: 14px;
  }
  .news-header-wrap {
    display: flex;
  }
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 55px;
    margin-right: 55px;
    @include xl {
      font-size: 88.0029px;
      line-height: 110px;
      margin-right: 108px;
    }
    @include lg- {
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      margin-right: 40px;
    }
    @include sm- {
      font-size: 20px;
      line-height: 24px;
      margin-right: 25px;
    }
  }
}
.controls {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 54px;
  @include xl {
    gap: 55px;
    margin-right: 110px;
  }
  @include lg- {
    gap: 20px;
    margin-right: 40px;
  }
  @include xs {
    margin-right: 0;
  }
}

.news {
  margin-bottom: 36px;
  width: 100%;
  position: relative;
  overflow: hidden;
  @include xl {
    padding-left: 387px;
  }
  @include lg {
    padding-left: 270px;
  }
  @include md {
    padding-left: 139px;
  }
  @include sm-l {
    padding-left: 25px;
  }
  @include sm {
    padding-left: 25px;
  }
  @include sm- {
    padding-left: 14px;
    margin-bottom: 0;
  }
  /deep/ .slick-list {
    overflow: visible;
    .slick-slide {
      opacity: 0.5;
      transition: opacity .5s linear;
      &.slick-active {
        opacity: 1;
        & ~ * {
          opacity: 1;
        }
      }
    }
  }
}

.btnAction {
  padding: 5px 0;
  border: 0;
  background-color: transparent;
  display: inline-block;
  color: #ffffff;
  transition: color 0.2s ease;
  line-height: 0;
  cursor: pointer;

  &:hover {
    color: #E8B973;
  }

  svg {
    width: 62px;
    height: 20px;
    @include xl {
      width: 124px;
      height: 20px;
    }
    @include lg- {
      width: 43px;
      height: 15px;
    }
    @include xs {
      width: 20px;
      height: 10px;
    }

  }
}

.arrowLeft {
  @extend .btnAction;
  transform: rotate(180deg);
}

.arrowRight {
  @extend .btnAction;
}

.select {

  /deep/ .vs__dropdown-toggle {
    border: 1.40556px solid #E8B973;
    border-radius: 5.62225px;
    font-weight: 500;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 12px 12px 30px;
    @include xl {
      padding: 24px 24px 24px 60px;
      font-size: 32px;
      line-height: 64px;
      border: 2.81122px solid #E8B973;
      border-radius: 11.2449px;
    }
    @include lg- {
      border: 1px solid #E8B973;
      border-radius: 4px;
      font-size: 12px;
      line-height: 24px;
      padding: 8px 0 8px 24px;
    }
    @include xs {
      font-size: 10px;
      line-height: 24px;
      padding: 6px 0 6px 15px;
    }
    &[aria-expanded="true"] {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom: transparent;
      background-color: #000;
      .vs__selected {
        color: #fff !important;
      }
    }
  }

  /deep/ .vs__selected {
    color: #fff !important;
    padding: 0;
    @include xs {
      white-space: nowrap;
    }
  }

  /deep/ .vs__selected-options {
    flex-wrap: nowrap;
  }

  /deep/ .vs__dropdown-menu {
    background: #000;
    box-shadow: none;
    border-right: 1.40556px solid #E8B973;
    border-left: 1.40556px solid #E8B973;
    border-bottom:1.40556px solid #E8B973;
    border-top: transparent;
    height: auto;
    max-height: fit-content;
    @include xl {
      border-right: 2.81122px solid #E8B973;
      border-left: 2.81122px solid #E8B973;
      border-bottom:2.81122px solid #E8B973;
    }
    @include lg- {
      border-right: 1px solid #E8B973;
      border-left: 1px solid #E8B973;
      border-bottom:1px solid #E8B973;
    }
  }

  /deep/ .vs__dropdown-option {
    color: #fff;
    font-size: 12px;
    line-height: 30px;
    margin-bottom: 0;
    padding-left: 30px;
    font-family: $base-font !important;
    @include xl {
      font-size: 32px;
      line-height: 64px;
      padding-left: 60px;
    }
    @include lg- {
      font-size: 12px;
      line-height: 24px;
    }
    @include xs {
      font-size: 10px;
      line-height: 24px;
      padding-left: 20px;
    }
  }

  /deep/ .vs__dropdown-option--highlight {
    background: #2B2B2B;
    color: #fff !important;
  }

  /deep/ .vs__open-indicator {
    fill: #fff;

    svg {
      width: 11px;
      height: 6px;
      @include xl {
        width: 30px;
        height: 16px;
      }
    }
  }

  /deep/ .vs__clear {
    fill: #fff;
  }

  /deep/ .vs__actions {
    padding-right: 23px;
    @include xl {
      padding-right: 40px;
    }
    @include xs {
      padding-right: 23px;
    }
  }
}
</style>
