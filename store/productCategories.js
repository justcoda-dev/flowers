import {categories} from "~/data/categories"

const MUTATION_TYPES = {
  GET_PRODUCT_CATEGORIES: "GET_PRODUCT_CATEGORIES",

}
export const actions = {
  async getCategories({commit}) {
    // const {data: categories} = await this.$axios.$get('category-banners?populate=image')
    commit(MUTATION_TYPES.GET_PRODUCT_CATEGORIES, categories.data)
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_PRODUCT_CATEGORIES](state, categories) {
    state.categories = categories
  },

}

export const state = () => ({
  loading: false,
  categories: [],
})

export const getters = {
  categories: state => state.categories,
  loading: state => state.loading,
  isCome: state => !!state.categories.length
}



