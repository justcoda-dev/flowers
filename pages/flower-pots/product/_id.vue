<template>
  <div>
    <ProductDetails @addToCart="addProductToCart" :product="productById"/>
  </div>
</template>

<script>
import Product from "~/components/Product/Product";
import ProductDetails from "~/components/ProductDetails/ProductDetails";
import {mapGetters, mapActions} from "vuex"

export default {
  name: "idPage",
  components: {ProductDetails, Product},
  computed: {
    ...mapGetters({productById: "products/productById"})
  },
  methods: {
    ...mapActions({getProductById: "products/getProductById", addProductToCart: "cart/addProduct"})
  },
  created() {
    if (this.$route.params) {
      console.log(this.$route.params.id)
      this.getProductById(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
