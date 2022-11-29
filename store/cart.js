const MUTATION_TYPES = {
  ADD_PRODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT"
}
export const actions = {
  addProduct({commit}, product) {
    commit(MUTATION_TYPES.ADD_PRODUCT, product)
  }
}

export const mutations = {
  [MUTATION_TYPES.ADD_PRODUCT]({cart}, product) {
    const cartHaveProductIndex = cart.findIndex(prod => prod.id === product.id)
    if (cartHaveProductIndex >= 0) {
      cart[cartHaveProductIndex].attributes.count++
    } else {
      product.attributes.count = 1
      cart.push(product)
    }
  },
  [MUTATION_TYPES.DELETE_PRODUCT](state, product) {

  }
}

export const state = () => ({
  cart: []
})

export const getters = {
  getCart: state => state.cart,
  getCartCount: state => state.cart.length
}



