<template>
  <ProductDetails v-if="productById" @addToCart="addProductToCart" :product="productById"/>
  <Loading v-else/>
</template>

<script>
import Product from "~/components/Product/Product";
import ProductDetails from "~/components/ProductDetails/ProductDetails";
import {mapGetters, mapActions} from "vuex"
import Loading from "~/components/UI/Loading";

export default {
  name: "idPage",
  components: {Loading, ProductDetails, Product},
  computed: {
    ...mapGetters({productById: "products/productById"})
  },
  methods: {
    ...mapActions({getProductById: "products/getProductById", addProductToCart: "cart/addProduct"})
  },
  created() {
    if (this.$route.params) {
      this.getProductById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
