<template>
  <section id="urbanism" class="urbanism">
    <h2 class="urbanism__header">
      10 принципов <br>нового урбанизма
    </h2>
    <div class="app-slider__nav-mobile">
      <arr-left @click="onPrev" />
      <h3 class="app-slider__slide-header">
        <span class="app-slider__slide-num">{{ slideNum + 1 }}</span>{{ slides[slideNum].header }}
      </h3>
      <div class="app-slider__nav-numbers">
        <div
          v-for="(slide, idx) in slides"
          :key="slide + idx"
          :class="['app-slider__nav-item--mobile', slideNum === idx && 'active']"
          @click="onSlideTo(idx)"
        >
          {{ idx + 1 }}
        </div>
      </div>
      <arr-right @click="onNext" />
    </div>
    <div class="app-slider">
      <div class="app-slider__inner">
        <div class="app-slider__controls">
          <span class="app-slider__controls__num">{{ slideNum + 1 }}</span>
          <div class="app-slider__controls__arr">
            <button type="button" @click="onNext">
              <arr-right />
            </button>
            <button type="button" @click="onPrev">
              <arr-left />
            </button>
          </div>
        </div>
        <div class="app-slider__slider">
          <VueSlickCarousel
            ref="slider"
            :dots="false"
            :arrows="false"
            :fade="true"
            :swipe="true"
            @beforeChange="onBeforeChange"
          >
            <div
              v-for="slide in slides"
              :key="slide.header"
              class="app-slider__content"
            >
              <div class="app-slider__slide">
                <h3 class="app-slider__slide-header">
                  <span class="app-slider__slide-num">{{ slideNum + 1 }}</span>{{ slide.header }}
                </h3>
                <p class="app-slider__slide-text" v-html="slide.content" />
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="app-slider__nav">
        <div
          v-for="(slide, idx) in slides"
          :key="slide + idx"
          :class="['app-slider__nav-item', slideNum === idx && 'active']"
          @click="onSlideTo(idx)"
        >
          {{ slide.header }}
        </div>
      </div>
    </div>
    <div class="urbanism__name">
      <span class="urbanism__name-tag">
        Ле&nbsp;Корбюзье&nbsp;&mdash; архитектор, основатель современного урбанизма.
      </span>
      <span aria-hidden="true" class="urbanism__name-icon">
        <UrbanismName />
      </span>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import ArrLeft from '~/assets/img/ar2-l.svg'
import ArrRight from '~/assets/img/ar2-r.svg'
import UrbanismName from '~/assets/img/urbanism-name.svg'

export default {
  name: 'UrbanismSection',
  components: {
    ArrLeft,
    ArrRight,
    VueSlickCarousel,
    UrbanismName
  },
  data () {
    return {
      slideNum: 0,
      slides: [
        {
          header: 'Пешеходная доступность',
          content: 'Большинство объектов социальной и&nbsp;транспортной инфраструктуры находятся в&nbsp;пределах 10-минутной ходьбы от&nbsp;URBN. Прилегающие улицы дружественны для пешеходов, на&nbsp;них выходят витрины и&nbsp;подъезды домов, расположенных по&nbsp;периметру комплекса, вдоль улиц высажены деревья.'
        },
        {
          header: 'Соединенность',
          content: 'Сеть существующих взаимосвязанных улиц обеспечивает перераспределение транспорта, облегчает передвижение пешком и&nbsp;обеспечивает доступ к&nbsp;комплексу с&nbsp;разных сторон.'
        },
        {
          header: 'Смешанное использование',
          content: 'Комплекс многофункционален за&nbsp;счет размещения в&nbsp;нем разнообразных единиц: квартир, апартаментов, офисов, магазинов и&nbsp;коммерческих помещений для сервисов и&nbsp;услуг, что позволяет жить, работать, отдыхать в&nbsp;одном месте, а&nbsp;так&nbsp;же повышает эффективность использования городского пространства.'
        },
        {
          header: 'Разнообразная застройка',
          content: 'Застройка URBN включает жилые дома и&nbsp;различные объекты для обслуживания. Дома отличаются набором квартир и&nbsp;планировками на&nbsp;любой вкус, есть уникальные планировочные решения с&nbsp;террасами, с&nbsp;мастер-спальней, с&nbsp;кладовыми, гардеробными, с&nbsp;окном в&nbsp;санузле, с&nbsp;окнами в&nbsp;рабочей зоне кухни или с&nbsp;двумя летними помещениями.'
        },
        {
          header: 'Качество архитектуры и городского планирования',
          content: 'При разработке архитектурного облика делался акцент на&nbsp;красоту, эстетику, современность и&nbsp;технологичность фасадов, на&nbsp;разнообразие применяемых материалов и&nbsp;функциональность. Фасады вентилируемые, самоочищающиеся, в домах предусмотрены сквозные подъезды, уровень входа в&nbsp;подъезды с&nbsp;уровня земли, входные группы светопрозрачны. Многоуровневое благоустройство в&nbsp;первую очередь отвечает комфортности среды и&nbsp;разнообразию видов досуга.'
        },
        {
          header: 'Традиционная структура соседства',
          content: 'URBN&nbsp;&mdash; застройка соответствующая центру города с&nbsp;близостью к&nbsp;важным инфраструктурным объектам и&nbsp;качественным общественным пространствам, являющимися точками притяжения общегородского значения в&nbsp;отличие от&nbsp;периферии.'
        },
        {
          header: 'Высокая плотность',
          content: 'Здания, жилые дома, магазины и&nbsp;учреждения обслуживания располагаются ближе друг к&nbsp;другу для облегчения пешеходной доступности, более эффективного использования ресурсов и&nbsp;услуг и&nbsp;создания более удобной и&nbsp;приятной для жизни среды. Благодаря высотной и&nbsp;плотной застройке, остается максимум свободного пространства для благоустройства.'
        },
        {
          header: 'Зелёный транспорт',
          content: 'Внутренний двор с&nbsp;вело&nbsp;&mdash; и&nbsp;пешеходными дорожками, закрытый от&nbsp;автомобильного транспорта и&nbsp;&laquo;подключение&raquo; URBN к&nbsp;пойме&nbsp;р. Царица располагает к&nbsp;ежедневным пешим прогулкам, поездкам на&nbsp;велосипеде, самокате или роликовых коньках.'
        },
        {
          header: 'Устойчивое развитие',
          content: 'Проект реализуется с&nbsp;минимальным воздействием на&nbsp;окружающую среду и&nbsp;с&nbsp;применением экологически чистых технологий. Комплекс энергоэффективен и&nbsp;экологичен за&nbsp;счет вентилируемого фасада, специального покрытия оконного остекления, использования возобновляемых источников энергии (солнечные панели) и&nbsp;раздельного сбора мусора.'
        },
        {
          header: 'Качество жизни',
          content: 'Совокупность вышеперечисленных принципов с&nbsp;удобными и&nbsp;современными сервисами для обслуживания комплекса обеспечивает высокое качество жизни и&nbsp;позволяет создавать &laquo;места силы&raquo;, которые отвечают принципам гуманизма и&nbsp;добрососедства.'
        }
      ]
    }
  },
  computed: {
    getTitle () {
      return this.slides.forEach((element) => {
        return element
      })
    }
  },
  methods: {
    onBeforeChange (_prevIndex, nextIndex) {
      this.slideNum = nextIndex
    },
    onNext () {
      this.$refs.slider.next()
    },
    onPrev () {
      this.$refs.slider.prev()
    },
    onSlideTo (slideIdx) {
      this.$refs.slider.goTo(slideIdx)
    }
  }
}
</script>

<style lang="scss" scoped>
.urbanism {
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
  padding-left: 270px;
  background-image: url("~assets/img/urbanism.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  min-height: auto;
  &:before {
    content: '';
    background: linear-gradient(90deg, #202020 22.99%, rgba(12, 12, 12, 0.17) 45.69%, rgba(0, 0, 0, 0) 58.67%);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  @include xl {
    padding-top: 400px;
    padding-left: 540px;
  }
  @include md {
    padding-top: 107px;
    padding-left: 141px;
  }
  @include sm-l {
    padding-top: 128px;
    padding-left: 28px;
    background-position: 80% 0;
  }
  @include sm {
    background-image: url("~assets/img/urbanism-sm.jpg");
    padding-top: 115px;
    padding-left: 85px;
  }
  @include xs {
    background-image: url("~assets/img/urbanism-sm.jpg");
    padding: 59px 20px 63px;
    &:before {
      background: linear-gradient(159.58deg, #202020 29.34%, rgba(0, 0, 0, 0) 56.68%);
    }
  }
  @include tablet-md- {
    min-height: 100vh;
    background-image: url("~assets/img/urbanism-landscape.jpg");
    padding: 15px 0 32px 16px;
    background-size: cover;
    &:before {
      background: linear-gradient(159.58deg, #202020 29.34%, rgba(0, 0, 0, 0) 56.68%);
    }
  }

  &__header {
    font-weight: 600;
    font-size: 44px;
    line-height: 54px;
    color: #fff;
    margin-bottom: 40px;
    z-index: 2;
    @include xl {
      font-size: 88.0029px;
      line-height: 108px;
      margin-bottom: 80px;
    }
    @include lg- {
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 78px;
    }
    @include xs {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 21px;
    }
  }
  &__name {
    position: absolute;
    bottom: 153px;
    right: 28px;
    z-index: 90;
    @include sm-l {
      bottom: 61px;
      right: 55px;
    }
    @include sm {
      bottom: 59px;
      right: auto;
      left: 85px;
    }
    @include xs {
      left: auto;
      right: 6px;
      bottom: 14px;
    }
  }
  &__name-tag {
    display: block;
    max-width: 274px;
    margin-left: auto;
    margin-bottom: 7px;
    font-family: $base-font;
    font-size: 13px;
    line-height: 24px;
    color: #fff;
    @include xl {
      max-width: 607px;
      margin-bottom: 14px;
      font-size: 29px;
      line-height: 53px;
    }
    @include md {
      margin-bottom: 11px;
    }
    @include sm {
      margin-left: 0;
      margin-right: auto;
      margin-bottom: 7px;
    }
    @include xs {
      display: none;
    }
  }
  &__name-icon {
    display: inline-block;
    width: 345px;
    height: 58px;
    @include xl {
      width: 768px;
      height: 129px;
      svg {
        width: 768px;
        height: 129px;
      }
    }
    @include xs {
      width: 221px;
      height: 37px;
      svg {
        width: 221px;
        height: 37px;
      }
    }
    @include tablet-md- {
      width: 142.71px;
      height: 24.01px;
      svg {
        width: 142.71px;
        height: 24.01px;
      }
    }
  }
}

.app-slider {
  position: relative;
  z-index: 2;
  &__nav {
    &-mobile {
      position: relative;
      z-index: 2;
      display: none;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      @include xs {
        display: flex;
      }
      @include tablet-md- {
        max-width: 288px;
      }
      .app-slider__slide-header {
        display: none;
        @include tablet-md- {
          width: max-content;
          max-width: 193px;
          margin-bottom: 0;
          display: inline-flex;
          align-self: center;
          justify-self: center;
          font-size: 12px;
          line-height: 18px;
          color: #fff;
          span {
            font-size: 24px;
            line-height: 16.68px;
            font-weight: 200;
            margin-right: 6px;
          }
        }
      }
      /deep/ svg {
        color: #FFFFFF;
        transition: color 0.2s ease;
        width: 24px;
        height: 24px;
        &:hover:not(:focus) {
          color: $accent;
        }
      }
    }

    &-numbers {
      display: flex;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      color: #E4A264;
      gap: 13px;
      @include tablet-md- {
        display: none;
      }
    }

    &-item {
      &--mobile {
        &.active {
          color: $accent;
          font-weight: 600;
        }
      }
    }
  }

  &__inner {
    max-width: 708px;
    width: 100%;
    display: flex;
    gap: 60px;
    margin-bottom: 58px;
    @include xl {
      max-width: 1236px;
      margin-bottom: 116px;
      gap: 120px;
    }
    @include lg- {
      max-width: 587px;
    }
    @include sm {
      max-width: 435px;
      gap: 37px;
    }
    @include tablet-md- {
      margin: 0;
    }
  }

  &__controls {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    min-width: 41px;
    @include xs {
      display: none;
    }

    &__num {
      font-weight: 200;
      font-size: 54px;
      line-height: 28px;
      color: $accent;
      margin-bottom: 40px;
      display: flex;
      @include xl {
        font-size: 108px;
        line-height: 58px;
      }
      @include lg- {
        font-size: 40px;
      }
    }

    &__arr {
      display: flex;
      flex-direction: column;
      gap: 14px;
      color: #FFFFFF;
      transition: color 0.2s ease;
      @include xl {
        gap: 28px;
      }
      @include lg- {
        gap: 14px;
      }
      & button {
        padding: 0;
        border: 0;
        background-color: transparent;
        color: #ffffff;
        transition: color 0.2s ease;
        line-height: 0;
        cursor: pointer;
        &:hover {
          color: $accent;
        }

        /deep/ svg {
          @include xl {
            width: 78px;
            height: 78px;
          }
          @include lg- {
            width: 39px;
            height: 39px;
          }
          @include xs {
            display: none;
          }
        }
      }
    }
  }

  &__slider {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    @include xl {
      max-width: 1036px;
    }
    @include lg- {
      max-width: 487px;
    }
    @include sm {
      max-width: 359px;
    }
    @include xs {
      max-width: 100%;
    }
  }

  &__content {
    color: #fff;
    .app-slider__slide-header {
      @include tablet-md- {
        display: none;
      }
    }
  }

  &__slide {
    &-num {
      display: none;
      @include xs {
        display: inline-block;
        font-weight: 200;
        font-size: 24px;
        line-height: 1;
        color: $accent;
        margin-right: 21px;
      }
    }

    &-header {
      font-weight: 600;
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 15px;
      @include xl {
        font-size: 44.0014px;
        line-height: 64px;
        margin-bottom: 28px;
      }
      @include lg- {
        font-size: 16px;
        margin-bottom: 37px;
      }
      @include sm-l {
        line-height: 28px;
      }
      @include sm {
        line-height: 26px;
      }
      @include xs {
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 24px;
      }
    }

    &-text {
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      @include xl {
        font-size: 36.0012px;
        line-height: 60px;
      }
      @include lg- {
        font-size: 14px;
        line-height: 24px;
      }
      @include xs {
        font-size: 12px;
        line-height: 20px;
        max-width: 218px;
      }
      @include tablet-md- {
        max-width: 335px;
      }
    }
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    max-width: 792px;
    gap: 0 20px;
    @include xl {
      max-width: 1584px;
    }
    @include sm {
      max-width: 435px;
    }
    @include xs {
      display: none;
    }

    &-item {
      font-weight: 500;
      font-size: 14px;
      line-height: 32px;
      color: #D9D9D9;
      cursor: pointer;
      transition: all 0.2s linear;
      position: relative;
      @include xl {
        font-weight: 500;
        font-size: 28.0009px;
        line-height: 64px;
      }
      @include lg- {
        font-weight: 500;
        font-size: 10px;
        line-height: 24px;
      }

      &:hover {
        color: $accent;
      }

      &:after {
        content: '';
        display: block;
        width: 1px;
        height: 15px;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
        background-color: #ccc;
        position: absolute;
      }

      &.active {
        color: $accent;
      }
    }
  }
}
</style>
