export default {
  state: () => ({
    loaded: false,
  }),

  mutations: {
    set_loaded(state) {
      state.loaded = true
    },
  },
}
