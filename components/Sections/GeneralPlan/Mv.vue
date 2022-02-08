<template>
  <path ref="container" :d="d" fill="#C4C4C4" />
</template>

<script>
import tippy, { followCursor } from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export default {
  name: 'Building7',
  props: {
    d: {
      type: String,
      required: true
    },
    renderContent: {
      type: Function,
      required: true
    }
  },
  mounted () {
    tippy(this.$refs.container, {
      theme: 'building',
      arrow: false,
      followCursor: true,
      placement: 'right',
      delay: 250,
      offset: [0, 20],
      content: this.renderContent(),
      allowHTML: true,
      plugins: [followCursor]
    })
  }
}
</script>

<style lang="scss">
.tippy-box[data-theme~='building'] {
  background: #2B2B2B;
  border-radius: 4px;
  color: #fff;
  padding: 4px 12px;
  font-family: $base-font;
  font-weight: 600;
  font-size: 9px;
  line-height: 16px;
  .tippy-content {
    padding: 0;
  }
}
</style>
