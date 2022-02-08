<template>
  <div class="page-wrap">
    <div class="news-inner">
      <div v-if="error" class="news-inner__wrap">
        <a href="/" class="back-button" @click.prevent="goBack()">
          <back-arrow />
          <span>Назад</span>
        </a>
        <h2 class="news-inner__header">
          Новость не найдена
        </h2>
      </div>
      <div v-else class="news-inner__wrap">
        <a href="/" class="back-button" @click.prevent="goBack()">
          <back-arrow />
          <span>Назад</span>
        </a>
        <h2 class="news-inner__header">
          {{ news.title }}
        </h2>
        <span class="news-inner__date">
          <FormattedDate :date="news.date" />
        </span>
<!--        <div class="news-inner__img">-->
<!--          <img :src="news.img" alt="">-->
<!--        </div>-->
        <div class="news-inner__text">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="news.description" />
        </div>
        <div class="news-inner__controls">
          <nuxt-link v-if="news.prev" :to="'/news/' + news.prev.id" class="prev-news arrow">
            <news-arrow />
            <span>Предыдущая новость</span>
          </nuxt-link>
          <nuxt-link v-if="news.next" :to="'/news/' + news.next.id" class="next-news arrow">
            <span>Следующая новость</span>
            <news-arrow />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormattedDate from '../../components/Base/FormattedDate'
import backArrow from '~/assets/img/back-arrow.svg'
import newsArrow from '~/assets/img/news-prev.svg'
export default {
  name: 'NewsInner',
  components: {
    FormattedDate,
    backArrow,
    newsArrow
  },
  async asyncData ({ $axios, params }) {
    try {
      const result = await $axios.get(`/api/news/${params.slug}`)
      const news = result.data.data
      return { news }
    } catch (e) {
      return {
        error: true
      }
    }
  },
  data () {
    return {
      news: null,
      error: false
    }
  },
  // mounted () {
  //   this.deleteNbsp()
  // },
  methods: {
    goBack () {
      if (history.length > 2) {
        history.back()
      } else {
        this.$router.push('/')
      }
    }
    // deleteNbsp () {
    //   const options = document.getElementsByTagName('font')
    //   for (let i = 0; i < options.length; i++) {
    //     options[i].innerHTML = options[i].innerHTML.replace(/&nbsp;/g, ' ')
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.news-inner {
  background-color: $dark-gray;
  padding-bottom: 80px;
  padding-top: 122px;
  @include sm-l {
    padding-left: 24px;
    padding-right: 24px;
  }
  @include sm {
    padding-left: 24px;
    padding-right: 24px;
  }
  @include xs {
    padding: 75px 16px 0;
  }
  &__wrap {
    max-width: 914px;
    width: 100%;
    margin: 0 auto;
    @include xl {
      max-width: 1840px;
    }
    @include md {
      max-width: 868px;
    }
    @include sm-l {
      max-width: 968px;
    }
    @include sm {
      max-width: 712px;
    }
  }
  &__header {
    font-weight: 600;
    font-size: 44px;
    line-height: 52px;
    color: #fff;
    margin-bottom: 25px;
    @include xl {
      font-weight: 600;
      font-size: 88px;
      line-height: 78px;
      margin-bottom: 50px;
    }
    @include md {
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 13px;
    }
    @include sm-l {
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 13px;
    }
    @include sm {
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 13px;
    }
    @include xs {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 6px;
    }
  }
  &__date {
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: #E8B973;
    opacity: 0.8;
    margin-bottom: 50px;
    display: block;
    @include xl {
      font-weight: 500;
      font-size: 52px;
      line-height: 56px;
      margin-bottom: 55px;
    }
    @include lg {
      font-size: 26px;
      line-height: 28px;
    }
    @include md- {
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 40px;
    }
    @include sm {
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 38px;
    }
    @include xs {
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      margin-bottom: 14px;
    }
  }
  &__img {
    margin-bottom: 50px;
    @include xl {
      margin-bottom: 106px;
    }
    @include md- {
      margin-bottom: 40px;
    }
    @include xs {
      margin-bottom: 18px;
    }
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
  &__text {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 80px;
    word-break: break-word;

    /deep/ div {
      text-align: left;
    }
    /deep/ a {
      color: #E8B973;
    }
    /*/deep/ tr {*/
    /*  display: flex;*/
    /*  flex-direction: column;*/
    /*}*/
    /deep/ img {
      width: 100%;
      height: auto;
    }
    /deep/ font {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
      @include xl {
        font-size: 36px;
        line-height: 60px;
      }
      @include sm- {
        font-size: 12px;
        line-height: 24px;
      }
    }
    @include xl {
      font-weight: normal;
      font-size: 36px;
      line-height: 60px;
      margin-bottom: 200px;
    }
    @include md- {
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 43px;
    }
    @include sm {
      margin-bottom: 60px;
    }
    @include sm- {
      overflow-x: auto;
    }
    @include xs {
      font-size: 12px;
      line-height: 24px;
      margin-bottom: 41px;
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 80px;
    @include xl {
      padding-bottom: 200px;
    }
    @include md {
      padding-bottom: 70px;
    }
    @include sm {
      padding-bottom: 60px;
    }
    @include xs {
      padding-bottom: 60px;
    }
    .arrow {
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
      color: #ACACAC;
      text-decoration: none;
      transition: all 0.2s linear;
      display: flex;
      align-items: center;
      @include xl {
        font-weight: 300;
        font-size: 32px;
        line-height: 18px;
      }
      @include md {
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
      }
      @include xs {
        font-size: 0;
      }
      &:hover {
        color: $accent;
        /deep/ path {
          fill: $accent;
        }
      }
      svg {
        @include xl {
          width: 120px;
          height: auto;
        }
        @include md {
          width: 43px;
          height: auto;
        }
        @include sm-l- {
          width: 43px;
          height: auto;
        }
        @include xs {
          width: 45px;
        }
        /deep/ path {
          transition: all 0.2s linear;
        }
      }
    }
    .next-news {
      svg {
        transform: rotate(180deg);
        margin-left: 20px;
        @include xl {
          margin-left: 60px;
        }
      }
    }
    .prev-news {
      svg {
        margin-right: 20px;
        @include xl {
          margin-right: 60px;
        }
      }
    }
  }
  .back-button {
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    color: #ACACAC;
    text-decoration: none;
    display: inline-block;
    align-items: center;
    margin-bottom: 17px;
    transition: all 0.2s linear;
    @include xl {
      font-style: normal;
      font-weight: 300;
      font-size: 44px;
      line-height: 52px;
      margin-bottom: 34px;
    }
    @include md {
      font-weight: 300;
      font-size: 12px;
      line-height: 26px;
      margin-bottom: 20px;
    }
    @include sm-l {
      font-weight: 300;
      font-size: 12px;
      line-height: 26px;
      margin-bottom: 20px;
    }
    @include sm {
      font-weight: 300;
      font-size: 12px;
      line-height: 26px;
      margin-bottom: 20px;
    }
    @include xs {
      font-weight: 300;
      font-size: 10px;
      line-height: 26px;
    }
    &:hover {
      color: $accent;
      /deep/ svg path {
        fill: $accent;
      }
    }
    svg {
      width: 29px;
      height: auto;
      margin-right: 10px;
      @include xl {
        width: 58px;
        margin-right: 20px;
      }
      @include md {
        width: 10px;
      }
      @include sm-l {
        width: 10px;
      }
      @include sm {
        width: 10px;
      }
      @include xs {
        width: 12px;
      }
      /deep/ path {
        transition: all 0.2s linear;
      }
    }
  }
}
.page-wrap {
  background-color: $dark-gray;
}
</style>
