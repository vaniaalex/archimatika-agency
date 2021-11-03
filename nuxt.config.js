import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'archimatica',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main'],
  scrollBehavior (to, from, savedPosition) {
    return ({ x: 0, y: 0 })
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/router' },
    { src: '@/plugins/gsap' },
    { src: '@/plugins/windowSize' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxt/content'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler'),
      },
    },
    transpile: ['gsap']
  },
  alias: {
    '@': resolve(__dirname, './'),
    images: resolve(__dirname, './assets/images'),
    fonts: resolve(__dirname, './assets/fonts'),
  },
  styleResources: {
    scss: [
      './assets/scss/variables.scss',
      './assets/scss/mixins.scss',
      './assets/scss/functions.scss',
      './assets/scss/animations.scss',
    ],
  },
  // router: {
  //   scrollBehavior: () => {
  //     return { x: 0, y: 0 }
  //   },
  // },
  // loading: './components/SPreloader.vue',
}
