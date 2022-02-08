<template>
  <div :class="$style.root">
    <nuxt-link :to="'/news/' + id">
      <img
        :class="$style.img"
        :src="picture"
        :alt="title"
        draggable="false"
        @dragstart="onFirefoxFix"
      >
      <div v-if="date" :class="$style.date">
        <FormattedDate :date="date" />
      </div>
      <div :class="$style.title">
        {{ title }}
      </div>
      <div :class="$style.content">
        {{ teaser }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import FormattedDate from '~/components/Base/FormattedDate'

export default {
  name: 'NewsItem',
  components: {
    FormattedDate
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    teaser: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  },
  methods: {
    onFirefoxFix () {
      return false
    }
  }
}
</script>

<style lang="scss" module>
.root {
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  max-width: 440px;
  margin-right: 25px;
  width: 100%;
  @include xl {
    width: 880px!important;
    max-width: 880px;
    margin-right: 50px;
  }
  @include lg {
    width: 440px!important;
    margin-right: 50px;
  }
  @include lg- {
    width: 313px!important;
    margin-right: 25px;
  }
  @include md {
    margin-right: 18px;
  }
  @include xs {
    width: 195px!important;
    margin-right: 12px;
  }
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
}
.img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 22px;
  user-select: none;
  @include xl {
    margin-bottom: 44px;
  }
  @include lg- {
    margin-bottom: 16px;
  }
  @include sm {
    height: 213px;
  }
  @include xs {
    margin-bottom: 10px;
    height: 132px;
  }
}
.date {
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 39px;
  opacity: 0.8;
  margin-bottom: 5px;
  @include xl {
    font-size: 32.001px;
    line-height: 79px;
    margin-bottom: 9px;
  }
  @include lg- {
    font-size: 12px;
    line-height: 28px;
    margin-bottom: 3px;
  }
  @include xs {
    font-size: 7px;
    line-height: 17px;
    margin-bottom: 2px;
  }
}
.title {
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  margin-bottom: 12px;
  @include xl {
    font-size: 44.0014px;
    line-height: 72px;
    margin-bottom: 25px;
  }
  @include lg- {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 9px;
  }
  @include xs {
    font-size: 10px;
    line-height: 15px;
    margin-bottom: 6px;
  }
}
.content {
  font-family: $base-font;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  opacity: 0.6;
  max-height: 100px;
  @include xl {
    font-size: 32.001px;
    line-height: 56px;
  }
  @include lg- {
    font-size: 12px;
    line-height: 20px;
  }
  @include xs {
    font-size: 8px;
    line-height: 12px;
  }
}
</style>
