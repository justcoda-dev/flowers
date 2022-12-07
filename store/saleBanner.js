import {saleBanner} from "~/data/saleBanner";

const MUTATION_TYPES = {
  GET_SALE_BANNER: "GET_SALE_BANNER",

}

export const actions = {
  getSaleBanner({commit}) {
    // const {data: products} = await this.$axios.$get('flower-pots?populate=image')
    commit(MUTATION_TYPES.GET_SALE_BANNER, saleBanner.data)
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_SALE_BANNER](state, saleBanner) {
    state.saleBanner = saleBanner
  },

}

export const state = () => ({
  loading: false,
  saleBanner: [],
})

export const getters = {
  saleBanner: state => state.saleBanner,
  loading: state => state.loading,
  isCome: state => !!state.saleBanner.length
}



