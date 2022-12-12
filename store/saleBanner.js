const MUTATION_TYPES = {
  GET_SALE_BANNER: "GET_SALE_BANNER",
}

export const actions = {
  async getSaleBanner({commit}) {
    const {data: saleBanner} = await this.$axios.$get('sale-banner?populate=image')
    commit(MUTATION_TYPES.GET_SALE_BANNER, saleBanner)
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_SALE_BANNER](state, saleBanner) {
    state.saleBanner = saleBanner
  },

}

export const state = () => ({
  loading: false,
  saleBanner: {},
})

export const getters = {
  saleBanner: state => state.saleBanner,
  loading: state => state.loading,
  isCome: state => !!state.saleBanner.length
}



