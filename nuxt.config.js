import { resolve } from 'path'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'archimatika',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#9cf50b' },
      { name: 'theme-color', content: '#9cf50b' },
      { name: 'og:type', content: 'website' },
      { name: 'fb:app_id', content: '1583517708661300'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#9cf50b', href: '/safari-pinned-tab.svg' }
    ],
    script: [
      {
        type: 'text/javascript',
        id: 'hs-script-loader',
        src: '//js.hs-scripts.com/20385541.js',
        body: true,
        defer: true,
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main'],
  // scrollBehavior (to, from, savedPosition) {
  //   return ({ x: 0, y: 0 })
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/router' },
    { src: '@/plugins/gsap' },
    { src: '@/plugins/windowSize' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxt/content', 'nuxt-mail', '@nuxtjs/axios', '@nuxtjs/gtm', 'nuxt-facebook-pixel-module', [
    '@rkaliev/nuxtjs-yandex-metrika',
    {
      id: '86814775',
      webvisor: true,
      clickmap: true,
      useCDN: true
    }
  ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler')
      }
    },
    transpile: ['gsap']
  },
  alias: {
    '@': resolve(__dirname, './'),
    images: resolve(__dirname, './assets/images'),
    fonts: resolve(__dirname, './assets/fonts')
  },
  axios: {
    baseURL: 'https://archimatika.agency/'
  },
  mail: {
    message: {
      to: 'la@dwynn.by'
    },
    smtp: {
      host: 'smtp.yandex.com',
      port: 465,
      auth: {
        user: 'alexvanvich@yandex.by',
        pass: '2295489b'
      }
    }
  },
  image: {
    screens: {
      xs: 320,
      iphone7: 375,
      iphone7plus: 414,
      iphoneBig: 450,
      sm: 500,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },
  styleResources: {
    scss: [
      './assets/scss/variables.scss',
      './assets/scss/mixins.scss',
      './assets/scss/functions.scss',
      './assets/scss/animations.scss'
    ]
  },
  gtm: {
    id: 'GTM-M2KVX85',
    debug: false
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '392905819261214',
    autoPageView: true,
    disabled: false,
    debug: false
  }
  // router: {
  //   scrollBehavior: () => {
  //     return { x: 0, y: 0 }
  //   },
  // },
  // loading: './components/SPreloader.vue',
}
