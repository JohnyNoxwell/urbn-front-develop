import planImage1 from '~/assets/img/plan/1.png'
import planImage2 from '~/assets/img/plan/2.png'
import planImage3 from '~/assets/img/plan/3.png'
import planImage4 from '~/assets/img/plan/4.png'
import planImage5 from '~/assets/img/plan/5.png'
import planImage6 from '~/assets/img/plan/6.png'
import planImage7 from '~/assets/img/plan/7.png'
import planImage8 from '~/assets/img/plan/8.png'
import planImage9 from '~/assets/img/plan/9.png'
import planImage10 from '~/assets/img/plan/10.png'
import planImage11 from '~/assets/img/plan/11.png'
import planImage12 from '~/assets/img/plan/12.png'
import planImage13 from '~/assets/img/plan/13.png'
import planImage14 from '~/assets/img/plan/14.png'
export default [
  {
    type: 'apartments',
    rooms: 1,
    variants: [
      {
        content: 'Квартира с\u00A0одной спальней подойдет не только тем, кто живет один, но и для пары любого возраста. А кухня-гостиная позволит собраться с\u00A0семьей и друзьями.',
        img: planImage1,
        imgAlt: 'Планировка однокомнатной квартиры',
        size: '41 м2',
        built: true,
        walk: 'https://widget.planoplan.com/7397cc0863d1f4b94fc97a77d7a62d66',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/31624/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: 'В\u00A0небольшой спальне с\u00A0остеклением в\u00A0пол поместится все необходимое.',
            position: {
              // 273.97 - высота мобильной картинки планировки
              // 298.76 - ширина мобильной картинки планировки
              // 43 - отступ сверху до тултипа
              // 142 - отступ слева до тултипа
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'a1'
          },
          {
            content: 'В\u00A0просторной прихожей есть много места для хранения.',
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'a2'
          },
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры,
            где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'a3'
          },
          {
            content: `
            Кухня-гостиная позволяет собрать компанию друзей или детей и\u00A0внуков.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'a4'
          }
        ]
      },
      {
        content: 'Квартира с\u00A0одной спальней подойдет не\u00A0только тем, кто живет один, но\u00A0и\u00A0для пары любого возраста. А\u00A0кухня-гостиная позволит собраться с\u00A0семьей и\u00A0друзьями.',
        img: planImage2,
        imgAlt: 'Планировка однокомнатной квартиры',
        size: '40 м2',
        built: true,
        walk: 'https://widget.planoplan.com/bd5c5bad72a347d9bf6dbc7a8b652ddf',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/31624/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры,
            где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'b1'
          },
          {
            content: `
            В\u00A0небольшой спальне с\u00A0остеклением в\u00A0пол поместится все необходимое.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'b2'
          },
          {
            content: `
            Кухня-гостиная позволяет собрать компанию друзей или детей и\u00A0внуков.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'b3'
          },
          {
            content: `
            В\u00A0просторной прихожей есть много места для хранения.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'b4'
          }
        ]
      },
      {
        content: 'Квартира с\u00A0одной спальней подойдет не только тем, кто живет один, но и для пары любого возраста. А кухня-гостиная позволит собраться с семьей и друзьями.',
        img: planImage3,
        imgAlt: 'Планировка однокомнатной квартиры',
        size: '44 м2',
        built: true,
        walk: 'https://widget.planoplan.com/d11a91a925c542a8d556b87822514e8d',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры,
            где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'c1'
          },
          {
            content: `
            Кухня-гостиная позволяет собрать компанию друзей или детей и\u00A0внуков.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'c2'
          },
          {
            content: `
            В\u00A0небольшой спальне с\u00A0остеклением в\u00A0пол поместится все необходимое.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'c3'
          },
          {
            content: `
            Сокращенная площадь коридора позволила увеличить санузел и\u00A0спальню. В\u00A0небольшой прихожей есть место для шкафа.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'c4'
          }
        ]
      }
    ]
  },
  {
    type: 'apartments',
    rooms: 2,
    variants: [
      {
        content: 'В\u00A0этой двухкомнатной квартире светлая кухня-гостиная с\u00A0двумя окнами и\u00A0выходом на\u00A0утепленную лоджию. В\u00A0одной из\u00A0спален можно обустроить детскую, кабинет, хобби-комнату, а\u00A0также мастер-спальню с\u00A0собственным санузлом. В\u00A0прихожей кладовая и\u00A0место для шкафа.',
        img: planImage4,
        imgAlt: 'Планировка двухкомнатной квартиры',
        size: '59 м2',
        built: true,
        walk: 'https://widget.planoplan.com/e7bc692ed2d649c60b31e24573aff79c',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            В прихожей есть место для шкафа и кладовая.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'd1'
          },
          {
            content: `
            Две спальни, в\u00A0одной из\u00A0которых можно обустроить детскую, кабинет, хобби-комнату 
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'd2'
          },
          {
            content: `
            Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'd3'
          },
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры,
            где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'd4'
          },
          {
            content: `
            Раздельный санузел
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'd5'
          }
        ]
      },
      {
        content: 'Квартира с\u00A0кухней-гостиной и\u00A0двумя спальнями, в\u00A0одной из\u00A0которых можно обустроить детскую, кабинет, хобби-комнату, а\u00A0также мастер-спальню с\u00A0собственным санузлом. В\u00A0прихожей есть место для хранения, а\u00A0из кухни-гостиной выход на\u00A0утепленную лоджию.',
        img: planImage5,
        imgAlt: 'Планировка двухкомнатной квартиры',
        size: '62 м2',
        built: true,
        walk: 'https://widget.planoplan.com/db3ab735a0497496e449a3e382213b30',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры,
            где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'e1'
          },
          {
            content: `
            Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'e2'
          },
          {
            content: `
            Две спальни, в\u00A0одной из\u00A0которых можно обустроить детскую, кабинет, хобби-комнату
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'e3'
          },
          {
            content: `
            В\u00A0прихожей есть место для шкафа.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'e4'
          },
          {
            content: `
            Раздельный санузел
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'e5'
          }
        ]
      },
      {
        content: 'Просторная двухкомнатная квартира с\u00A0просторной кухней-гостиной, разнесенными спальными комнатами и\u00A0раздельным санузлом. Легко превращается в\u00A0трехкомнатную квартиру за\u00A0счет отделения гостиной от\u00A0кухни.',
        img: planImage6,
        imgAlt: 'Планировка двухкомнатной квартиры',
        size: '66 м2',
        built: true,
        walk: 'https://widget.planoplan.com/ba0d9d5c420568f87eb5cb1ab8d62998',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            В\u00A0прихожей есть место для шкафа.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'f1'
          },
          {
            content: `
            Две спальни, в\u00A0одной из\u00A0которых можно обустроить детскую, кабинет, хобби-комнату
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'f2'
          },
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры, где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'f3'
          },
          {
            content: `
            Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'f4'
          },
          {
            content: `
            Раздельный санузел.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'f5'
          }
        ]
      }
    ]
  },
  {
    type: 'apartments',
    rooms: 3,
    variants: [
      {
        content: 'Компактная квартира с\u00A0кухней-столовой, тремя эргономичными комнатами, утепленной лоджией, раздельным санузлом и\u00A0прихожей, в\u00A0которой достаточно места для хранения',
        img: planImage7,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '67 м2',
        built: true,
        walk: 'https://widget.planoplan.com/9a46c9adf2885e23912e4e5ef0edcbe5',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры,
            где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'g1'
          },
          {
            content: `
            Обустройте в\u00A0одной из\u00A0комнат детскую, кабинет или комнату для\u00A0хобби.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'g2'
          },
          {
            content: `
            Кухня-столовая располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'g3'
          },
          {
            content: `
            Просторная прихожая с\u00A0большим количеством места для хранения.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'g4'
          },
          {
            content: `
            Раздельный санузел
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'g5'
          }
        ]
      },
      {
        content: 'Просторная трехкомнатная квартира. Мастер-спальня с\u00A0собственным санузлом и\u00A0окном в\u00A0нем. Светлая кухня-гостиная с\u00A0выходом на\u00A0утепленную лоджию. Места хранения в\u00A0холле и\u00A0гардеробной.',
        img: planImage8,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '89 м2',
        built: true,
        walk: 'https://widget.planoplan.com/2ec455e37ad9d73d0c6f0df9a25b5c8e',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Просторная прихожая с\u00A0большим количеством места для хранения.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'h1'
          },
          {
            content: `
            Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'h2'
          },
          {
            content: `
            Обустройте квартиру так, как давно мечтали, создайте библиотеку, кабинет, комнату для гостей или вашего хобби. Проводите вечера вместе с\u00A0семьей и\u00A0друзьями на\u00A0кухне евро-формата. А\u00A0два санузла помогут экономить время по\u00A0утрам, когда вся семья просыпается.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'h3'
          },
          {
            content: `
            Утепленное летнее помещение увеличивает полезное пространство квартиры, где можно устроить рабочее место или место для отдыха.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'h4'
          },
          {
            content: `
            Мастер-спальня с окном в санузле.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'h5'
          }
        ]
      }
    ]
  },
  {
    type: 'penthouse',
    rooms: 4,
    variants: [
      {
        title: 'Уникальный формат квартир',
        content: 'Пятикомнатная квартира имеет просторную кухню-гостиную с\u00A0выходом на\u00A0большую террасу и\u00A0витражное остекление в\u00A0пол с\u00A0прекрасным видом на\u00A0город и\u00A0реку. Обустройте комнаты под свои потребности, будь\u00A0то библиотека, кабинет, комната для гостей или мастер-спальня с\u00A0собственным санузлом.',
        img: planImage9,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '157 м2',
        built: true,
        walk: 'https://widget.planoplan.com/c80f23358ed572dca7917a035f2bb66f',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Вместительная Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'l1'
          },
          {
            content: `
            Обустройте в\u00A0одной из\u00A0комнат детскую, кабинет или\u00A0комнату для\u00A0хобби.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'l2'
          },
          {
            content: `
            В\u00A0квартире 3\u00A0санузла для вашего комфорта.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'l3'
          },
          {
            content: `
            Проводите время с\u00A0близкими, встречая закаты и\u00A0рассветы в\u00A0лаунж-зоне, обустроенной по\u00A0вашему вкусу.
            `,
            position: {
              top: `${(30 / 273.97) * 100}%`,
              left: `${(30 / 298.76) * 100}%`
            },
            name: 'l4'
          }
        ]
      },
      {
        title: 'Уникальный формат квартир',
        content: 'Двухкомнатная квартира имеет кухню-гостиную с\u00A0выходом на\u00A0просторную террасу, спальню с\u00A0вместительной гардеробной комнатой и\u00A0небольшую детскую или кабинет.',
        img: planImage10,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '81 м2',
        built: true,
        walk: 'https://widget.planoplan.com/4a27afa0e8a92cde574a26925ee3f4df',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Спальня с\u00A0гардеробной комнатой.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'j1'
          },
          {
            content: `
            Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'j2'
          },
          {
            content: `
            Разбейте садик и\u00A0повесьте гамак, гуляйте, не\u00A0выходя из\u00A0дома, работайте на\u00A0свежем воздухе, принимайте солнечные ванны, проводите время с\u00A0друзьями.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'j3'
          }
        ]
      },
      {
        title: 'Уникальный формат квартир',
        content: 'Двухкомнатная квартира с\u00A0уютной террасой, кухней-гостиной с\u00A0увеличенной площадью остекления, раздельным санузлом и\u00A0множеством мест хранения.',
        img: planImage11,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '83 м2',
        built: true,
        walk: 'https://widget.planoplan.com/9a47e0d298bd63bda112e81018674f6f',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Cпальня с\u00A0окнами в\u00A0пол.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'k1'
          },
          {
            content: `
            Вместительная Кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'k2'
          },
          {
            content: `
            Проводите время с\u00A0близкими, встречая закаты и\u00A0рассветы в\u00A0лаунж-зоне, обустроенной по\u00A0вашему вкусу.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'k3'
          },
          {
            content: `
            Просторная прихожая с\u00A0большим количеством места для хранения.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'k4'
          }
        ]
      },
      {
        title: 'Уникальный формат квартир',
        content: 'Однокомнатная квартира с\u00A0просторной террасой и\u00A0кухней-гостиной для уютных вечеров с\u00A0близкими.',
        img: planImage12,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '53 м2',
        built: true,
        walk: 'https://widget.planoplan.com/8a4a618144261ef66f77cdcd71a158fe',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Формат кухни-гостинной позволяет комфортно проводить вечера в\u00A0кругу друзей.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'm1'
          },
          {
            content: `
            Спальня с\u00A0окнами в\u00A0пол.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'm2'
          },
          {
            content: `
            Разбейте садик и\u00A0повесьте гамак, гуляйте, не\u00A0выходя из\u00A0дома, работайте на\u00A0свежем воздухе, принимайте солнечные ванны, проводите время с\u00A0друзьями.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'm3'
          }
        ]
      },
      {
        title: 'Уникальный формат квартир',
        content: 'Компактная квартира с\u00A0продуманным зонированием, окнами в\u00A0пол и\u00A0выходом на\u00A0просторную террасу из\u00A0кухни-гостиной.',
        img: planImage13,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '63 м2',
        built: true,
        walk: 'https://widget.planoplan.com/96d4a0d0d04854e90ec0bf44d04679f2',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Спальня с\u00A0окнами в\u00A0пол.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'n1'
          },
          {
            content: `
            Разбейте садик и\u00A0повесьте гамак, гуляйте, не\u00A0выходя из\u00A0дома, работайте на\u00A0свежем воздухе, принимайте солнечные ванны, проводите время с\u00A0друзьями.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'n2'
          },
          {
            content: `
            Формат кухни-гостинной позволяет комфортно проводить вечера в\u00A0кругу друзей.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'n3'
          },
          {
            content: `
            В\u00A0прихожей достаточно места для хранения вещей.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'n4'
          }
        ]
      },
      {
        title: 'Уникальный формат квартир',
        content: 'Трехкомнатная квартира имеет просторную кухню-гостиную с\u00A0выходом на\u00A0большую террасу и\u00A0витражное остекление в\u00A0пол с\u00A0прекрасным видом на\u00A0город и\u00A0реку. Обустройте комнаты под свои потребности, будь\u00A0то библиотека, кабинет, комната для гостей или мастер-спальня с\u00A0собственным санузлом.',
        img: planImage14,
        imgAlt: 'Планировка трехкомнатной квартиры',
        size: '105 м2',
        built: true,
        walk: 'https://widget.planoplan.com/2e26a42c30b1c528551424dcaa4fc39d',
        detail: 'https://smart-catalog.profitbase.ru/catalog/house/91144/smallGrid?accountId=4632&referrer=http://peresvet-ug.ru&profitbaseDomain=profitbase.ru&filter=project:18308&filter=property.status:AVAILABLE&showStock=true',
        points: [
          {
            content: `
            Просторная прихожая с\u00A0большим количеством места для хранения.
            `,
            position: {
              top: `${(43 / 273.97) * 100}%`,
              left: `${(142 / 298.76) * 100}%`
            },
            name: 'o1'
          },
          {
            content: `
            Проводите время с\u00A0близкими, встречая закаты и\u00A0рассветы в\u00A0лаунж-зоне, обустроенной по\u00A0вашему вкусу.
            `,
            position: {
              top: `${(1 / 273.97) * 100}%`,
              left: `${(1 / 298.76) * 100}%`
            },
            name: 'o2'
          },
          {
            content: `
            Вместительная кухня-гостиная располагает проводить больше времени вместе с\u00A0семьей и\u00A0друзьями.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'o3'
          },
          {
            content: `
            Спальня с\u00A0окном в\u00A0пол
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'o4'
          },
          {
            content: `
            Мастер-спальня с\u00A03\u00A0окнами в\u00A0пол.
            `,
            position: {
              top: `${(10 / 273.97) * 100}%`,
              left: `${(10 / 298.76) * 100}%`
            },
            name: 'o5'
          }
        ]
      }
    ]
  }
  // {
  //   type: 'penthouse',
  //   variants: [
  //     {
  //       title: 'Уникальный формат квартир',
  //       content: `
  //       В\u00A0комплексе предусмотрены квартиры различных метражей и\u00A0отдельные уникальные форматы, включая квартиры с\u00A0террасами на\u00A0высоких этажах, квартиры свободной планировки, квартиры с\u00A0мастер-спальней и\u00A0окном в\u00A0ванной комнате.
  //       `,
  //       img: planImage9,
  //       imgAlt: 'Уникальный формат квартир',
  //       built: true,
  //       booking: true,
  //       download: 'https://drive.google.com/file/d/1FtwpEy8BSc-DGnzKzi4wbdEcYHGsW4zn/view'
  //     }
  //   ]
  // }
]
