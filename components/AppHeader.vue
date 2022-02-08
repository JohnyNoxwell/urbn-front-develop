<template>
  <header ref="header" class="app-header">
    <div :class="['bullets', scrolled && 'scrolled']" @click="mobileNav = !mobileNav">
      <bullets />
    </div>
    <save-app-popup
      v-if="appPopup"
      v-show="appPopup"
      @close="onToggleAppPopup"
      @submitted="onShowSuccessPopup"
    />
    <success-popup
      v-if="successPopup"
      v-show="successPopup"
      @close="onCloseSuccessPopup"
    />
    <live-stream-popup
      v-if="liveStreamPopup"
      v-show="liveStreamPopup"
      @close="onToggleLiveStreamPopup"
    />
    <div class="app-header__inner">
      <a href="#" class="app-logo-icon" @click.prevent="toScroll('#mainSection')">
        <urbn-logo class="app-logo" />
        <urbn-logo class="app-logo--mobile" />
      </a>
      <nav class="app-nav">
        <a href="tel:+78442985090" class="app-nav__link">
          +7 (8442) 68-50-90
        </a>
        <div class="app-nav__btns">
          <app-button text="Планировки" @click="toScroll('#plans')" />
          <app-button text="Новости" link="news" />
          <app-button text="Оставить заявку" @click="onToggleAppPopup" />
        </div>
        <button
          type="button"
          class="camera-icon"
          @click="onToggleLiveStreamPopup"
        >
          <camera-icon class="camera-icon" />
        </button>
      </nav>
      <transition name="fade">
        <div v-show="mobileNav" class="app-nav__mobile">
          <div class="app-nav__mobile-inner">
            <div class="logo-mobile">
              <app-logo class="logo-mobile" />
            </div>
            <ul class="mobile-links">
              <li v-for="(link, i) in links" :key="i">
                <a v-if="link.title === 'новости'" class="mobile-link" text="Новости" href="news" @click="mobileNav = !mobileNav">{{ link.title }}</a>
                <a v-else class="mobile-link" :href="link.href" @click.prevent="link.href ? toScroll(link.href) : onToggleLiveStreamPopup()">{{ link.title }}</a>
              </li>
            </ul>
            <div class="mobile-buttons--wrapper">
              <div class="mobile-buttons">
                <app-button alignment="baseline" text="Скачать буклет" download />
                <app-button alignment="baseline" text="Оставить заявку" @click="onToggleAppPopup" />
              </div>
              <a href="tel:+78442985090" class="mobile-phone mobile-phone--landscape">+ 7 8442 98-50-90</a>
            </div>
            <a href="tel:+78442985090" class="mobile-phone">+ 7 8442 98-50-90</a>
            <div class="app-nav__mobile-footer">
              <span>© Пересвет-Юг, 2021</span>
              <a href="#" class="app-footer__link" @click.prevent="confPopup = !confPopup">Политика конфиденциальности</a>
            </div>
            <close-icon class="close-icon" @click="mobileNav = !mobileNav" />
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import AppButton from './Base/AppButton'
import SaveAppPopup from './Base/Popup/SaveAppPopup'
import SuccessPopup from './Base/Popup/SuccessPopup'
import LiveStreamPopup from './Base/Popup/LiveStreamPopup'
import UrbnLogo from '~/assets/img/logo-m.svg'
import CameraIcon from '~/assets/img/camera.svg'
import CloseIcon from '~/assets/img/close-icon.svg'
import bullets from '~/assets/img/bullets.svg'
import AppLogo from '~/assets/img/app-logo.svg'

export default {
  name: 'AppHeader',
  components: {
    AppButton,
    SaveAppPopup,
    SuccessPopup,
    LiveStreamPopup,
    UrbnLogo,
    CameraIcon,
    CloseIcon,
    bullets,
    AppLogo

  },
  data () {
    return {
      appPopup: false,
      successPopup: false,
      liveStreamPopup: false,
      mobileNav: false,
      scrolled: false,
      links: [
        {
          href: '#aboutProject',
          title: 'О проекте'
        },
        {
          href: '#urbanism',
          title: 'принципы'
        },
        {
          href: '#generalPlan',
          title: 'генплан'
        },
        {
          href: '#placing',
          title: 'расположение'
        },
        {
          href: '#plans',
          title: 'планировки'
        },
        {
          href: 'news',
          title: 'новости'
        },
        {
          title: 'стройка онлайн'
        }
      ],
      scrollTo: null
    }
  },
  watch: {
    mobileNav (newVal) {
      document.querySelector('body').style.overflow = newVal ? 'hidden' : 'auto'
    },
    '$route' (to, from) {
      if (this.scrollTo) {
        setTimeout(() => {
          this.$scrollTo(this.scrollTo)
          this.scrollTo = null
        }, 500)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onMenuScroll, { passive: true })
  },
  destroyed () {
    window.removeEventListener('scroll', this.onMenuScroll)
  },
  methods: {
    onToggleAppPopup () {
      this.appPopup = !this.appPopup
      this.successPopup = false
    },
    onShowSuccessPopup () {
      this.appPopup = false
      this.successPopup = true
    },
    onCloseSuccessPopup () {
      this.appPopup = false
      this.successPopup = false
    },
    onToggleLiveStreamPopup () {
      this.liveStreamPopup = !this.liveStreamPopup
    },
    onMenuScroll () {
      this.scrolled = this.$breakpoints.xs && window.scrollY > 5
      let headerToggleY = 250
      if (this.$route.name === 'index') {
        headerToggleY = window.innerHeight
      }
      window.scrollY > headerToggleY ? this.$refs.header.classList.add('fixed') : this.$refs.header.classList.remove('fixed')
    },
    toScroll (href) {
      this.mobileNav = false
      if (this.$route.name === 'index') {
        this.$scrollTo(href)
      } else {
        this.scrollTo = href
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.app {
  &-header {
    padding: 0 36px;
    position: absolute;
    z-index: 99;
    width: 100%;
    @include xl {
      padding: 0 76px;
    }
    @include md {
      padding: 0 33px 0 28px;
    }
    @include sm {
      padding: 0 24px;
    }
    @include xs {
      padding: 0 16px;
    }

    &__inner {
      display: flex;
      justify-content: space-between;
      @include tablet-md- {
        align-items: center;
        justify-content: flex-start;
        width: calc(100% - 22px);
      }
      @include xs {
        align-items: center;
        justify-content: flex-start;
        width: calc(100% - 22px);
      }
    }
    &.fixed {
      position: fixed;
      animation: 0.3s ease-in-out fadeIn;
      background-color: #252525;
      .logo_svg__black-back,
      .logo-mobile_svg__black-back {
        display: none;
      }
      .app-logo,
      .app-logo--mobile {
        height: 68px;
        margin: 5px 0;
        @include -lg {
          margin: 15px 0;
        }
      }
      .app-logo {
        @include xl {
          width: 188px;
          height: 163px;
          margin: 30px 0;
        }
        @include tablet-md- {
          width: 36px;
          height: 31.28px;
          margin: 15px 0;
          svg {
            width: 36px;
            height: 31.28px !important;
          }
        }
      }
      .app-nav {
        align-self: center;
        margin-top: 0;
      }
      @include mobile-landscape {
        display: none;
      }
      // @include tablet-md- {
      //   display: none;
      // }
    }
  }

  &-nav {
    display: flex;
    align-self: center;
    align-items: center;
    margin-top: 12px;
    @include xl {
      margin-top: 0;
    }
    @include lg {
      margin-top: 3px;
    }
    @include md {
      margin-top: -10px;
    }
    @include sm {
      align-self: flex-end;
      margin-bottom: 15px;
    }
    @include sm-l- {
      margin-top: 0;
    }
    @include xs {
      display: inline-flex;
      flex-grow: 1;
      justify-content: center;
    }
    @include tablet-md- {
      align-self: center;
      display: inline-flex;
      flex-grow: 1;
      justify-content: center;
    }

    &__btns {
      display: flex;
      gap: 12px;
      @include xl {
        gap: 24px;
      }
      @include tablet-md- {
        display: none;
      }
      @include xs {
        display: none;
      }
      .app-button {
        padding: 6px 22px;
        line-height: 20px;
        @include xl {
          padding: 5px 49.2px;
        }
      }
    }

    &__link {
      position: relative;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-right: 19px;
      text-decoration: none;
      @include xl {
        font-size: 36px;
        line-height: 48px;
        margin-right: 38px;
      }
      @include md {
        font-size: 14px;
        line-height: 24px;
      }
      @include sm-l {
        font-size: 14px;
        line-height: 24px;
      }
      @include sm {
        font-size: 14px;
        line-height: 24px;
      }
      @include tablet-md- {
        font-size: 14px;
        line-height: 12px;
        margin: 0;
      }
      @include xs {
        font-size: 14px;
        line-height: 12px;
        margin: 0;
      }
      color: #fff;
      &::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 1px;
        height: 1px;
        width: 0;
        background-color: #fff;
        transition: width .6s ease-in-out;
      }
      @include -sm-l {
        &:hover {
          &::before {
            right: auto;
            left: 0;
            width: 100%;
          }
        }
      }
      &:focus {
      &::before {
          width: 100%;
        }
      }
    }

    &__mobile {
      display: none;
      @include xs {
        position: fixed;
        display: flex;
        flex-direction: column;
        background: #fff;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
        padding: 36px 16px 48px;
        align-items: center;
        z-index: 99 !important;
        justify-content: center;
        .app-nav__mobile-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      @include tablet-md- {
        position: fixed;
        display: flex;
        background: #fff;
        padding: 17px 63px 8px;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
        .app-nav__mobile-inner {
          width: 100%;
        }
        .mobile-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        li {
          display: inline-flex;
          justify-content: flex-start;
          width: 25%;
          &:nth-of-type(1) {
            order: -1;
          }
          &:nth-of-type(2) {
            order: 1;
          }
          &:nth-of-type(3) {
            order: -1;
          }
          &:nth-of-type(4) {
            order: 3;
          }
          &:nth-of-type(5) {
            order: -1;
          }
          &:nth-of-type(6) {
            order: 3;
          }
          &:nth-of-type(7) {
            order: -1;
          }
        }
      }
      @include mobile-landscape {
        position: fixed;
        display: flex;
        background: #fff;
        padding: 17px 20px 8px;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100vh;
      }
      .logo-mobile {
        margin-bottom: 40px;
        width: 104px;
        height: 90px;

        svg {
          width: 104px;
          height: 90px;
        }
        @include tablet-md- {
          margin: 0 auto;
          margin-bottom: 23px;
        }
      }

      .mobile-links {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
        margin-bottom: 23px;
        @include tablet-md- {
          width: 100%;
          margin-bottom: 24px;
        }

        a {
          font-size: 12px;
          line-height: 36px;
          text-decoration: none;
          text-transform: uppercase;
          color: #000000;

          &:hover {
            color: #000000;
            text-decoration: underline;
          }
        }
      }

      .mobile-buttons {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        margin-bottom: 41px;

        .app-button {
          border: 0.444444px solid #000000;
          border-radius: 14.2222px;
          width: 144px;
          height: 36px;
          font-weight: 600;
          font-size: 12px;
          color: #000;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &--wrapper {
          @include tablet-md- {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
          }
        }
        @include tablet-md- {
          margin: 0;
          display: flex;
          gap: 28px;
        }
      }

      .mobile-phone {
        font-weight: 600;
        font-size: 14px;
        line-height: 12px;
        color: #000;
        text-decoration: none;
        margin-bottom: 38px;
        @include tablet-md- {
          display: none;
        }
        &--landscape {
          display: none;
          @include tablet-md- {
            display: inline-flex;
            align-self: center;
            margin: 0;
          }
        }
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        font-size: 8px;
        line-height: 16px;
        color: #000;
        width: 100%;

        a {
          color: #000;
          text-decoration: none;
        }
      }

      .close-icon {
        position: absolute;
        right: 16px;
        top: 16px;
      }
    }
  }

  &-logo {
    width: 94px;
    height: 81px;
    margin-top: 33px;
    // margin-bottom: 15px;
    @include xl {
      margin-top: 66px;
      width: 188px;
      height: 164px;
    }
    @include md {
      margin-top: 25px;
    }
    @include md- {
      display: none;
    }
    @include xs {
      display: block;
      margin-top: 16px;
      margin-bottom: 0;
      width: 57px;
      height: 50px;
    }

    &--mobile {
      display: none;
      @include md- {
        display: block;
        margin-top: 30px;
        margin-bottom: 15px;
        width: 94px;
        height: 65px;
      }
      @include xs {
        display: none;
      }
    }
  }

}

.camera-icon {
  padding: 0;
  border: 0;
  margin-left: 18px;
  outline: none;
  background-color: transparent;
  display: inline-block;
  color: #fff;
  transition: color 0.2s ease;
  line-height: 0;
  cursor: pointer;
  svg {
    margin: 0;
    fill: currentColor;
  }
  @include xl {
    margin-left: 36px;
  }

  &:hover:not(:focus) {
    color: #fff;
  }

  /deep/ path {
    transition: all 0.2s linear;
  }

  &:hover {
    /deep/ path {
      fill: $accent !important;
    }
  }

  @include xl {
    width: 70px;
    height: 52px;
  }
  @include xs {
    display: none;
  }
  @include tablet-md- {
    display: none;
  }
}

.bullets {
  display: none;
  // &.scrolled {

  // }
  @include xs {
    display: block;
    position: absolute;
    right: 16px;
    top: 22px;
    z-index: 2;
  }
  @include tablet-md- {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
</style>
