import {products} from "~/data/products";

const MUTATION_TYPES = {
  GET_PRODUCT: "GET_PRODUCT",
  GET_PRODUCTS_BY_CATEGORY: "GET_PRODUCTS_BY_CATEGORY",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID"

}

export const actions = {
  getProducts({commit}) {
    // const {data: products} = await this.$axios.$get('flower-pots?populate=image')
    commit(MUTATION_TYPES.GET_PRODUCT, products.data)
  },
  getProductsByCategory({commit}, category) {
    commit(MUTATION_TYPES.GET_PRODUCTS_BY_CATEGORY, {products: products.data, category})
  },
  getProductById({commit}, id) {
    const product = products.data.find(item => item.id == id)
    commit(MUTATION_TYPES.GET_PRODUCT_BY_ID, product)
  }

}

export const mutations = {
  [MUTATION_TYPES.GET_PRODUCT](state, products) {
    state.products = products
  },
  [MUTATION_TYPES.GET_PRODUCTS_BY_CATEGORY](state, {products, category}) {
    const productsByCategory = products.filter(item =>
      item.attributes.category === category
    )
    state.products = productsByCategory
  },
  [MUTATION_TYPES.GET_PRODUCT_BY_ID](state, product) {
    state.productById = product
  }

}

export const state = () => ({
  loading: false,
  products: [],
  productById: {}
})

export const getters = {
  products: state => state.products,
  loading: state => state.loading,
  isCome: state => !!state.products.length,
  productById: state => state.productById,
}



