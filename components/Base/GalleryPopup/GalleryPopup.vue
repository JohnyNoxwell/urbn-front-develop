<template>
  <popup opaque @close="$emit('close')">
    <div class="gallery-popup__inner">
      <div class="gallery-popup__fullscreen-controls">
        <gallery-button variant="left" @click.native="onPrev" />
        <div class="gallery-popup__controls">
          <button class="gallery-popup__control gallery-popup--zoom" aria-label="Увеличить"></button>
          <button class="gallery-popup__control gallery-popup--decrease" aria-label="Уменьшить"></button>
        </div>
        <gallery-button variant="right" @click.native="onNext" />
      </div>
      <div class="gallery-popup__slider-wrapper">
        <div class="gallery-popup__slider-fullscreen">
          <VueSlickCarousel
            ref="improveSliderFullscreen"
            :initial-slide="firstSlide"
            :dots="false"
            :arrows="false"
            :fade="true"
            :swipe="true"
            @beforeChange="onBeforeChange"
          >
            <div
              v-for="(slide, idx) in slides"
              :key="idx"
            >
              <img
                :src="slide.imageBig"
                :alt="slide.title"
                draggable="false"
                @dragstart="ffFix"
              >
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import GalleryButton from './GalleryButton'
import Popup from '~/components/Base/Popup/Popup'

export default {
  name: 'AppGalleryPopup',
  components: {
    VueSlickCarousel,
    Popup,
    GalleryButton
  },
  props: {
    initialSlide: {
      type: Number,
      default: 0
    },
    slides: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      firstSlide: this.initialSlide
    }
  },
  mounted () {
    this.firstSlide = this.initialSlide
  },
  methods: {
    onPrev () {
      this.$emit('prev')
      this.$refs.improveSliderFullscreen.prev()
    },
    onNext () {
      this.$emit('next')
      this.$refs.improveSliderFullscreen.next()
    },
    ffFix (e) {
      e.preventDefault()
    },
    onBeforeChange (prev, next) {
      this.$emit('beforeChange', prev, next)
    }
  }
}
</script>

<style lang="scss" scoped>
.opaque {
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  min-height: auto;
  min-height: 816px;
  @include sm-l {
    min-height: 589px;
  }
  @include sm- {
    min-height: auto;
  }
  @include tablet-md {
    min-height: auto;
  }
}

.gallery-popup {
  &__inner {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    @include tablet-md {
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }
    @include md- {
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }
  }
  &__slider-wrapper {
    width: 69%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    padding-top: 20px;
    @include sm {
      position: relative;
      top: auto;
      left: auto;
      padding: 0 11px;
      padding-top: 80px;
      width: 100%;
      transform: translate(0);
    }
    @include sm- {
      position: relative;
      top: auto;
      left: auto;
      padding: 0 4px;
      width: 100%;
      flex-grow: 1;
      padding-top: 80px;
      transform: translate(0);
    }
    @include tablet-md {
      padding: 0;
      width: 69%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      padding-top: 20px;
      min-height: 309px;
    }
    @include mobile-landscape {
      padding: 0;
      width: 69%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      min-height: auto;
    }
  }
  &__controls {
    display: none;
    align-items: center;
    button {
      position: relative;
      width: 40px;
      height: 40px;
      border: 1px solid #D5D5D5;
      border-radius: 50%;
      background-color: transparent;
      &:active {
        border: 1px solid $accent;
        &::before,
        &::after {
          background-color: $accent;
        }
      }
      &:not(:last-of-type) {
        margin-right: 32px;
        @include sm- {
          margin-right: 17.6px;
        }
      }
      @include sm- {
        width: 22px;
        height: 22px;
        }
      }
    @include sm-l- {
      display: flex;
    }
  }
  &--zoom {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #fff;
      display: inline-block;
      width: 20px;
      height: 2px;
      transform: translate(-50%, -50%);
      @include sm- {
        width: 11px;
        height: 1.1px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #fff;
      display: inline-block;
      width: 20px;
      height: 2px;
      transform: translate(-50%, -50%) rotate(90deg);
      @include sm- {
        width: 11px;
        height: 1.1px;
      }
    }
  }
  &--decrease {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #fff;
      display: inline-block;
      width: 20px;
      height: 2px;
      transform: translate(-50%, -50%);
      @include sm- {
        width: 11px;
        height: 1.1px;
      }
    }
  }
  &__fullscreen-controls {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 15%;
    height: auto;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-50%);
    @include xl {
      padding: 0 213px;
    }
    @include md- {
      padding: 0 30px;
    }
    @include sm {
      position: relative;
      padding: 0 40px;
      top: auto;
      // bottom: 40px;
      left: auto;
      transform: translateY(0);
    }
    @include sm- {
      position: relative;
      left: auto;
      padding: 0 20px;
      top: auto;
      bottom: 20px;
      transform: translateY(0);
      height: 20%;
    }
    @include tablet-md {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: auto;
      padding: 0 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform: translateY(-50%);
    }
    @include mobile-landscape {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: auto;
      padding: 0 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform: translateY(-50%);
    }
    .galleryButton {
      width: 72.63px;
      height: 72.26px;
      @include xl {
        width: 163.85px;
        height: 163px;
      }
      @include lg- {
        width: 72px;
        height: 71.63px;
      }
      @include sm-l {
        width: 39px;
        height: 38.8px;
      }
      @include sm {
        width: 54.08px;
        height: 53.8px;
      }
      @include sm- {
        width: 31.03px;
        height: 30.87px;
      }
    }
  }
  &__slider-fullscreen {
    img {
      object-fit: contain;
      object-position: top;
      width: 100%;
      height: 100%;
    }
    @include xl {
      height: 1172px;
    }
    @include md {
      min-width: 1096px;
      min-height: 619px;
    }
    @include sm-l {
      min-height: 467px;
    }
    @include sm {
      position: relative;
      min-height: 416px;
    }
    @include sm- {
      min-height: 176px;
    }
    @include tablet-md {
      min-height: auto;
      max-height: 80%;
    }
  }
}
</style>
