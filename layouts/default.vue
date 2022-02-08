<template>
  <div>
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import 'v-tooltip/dist/v-tooltip.css'
import AppHeader from '../components/AppHeader'

import AppFooter from '~/components/AppFooter'
export default {
  components: { AppFooter, AppHeader }

  // components: { AppHeader }
}
</script>

<style lang="scss">
html {
  font-family: $base-font,
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
