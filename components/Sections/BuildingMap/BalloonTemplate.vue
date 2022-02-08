<template>
  <div :class="['yamap__tooltip', type && `theme-${type}`]">
    <ul v-if="items">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BalloonTemplate',
  props: {
    items: {
      type: Array,
      default: null
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.yamap__tooltip {
  padding: 0 !important;
  color: #000000;
  background: #FFFFFF;
  border-radius: 3px;
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22.5px;
  & ul {
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  & li::before {
    content: "\2022";
    color: #000000;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: 0;

  }
  &.theme-school li::before {
    color: #4968BA;
  }
  &.theme-kindergarten li::before {
    color: #FF567F;
  }
  &.theme-medicine li::before {
    color: #09C9A6;
  }
  &.theme-fitness li::before {
    color: #2B8CFF;
  }
  &.theme-shop li::before {
    color: #FF0000;
  }
  @include xl {
    border-radius: 12px;
    font-size: 24px;
    line-height: 45px;
  }
  @include lg- {
    font-size: 9px;
    line-height: 16px;
    border-radius: 4px;
  }
  @include sm {
    border-radius: 6px;
    font-size: 14px;
    line-height: 27px;
  }
  @include xs {
    font-size: 7px;
    line-height: 10px;
    border-radius: 3px;
  }
}
</style>
