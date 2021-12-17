export default {
  state: () => ({
    loaded: false,
    home: {},
    showDiscuss: false,
    pageTransition: false,
    nextPage: '/',
    currentServiceId: '',
    mobile: false,
    showProject: false,
    toast: '',
    toastMessage: {
      title: 'Your message success!',
      desc: 'Your message success!',
    },
    webp: true,
    footer: {},
    lang: 1
  }),

  mutations: {
    set_loaded(state) {
      state.loaded = true
    },
    set_home(state, payload) {
      state.home = payload
    },
    set_discuss(state, payload) {
      state.showDiscuss = payload
    },
    set_pageTransition(state, payload) {
      state.pageTransition = payload
    },
    set_nextPage(state, payload) {
      state.nextPage = payload
    },
    set_serviceId(state, payload) {
      state.currentServiceId = payload
    },
    set_mobile(state, payload) {
      state.mobile = payload
    },
    set_project(state, payload) {
      state.showProject = payload
    },
    set_toast(state, payload) {
      state.toast = payload
    },
    set_toastMessage(state, payload) {
      state.toastMessage = payload
    },
    set_webp(state, payload) {
      state.webp = payload
    },
    set_footer(state, payload) {
      state.footer = payload
    },
    set_lang(state, payload) {
      state.lang = payload
    }
  },
  actions: {
    async nuxtServerInit({commit, state}) {
      const resp = await this.$content(`home${state.lang !== 1 ? '' : '_ru'}`).fetch()
      commit('set_home', resp)
      const resp2 = await this.$content(`footer${state.lang !== 1 ? '' : '_ru'}`).fetch()
      commit('set_footer', resp2)
    },
    setLang({commit}, value) {
      commit('set_lang', value)
    },
    setDiscuss({commit}, value) {
      commit('set_discuss', value)
    },
    setPageTransition({commit}, value) {
      commit('set_pageTransition', value)
    },
    setNextPage({commit}, value) {
      commit('set_nextPage', value)
    },
    setServiceId({commit}, value) {
      commit('set_serviceId', value)
    },
    setMobile({commit}, value) {
      commit('set_mobile', value)
    },
    setProject({commit}, value) {
      commit('set_project', value)
    },
    setToast({commit}, value) {
      commit('set_toast', value)
    },
    setToastMessage({commit}, value) {
      commit('set_toastMessage', value)
    },
    setWebp({commit}, value) {
      commit('set_webp', value)
    }
  }
}
