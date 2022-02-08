<template>
  <div :class="rootClasses">
    <div class="wrapper">
      <slot />
    </div>
    <button type="button" class="btn" @click="triggerClose">
      <IconClose />
    </button>
  </div>
</template>

<script>
import IconClose from './close.svg'

export default {
  name: 'Popup',
  components: {
    IconClose
  },
  props: {
    opaque: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rootClasses () {
      return {
        popup: true,
        opaque: Boolean(this.opaque)
      }
    }
  },
  mounted () {
    this.$el.style.overflowY = 'scroll'
    document.body.style.overflowY = 'hidden'
    window.addEventListener('keydown', this.handleEsc)
  },
  beforeDestroy () {
    this.$el.style.overflowY = ''
    document.body.style.overflowY = ''
    window.removeEventListener('keydown', this.handleEsc)
  },
  methods: {
    handleEsc (e) {
      if (e.key.toLowerCase() === 'escape') {
        this.triggerClose()
      }
    },
    triggerClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 600px;
  top: 0;
  left: 0;
  background: rgba(37, 37, 37, 1);
  color: #ffffff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.opaque {
  background: rgba(37, 37, 37, 0.6);
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.btn {
  border: none;
  padding: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  line-height: 0;
  position: absolute;
  width: 36.54px;
  height: 36.54px;
  top: 40px;
  right: 42px;
  transition: color 0.2s ease;
  &:hover:not(:focus) {
    color: $accent;
  }
  @include xl {
    & {
      top: 82px;
      right: 84px;
    }
    & > svg {
      width: 73px;
      height: 73px;
    }
  }
  @include md {
    & {
      top: 41px;
      right: 42px;
    }
    & > svg {
      width: 37px;
      height: 37px;
    }
  }
  @include sm {
    & {
      top: 37px;
      right: 28px;
    }
    & > svg {
      width: 26px;
      height: 26px;
    }
  }
  @include sm- {
    & {
      top: 13px;
      right: 17px;
    }
    & > svg {
      width: 13px;
      height: 13px;
    }
  }
}
</style>
