<template>
  <footer class="app-footer">
    <div class="app-footer__desktop">
      <div class="app-footer__top">
        <div class="app-footer__wrap">
          <div class="app-footer__logotypes">
            <a href="/">
              <urbn-logo class="footer__logo"/>
            </a>
            <a href="http://peresvet-ug.ru/" target="_blank">
              <peresvet-logo class="footer__peresvet"/>
            </a>
          </div>
          <div class="app-footer__right">
            <p class="app-footer__description">
              URBN – Новый жилой комплекс комфорт-класса в&nbsp;Волгограде. Уникальный проект в центре Ворошиловского
              района.
            </p>
          <app-button
            color="green"
            text="На сайт застройщика"
            link="http://peresvet-ug.ru/"
            target="_blank"
            alignment="baseline"
            class="app-footer__button"
          />
          </div>
        </div>
      </div>
      <div class="app-footer__row">
        <div class="app-footer__contact">
          <span>Отдел продаж:</span>
          <a href="tel:+78442685090" class="app-footer__phone">+7 8442 68-50-90</a>
        </div>
        <address class="app-footer__address">
          400075, г.Волгоград, ул. 51-й Гвардейской дивизии, 1Б/1
        </address>
        <div class="app-footer__socials">
          <a href="https://vk.com/peresvetug" class="app-footer__social" target="_blank" aria-label="Перейти вконтакте">
            <Vkontakte />
          </a>
          <a href="https://www.instagram.com/peresvet_ug/" class="app-footer__social" target="_blank" aria-label="Перейти в Instagram">
            <Instagram />
          </a>
        </div>
      </div>
      <div class="app-footer__mid">
        <div class="app-footer__mid-left">
          <span class="app-footer__text">© Пересвет-Юг, 2021</span>
          <a href="#" class="app-footer__link" @click.prevent="confPopup = !confPopup">Политика конфиденциальности</a>
        </div>
        <div class="app-footer__mid-right">
          <div class="app-footer__partner">
            <span>Проектное финансирование</span>
            <sberbank-logo />
          </div>
          <app-button
            color="green"
            text="На сайт застройщика"
            link="http://peresvet-ug.ru/"
            target="_blank"
            alignment="baseline"
            class=" app-footer__button app-footer__button--md"
          />
        </div>
      </div>
      <div class="app-footer__bot">
        <p class="app-footer__copyright">
          © Определенная законом информация размещена на НАШ.ДОМ.РФ. ООО «Специализированный застройщик «Пересвет-Юг
          Профсоюзная». Информация, размещенная на сайте не является публичной офертой.
        </p>
        <div class="app-footer__developed">
          Сайт разработан в <a href="http://dkbrands.ru/">DKBRANDS</a>
        </div>
      </div>
    </div>
    <div class="app-footer__mobile">
      <div class="app-footer__logotypes">
        <a href="/">
          <urbn-logo />
        </a>
        <a href="http://peresvet-ug.ru/">
          <peresvet-logo />
        </a>
      </div>
      <p class="app-footer__description">
        URBN – Новый жилой комплекс комфорт-класса в&nbsp;Волгограде. Уникальный проект в центре Ворошиловского района.
      </p>
      <div class="app-footer__row app-footer__row-contact">
        <div class="app-footer__contact">
          <span>Отдел продаж:</span>
          <a href="tel:+78442685090" class="app-footer__phone">+7 8442 68-50-90</a>
        </div>
        <address class="app-footer__address">
          400075, г.Волгоград, ул. 51-й Гвардейской дивизии, 1Б/1
        </address>
        <div class="app-footer__socials">
          <a href="https://vk.com/peresvetug" class="app-footer__social" target="_blank" aria-label="Перейти вконтакте">
            <Vkontakte />
          </a>
          <a href="https://www.instagram.com/peresvet_ug/" class="app-footer__social" target="_blank" aria-label="Перейти в Instagram">
            <Instagram />
          </a>
        </div>
      </div>
      <div class="app-footer__partner">
        <span>Проектное финансирование</span>
        <sberbank-logo />
      </div>
      <div class="app-footer__row">
        <app-button color="green" text="На сайт застройщика" link="http://peresvet-ug.ru/" alignment="baseline" class="app-footer__button" />
        <a href="#" class="app-footer__link" @click.prevent="confPopup = !confPopup">Политика конфиденциальности</a>
      </div>
      <div class="app-footer__row">
        <span class="app-footer__text">© Пересвет-Юг, 2021</span>
        <div class="app-footer__developed">
          Сайт разработан в <a href="http://dkbrands.ru/">DKBRANDS</a>
        </div>
      </div>
      <p class="app-footer__copyright">
        © Определенная законом информация размещена на НАШ.ДОМ.РФ. ООО «Специализированный застройщик «Пересвет-Юг
        Профсоюзная». Информация, размещенная на сайте не является публичной офертой.
      </p>
    </div>
    <transition name="fade" mode="in-out" appear>
      <confidence-popup
        v-if="confPopup"
        v-show="confPopup"
        @close="onToggleAppPopup"
      />
    </transition>
  </footer>
</template>

<script>
import AppButton from '~/components/Base/AppButton'
import UrbnLogo from '~/assets/img/logo-m.svg'
import PeresvetLogo from '~/assets/img/peresvet.svg'
import SberbankLogo from '~/assets/img/sberbank.svg'
import ConfidencePopup from '~/components/Base/Popup/ConfidencePopup'
import Vkontakte from '~/assets/img/vk.svg'
import Instagram from '~/assets/img/instagram.svg'

export default {
  name: 'AppFooter',
  components: {
    AppButton,
    UrbnLogo,
    PeresvetLogo,
    SberbankLogo,
    ConfidencePopup,
    Vkontakte,
    Instagram
  },
  data () {
    return {
      confPopup: false
    }
  },
  methods: {
    onToggleAppPopup () {
      this.confPopup = !this.confPopup
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.app-footer {
  background-color: $dark-gray;
  padding: 0 150px 49px;
  overflow: hidden;
  @include xl {
    padding: 150px 304px 98px 308px;
  }
  @include md {
    padding: 70px 30px 56px 140px;
  }
  @include md- {
    padding: 70px 28px;
  }
  @include xs {
    padding: 45px 20px 23px;
  }
  &__wrap {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    width: 100%;
    flex: 1 1 1;
    @include xl {
      margin-bottom: 52px;
    }
    @include sm-l {
      width: inherit;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__desktop {
    position: relative;
    display: block;
    @include sm-l- {
      display: none;
    }
    @include md {
      .app-footer {
        &__text {
          min-width: 160px;
        }
        &__link {
          min-width: 280px;
        }
      }
    }
    @include -lg {
      .app-footer {
        &__text {
          min-width: 290px;
        }
        &__link {
          min-width: 400px;
        }
      }
    }
  }

  &__mobile {
    display: none;
    @include sm-l- {
      position: relative;
      display: block;
    }
  }
  &__row {
    margin-bottom: 69px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #fff;
    @include md- {
      margin-bottom: 45px;
    }
    @include sm-l {
      justify-content: space-between;
    }
    @include sm {
      justify-content: space-between;
    }
    @include sm- {
      justify-content: space-between;
    }
    @include xs {
      margin-bottom: 23px;
    }
  }
  &__row-contact {
    @include sm- {
      align-items: start;
    }
  }
  &__contact {
    width: 697px;
    display: flex;
    align-items: center;
    font-size: 22px;
    line-height: 32px;
    font-weight: 400;
    @include xl {
      width: 1394px;
    }
    @include md {
      width: 443px;
    }
    @include sm-l {
      min-width: 443px;
    }
    @include sm-l- {
      flex-direction: column;
      align-items: flex-start;
    }
    @include sm- {
      min-width: 112px;
      max-width: 112px;
    }
    span {
      margin-right: 6px;
      @include xl {
        margin-right: 22px;
        font-size: 40px;
        line-height: 64px;
      }
      @include md {
        font-size: 16px;
        line-height: 24px;
      }
      @include sm- {
        font-size: 12px;
        line-height: 22px;
      }
    }
    a {
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      transition: color .3s ease-in-out;
      @include xl {
        font-size: 40px;
        line-height: 64px;
      }
       @include md {
        font-size: 18px;
        line-height: 24px;
      }
      @include sm- {
        font-size: 12px;
        line-height: 22px;
      }
      &:focus,
      &:active {
          color: $accent;
        }
      @include -sm-l {
        &:hover {
          color: $accent;
        }
      }
    }
  }
  &__address {
    font-style: normal;
    font-size: 22px;
    line-height: 32px;
    font-weight: 400;
    @include xl {
      font-size: 40px;
      line-height: 64px;
    }
    @include md {
      font-size: 16px;
      line-height: 24px;
    }
    @include sm-l {
      font-size: 18px;
      line-height: 24px;
      min-width: 574px;
    }
    @include sm-l- {
      text-align: right;
    }
    @include sm- {
      width: 137px;
      font-size: 12px;
      line-height: 22px;
    }
  }
  &__socials {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a:not(:last-of-type) {
      margin-right: 28px;
      @include xl {
        margin-right: 58.14px;
      }
      @include sm-l- {
        margin-right: 19.3px;
      }
      @include sm- {
        margin-right: 11.86px;
      }
    }
    @include sm-l {
      position: absolute;
      bottom: 37px;
      right: 0;
    }
    @include sm-l- {
      position: absolute;
      bottom: 185px;
      left: 236px;
    }
    @include sm- {
      position: absolute;
      bottom: 62px;
      left: 0;
    }
    @media (max-width: 374px) {
      position: absolute;
      bottom: 65px;
      left: 0;
    }
  }
  &__social {
    svg {
      fill: #fff;
      transition: fill .3s ease-in-out;
    }
    &:nth-of-type(1) {
      svg {
        width: 45px;
        height: auto;
        @include xl {
          width: 135.66px;
          height: auto;
        }
        @include sm- {
          width: 27.68px;
          height: auto;
        }
      }
    }
    &:nth-of-type(2) {
      svg {
        width: 34px;
        height: auto;
        @include xl {
          width: 105.21px;
          height: auto;
        }
        @include sm- {
          width: 21.46px;
          height: auto;
        }
      }
    }
    &:focus,
    &:active {
        svg {
          fill: $accent;
        }
      }
    @include -sm-l {
      &:hover {
        svg {
          fill: $accent;
        }
      }
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @include md {
      margin-bottom: 52px;
    }
    @include sm-l {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  &__logotypes {
    display: flex;
    gap: 50px;
    align-items: center;
    padding-top: 70px;
    min-width: 443px;
    width: 697px;
    @include xl {
      width: 1394px;
      gap: 100px;
      .footer__logo {
        width: 190px;
        height: 165px;
      }
      .footer__peresvet {
        width: 406px;
        height: 70px;
      }
    }
    @include md {
      width: 443px;
      flex-shrink: 1;
    }
    @include md- {
      padding-top: 0;
      width: 443px;
    }
    @include xs {
      gap: 35px;
      display: grid;
      grid-template-columns: 62px 131px;
      padding-top: 0;
      svg {
        width: 100%;
      }
    }
  }

  &__description {
    display: inline-flex;
    flex-grow: 1;
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
    color: #fff;
    max-width: 535px;
    margin-right: 161px;
    width: 100%;
    padding-top: 75px;
    @include xl {
      max-width: 1068px;
      font-size: 36px;
      line-height: 64px;
      margin-right: 362px;
    }
    @include lg- {
      font-size: 14px;
      line-height: 24px;
    }
    @include md {
      margin-right: 0;
      max-width: 456px;
    }
    @include md- {
      padding-top: 45px;
    }
    @include sm {
      font-size: 18px;
      line-height: 32px;
      margin-bottom: 31px;
    }
    @include sm-l {
      margin: 0;
      padding: 0;
      max-width: 456px;
      padding-right: 0;
    }
    @include xs {
      max-width: 290px;
      padding-top: 30px;
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
      margin-bottom: 30px;
    }
  }

  &__button {
    margin-top: 89px;
    min-width: 202px;
    justify-content: center;
    line-height: 24px;
    @include xl {
      font-size: 28px;
      line-height: 48px;
      width: 404px;
      height: 88px;
    }
    @include md {
      font-size: 14px;
    }
    @include sm-l {
      display: none;
    }
    @include md- {
      margin-top: 0;
    }
    @include xs {
      min-width: auto;
      width: 130px;
      margin-top: 0;
      height: 29px;
      font-size: 7px;
      font-weight: 500;
      text-align: center;
      justify-content: center;
    }
  }
  &__button--md {
    display: none;
    @include sm-l {
      display: flex;
    }
  }

  &__mid {
    display: flex;
    margin-bottom: 34px;
    @include xl {
      margin-bottom: 68px;
    }
    @include md {
      margin-bottom: 10px;
      justify-content: space-between;
    }
    @include sm-l {
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-bottom: 48px;
    }
  }
  &__mid-left {
    width: 697px;
    min-width: 443px;
    @include xl {
      width: 1394px;
    }
    @include lg- {
      width: 443px;
    }
  }
  &__right {
    min-width: 742px;
    // flex-grow: 1;
    @include xl {
      min-width: 1834px;
      display: flex;
    }
    @include lg {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
    }
    @include sm-l {
      min-width: 574.34px;
    }
    @include md {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
    }
  }
  &__mid-right {
    flex-shrink: 1;
    min-width: 742px;
    @include xl {
      min-width: 1477px;
      margin-right: 362px;
    }
    @include md {
      min-width: auto;
      flex-grow: 1;
    }
    @include sm-l {
      min-width: 571px;
      display: flex;
      align-items: flex-end;
    }
  }

  &__text {
    margin-right: 115px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #fff;
    @include xl {
      font-size: 32px;
      line-height: 48px;
      margin-right: 236px;
    }
    @include lg- {
      font-size: 12px;
    }
    @include md- {
      font-size: 12px;
      line-height: 24px;
    }
    @include md {
      margin-right: 34px;
    }
    @include sm-l {
      margin-right: 37px;
    }
    @include sm {
      font-size: 16px;
    }
    @include xs {
      padding-left: 77px;
      // width: 50%;
      min-width: 167px;
      margin: 0;
      font-size: 7px;
      line-height: 16px;
    }
  }

  &__link {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    margin: 0;
    @include xl {
      font-size: 32px;
      line-height: 48px;
    }
    @include md {
      font-size: 12px;
      line-height: 24px;
    }
    @include sm-l {
      font-size: 12px;
      // margin-right: 77px;
    }
    @include xs {
      margin: 0;
      font-size: 7px;
      line-height: 12px;
    }

    &:hover {
      color: $accent;
    }
  }

  &__partner {
    min-width: 903.2px;
    padding-right: 161px;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: center;
    @include xl {
      font-size: 32px;
      line-height: 36px;
      svg {
        width: 328px;
        height: 54px;
      }
    }
    @include md {
      padding-right: 0;
      font-size: 12px;
      line-height: 18px;
    }
    @include md- {
      margin-bottom: 45px;
    }
    @include sm-l {
      padding-right: 0;
      min-width: auto;
      margin: 0;
      margin-right: 24px;
      svg {
        flex-shrink: 0;
      }
    }
    @include xs {
      font-size: 8px;
      line-height: 12px;
      margin-bottom: 35px;
      svg {
        width: 106px;
        height: 16px;
      }
    }
    span {
      margin-right: 34px;
      @include xl {
        margin-right: 25.93px;
        width: 508px;
        font-size: 32px;
        line-height: 36px;
      }
      @include md {
        margin-right: 0;
        width: 122px;
      }
      @include sm-l- {
        width: initial;
      }
      @include sm-l {
        margin: 0;
        width: 130px;
        font-size: 12px;
        line-height: 18px;
      }
      @include sm- {
        margin-right: 20px;
      }
    }
  }

  &__bot {
    display: flex;
    justify-content: space-between;
  }

  &__copyright {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #BCBCBC;
    max-width: 1030px;
    width: 100%;
    @include xl {
      max-width: 1890px;
      font-size: 32px;
      line-height: 48px;
    }
    @include md {
      font-size: 12px;
      line-height: 24px;
      max-width: 718px;
    }
    @include sm-l {
      font-size: 12px;
      width: 718px;
    }
    @include sm {
      max-width: 613px;
    }
    @include xs {
      max-width: 292px;
      font-size: 8px;
      line-height: 12px;
    }
    @media (max-width: 374px) {
      max-width: 280px;
    }
  }

  &__developed {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #fff;
    @include xl {
      font-size: 32px;
      line-height: 48px;
    }
    @include md {
      font-size: 12px;
      line-height: 24px;
    }
    @include sm-l {
      font-size: 12px;
      line-height: 24px;
      align-self: flex-end;
    }
    @include xs {
      // width: 50%;
      font-size: 7px;
      line-height: 12px;
      text-align: right;
    }
    a {
      color: $accent;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: underline;

      &:hover {
        color: $accent;
        text-decoration: none;
      }
    }
  }
}
</style>
