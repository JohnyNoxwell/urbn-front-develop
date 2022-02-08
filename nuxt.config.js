export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'URBN by peresvet-ug.ru',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Жилой квартал URBN от Пересвет-Юг' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mask.js',
    '~/plugins/tooltip.js',
    '~/plugins/vue-select.js',
    '~/plugins/breakpoints.js',
    { src: '~/plugins/ymapPlugin.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/common.scss'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    ['vue-scrollto/nuxt', { duration: 500 }]
  ],

  proxy: [
    process.env.API_PROXY,
    process.env.STORAGE_PROXY
  ],

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: process.env.NODE_ENV === 'development',
    baseUrl: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    yaMapKey: process.env.YANDEX_MAP_KEY
  }
}
