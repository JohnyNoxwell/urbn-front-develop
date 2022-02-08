<template>
  <div :class="$style.root">
    <div>
      <div :class="$style.icon_container">
        <finger-icon />
      </div>
      <h2 :class="$style.overlayHeader">
        Для перемещения по генплану проведите по экрану в сторону
      </h2>
      <div :class="$style.icon_container">
        <GenplanIcon />
      </div>
    </div>
  </div>
</template>
<script>
import FingerIcon from '~/assets/img/finger.svg'
import GenplanIcon from '~/assets/img/genplan-icon.svg'
export default {
  components: {
    FingerIcon,
    GenplanIcon
  }
}
</script>
<style lang="scss" module>
.root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.7;
  color: #ffffff;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon_container {
  width: fit-content;
  margin: 0 auto 32px;
}

.overlayHeader {
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 21px;
  margin-left: auto;
  margin-right: auto;
  max-width: 291px;
  font-weight: 400;
  @include xs {
    font-size: 12px;
    line-height: 16px;
    max-width: 222px;
  }
}
</style>
