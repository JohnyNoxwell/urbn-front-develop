<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
.root {
  cursor: pointer;
  user-select: none;
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 12.66px;
  line-height: 22.49px;
  background-color: $dark-gray;
  transition: background-color 0.2s ease;
  color: #fff;
  padding: 5px 16px;
  border-radius: 4px;
  a {
    color: $accent;
  }
  &:hover {
    background-color: lighten($dark-gray, 10%);
  }
  @include xl {
    padding: 11px 33px;
    font-size: 24px;
    line-height: 44.98px;
  }
  @include lg- {
    padding: 4px 11.79px;
    font-size: 9px;
    line-height: 16px;
  }
  @include sm-l {
    padding: 4px 12px;
  }
  @include sm {
    padding: 5.33px 16px;
    font-size: 12px;
    line-height: 21.33px;
  }
  @include sm- {
    padding: 2.5px 7.49px;
    font-size: 7px;
    line-height: 9.99px;
  }
}
</style>
