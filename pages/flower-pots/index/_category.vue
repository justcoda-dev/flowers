<template>
  <div class="products-page__product-list">
    <Product @addProduct="addProduct" v-for="product of products" :product="product"
             :key="product.id"/>
  </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  computed: {
    ...mapGetters({products: "products/products"})
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
      addProduct: "cart/addProduct",
      getProductsByCategory: "products/getProductsByCategory"
    })
  },
  created() {
    if (this.$route.params.category) {
      this.getProductsByCategory(this.$route.params.category)
    } else {
      this.getProducts()
    }
  }
}
</script>

<style scoped>

</style>
