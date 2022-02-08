<template>
  <button class="galleryButton" type="button">
    <arr-left v-if="variant === 'left'" />
    <arr-right v-if="variant === 'right'" />
  </button>
</template>

<script>
import ArrLeft from '~/assets/img/ar2-l.svg'
import ArrRight from '~/assets/img/ar2-r.svg'

export default {
  components: {
    ArrLeft,
    ArrRight
  },
  props: {
    variant: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.galleryButton {
  padding: 0;
  border: 0;
  margin: 0;
  background-color: transparent;
  color: #ffffff;
  transition: color 0.2s ease;
  line-height: 0;
  cursor: pointer;
  &:hover {
    color: $accent;
  }
  svg {
    display: inline-block;
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
}
</style>
