<template>
  <div id="placing" class="yamap">
    <yandex-map
      v-if="isMounted"
      class="map"
      :coords="mobile ? coordsMobile : coordsDesktop"
      :settings="settings"
      :controls="controls"
      :behaviors="behaviors"
      :options="mapOptions"
      :zoom="mobile ? 16 : 17"
      @map-was-initialized="onInitPoints"
      @sizechange="onInitPoints"
    >
      <ymap-marker
        v-for="p in points.filter(filterPoints)"
        :key="p.id"
        :marker-id="p.id"
        :hint-content="p.name"
        :coords="p.coords"
        :icon="p.iconMarker"
        :options="p.options"
        marker-type="placemark"
      >
        <balloon-template
          v-if="p.balloonItems"
          slot="balloon"
          :items="p.balloonItems"
          :type="p.type"
        />
      </ymap-marker>
    </yandex-map>
    <h2 class="yamap__title">
      Расположение
    </h2>
    <MovingIndicatorIcon class="yamap__moving-indicator" />
    <div
      ref="el"
      class="yamap__filtersWrapper"
      @mousedown="onStartMouseDrag"
      @mouseup="onStopMouseDrag"
      @mouseout="onOutMouseDrag"
      @mousemove.passive="onMouseMove"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
      @touchmove.passive="onTouchMove"
    >
      <div class="yamap__filters">
        <MapFilter
          v-for="fltr in filters"
          :key="fltr.type"
          :theme="fltr.type"
          :active="fltr.type === filter"
          @click.native="onSelectFilter(fltr)"
        >
          {{ fltr.content }}
        </MapFilter>
      </div>
    </div>
  </div>
</template>

<script>
import MapFilter from './Filter'
import getPoints from './points'
import BalloonTemplate from './BalloonTemplate'
import MovingIndicatorIcon from '~/assets/img/map/moving_indicator.svg'

export default {
  name: 'Map',
  components: {
    MovingIndicatorIcon,
    MapFilter,
    BalloonTemplate
  },
  data () {
    const behaviors = ['dblClickZoom', 'multiTouch']
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches) {
      behaviors.push('drag')
    }
    return {
      isMounted: false,
      overflowed: false,
      dragged: false,
      prevX: 0,
      mobile: false,
      settings: {
        apiKey: process.env.yaMapKey,
        lang: 'ru_RU',
        version: '2.1',
        debug: process.env.NODE_ENV === 'development'
      },
      mapOptions: {
        suppressMapOpenBlock: true
      },
      // https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/map.behavior.Manager.html#map.behavior.Manager__param-behaviors
      behaviors,
      // https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/control.Manager.html#method_detail__add-param-control
      controls: [
        'zoomControl'
      ],
      coordsDesktop: [48.700419, 44.496719],
      // coordsMobile: [48.699634, 44.496493],
      coordsMobile: [48.70005, 44.496493],
      points: [],
      filter: 'all',
      filters: [
        {
          type: 'all',
          content: 'Все'
        },
        {
          type: 'school',
          content: 'Школы'
        },
        {
          type: 'kindergarten',
          content: 'Детские сады'
        },
        {
          type: 'medicine',
          content: 'Здоровье'
        },
        {
          type: 'fitness',
          content: 'Фитнес'
        },
        {
          type: 'shop',
          content: 'Магазины'
        }
      ]
    }
  },
  mounted () {
    this.isMounted = true
    this.overflowed = Boolean(
      this.$refs.el &&
      this.$refs.el.firstChild &&
      this.$refs.el.offsetWidth < this.$refs.el.firstChild.offsetWidth
    )
  },
  beforeMount () {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.mobile = true
    }
  },
  methods: {
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
      this.$refs.el.scrollBy(e.movementX, e.movementY)
    },
    onStopMouseDrag () {
      if (!this.overflowed) {
        return
      }
      this.dragged = false
    },
    onOutMouseDrag (e) {
      if (!this.$refs.el.contains(e.relatedTarget)) {
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
      this.$refs.el.scrollBy(movementX, 0)
    },
    onTouchEnd (e) {
      if (!this.overflowed) {
        return
      }
      if (e.changedTouches.length && e.changedTouches[0]) {
        this.prevX = e.changedTouches[0].clientX
      }
    },
    onSelectFilter (filter) {
      this.filter = filter.type
    },
    onInitPoints () {
      this.points = getPoints(this.$breakpoints)
    },
    filterPoints (p) {
      if (p.type === 'urbn') {
        return true
      }
      return p.type === this.filter || this.filter === 'all'
    }
  }
}
</script>

<style lang="scss" scoped>
.yamap {
  height: 480px;
  position: relative;
  min-height: 100vh;
  @include sm {
    height: 1024px;
  }
  @include sm-l {
    height: 768px;
  }
  @include md {
    height: 768px;
  }
  @include xl {
    height: 1080px;
  }
  @include xl {
    height: 2160px;
  }
  @include tablet-md- {
    height: 100vh;
  }
}

.map {
  /* оверрайд глобального section */
  display: block;
  min-height: 200px;
  height: 100%;
}
.yamap__title {
  font-family: $base-font;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;
  position: absolute;
  top: 149px;
  left: 199px;
  color: #000000;
  @include xl {
    font-size: 88px;
    line-height: 108px;
    top: 298px;
    left: 399px;
  }
  @include lg- {
    font-size: 32px;
    line-height: 39px;
  }
  @include md {
    top: 51px;
    left: 124px;
  }
  @include sm {
    font-size: 32px;
    line-height: 63.95px;
    top: 64px;
    left: 60px;
  }
  @include sm-l {
    font-size: 32px;
    line-height: 39px;
    top: 64px;
    left: 60px;
  }
  @include xs {
    font-size: 20px;
    line-height: 24px;
    top: 30px;
    left: 47px;
  }
}
.yamap__moving-indicator {
  position: absolute;
  top: 22px;
  right: 24px;
  width: 29px;
  height: 41px;
  color: #000000;
  @include sm {
    top: 22px;
    right: 24px;
  }
  @include sm-l {
    display: none;
  }
  @include md {
    display: none;
  }
  @include xl {
    display: none;
  }
  @include xl {
    display: none;
  }
}
.yamap__filtersWrapper {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 37px;
  bottom: 16px;
  left: 0;
  @include sm {
    height: 54px;
    bottom: 45px;
  }
  @include sm-l {
    height: 36px;
    bottom: 30px;
  }
  @include md {
    height: 36px;
    bottom: 36px;
  }
  @include xl {
    height: 100px;
    bottom: 50px;
  }
}
.yamap__filters {
  position: absolute;
  bottom: 0;
  left: 25px;
  display: flex;
  flex-wrap: nowrap;
  & > * + * {
    flex-shrink: 0;
    margin-left: 6px;
    @include sm {
      margin-left: 13px;
    }
    @include sm-l {
      margin-left: 8px;
    }
    @include md {
      margin-left: 8px;
    }
    @include xl {
      margin-left: 22px;
    }
  }
  @include sm {
    left: 8px;
  }
  @include sm-l {
    left: 25px;
  }
  @include md {
    left: 142px;
  }
  @include xl {
    left: 200px;
  }
  @include xl {
    left: 400px;
  }
}

</style>
