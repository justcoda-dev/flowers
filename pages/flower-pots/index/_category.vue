<template>
  <div class="products">
    <!--    <div class="products__filters">filter</div>-->
    <div class="products__product-list">
      <Product v-if="products.length"
               @addProduct="addProduct"
               v-for="product of products"
               :product="product"
               :key="product.id"/>
      <div v-else>Нажаль продукції не існує</div>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Product from "~/components/Product/Product";

export default {
  components: {
    Product
  },
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

<style lang="scss" scoped>
.products {
  &__filters {

  }

  &__product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
