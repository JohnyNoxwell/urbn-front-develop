<template>
  <div :class="[$style.root, active && $style.active, $style[`theme-${theme}`]]">
    <div :class="$style.content">
      <slot />
    </div>
    <div :class="$style.point" />
  </div>
</template>

<script>
export default {
  name: 'MapFilter',
  props: {
    theme: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" module>
.root {
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  // user-select: none;
  @include sm {
    padding: 13px 26px;
  }
  @include sm-l {
    padding: 8px 16px;
  }
  @include md {
    padding: 8px 16px;
  }
  @include xl {
    padding: 27px 53px;
  }
}
.content {
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22,5px;
  color: #2B2B2B;
  margin-right: 2px;
  @include sm {
    font-size: 18px;
    line-height: 26px;
    margin-right: 4px;
  }
  @include sm-l {
    font-size: 12px;
    line-height: 16px;
    margin-right: 10px;
  }
  @include md {
    font-size: 12px;
    line-height: 16px;
    margin-right: 10px;
  }
  @include xl {
    font-size: 16px;
    line-height: 22px;
    margin-right: 14px;
  }
  @include xl {
    font-size: 32px;
    line-height: 45px;
    margin-right: 28px;
  }
}
.point {
  border-radius: 50%;
  width: 6px;
  height: 6px;
  @include sm {
    width: 15px;
    height: 15px;
  }
  @include sm-l {
    width: 9px;
    height: 9px;
  }
  @include md {
    width: 9px;
    height: 9px;
  }
  @include xl {
    width: 13px;
    height: 13px;
  }
  @include xl {
    width: 25px;
    height: 25px;
  }
}
.active {
  background: #E8B973;
  & .content {
    color: #000000;
  }
}
.theme-all {
  & .content {
    margin-right: 0;
  }
  & .point {
    display: none;
  }
}
.theme-school {
  & .point {
    background: #4968BA;
  }
}
.theme-kindergarten {
  & .point {
    background: #FF567F;
  }
}
.theme-medicine {
  & .point {
    background: #09C9A6;
  }
}
.theme-fitness {
  & .point {
    background: #2B8CFF;
  }
}
.theme-shop {
  & .point {
    background: #FF0000;
  }
}
.ymaps-2-1-79-balloon__content {
  padding: 0 !important;
  color: red !important;
}
</style>
