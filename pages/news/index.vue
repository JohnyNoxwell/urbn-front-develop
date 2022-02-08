<template>
  <div class="app-news">
    <div class="container">
      <div class="newsHeader">
        <h3>Новости</h3>
        <news-filter />
      </div>
      <div class="app-news-list">
        <nuxt-link v-for="item in news" :key="item.id" :to="'/news/' + item.id" class="app-news-item">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="date">
            {{ item.date }}
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="desc" v-html="item.teaser" />
        </nuxt-link>
      </div>
      <client-only>
        <infinite-loading @infinite="infiniteHandler" />
      </client-only>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import NewsFilter from '../../components/Sections/News/NewsFilter'

const fetchNews = async ({ $axios, query }, page = 1) => {
  const params = [
    'per_page=16',
    `page=${page}`
  ]
  if (query.year) {
    params.push(`filter[year]=${query.year}`)
  }
  if (query.month) {
    params.push(`filter[month]=${query.month}`)
  }
  try {
    const result = await $axios.get(`/api/news?${params.join('&')}`)
    const news = result.data.data || []
    const meta = result.data.meta || {}

    return { news, meta }
  } catch (e) {
    const news = []
    const meta = {}
    return { news, meta }
  }
}

export default {
  name: 'NewsList',
  components: {
    InfiniteLoading,
    NewsFilter
  },
  async asyncData ({ $axios, query }) {
    return await fetchNews({ $axios, query })
  },
  data () {
    return {
      news: [],
      meta: {}
    }
  },
  watchQuery: ['month', 'year'],
  methods: {
    async infiniteHandler ($state) {
      const query = this.$route.query
      const $axios = this.$axios
      const { news, meta } = await fetchNews({ $axios, query }, this.meta.current_page + 1)
      this.news.push(...news)
      this.meta = meta
      if (meta.current_page >= meta.last_page) {
        $state.complete()
      } else {
        $state.loaded()
      }
    }
  }
}
</script>

<style lang="scss">
.app-news {
  background-color: $dark-gray;
  .app-header {
    background-color: #252525;
  }
  .newsHeader {
    display: flex;
    align-items: center;
    margin-bottom: 75px;
    color: #fff;
    @include xl {
      padding-left: 387px;
      margin-bottom: 146px;
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
    @include xs {
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
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
    }
  }
  .container {
    padding: 184px 28px 80px;
    @include sm-l {
      padding: 150px 24px 80px;
    }
    @include sm {
      padding: 140px 24px 80px;
    }
    @include xs {
      padding: 110px 0 80px 16px;
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    color: #fff;
    width: 25%;
    min-width: 25%;
    padding: 8px 8px 0;
    margin-bottom: 50px;
    text-decoration: none;
    @include md- {
      width: 33.333%;
      min-width: 33.333%;
    }
    @include sm-l- {
      width: 50%;
      min-width: 50%;
    }
    @include sm- {
      width: 100%;
      min-width: 100%;
      padding: 0;
    }
    .img {
      width: 100%;
      height: 214px;
      margin-bottom: 16px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .date {
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      opacity: 0.8;
    }
    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 10px;
    }
    .desc {
      font-size: 12px;
      line-height: 20px;
      opacity: 0.6;
    }
  }
}
</style>
