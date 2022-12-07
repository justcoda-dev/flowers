import {features} from "~/data/features";

const MUTATION_TYPES = {
  GET_FEATURES: "GET_FEATURES",

}

export const actions = {
  getFeatures({commit}) {
    // const {data: products} = await this.$axios.$get('flower-pots?populate=image')
    commit(MUTATION_TYPES.GET_FEATURES, features.data)
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_FEATURES](state, features) {
    state.features = features
  },

}

export const state = () => ({
  loading: false,
  features: [],
})

export const getters = {
  features: state => state.features,
  loading: state => state.loading,
  isCome: state => !!state.features.length
}



