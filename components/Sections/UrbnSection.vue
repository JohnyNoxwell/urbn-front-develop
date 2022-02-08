<template>
  <section id="aboutProject" ref="aboutProject" class="urbn-section">
    <div class="letters">
      <div class="letters-item letters-item--u" :class="{active: letter === 'u'}" @click="letter = 'u'">
        <u-letter />
        <div class="letters-item__description  active">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              UNIQUE
            </span>
            <p class="letters-item__description-text">
              Первый проект в&nbsp;Волгограде, объединивший в&nbsp;себе масштабность, уникальную локацию, технологичную архитектуру и&nbsp;многоуровневое благоустройство.
            </p>
          </div>
        </div>
      </div>
      <div class="letters-item letters-item--r" :class="{active: letter === 'r'}" @click="letter = 'r'">
        <r-letter />
        <div class="letters-item__description  active">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              RE: BOOT
            </span>
            <p class="letters-item__description-text">
              Перезагрузка исторической части города, создающая новый городской кластер в&nbsp;непосредственной близости к&nbsp;деловому центру.
            </p>
          </div>
        </div>
      </div>
      <div class="letters-item letters-item--b" :class="{active: letter === 'b'}" @click="letter = 'b'">
        <b-letter />
        <div class="letters-item__description  active">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              BALANCE
            </span>
            <p class="letters-item__description-text">
              Баланс во&nbsp;всех аспектах проекта: продуманное благоустройство снаружи и&nbsp;внутри комплекса, функциональный подход к&nbsp;разработке планировочных решений и&nbsp;удобный сервис.
            </p>
          </div>
        </div>
      </div>
      <div class="letters-item letters-item--n" :class="{active: letter === 'n'}" @click="letter = 'n'">
        <n-letter />
        <div class="letters-item__description  active">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              NATURE
            </span>
            <p class="letters-item__description-text">
              Концепция &laquo;зеленого закрытого от&nbsp;автомобилей двора&raquo; на&nbsp;территории комплекса и&nbsp;непосредственная связь с&nbsp;будущим природным парком в&nbsp;пойме реки Царицы.
            </p>
          </div>
        </div>
      </div>
      <button class="arrows arrows-left" :disabled="letter === 'u'" @click="letter = letterMap[letter].prev">
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 19.6C.5 9.166 9.004.703 19.5.703s19 8.463 19 18.899c0 10.435-8.504 18.899-19 18.899S.5 30.036.5 19.6z" stroke="currentColor" /><path d="M12.41 18.895a.5.5 0 000 .707l3.182 3.182a.5.5 0 00.707-.707l-2.829-2.829L16.3 16.42a.5.5 0 10-.707-.708l-3.182 3.183zm13.826-.147H12.763v1h13.473v-1z" fill="currentColor" /></svg>
      </button>
      <button class="arrows arrows-right" :disabled="letter === 'n'" @click="letter = letterMap[letter].next">
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 19.4c0 10.434-8.504 18.898-19 18.898S.5 29.834.5 19.4 9.004.5 19.5.5s19 8.464 19 18.9z" stroke="currentColor" /><path d="M26.59 20.105a.5.5 0 000-.707l-3.182-3.182a.5.5 0 00-.707.707l2.828 2.829-2.828 2.828a.5.5 0 10.707.708l3.182-3.183zm-13.826.147h13.472v-1H12.764v1z" fill="currentColor" /></svg>
      </button>
    </div>

    <div class="letters-description__holder">
      <transition name="fade" mode="out-in">
        <div v-if="letter === 'u'" class="letters-item__description--tablet">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              UNIQUE
            </span>
            <p class="letters-item__description-text">
              Первый проект в&nbsp;Волгограде, объединивший в&nbsp;себе масштабность, уникальную локацию, технологичную архитектуру и&nbsp;многоуровневое благоустройство.
            </p>
          </div>
        </div>
        <div v-else-if="letter === 'r'" class="letters-item__description--tablet">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              RE: BOOT
            </span>
            <p class="letters-item__description-text">
              Перезагрузка исторической части города, создающая новый городской кластер в&nbsp;непосредственной близости к&nbsp;деловому центру.
            </p>
          </div>
        </div>
        <div v-else-if="letter === 'b'" class="letters-item__description--tablet">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              BALANCE
            </span>
            <p class="letters-item__description-text">
              Баланс во&nbsp;всех аспектах проекта: продуманное благоустройство снаружи и&nbsp;внутри комплекса, функциональный подход к&nbsp;разработке планировочных решений и&nbsp;удобный сервис.
            </p>
          </div>
        </div>
        <div v-else-if="letter === 'n'" class="letters-item__description--tablet">
          <div class="letters-item__description-inner">
            <span class="letters-item__description-header">
              NATURE
            </span>
            <p class="letters-item__description-text">
              Концепция &laquo;зеленого закрытого от&nbsp;автомобилей двора&raquo; на&nbsp;территории комплекса и&nbsp;непосредственная связь с&nbsp;будущим природным парком в&nbsp;пойме реки Царицы.
            </p>
          </div>
        </div>
      </transition>
    </div>
    <p class="urbn-section__description">
      URBN — первый проект в Волгограде, воплощающий в себе все <br>10 принципов Нового Урбанизма.
      <span class="arrow-down-icon">
        <arrow-down-icon />
      </span>
    </p>

    <scroll-down-icon class="scroll-down-icon" />
  </section>
</template>

<script>
import uLetter from '~/assets/img/letters/u-letter.svg'
import rLetter from '~/assets/img/letters/r-letter.svg'
import bLetter from '~/assets/img/letters/b-letter.svg'
import nLetter from '~/assets/img/letters/n-letter.svg'
import ScrollDownIcon from '~/assets/img/scroll-down.svg'
import ArrowDownIcon from '~/assets/img/arr-down.svg'

export default {
  name: 'UrbnSection',
  components: {
    uLetter,
    rLetter,
    bLetter,
    nLetter,
    ScrollDownIcon,
    ArrowDownIcon
  },
  data () {
    return {
      letter: 'u',
      letterMap: {
        u: {
          prev: 'u',
          next: 'r'
        },
        r: {
          next: 'b',
          prev: 'u'
        },
        b: {
          next: 'n',
          prev: 'r'
        },
        n: {
          prev: 'b',
          next: 'n'
        }
      },
      pos: null
    }
  },
  beforeMount () {
    if (window.matchMedia('(max-width: 767px)').matches) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const letterU = document.querySelector('.letters-item--u svg')
      const letterR = document.querySelector('.letters-item--r svg')
      const letterB = document.querySelector('.letters-item--b svg')
      const letterN = document.querySelector('.letters-item--n svg')
      this.pos = window.pageYOffset
      const startPoint = this.$refs.aboutProject.offsetTop
      if (this.pos >= (startPoint - 120)) {
        letterU.style.fill = '#E8B973'
      } else {
        letterU.style.fill = ''
      }
      if (this.pos >= (startPoint + 20)) {
        letterR.style.fill = '#E8B973'
      } else {
        letterR.style.fill = ''
      }
      if (this.pos >= (startPoint + 110)) {
        letterB.style.fill = '#E8B973'
      } else {
        letterB.style.fill = ''
      }
      if (this.pos >= (startPoint + 200)) {
        letterN.style.fill = '#E8B973'
      } else {
        letterN.style.fill = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.urbn-section {
  position: relative;
  background: $dark-gray;
  padding: 255px 0 180px;
  justify-content: center;
  @include xl {
    padding: 510px 0 360px;
  }
  @include lg- {
    padding: 138px 0 61px;
  }
  @include sm {
    padding-top: 250px;
    transition: all 0.2s linear;
  }
  @include xs {
    padding-top: 61px;
    padding-bottom: 28px;
    position: relative;
    z-index: 10;
  }

  &:before {
    @include xs {
      content: '';
      display: block;
      width: 129px;
      height: 233px;
      background: url("~assets/img/letter-backdrop-m.svg?inline") no-repeat center;
      top: 22px;
      left: -22px;
      position: absolute;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    @include xs {
      display: block;
      pointer-events: none !important;
      z-index: 99;
    }
  }

  &__description {
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #fff;
    max-width: 950px;
    margin: 0 auto 35px;
    @include xl {
      font-size: 40px;
      line-height: 75.8px;
      margin: 0 auto 103.87px;
      max-width: 1900px;
    }
    @include lg- {
      font-size: 14px;
      line-height: 27px;
      max-width: 750px;
    }
    @include xs {
      font-weight: normal;
      font-size: 8px;
      line-height: 18px;
      text-transform: uppercase;
      text-align: left;
      max-width: 213px;
      margin: 0 0 0 20px;
      letter-spacing: 0.11em;
      position: relative;
      br {
        display: none;
      }
    }
  }

  .letters {
    position: relative;
    display: flex;
    gap: 46px;
    margin-bottom: 46px;
    margin-right: auto;
    margin-left: auto;
    @include xl {
      margin-bottom: 256.33px;
      gap: 93px;
    }
    @include lg- {
      gap: 33px;
    }
    @include sm {
      gap: 64px;
      margin: 0 auto;
      flex-wrap: wrap;
      width: 100%;
      padding-left: 28px;
      margin-bottom: 76px;
    }
    @include xs {
      flex-direction: column;
      gap: 40.5px;
      margin: 0 0 40px 0;
    }

    &-item {
      display: flex;
      gap: 0;
      position: relative;
      z-index: 2;
      @include xs {
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-left: 19px;
        // pointer-events: none;
        // touch-action: none;
      }
      @include sm {
        width: 44%;
        svg {
          flex-shrink: 0;
          width: 127px;
          height: 270px;
        }
      }

      &:nth-child(1) {
        @include xl {
          svg {
            width: 359px;
            height: 762px;
          }
        }
        @include lg- {
          svg {
            width: 128px;
            height: 270px;
          }
        }
        @include md- {
          svg {
            width: 100px;
          }
        }
        @include sm {
          order: -1;
          .letters-item__description-header {
            left: -50px;
          }
          svg {
            width: 127px;
            height: 270px;
          }
        }
        @include xs {
          svg {
            width: 78px;
            height: 165px;
          }
        }
      }

      &:nth-child(2) {
        @include xl {
          svg {
            width: 336px;
            height: 762px;
          }
        }
        @include lg- {
          svg {
            width: 120px;
            height: 270px;
          }
        }
        @include md- {
          svg {
            width: 94px;
          }
        }
        @include sm {
          order: 2;
          .letters-item__description-inner {
            position: relative;
            bottom: -20px
          }
          .letters-item__description-text {
            margin-left: 10px;
          }
          .letters-item__description-header {
            left: -43px;
          }
          svg {
            width: 119px;
            height: 268px;
          }
        }
        @include xs {
          svg {
            width: 72px;
            height: 163.5px;
          }
        }
      }

      &:nth-child(3) {
        @include xl {
          svg {
            width: 336px;
            height: 762px;
          }
        }
        @include lg- {
          svg {
            width: 120px;
            height: 270px;
          }
        }
        @include md- {
          svg {
            width: 94px;
          }
        }
        @include sm {
          order: 1;
          .letters-item__description-text {
            margin-left: -10px;
          }
          svg {
            width: 119px;
            height: 268px;
          }
        }
        @include xs {
          svg {
            width: 73.5px;
            height: 163.5px;
          }
        }
      }

      &:nth-child(4) {
        .letters-item__description-text {
          @include xs {
            // max-width: 206px;
          }
        }
        @include xl {
          svg {
            width: 382px;
            height: 762px;
          }
        }
        @include lg- {
          svg {
            width: 136px;
            height: 270px;
          }
        }
        @include md- {
          svg {
            width: 100px;
          }
        }
        @include sm {
          order: 3;
          .letters-item__description-inner {
            position: relative;
            bottom: -20px
          }
          .letters-item__description-text {
            max-width: 240px;
            margin-left: -22px;
          }
          .letters-item__description-header {
            left: -78px;
          }
          svg {
            width: 136px;
            height: 268px;
          }
        }
        @include xs {
          svg {
            width: 84px;
            height: 163.5px;
            transform: translateX(9px);
          }
        }
      }

      &:before {
        content: '';
        width: 600px;
        height: 400px;
        position: absolute;
        display: none;
        right: 0;
        top: 0;
        background: url("~assets/img/letters/letter-backdrop.svg?inline") no-repeat center;
        background-size: contain;
        z-index: 0;
        @include lg- {
          width: 489px;
          height: 271px;
          background-size: cover;
        }
        @include xl {
          width: 1200px;
          height: 800px;
        }
        @include sm {
          background: url("~assets/img/letter-backdrop.svg?inline") no-repeat center;
          width: 271px;
          height: 489px;
          right: auto;
          top: 70px;
          left: -30px;
        }
        @include xs {
          display: none;
        }
      }

      &:hover {
        cursor: pointer;
      }
      &.active {
        gap: 69px;
        @include lg- {
          gap: 50px;
        }
        @include xl {
          gap: 120px;
        }
        @include sm {
          gap: 0;
        }
        @include xs {
          gap: 0;
        }

        .letters-item__description {
          opacity: 1;
          width: 262px;
          gap: 69px;
          display: block;
          pointer-events: all;
          @include xl {
            width: 735px;
            gap: 60px;
          }
          &.active {
            width: 367px;
            @include xl {
              width: 735px;
            }
            @include sm-l {
              width: 207px;
            }
          }
        }

        &:before {
          z-index: -1;
          display: block;
          @include sm-l- {
            display: none;
          }
        }

        svg {
          fill: $accent;
          @include sm-l- {
            fill: none;
          }
        }
      }

      &__description {
        color: #fff;
        max-width: 272px;
        width: 0;
        opacity: 0;
        padding-top: 30px;
        transition: opacity 0.2s, width 0.4s;
        pointer-events: none;
        @include xl {
          max-width: 735px;
        }
        @include sm {
          position: relative;
          left: -15px;
          bottom: -10px;
          display: block;
          opacity: 1;
          width: auto;
          max-width: 246px;
        }

        &.active {
          @include xs {
            width: 218px;
            opacity: 1;
            pointer-events: auto;
            padding-top: 5px;
            max-width: 218px !important;
          }
        }

        &--tablet {
          @include sm {
            display: flex;
            justify-content: center;
            max-width: 300px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            padding-bottom: 58px;
            padding-top: 30px;
          }

          .letters-item__description-header {
            @include sm {
              font-weight: bold;
              font-size: 21px;
              line-height: 28px;
              margin-bottom: 26px;
            }
          }

          .letters-item__description-text {
            @include sm {
              display: none;
              font-size: 14px;
              line-height: 26px;
              width: inherit;
            }
          }
        }

        &-header {
          font-size: 30px;
          line-height: 39.3px;
          font-weight: 700;
          letter-spacing: 0.16em;
          margin-bottom: 26px;
          display: block;
          @include xl {
            font-size: 60px;
            line-height: 78.6px;
          }
          @include xs {
            font-weight: 700;
            font-size: 20px;
            line-height: 18px;
            margin-bottom: 10px;
          }
          @include md {
            font-size: 21px;
            line-height: 28px;
          }
          @include sm-l {
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 20px;
          }
          @include sm {
            position: relative;
            left: -60px;
            font-size: 21px;
            line-height: 28px;
            margin-bottom: 18px;
          }
        }

        &-text {
          font-weight: 400;
          font-size: 20px;
          line-height: 36px;
          width: 300px;
          @include xl {
            font-size: 40px;
            line-height: 73px;
            width: 735px;
          }
          @include lg- {
            font-size: 14px;
            line-height: 26px;
          }
          @include sm-l {
            font-size: 12px;
            line-height: 20.54px;
            width: 207px;
          }
          @include sm {
            width: 246px;
          }
          @include xs {
            font-size: 12px;
            line-height: 18px;
            width: 218px;
            color: #d4d4d4;
          }
        }
      }
    }

    &-description__holder {
      display: none;
      @include sm-l- {
        display: none;
      }
    }
  }

  .scroll-down-icon {
    margin: 0 auto;
    width: fit-content;
    @include xl {
      width: 64.57px;
      height: 103.87px;
      transform: scale(1.5);
    }
    @include xs {
      display: none;
    }
  }
}

.arrow-down-icon {
  display: none;
  @include xs {
    display: block;
    position: absolute;
    right: -40px;
    bottom: 0;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
.arrows {
  background: transparent;
  border: 0;
  width: 55px;
  height: 55px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  color: #fff;
  &:hover {
    color: #E8B973;
  }
  @include xl {
    width: 100px;
    height: 100px;
  }
  &-left {
    left: -120px;
    @include md- {
      left: -70px;
    }
    @include xl {
      left: -270px;
    }
    @include sm-l- {
      display: none;
    }
  }
  &-right {
    right: -90px;
    @include md- {
      right: -70px;
    }
    @include xl {
      right: -270px;
    }
    @include sm-l- {
      display: none;
    }
  }
  svg {
    display: inline-block;
    width: 54.74px;
    height: 54.46px;
    @include xl {
      width: 100px;
      height: 100px;
    }
    @include lg- {
      width: 39px;
      height: 39px;
    }
  }
}
</style>
