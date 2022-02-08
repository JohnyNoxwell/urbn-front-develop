<template>
  <div>
    <Popup @close="triggerClose">
      <div class="popup__logo">
        <popup-logo />
      </div>
      <h1 class="popup__header">
        Оставьте заявку
      </h1>
      <p class="popup__description">
        Введите ваши контактные данные и назначьте удобную дату и время встречи.
        Менеджер свяжется с вами в ближайшее время, чтобы уточнить детали.
      </p>
      <form
        action=""
        method="post"
        novalidate
        @submit="handleSubmit"
      >
        <div class="inputs__holder">
          <div class="input__wrapper">
            <input
              v-model="values.email"
              class="input"
              name="email"
              type="email"
              placeholder="* Введите e-mail"
              required
            >
            <span v-show="errors.email" class="input__error">{{ errors.email }}</span>
          </div>
          <div class="input__wrapper">
            <input
              v-model="values.name"
              class="input"
              name="name"
              type="text"
              placeholder="* Введите имя"
              required
            >
            <span v-show="errors.name" class="input__error">{{ errors.name }}</span>
          </div>
          <div class="input__wrapper">
            <input
              v-model="values.phone"
              v-mask="'+7 (###) ###-##-##'"
              class="input"
              name="phone"
              type="tel"
              placeholder="* Введите телефон в любом формате"
              maxlength="18"
              required
            >
            <span v-show="errors.phone" class="input__error">{{ errors.phone }}</span>
          </div>
        </div>

        <input
          class="input__submit"
          type="submit"
          value="Отправить заявку"
        >
        <p v-show="errorNetwork" class="network-error">
          {{ errorNetwork }}
        </p>
      </form>
      <p class="policy">
        Нажимая на кнопку вы соглашаетесь<br> с&nbsp;нашей
        <a href="#" class="app-footer__link" @click.prevent="confPopup = !confPopup">Политика конфиденциальности.</a>
      </p>
    </Popup>
    <transition name="fade" mode="in-out" appear>
      <confidence-popup
        v-if="confPopup"
        v-show="confPopup"
        @close="onToggleAppPopup"
      />
    </transition>
  </div>
</template>

<script>
import Popup from './Popup.vue'
import ConfidencePopup from './ConfidencePopup'
import PopupLogo from '~/assets/img/popup-logo.svg'

export default {
  name: 'SaveAppPopup',
  components: {
    Popup,
    PopupLogo,
    ConfidencePopup
  },
  data () {
    return {
      confPopup: false,
      errorNetwork: null,
      errors: {
        email: null,
        name: null,
        phone: null
      },
      values: {
        email: '',
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    triggerClose () {
      this.$emit('close')
    },
    onToggleAppPopup () {
      this.confPopup = !this.confPopup
    },
    handleSubmit (e) {
      e.preventDefault()
      this.errorNetwork = null
      this.errors = {
        email: this.validateEmail(this.values.email),
        name: this.validateName(this.values.name),
        phone: this.validatePhone(this.values.phone)
      }
      const valid = Object.values(this.errors).every(v => v == null)
      if (valid) {
        this.$axios.post('/api/feedback', this.values)
          .then((_result) => {
            this.triggerClose()
            this.$emit('submitted')
          })
          .catch((_err) => {
            this.errorNetwork = 'Не удалось сохранить заявку. Попробуйте позже еще раз'
          })
      }
    },
    validateEmail (email) {
      if (!email) {
        return 'Укажите e-mail'
      }
      const parts = email.split('@')
      const [before, after] = parts
      if (parts.length !== 2 || !before || !after) {
        return 'Укажите валидный e-mail'
      }
      return null
    },
    validateName (value) {
      if (!value) {
        return 'Укажите имя'
      }
      return null
    },
    validatePhone (value) {
      if (!value) {
        return 'Укажите телефон'
      }
      const val = value.replace(/\D/g, '')
      if (!val) {
        return 'Телефон должен состоять из цифр'
      }
      if (!value.startsWith('+7') && !value.startsWith('7') && !value.startsWith('8')) {
        return 'Телефон должен начинаться на +7 или 8'
      }
      if (val.length !== 11) {
        return 'Телефон должен состоять из 11 цифр'
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  &__logo {
    position: absolute;
    left: 40px;
    top: 37px;
    @include xl {
      width: 267.06px;
      height: 232.78px;
    }
    @include lg- {
      width: 95px;
      height: 82.81px;
      left: 30px;
      top: 27px;
    }
    @include xs {
      width: 57.36px;
      height: 50px;
      top: 12px;
      left: 17px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__header {
    font-weight: 600;
    font-size: 44px;
    line-height: 54px;
    color: #fff;
    margin-bottom: 30px;
    text-align: center;
    @include xl {
      font-size: 88px;
      line-height: 108px;
      margin-bottom: 56px;
    }
    @include lg- {
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 22px;
    }
    @include xs {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 9px;
    }
  }

  &__description {
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 36px;
    margin-left: auto;
    margin-right: auto;
    max-width: 642px;
    width: 100%;
    text-align: center;
    @include xl {
      max-width: 906px;
      font-size: 36px;
      line-height: 60px;
      margin-bottom: 60px;
    }
    @include lg- {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 30px;
    }
    @include sm {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 30px;
    }
    @include xs {
      font-size: 8px;
      line-height: 12px;
      margin-bottom: 13px;
      max-width: 260px;
    }
  }
}

.inputs__holder {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 653px;
  width: 100%;
  margin: 0 auto 55px;
  @include xl {
    max-width: 1300px;
    gap: 40px;
    margin-bottom: 106px;
  }
  @include lg- {
    max-width: 465px;
    gap: 14px;
    margin-bottom: 38px;
  }
  @include xs {
    width: 207px;
    gap: 8px;
    margin-bottom: 16px;
  }
}

.input {
  border: none;
  outline: none;
  background: transparent;
  padding: 14px;
  font-size: 18px;
  line-height: 34px;
  color: #fff;
  width: 100%;
  border: 1.40556px solid #D5D5D5;
  box-sizing: border-box;
  border-radius: 11.2445px;
  @include xl {
    padding: 28px;
    font-size: 36px;
    line-height: 67px;
    border: 2.81113px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 22.489px;
  }
  @include lg- {
    font-size: 14px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 8px;
  }
  @include sm {
    padding: 4.5px 10px;
  }
  @include xs {
    border: 0.444444px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3.55556px;
    font-size: 7px;
    line-height: 11px;
    padding: 5.5px 4.44444px;
  }
  &::placeholder {
    color: #fff;
  }

  &__submit {
    background: #E8B973;
    border-radius: 5.62225px;
    width: 269.87px;
    height: 70.28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s linear;
    @include xl {
      width: 539.74px;
      height: 140.56px;
      font-size: 36px;
      margin-bottom: 56px;
    }
    @include lg- {
      width: 192px;
      height: 50px;
      border-radius: 4px;
      font-size: 14px;
      margin-bottom: 20px;
    }
    @include xs {
      width: 98px;
      height: 22px;
      border-radius: 1.77778px;
      font-weight: 500;
      font-size: 7px;
    }

    &:hover {
      background-color: darken($accent, 10%);
    }
  }

  &__error {
    margin-top: 6px;
    color: red;
    display: inline-block;
  }
}

.policy {
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #D5D5D5;
  @include xl {
    font-size: 32px;
    line-height: 56px;
  }
  @include lg- {
    font-size: 12px;
    line-height: 20px;
  }
  @include xs {
    font-size: 7px;
    line-height: 10px;
  }

  a {
    color: $accent;
  }

}

.network-error {
  text-align: center;
  color: red;
  margin-bottom: 20px;
}
</style>
