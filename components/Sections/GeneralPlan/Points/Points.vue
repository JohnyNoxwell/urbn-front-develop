<template>
  <div>
    <VDropdown
      v-for="(t, index) in tooltips"
      :key="index"
      :placement="t.placement"
      :offset="t.offset"
      :class="[t.className]"
      :theme="t.theme"
      :triggers="t.triggers"
      :popperTriggers="t.popperTriggers"
    >
      <point :type="t.type" />
      <template slot="popper">
        <component :is="t.content.component" v-if="typeof t.content === 'object'" :data="t.content.data" />
        <span v-else>
          {{ t.content }}
        </span>
      </template>
    </VDropdown>
  </div>
</template>

<script>
import VTooltip from 'v-tooltip'
import Point from './Point'
import Parking2 from './Parking2'

VTooltip.options.themes.point = {
  $extend: 'dropdown'
}

export default {
  components: {
    Point
  },
  data () {
    const commonTooltip = {
      theme: 'point', // добавляет на тултип класс v-popper--theme-point
      placement: 'top',
      offset: [0, 8],
      triggers: ['hover', 'focus', 'click'],
      popperTriggers: ['hover', 'focus', 'click']
    }
    return {
      commonTooltip,
      tooltips: [
        {
          ...commonTooltip,
          className: this.$style.street3,
          content: 'ул Козловская',
          type: 'street'
        },
        {
          ...commonTooltip,
          className: this.$style.street2,
          content: 'ул. Профсоюзная',
          type: 'street'
        },
        {
          ...commonTooltip,
          className: this.$style.commerce,
          content: 'Торговая галерея',
          type: 'commerce'
        },
        {
          ...commonTooltip,
          className: this.$style.parking,
          content: 'Кровля паркинга с активными зонами отдыха',
          type: 'parking'
        },
        {
          ...commonTooltip,
          className: this.$style.parking2,
          content: {
            component: Parking2,
            data: { url: '/' }
          },
          type: 'parking'
        },
        {
          ...commonTooltip,
          className: this.$style.parking4,
          content: {
            component: Parking2,
            data: { url: 'https://smart-catalog.profitbase.ru/catalog/house/33879/bigGrid?accountId=4632&referrer=http:%2F%2Fperesvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true' }
          },
          type: 'parking'
        },
        {
          ...commonTooltip,
          className: this.$style.parking5,
          content: 'Кровля паркинга с активными зонами отдыха',
          type: 'parking'
        },
        {
          ...commonTooltip,
          className: this.$style.cafe,
          content: 'Кафе',
          type: 'cafe'
        },
        {
          ...commonTooltip,
          className: this.$style.park,
          content: 'Кинотеатр под открытым небом',
          type: 'park'
        },
        {
          ...commonTooltip,
          className: this.$style.park2,
          content: 'Парк в пойме реки Царица',
          type: 'park'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.v-popper--theme-point {
  & .v-popper__inner {
    background: $dark-gray;
    color: #fff;
    border-radius: 4px;
    padding: 5px 16px;
    font-family: $base-font;
    font-weight: 600;
    font-size: 12px;
    line-height: 22.49px;
    box-shadow: none;
    span {
      color: $accent;
      a {
        color: $accent;
        text-decoration: underline;
      }
    }
    a {
      color: $accent;
      text-decoration: underline;
    }
    @include xl {
      padding: 11px 33px;
      font-size: 24px;
      line-height: 44px;
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
      font-size: 12px;
      line-height: 21.33px;
    }
  }

  & .v-popper__arrow-container {
    border-color: transparent;
    display: none;
  }
}
</style>

<style lang="scss" module>
$mapWidth: 853px;
$mapHeight: 480px;
@mixin mapPoint {
  position: absolute;
}
.park {
  @include mapPoint;
  top: (241px / $mapHeight) * 100%;
  left: (504px / $mapWidth) * 100%;
}
.park2 {
  @include mapPoint;
  top: (60px / $mapHeight) * 100%;
  left: (594px / $mapWidth) * 100%;
}
.parking {
  @include mapPoint;
  top: (143.02px / $mapHeight) * 100%;
  left: (320px / $mapWidth) * 100%;
}
.parking2 {
  @include mapPoint;
  top: (158.01px / $mapHeight) * 100%;
  left: (443px / $mapWidth) * 100%;
}
.parking3 {
  @include mapPoint;
  top: (350px / $mapHeight) * 100%;
  left: (301px / $mapWidth) * 100%;
}
.parking4 {
  @include mapPoint;
  top: (354px / $mapHeight) * 100%;
  left: (304px / $mapWidth) * 100%;
}
.parking5 {
  @include mapPoint;
  top: (175px / $mapHeight) * 100%;
  left: (200px / $mapWidth) * 100%;
}
.cafe {
  @include mapPoint;
  top: (362px / $mapHeight) * 100%;
  left: (355px / $mapWidth) * 100%;
}
.commerce {
  @include mapPoint;
  top: (393px / $mapHeight) * 100%;
  left: (474px / $mapWidth) * 100%;
}
.street {
  @include mapPoint;
  top: (187px / $mapHeight) * 100%;
  left: (541px / $mapWidth) * 100%;
}
.street2 {
  @include mapPoint;
  top: (274px / $mapHeight) * 100%;
  left: (85px / $mapWidth) * 100%;
}
.street3 {
  @include mapPoint;
  top: (403px / $mapHeight) * 100%;
  left: (579px / $mapWidth) * 100%;
}
.street4 {
  @include mapPoint;
  top: (100px / $mapHeight) * 100%;
  left: (100px / $mapWidth) * 100%;
}
</style>
