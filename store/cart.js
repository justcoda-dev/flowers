const MUTATION_TYPES = {
  ADD_PRODUCT: "ADD_PRODUCT",
  MINUS_PRODUCT: "MINUS_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  CLEAN_CART: "CLEAN_CART"
}
export const actions = {
  addProduct({commit}, product) {
    commit(MUTATION_TYPES.ADD_PRODUCT, product)
  },
  minusProduct({commit}, product) {
    commit(MUTATION_TYPES.MINUS_PRODUCT, product)
  },
  deleteProduct({commit}, product) {
    commit(MUTATION_TYPES.DELETE_PRODUCT, product)
  },
  cleanCart({commit}) {
    commit(MUTATION_TYPES.CLEAN_CART)
  }
}

export const mutations = {
  [MUTATION_TYPES.ADD_PRODUCT]({cart}, product) {
    const cartHaveProductIndex = cart.findIndex(prod => prod.id === product.id)
    if (cartHaveProductIndex >= 0) {
      cart[cartHaveProductIndex].attributes.count++
      cart.splice(cartHaveProductIndex, 1, cart[cartHaveProductIndex])
    } else {
      product.attributes.count = 1
      cart.push(product)
    }
  },
  [MUTATION_TYPES.MINUS_PRODUCT]({cart}, product) {
    const cartHaveProductIndex = cart.findIndex(prod => prod.id === product.id)
    if (cartHaveProductIndex >= 0 && cart[cartHaveProductIndex].attributes.count > 1) {
      cart[cartHaveProductIndex].attributes.count--
      cart.splice(cartHaveProductIndex, 1, cart[cartHaveProductIndex])

    } else if (cart[cartHaveProductIndex].attributes.count === 1) {
      cart.splice(cartHaveProductIndex, 1)
    }
  },
  [MUTATION_TYPES.DELETE_PRODUCT]({cart}, product) {
    const cartHaveProductIndex = cart.findIndex(prod => prod.id === product.id)
    if (cartHaveProductIndex >= 0) {
      cart.splice(cartHaveProductIndex, 1)
    }
  },
  [MUTATION_TYPES.CLEAN_CART](state) {
    state.cart = [];
  }
}

export const state = () => ({
  cart: []
})

export const getters = {
  getCart: state => state.cart,
  getCartCount: state => state.cart.length,
  cartFullPrice: state => state.cart.reduce((acc, curr) => {
    acc += parseFloat(curr.attributes.price) * parseInt(curr.attributes.count)
    return acc
  }, 0),
}



