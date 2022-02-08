<template>
  <section
    id="generalPlan"
    :class="$style.wrapper"
    @mousedown="onStartMouseDrag"
    @mouseup="onStopMouseDrag"
    @mouseout="onOutMouseDrag"
    @mousemove.passive="onMouseMove"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchmove.passive="onTouchMove"
  >
    <div ref="map" :class="$style.root">
      <div :class="$style.overlayIcon">
        <finger-icon />
      </div>
      <buildings />
      <points />
      <map-title
        v-for="mp in mapTitles"
        :key="mp.key || mp.content"
        :class="mp.className"
      >
        <template v-if="mp.href && mp.linkTitle">
          {{ mp.content }}
          <a :href="mp.href" target="_blank">{{ mp.linkTitle }}</a>
        </template>
        <template v-else-if="mp.href && !(mp.linkTitle)">
          <a :href="mp.href" target="_blank">{{ mp.content }}</a>
        </template>
        <template v-else>
          {{ mp.content }}
        </template>
      </map-title>
      <img :class="$style.img" src="./general_plan.jpg" alt="Генеральный план">
      <app-button
        type="button"
        text="О парке в пойме"
        link="technopark.pdf"
        download
      />
    </div>
    <overlay-tutorial
      v-show="tutorial"
      ref="overlay"
      @mousedown.native="onHideTutorial"
      @touchstart.native="onHideTutorial"
    />
  </section>
</template>

<script>
import Points from './Points/Points'
import MapTitle from './MapTitle'
import Buildings from './Buildings'
import OverlayTutorial from './OverlayTutorial'
import FingerIcon from '~/assets/img/finger.svg'
import AppButton from '~/components/Base/AppButton'

export default {
  name: 'GeneralPlan',
  components: {
    Points,
    MapTitle,
    OverlayTutorial,
    FingerIcon,
    AppButton,
    Buildings
  },
  data () {
    return {
      tutorial: false,
      overflowed: false,
      dragged: false,
      prevX: 0,
      mapTitles: [
        {
          className: this.$style.titleBuilding1,
          content: 'Корпус №1',
          href: 'https://smart-catalog.profitbase.ru/catalog/house/31624/smallGrid?accountId=4632&referrer=http:%2F%2Fperesvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'
        },
        {
          className: this.$style.titleBuilding2,
          content: 'Корпус №2',
          href: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http:%2F%2Fperesvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'
        },
        {
          key: 'Въезд в подземный паркинг 1',
          className: this.$style.titleParking1,
          content: 'Въезд в подземный паркинг',
          href: 'https://smart-catalog.profitbase.ru/catalog/house/33879/bigGrid?accountId=4632&referrer=http:%2F%2Fperesvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'
        },
        {
          key: 'Въезд в подземный паркинг 2',
          className: this.$style.titleParking2,
          content: 'Въезд в подземный паркинг',
          href: 'https://smart-catalog.profitbase.ru/catalog/house/33879/bigGrid?accountId=4632&referrer=http:%2F%2Fperesvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'
        },
        {
          key: 'Въезд в подземный паркинг 3',
          className: this.$style.titleParking3,
          content: 'Въезд в подземный паркинг',
          href: 'https://smart-catalog.profitbase.ru/catalog/house/33879/bigGrid?accountId=4632&referrer=http:%2F%2Fperesvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true'
        },
        {
          className: this.$style.titleBuilding5,
          content: 'Корпус №5'
        },
        {
          className: this.$style.titleBuilding6,
          content: 'Корпус №6'
        },
        {
          className: this.$style.titleBuilding7,
          content: 'Корпус №7'
        },
        {
          className: this.$style.titleBuilding8,
          content: 'Корпус №8'
        },
        {
          className: this.$style.titleCommerce,
          content: 'Коммерческий корпус'
        },
        {
          className: this.$style.titleStreet,
          content: 'Профсоюзная, 20'
        }
      ]
    }
  },
  mounted () {
    this.overflowed = Boolean(
      this.$el &&
      this.$refs.map &&
      this.$el.offsetWidth < this.$refs.map.offsetWidth
    )
    this.tutorial = this.overflowed
    if (this.overflowed) {
      this.tooltipTrigger = 'hover focus click'
    }
    this.positionGenPlan()
  },
  methods: {
    onHideTutorial (e) {
      if (e.type.toLowerCase() === 'mousedown') {
        e.stopPropagation()
      }
      this.tutorial = false
    },
    onStartMouseDrag (e) {
      if (!this.overflowed) {
        return
      }
      this.dragged = true
    },
    onMouseMove (e) {
      if (!this.overflowed || !this.dragged) {
        return
      }
      this.$el.scrollBy(e.movementX, e.movementY)
    },
    onStopMouseDrag () {
      if (!this.overflowed) {
        return
      }
      this.dragged = false
    },
    onOutMouseDrag (e) {
      if (!this.$el.contains(e.relatedTarget)) {
        this.onStopMouseDrag()
      }
    },
    onTouchStart (e) {
      if (!this.overflowed) {
        return
      }
      if (e.changedTouches.length && e.changedTouches[0]) {
        this.prevX = e.changedTouches[0].clientX
      }
    },
    onTouchMove (e) {
      if (!this.overflowed) {
        return
      }
      const ev = e.changedTouches.length && e.changedTouches[0]
      if (!ev) {
        return
      }
      const movementX = this.prevX - ev.clientX
      this.prevX = ev.clientX
      this.$el.scrollBy(movementX, 0)
    },
    onTouchEnd (e) {
      if (!this.overflowed) {
        return
      }
      if (e.changedTouches.length && e.changedTouches[0]) {
        this.prevX = e.changedTouches[0].clientX
      }
    },
    positionGenPlan () {
      if (!this.overflowed || !this.$el || !this.$refs.map) {
        return
      }
      const overflowedWidth = (
        Math.abs(this.$el.offsetWidth - this.$refs.map.offsetWidth) / 2
      )
      const nextX = overflowedWidth / 2
      this.$el.scrollBy(nextX, 0)
      if (this.$refs.overlay) {
        this.$refs.overlay.$el.style.transform = (
          `translate(${this.$el.scrollLeft}px, 0px)`
        )
      }
    },
    renderBuildingProf () {
      return `
      <div class="tooltip">
        Профсоюзная, 20
      </div>
      `
    },
    renderBuildingCommerce () {
      return `
      <div class="tooltip">
        Коммерческий корпус
      </div>
      `
    },
    renderBuilding1 () {
      return `
      <div class="tooltip">
        Корпус №1
      </div>
      `
    },
    renderBuilding2 () {
      return `
      <div class="tooltip">
        Корпус №2
      </div>
      `
    },
    renderBuilding5 () {
      return `
      <div class="tooltip">
        Корпус №5
      </div>
      `
    },
    renderBuilding6 () {
      return `
      <div class="tooltip">
        Корпус №6
      </div>
      `
    },
    renderBuilding7 () {
      return `
      <div class="tooltip">
        Корпус №7
      </div>
      `
    },
    renderBuilding8 () {
      return `
      <div class="tooltip">
        Корпус №8
      </div>
      `
    }
  }
}
</script>

<style lang="scss">
#generalPlan {
  position: relative;
  overflow: hidden;
  min-height: auto;
  .app-button {
    position: absolute;
    top: 40px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    max-width: 160px;
    padding: 6px 20px;
    background-color: $accent;
    font-size: 12px;
    line-height: 20px;
    &:hover {
      border: 1px solid $accent;
      background-color: $accent;
    }
  }
}

.root_2xImq a {
  color: $accent;
  text-decoration: underline;
}
</style>

<style lang="scss" module>
.wrapper {
  min-height: auto;
  @include sm {
    overflow: hidden;
    width: 100%;
    height: 1024px;
    margin: 0 auto;
    position: relative;
  }
  @include sm- {
    overflow: hidden;
    width: 100%;
    height: 480px;
    margin: 0 auto;
    position: relative;
  }
}
.overlayIcon {
  position: absolute;
  top: 32px;
  left: 80vw;
  display: none;
  @include sm-l- {
    display: inline-block;
  }
}
.root {
  width: 100%;
  user-select: none;
  position: relative;
  line-height: 0;
  @include sm {
    position: absolute;
    width: 1821px;
    height: 1024px;
  }
  @include sm- {
    position: absolute;
    width: 858px;
    height: 480px;
  }
}
.img {
  max-width: 100%;
  height: auto;
  width: 100%;
}

$mapWidth: 853px;
$mapHeight: 480px;

@mixin mapTitle {
  position: absolute;
  top: 0;
  left: 0;
}
.titleCommerce {
  @include mapTitle;
  top: (222px / $mapHeight) * 100%;
  left: (101px / $mapWidth) * 100%;
}
.titleStreet {
  @include mapTitle;
  top: (148px / $mapHeight) * 100%;
  left: (126px / $mapWidth) * 100%;
}
.titleBuilding1 {
  @include mapTitle;
  top: (274px / $mapHeight) * 100%;
  left: (241px / $mapWidth) * 100%;
}
.titleBuilding2 {
  @include mapTitle;
  top: (71px / $mapHeight) * 100%;
  left: (288.66px / $mapWidth) * 100%;
}
.titleBuilding5 {
  @include mapTitle;
  top: (95.55px / $mapHeight) * 100%;
  left: (516px / $mapWidth) * 100%;
}
.titleBuilding6 {
  @include mapTitle;
  top: (51.84px / $mapHeight) * 100%;
  left: (409.2px / $mapWidth) * 100%;
}
.titleBuilding7 {
  @include mapTitle;
  top: (240.43px / $mapHeight) * 100%;
  left: (363.73px / $mapWidth) * 100%;
}
.titleBuilding8 {
  @include mapTitle;
  top: (284.16px / $mapHeight) * 100%;
  left: (578.75px / $mapWidth) * 100%;
}
.titleBuilding9 {
  @include mapTitle;
  top: (290.16px / $mapHeight) * 100%;
  left: (49.75px / $mapWidth) * 100%;
}
.titleBuilding10 {
  @include mapTitle;
  top: (373.16px / $mapHeight) * 100%;
  left: (548.75px / $mapWidth) * 100%;
}
.titleGallery {
  @include mapTitle;
  top: (370.16px / $mapHeight) * 100%;
  left: (435.11px / $mapWidth) * 100%;
}
.titleCafe {
  @include mapTitle;
  top: (378.16px / $mapHeight) * 100%;
  left: (342.11px / $mapWidth) * 100%;
}
.titleCinema {
  @include mapTitle;
  top: (220.16px / $mapHeight) * 100%;
  left: (439.81px / $mapWidth) * 100%;
}
.titleParking1 {
  display: none;
  @include mapTitle;
  top: (119.16px / $mapHeight) * 100%;
  left: (261.75px / $mapWidth) * 100%;
}
.titleParking2 {
  display: none;
  @include mapTitle;
  top: (139.16px / $mapHeight) * 100%;
  left: (381.75px / $mapWidth) * 100%;
}
.titleParking3 {
  display: none;
  @include mapTitle;
  top: (338.16px / $mapHeight) * 100%;
  left: (276.75px / $mapWidth) * 100%;
}
.titleParking4 {
  @include mapTitle;
  top: (165.16px / $mapHeight) * 100%;
  left: (90.75px / $mapWidth) * 100%;
}
</style>
