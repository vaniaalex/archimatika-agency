export default {
  state: () => ({
    loaded: false,
    home: {},
    showDiscuss: false
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
    }
  },
  actions: {
    async getHome({commit}) {
      const resp = await this.$content('home').fetch()
      commit('set_home', resp)
    },
    setDiscuss({commit}, value) {
      commit('set_discuss', value)
    }
  }
}
