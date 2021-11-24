export default {
  state: () => ({
    loaded: false,
    home: {},
    showDiscuss: false,
    pageTransition: false,
    nextPage: '/',
    currentServiceId: '',
    mobile: false,
    showProject: false
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
    }
  },
  actions: {
    async getHome({commit}) {
      const resp = await this.$content('home').fetch()
      commit('set_home', resp)
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
    }

  }
}
