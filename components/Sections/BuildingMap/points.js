export default function getPoints (breakpoints) {
  const options = {
    hideIconOnBalloonOpen: false,
    balloonCloseButton: false,
    balloonPanelMaxMapArea: 0,
    balloonShadow: false
  }
  return [
    {
      id: 1,
      coords: [48.697613, 44.492173],
      type: 'school',
      options,
      iconMarker: getMarkerImage('school', breakpoints),
      balloonItems: ['Лицей №6']
    },
    {
      id: 2,
      name: 'Школа Вильяма-Рейли',
      coords: [48.697994, 44.496862],
      type: 'school',
      options,
      iconMarker: getMarkerImage('school', breakpoints),
      balloonItems: ['Школа Вильяма-Рейли']
    },
    {
      id: 3,
      coords: [48.696813, 44.498204],
      type: 'medicine',
      options,
      iconMarker: getMarkerImage('medicine', breakpoints),
      balloonItems: [
        'Больница №1',
        'Медицинский центр Водников'
      ]
    },
    {
      id: 4,
      coords: [48.698695, 44.4989105],
      type: 'kindergarten',
      options,
      iconMarker: getMarkerImage('kindergarten', breakpoints),
      balloonItems: ['Детский сад №302', 'Детский сад №65']
    },
    {
      id: 5,
      coords: [48.700984, 44.498899],
      type: 'medicine',
      options,
      iconMarker: getMarkerImage('medicine', breakpoints),
      balloonItems: ['Медицинский центр водников']
    },
    {
      id: 6,
      coords: [48.701523, 44.502120],
      type: 'medicine',
      options,
      iconMarker: getMarkerImage('medicine', breakpoints),
      balloonItems: ['ГУЗ Детская клиническая больница №8']
    },
    {
      id: 7,
      coords: [48.700248, 44.501343],
      type: 'kindergarten',
      options,
      iconMarker: getMarkerImage('kindergarten', breakpoints),
      balloonItems: ['Детский сад №237']
    },
    {
      id: 8,
      coords: [48.697759, 44.501557],
      type: 'shop',
      options,
      iconMarker: getMarkerImage('shop', breakpoints),
      balloonItems: ['ТРЦ Киндермолл']
    },
    {
      id: 9,
      coords: [48.697427, 44.506115],
      type: 'fitness',
      options,
      iconMarker: getMarkerImage('fitness', breakpoints),
      balloonItems: ['Супермегафитнес']
    },
    {
      id: 10,
      coords: [48.700814, 44.496711],
      type: 'urbn',
      filterable: false,
      options,
      iconMarker: getMarkerImage('urbn', breakpoints),
      balloonItems: ['UBRN']
    },
    {
      id: 11,
      coords: [48.699448, 44.500843],
      type: 'fitness',
      options,
      iconMarker: getMarkerImage('fitness', breakpoints),
      balloonItems: ['ФОК Волгомед ']
    },
    {
      id: 12,
      name: 'Фитнес зал Platinum',
      coords: [48.698599, 44.496662],
      type: 'fitness',
      options,
      iconMarker: getMarkerImage('fitness', breakpoints),
      balloonItems: ['Фитнес зал Platinum']
    },
    {
      id: 13,
      coords: [48.69705, 44.501562],
      type: 'shop',
      options,
      iconMarker: getMarkerImage('shop', breakpoints),
      balloonItems: ['Ворошиловский ТЦ']
    },
    {
      id: 14,
      coords: [48.703913, 44.498204],
      type: 'park',
      options,
      iconMarker: getMarkerImage('park', breakpoints),
      balloonItems: ['Доступ к парку реки Царица']
    }
  ]
}

function getMarkerImage (name, breakpoint) {
  const bp = breakpoint.current === 'sm-l' ? 'md' : breakpoint.current
  const sizes = {
    xs: [23, 23],
    sm: [58, 58],
    'sm-l': [35, 35],
    md: [35, 35],
    lg: [49, 49],
    xl: [98, 98]
  }
  return {
    layout: 'default#image',
    imageHref: require(`~/assets/img/map/${name}_${bp}.png`),
    imageSize: sizes[bp],
    imageOffset: [-sizes[bp][0] / 2, 0]
  }
}
