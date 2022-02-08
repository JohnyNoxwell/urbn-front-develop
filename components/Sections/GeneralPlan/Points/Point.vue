<template>
  <svg :class="[$style.root, $style[`type-${type}`]]" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="6.67"
      cy="6.25"
      r="5.62"
      fill="currentColor"
      stroke="#fff"
      stroke-width="1.25"
    />
  </svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>

@mixin sizes {
  width: 28px;
  height: 28px;
  @include lg- {
    width: 20px;
    height: 20px;
  }
  @include sm- {
    width: 13px;
    height: 13px;
  }
  @include sm {
    width: 27px;
    height: 27px;
  }
  @include xl {
    width: 56px;
    height: 56px;
  }
}
.root {
  @include sizes;
  cursor: pointer;
  transition: color 0.2s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: $accent;
  }
}
.type-park {
  color: #3B964F;
}
.type-parking {
  color: $terracota;
}
.type-cafe {
  color: #E4A264;
}
.type-commerce {
  color: #D628DA;
}
.type-street {
  color: #2B8CFF;
}
</style>
