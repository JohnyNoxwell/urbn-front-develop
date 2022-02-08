<template>
  <Popup @close="triggerClose">
    <div class="popup__logo">
      <popup-logo />
    </div>
    <div class="success__wrap">
      <div class="paper-plane">
        <paper-plane />
      </div>
      <h1 class="success__header">
        Спасибо, заявка отправлена, скоро мы вам позвоним!
      </h1>
    </div>
  </Popup>
</template>

<script>
import Popup from './Popup.vue'
import PaperPlane from '~/assets/img/paper-plane.svg'
import PopupLogo from '~/assets/img/popup-logo.svg'
export default {
  name: 'SuccessPopup',
  components: {
    Popup,
    PaperPlane,
    PopupLogo
  },
  methods: {
    triggerClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

.success {
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 83px;
    align-items: center;
    @include xl {
      gap: 166px;
    }
    @include lg- {
      gap: 60px;
    }
    @include xs {
      gap: 27px;
    }

  }
  &__header {
    font-weight: 600;
    font-size: 44px;
    line-height: 54px;
    max-width: 823px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    @include xl {
      font-weight: 600;
      font-size: 88px;
      line-height: 108px;
      max-width: 1650px;
    }
    @include lg- {
      font-weight: 600;
      font-size: 32px;
      line-height: 41px;
      max-width: 586px;
    }
    @include xs {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      max-width: 260px;
    }
  }

}
.popup__logo {
  position: absolute;
  left: 40px;
  top: 20px;
  @include xl {
    width: 267px;
    height: 232px;
    left: 82px;
    top: 73px;
  }
  @include lg- {
    width: 95px;
    height: 82px;
    left: 29px;
    top: 26px;
  }
  @include xs {
    width: 58px;
    height: 50px;
    left: 16px;
    top: 13px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
.paper-plane {
  @include xl {
    width: 787.12px;
    height: 838.59px;
  }
  @include lg- {
    width: 280px;
    height: 298.31px;
  }
  @include xs {
    width: 124.44px;
    height: 132.58px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
