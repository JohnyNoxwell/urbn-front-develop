<template>
  <div class="filters">
    <v-select
      :options="years"
      class="select"
      :value="filterYear.label"
      :searchable="false"
      :components="{Deselect: null}"
      @input="onSelectYear"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes"><shevron-down /></span>
      </template>
    </v-select>
    <v-select
      :options="months"
      class="select"
      :value="filterMonth.label"
      :searchable="false"
      :components="{Deselect: null}"
      @input="onSelectMonth"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes"><shevron-down /></span>
      </template>
    </v-select>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css'
import shevronDown from '~/assets/img/shevron-down.svg'

export default {
  name: 'NewsFilter',
  components: {
    shevronDown
  },
  data () {
    const now = new Date()
    const years = [{ label: 'Все года', meta: { value: '' } }]
    for (let i = now.getFullYear(); i >= 2020; i--) {
      years.push({ label: i, meta: { value: i } })
    }
    const months = [
      { meta: { value: '' }, label: 'Все месяца' },
      { meta: { value: 1 }, label: 'Январь' },
      { meta: { value: 2 }, label: 'Февраль' },
      { meta: { value: 3 }, label: 'Март' },
      { meta: { value: 4 }, label: 'Апрель' },
      { meta: { value: 5 }, label: 'Май' },
      { meta: { value: 6 }, label: 'Июнь' },
      { meta: { value: 7 }, label: 'Июль' },
      { meta: { value: 8 }, label: 'Август' },
      { meta: { value: 9 }, label: 'Сентябрь' },
      { meta: { value: 10 }, label: 'Октябрь' },
      { meta: { value: 11 }, label: 'Ноябрь' },
      { meta: { value: 12 }, label: 'Декабрь' }
    ]
    return {
      years,
      months,
      filterYear: years[0],
      filterMonth: months[0],
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
  mounted () {
    const { year, month } = this.$route.query
    if (year) {
      const found = this.years.find(y => y.meta.value === Number(year))
      if (found) {
        this.filterYear = found
      }
    }
    if (month) {
      const found = this.months.find(m => m.meta.value === Number(month))
      if (found) {
        this.filterMonth = found
      }
    }
  },
  methods: {
    onPrev () {
      this.$refs.carousel.prev()
    },
    onNext () {
      this.$refs.carousel.next()
    },
    onSelectYear (item) {
      this.filterYear = item
      const query = { month: this.filterMonth.meta.value, year: this.filterYear.meta.value }
      this.$router.push({ query })
    },
    onSelectMonth (item) {
      this.filterMonth = item
      const query = { month: this.filterMonth.meta.value, year: this.filterYear.meta.value }
      this.$router.push({ query })
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  display: grid;
  grid-template-columns: 250px 250px;
  gap: 20px;
  @include xl {
    grid-template-columns: 500px 500px;
    gap: 40px;
  }
  @include md {
    grid-template-columns: 200px 200px;
    gap: 14px;
  }
  @include sm-l {
    grid-template-columns: 200px 200px;
    gap: 14px;
  }
  @include sm-l- {
    grid-template-columns: 45% 55%;
    position: absolute;
    bottom: 0;
    width: calc(100% - 32px);
  }
  @include sm {
    width: calc(100% - 60px);
  }
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
    @include sm- {
      min-width: 100%;
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
