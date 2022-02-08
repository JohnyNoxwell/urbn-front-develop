<template>
  <Popup @close="triggerClose">
    <div :class="$style.root">
      <button
        v-if="streams.length > 1"
        :class="[$style.btnAction, $style.left]"
        type="button"
        @click="onPrev"
      >
        <arr-left />
      </button>
      <iframe :class="$style.stream" :src="stream" frameborder="0" />
      <button
        v-if="streams.length > 1"
        :class="[$style.btnAction, $style.right]"
        type="button"
        @click="onNext"
      >
        <arr-right />
      </button>
    </div>
  </Popup>
</template>

<script>
import Popup from './Popup.vue'
import ArrLeft from '~/assets/img/ar2-l.svg'
import ArrRight from '~/assets/img/ar2-r.svg'

export default {
  name: 'LiveStreamPopup',
  components: {
    Popup,
    ArrLeft,
    ArrRight
  },
  data () {
    return {
      streamIdx: 0,
      streams: [
        'https://video.enforta.ru/embed/v2/?server=100-iru8NCXkxVoYKow0mknHsk&camera=0&width=1280&height=720&lang=ru&ap=&fs=&noibw='
      ]
    }
  },
  computed: {
    stream () {
      return this.streams[this.streamIdx]
    }
  },
  methods: {
    triggerClose () {
      this.$emit('close')
    },
    onPrev () {
      this.streamIdx = Math.max(this.streamIdx - 1, 0)
    },
    onNext () {
      this.streamIdx = Math.min(this.streamIdx + 1, this.streams.length - 1)
    }
  }
}
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.stream {
  width: 100%;
  height: 100%;
}
.btnAction {
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  display: inline-block;
  color: #ffffff;
  transition: color 0.2s ease;
  line-height: 0;
  cursor: pointer;
  &:hover:not(:focus) {
    color: #D5D5D5;
    & path {
      stroke: $accent;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    @include xl {
      width: 90px;
      height: 90px;
    }
    @include lg- {
      width: 60px;
      height: 60px;
    }
  }
}
.left {
  position: absolute;
  top: 50%;
  left: 34px;
  transform: translateY(-50%);
}
.right {
  position: absolute;
  top: 50%;
  right: 34px;
  transform: translateY(-50%);
}
</style>
