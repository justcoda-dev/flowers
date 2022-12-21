const MUTATION_TYPES = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_BY_CATEGORY: "GET_PRODUCTS_BY_CATEGORY",
  GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID"
}

export const actions = {
  async getProducts({commit, dispatch}) {
    try {
      const {data: products} = await this.$axios.$get('products?populate=image')
      commit(MUTATION_TYPES.GET_PRODUCTS, products)
    } catch (e) {
      console.error("getProducts error", e)
      setTimeout(() => {
        dispatch("getProducts")
      }, 5000)
    }
  },
  async getProductsByCategory({commit}, category) {
    try {
      const {data: productsByCategory} = await this.$axios.$get(`${category}?populate=deep`)
      commit(MUTATION_TYPES.GET_PRODUCTS_BY_CATEGORY, productsByCategory.attributes?.products?.data)
    } catch (e) {
      commit(MUTATION_TYPES.GET_PRODUCTS_BY_CATEGORY, [])
    }
  },
  async getProductById({commit}, id) {
    try {
      const {data: product} = await this.$axios.$get(`products/${id}?populate=image`)
      commit(MUTATION_TYPES.GET_PRODUCT_BY_ID, product)
    } catch (e) {
      console.error("get product by id error", e)
    }
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_PRODUCTS](state, products) {
    state.products = products
  },
  [MUTATION_TYPES.GET_PRODUCTS_BY_CATEGORY](state, productsByCategory) {

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



