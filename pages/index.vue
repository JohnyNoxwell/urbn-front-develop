<template>
  <div class="app">
    <main-section />
    <urbn-section />
    <general-plan />
    <improvement-section />
    <urbanism-section />
    <interior-section />
    <plan-section />
    <building-map />
  </div>
</template>

<script>
import MainSection from '../components/Sections/MainSection'
import UrbnSection from '../components/Sections/UrbnSection'
import GeneralPlan from '../components/Sections/GeneralPlan/GeneralPlan'
import ImprovementSection from '../components/Sections/ImprovementSection'
import UrbanismSection from '../components/Sections/UrbanismSection'
import InteriorSection from '../components/Sections/InteriorSection'
import BuildingMap from '../components/Sections/BuildingMap/BuildingMap'
import PlanSection from '../components/Sections/PlanSection/PlanSection'

export default {
  components: {
    PlanSection,
    UrbanismSection,
    UrbnSection,
    ImprovementSection,
    MainSection,
    GeneralPlan,
    BuildingMap,
    InteriorSection
  },
  scrollToTop: false,
  async asyncData ({ $axios, query }) {
    const params = []
    if (query.year) {
      params.push(`filter[year]=${query.year}`)
    }
    if (query.month) {
      params.push(`filter[month]=${query.month}`)
    }
    try {
      const result = await $axios.get(`/api/news?${params.join('&')}`)
      const news = result.data.data || []
      return { news }
    } catch (e) {
      const news = []
      return { news }
    }
  },
  data () {
    return {
      news: []
    }
  },
  watchQuery: ['month', 'year']
}
</script>

<style lang="scss" scoped>
  .app {
    background-color: $dark-gray;
  }
</style>
