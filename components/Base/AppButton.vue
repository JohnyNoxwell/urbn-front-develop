<template>
  <a
    v-if="link"
    :href="link"
    class="app-button"
    :class="[`app-button--${color}`, `app-button--${alignment}`]"
  >
    {{ text }}
  </a>
  <a
    v-else-if="scroll"
    v-scroll-to="scroll"
    class="app-button"
    :class="[`app-button--${color}`, `app-button--${alignment}`]"
  >
    {{ text }}
  </a>
  <button
    v-else
    :type="type || 'button'"
    class="app-button"
    :class="[
      `app-button--${size}`,
      `app-button--${alignment}`,
      `app-button--${color}`,
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'button',
      required: false
    },
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'content-width',
      required: false
    },
    color: {
      type: String,
      default: '',
      required: false
    },
    alignment: {
      type: String,
      default: 'center',
      required: false
    },
    link: {
      type: String,
      required: false,
      default: ''
    },
    scroll: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  font-family: $base-font;
  font-weight: 600;
  font-size: 11px;
  border: 1px solid transparent;
  border-radius: 32px;
  display: flex;
  line-height: 1;
  height: 32px;
  align-items: center;
  padding: 12px 26px;
  background-color: $accent;
  color:#000;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  @include xl {
    font-size: 22px;
    line-height: 40px;
    padding: 12px 51px;
    border: 2px solid #FFFFFF;
    border-radius: 64px;
    height: 64px;
  }
  @include md {
  }
  @include sm {
    padding: 12px 25px;
  }
  @include xs {
    font-size: 16px;
    width: 250px;
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: transparent;
    color: #fff;
    border-color: #fff;
  }

  &--green {
    background: $green;
    color: #fff;
    border-color: $green;
    font-size: 14px;
    font-weight: 400;
    padding: 0 12px;
    height: 44px;
    border-radius: 4px;
    width: fit-content;
    text-transform: none;
    &:hover,
    &:active,
    &:focus {
      outline: none;
      border-color: transparent;
      background: $accent;
      color: #000;
    }
  }
  &--blue {
    background: blue;
    color: #fff;
    &:hover,
    &:active,
    &:focus {
      outline: none;
      background: #6F1B3F;
      color: #fff;
    }
  }
  &--transparent {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    &:hover,
    &:active,
    &:focus {
      outline: none;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
    }
    ::v-deep path {
      fill: #fff;
    }
  }
  &--left {
    margin-right: auto;
    &-md {
      @include md {
        margin-right: auto;
      }
    }
    &-sm {
      @include sm {
        margin-right: auto;
      }
    }
    &-xs {
      @include xs {
        margin-right: auto;
      }
    }
  }

  &--right {
    margin-left: auto;
    &-md {
      @include md {
      }
      margin-left: auto;
    }
    &-sm {
      @include sm {
        margin-left: auto;
      }
    }
    &-xs {
      @include xs {
        margin-left: auto;
      }
    }
  }

  &--center {
    margin-left: auto;
    margin-right: auto;
    &-md {
      @include md {
        margin-left: auto;
        margin-right: auto;
      }
    }
    &-sm {
      @include sm {
        margin-left: auto;
        margin-right: auto;
      }
    }
    &-xs {
      @include xs {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  &--baseline {
    display: inline-flex;
    &-md {
      @include md {
        display: inline-flex;
      }
    }
    &-sm {
      @include sm {
        display: inline-flex;
      }
    }
    &-xs {
      @include xs {
        display: inline-flex;
      }
    }
  }

  &--medium {
    width: 228px;
    &-xs {
      @include md- {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}
</style>
