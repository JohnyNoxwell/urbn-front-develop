import Vue from 'vue'
import throttle from 'lodash/throttle'
import getScrollbarWidth from 'get-scrollbar-width'

// adopted from https://www.npmjs.com/package/nuxt-breakpoints

const extend = (app, mixin) => {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push(mixin)
}

const defaultOptions = {
  sm: 768,
  'sm-l': 1024,
  md: 1366,
  lg: 1920,
  xl: 3840,
  options: {
    polyfill: true,
    throttle: 200
  }
}

const defaultBreakpoints = {
  current: 'xs',

  xs: true,

  sm: false,
  lSm: false,
  sSm: true,

  sml: false,
  lSml: false,
  sSml: true,

  md: false,
  lMd: false,
  sMd: true,

  lg: false,
  lLg: false,
  sLg: true,

  xl: false,

  width: 0,
  height: 0,
  scrollbarWidth: getScrollbarWidth()
}

const transformBreakpoints = (breakpoints, { width, height }, options) => {
  const { sm, md, lg, xl } = options
  const sml = options['sm-l']
  const widthReal = width + breakpoints.scrollbarWidth

  const breakpointRoles = { xs: 0, sm: 1, 'sm-l': 2, md: 3, lg: 4, xl: 5 }

  let currentActive = 'xs'

  switch (true) {
    case widthReal >= xl:
      currentActive = 'xl'
      break
    case widthReal >= lg:
      currentActive = 'lg'
      break
    case widthReal >= md:
      currentActive = 'md'
      break
    case widthReal >= sml:
      currentActive = 'sm-l'
      break
    case widthReal >= sm:
      currentActive = 'sm'
      break
    default:
      currentActive = 'xs'
      break
  }

  const decideLargeOrSmallThan = (point, large = false) =>
    large
      ? breakpointRoles[point] <= breakpointRoles[currentActive]
      : breakpointRoles[point] >= breakpointRoles[currentActive]

  const transformData = {
    sm: currentActive === 'sm',
    lSm: decideLargeOrSmallThan('sm', true),
    sSm: decideLargeOrSmallThan('sm'),

    'sm-l': currentActive === 'sm-l',
    'lsm-l': decideLargeOrSmallThan('sm-l', true),
    'ssm-l': decideLargeOrSmallThan('sm-l'),

    md: currentActive === 'md',
    lMd: decideLargeOrSmallThan('md', true),
    sMd: decideLargeOrSmallThan('md'),

    lg: currentActive === 'lg',
    lLg: decideLargeOrSmallThan('lg', true),
    sLg: decideLargeOrSmallThan('lg')
  }

  Object.assign(breakpoints, transformData, {
    current: currentActive,
    xs: currentActive === 'xs',
    xl: currentActive === 'xl',
    width: ~~width,
    height: ~~height
  })
}

export default async (ctx, inject) => {
  const options = { ...defaultOptions }

  const breakpoints = Vue.observable(defaultBreakpoints)

  if (process.server) {
    ctx.$breakpoints = breakpoints
    inject('breakpoints', breakpoints)
    return
  }

  const needPolyfill =
    !Object.prototype.hasOwnProperty.call(window, 'ResizeObserver') &&
    options.options.polyfill

  if (needPolyfill) {
    const ResizeObserver = await import('resize-observer-polyfill')

    Object.defineProperty(window, 'ResizeObserver', {
      value: ResizeObserver.default,
      writable: false
    })
  }

  const bodyElem = document.querySelector('body')

  const resizeObserver = new ResizeObserver(
    throttle((entries) => {
      const [{ contentRect }] = entries
      transformBreakpoints(breakpoints, contentRect, options)
    }, +options.options.throttle, { trailing: true, leading: false })
  )

  extend(ctx.app, {
    mounted () {
      breakpoints.scrollbarWidth = getScrollbarWidth()
    },
    beforeDestroy () {
      resizeObserver.unobserve(bodyElem)
    }
  })

  resizeObserver.observe(bodyElem)

  ctx.$breakpoints = breakpoints
  inject('breakpoints', breakpoints)
}
