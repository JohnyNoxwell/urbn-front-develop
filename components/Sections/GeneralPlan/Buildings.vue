<template>
  <div>
    <div style="opacity: none">
      <div id="korpus_1">
        <h5 class="buildings__title">
          Корпус №1
        </h5>
        <div class="buildings__section">
          <span class="buildings__attr-title buildings__attr-date">Срок сдачи</span> — 2022
        </div>
        <div class="buildings__section">
          <div class="buildings__row">
            <div>
              <div class="buildings__attr-title">
                125
              </div>
              <div>
                квартир
              </div>
            </div>
            <div>
              <div class="buildings__attr-title">
                77
              </div>
              <div>
                мест в подземном паркинге
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="buildings__section">
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              1 комната
            </div>
            <div>
              от 3,5 млн. ₽
            </div>
          </div>
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              2 комнаты
            </div>
            <div>
              от 4,3 млн. ₽
            </div>
          </div>
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              3 комнаты
            </div>
            <div>
              от 5 млн. ₽
            </div>
          </div>
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              Пентхаус
            </div>
            <div>
              от 8 млн. ₽
            </div>
          </div>
        </div> -->
      </div>
      <div id="korpus_2">
        <h5 class="buildings__title">
          Корпус №2
        </h5>
        <div class="buildings__section">
          <span class="buildings__attr-title">Срок сдачи</span> — 2023
        </div>
        <div class="buildings__section">
          <div class="buildings__row">
            <div>
              <div class="buildings__attr-title">
                104
              </div>
              <div>
                квартиры
              </div>
            </div>
            <div>
              <div class="buildings__attr-title">
                77
              </div>
              <div>
                мест в подземном паркинге
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="buildings__section">
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              1 комната
            </div>
            <div>
              от 3,5 млн. ₽
            </div>
          </div>
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              2 комнаты
            </div>
            <div>
              от 4,3 млн. ₽
            </div>
          </div>
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              3 комнаты
            </div>
            <div>
              от 5 млн. ₽
            </div>
          </div>
          <div class="buildings__squares">
            <div class="buildings__attr-title">
              Пентхаус
            </div>
            <div>
              от 8 млн. ₽
            </div>
          </div>
        </div> -->
      </div>
      <div id="korpus_5">
        <h5 class="buildings__title">
          Корпус №5
        </h5>
        <div class="buildings__no-sell">
          Не в продаже
        </div>
      </div>
      <div id="korpus_6">
        <h5 class="buildings__title">
          Корпус №6
        </h5>
        <div class="buildings__no-sell">
          Не в продаже
        </div>
      </div>
      <div id="korpus_7">
        <h5 class="buildings__title">
          Корпус №7
        </h5>
        <div class="buildings__no-sell">
          Не в продаже
        </div>
      </div>
      <div id="korpus_8">
        <h5 class="buildings__title">
          Корпус №8
        </h5>
        <div class="buildings__no-sell">
          Не в продаже
        </div>
      </div>
      <div id="multiparking">
        <h5 class="buildings__title">
          Многоуровневый паркинг
        </h5>
        <div class="buildings__no-sell">
          Не в продаже
        </div>
      </div>
    </div>
    <svg :class="$style.map" viewBox="-133.97 -65.292 1365.556 767.665" xmlns="http://www.w3.org/2000/svg">
      <path class="buildings__hoverable" data-template="korpus_1" d="M200 115.5L223 437.5L283.5 488.5L334.5 474V465L350 459.5L334.5 131L309 121V110L278.5 95L244 101.5V110L200 115.5Z" />
      <path class="buildings__hoverable" data-template="korpus_2" d="M333 128.5L346 357.5L374.5 344.5L361 65L340 56.5V45.5L314.5 38L285.5 42V47.5L249 51V101.5L280 95.5L310.5 105V121L333 128.5Z" />
      <path class="buildings__hoverable" data-template="korpus_5" d="M701.5 278.5L670.5 285L631.5 270L626.5 271L611.5 264.5L613.5 263V258L606 255L609 13L617.5 11.5L618.5 6L621.5 11.5L644 8.5V2L667 0L696.5 6V16L720.5 21V24L712.5 27.5V31.5L720.5 34L712.5 269L704 273L701.5 278.5Z" />
      <path class="buildings__hoverable" data-template="korpus_6" d="M568.5 298L552.5 305L549 105.5L522.5 96.5V84L490 74L460 78.5L457.5 81.5V21L493 17L494 10.5L519 8L546 15V25.5L566 30.5V34L560 36.5V39.5L568.5 43V298Z" />
      <path class="buildings__hoverable" data-template="korpus_7" d="M424 395L491 433.5L535.5 424.5V418.5L550.5 412.5L548.5 105.5L523 97.5V84L490 74L460 79V84L416 91L424 395Z" />
      <path class="buildings__hoverable" data-template="korpus_8" d="M385 516.5L386.5 563L499 646L1095 415.5L1107.5 314.5L1077 304.5V300.5L1035.5 287L1042 224.5L892.5 146.5L832.5 130.5L786 140L777.5 317.5L837.5 349L490 456.5V519.5L484 516L480 517L448 496.5L385 516.5Z" />
      <path d="M113 350.5L172 337.5L168.5 291L155 281.5L153.5 273.5L146 268.5L136.5 270.5L86 238.5L61 221.5L0 233L6.5 261H2.5V264L6.5 267L9 275.5L23.5 286L20 288L29 294.5L33.5 292.5L43.5 300L35.5 302.5L77.5 334L86 331.5L113 350.5Z" />
      <path d="M26 206.5L36.5 212.5L203.5 182.5L199 115L209.5 113.5L208 84L206 83L205.5 76L207.5 75.5L208 72.5L185 64L155.5 67.5L155 65L150.5 63L126.5 66.5V72L65 79.5V76.5L59 74.5L34.5 78V83L5 87.5L15.5 179.5L23 186.5L26 206.5Z" />
      <path class="buildings__hoverable" data-template="multiparking" d="M122.5 220.5L72 229.5L137 269.5L146 268L153.5 272.5L155.5 281L167.5 288.5L211 278.5L204.5 198L140 210L135.5 215L122.5 218V220.5Z" />
    </svg>
  </div>
</template>

<script>
import tippy from 'tippy.js'

export default {
  mounted () {
    tippy('.buildings__hoverable', {
      theme: 'tomato',
      content (reference) {
        const id = reference.getAttribute('data-template')
        const tmplt = document.getElementById(id)
        return tmplt ? tmplt.innerHTML : ''
      },
      arrow: false,
      animation: 'fadeUp',
      allowHTML: true,
      placement: 'right',
      offset: [0, -50],
      duration: 500,
      delay: 400
    })
  }
}
</script>

<style lang="scss">
.tippy-box[data-animation='fadeUp'][data-state='hidden'] {
  opacity: 0;
  transform: translateY(10px);
}
.tippy-box[data-theme~='tomato'] {
  width: 188px;
  padding: 20px 20px 30px 20px;
  background-color: $dark-gray;
  color: #fff;
  font-family: $base-font;
  font-style: normal;
}
.tippy-box[data-theme~='tomato'] .buildings {
  &__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $accent;
  }
  &__no-sell {
    font-weight: 700;
    font-size: 9px;
    line-height: 16px;
    margin-top: 14px;
  }
  &__section {
    font-size: 9px;
    line-height: 16px;
    padding: 14px 0;
    &:not(:last-child) {
      border-bottom: thin solid $grey;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
  &__attr-title {
    font-weight: 700;
    font-size: 9px;
    line-height: 16px;
    color: $accent;
  }
  &__attr-date {
    color: #fff;
  }
  &__squares {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:first-child) {
      margin-top: 5px;
    }
  }
  &__row {
    display: flex;
    flex-wrap: nowrap;
  }
  &__row > * {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<style lang="scss" module>
.map {
  position: absolute;
  & path {
    fill: none;
    opacity: 0.6;
    pointer-events: all;
    cursor: pointer;
    transition: fill 0.2s ease;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  & path:hover {
    fill: $houseSelection;
  }
}
</style>
