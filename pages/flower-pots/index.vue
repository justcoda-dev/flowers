<template>
  <div class="products-page">
    <Title type="h4" :style="{color:'black',padding:'20px' }">Категорії</Title>
    <div class="products-page__category-banners">
      <Banner
        class="products-page__category-banners-item"
        v-for="category of categories"
        :key="category.id"
        :banner="category"
      />
    </div>
    <Title type="h4" :style="{color:'black',padding:'20px' }">Товар</Title>
    <NuxtChild/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Product from "~/components/Product/Product";
import Banner from "~/components/Banner/Banner";
import Title from "~/components/UI/Title";

export default {
  name: "index",
  components: {Title, Product, Banner},
  computed: {
    ...mapGetters({products: "products/products", categories: "productCategories/categories"})
  },
  watch: {
    "$route"(val) {
      const category = val.params?.category
      if (category) {
        this.getProductsByCategory(category)
      } else {
        this.getProducts()
      }
    }
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProduct",
      getProducts: "products/getProducts",
      getCategories: "productCategories/getCategories",
      getProductsByCategory: "products/getProductsByCategory"
    }),
  },
  created() {
    this.getCategories()
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.products-page {
  &__category-banners {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }

  &__category-banners-item {
    flex: 0 0 280px;
    @media screen and (max-width: $mediaMWidth) {
      flex: 0 0 130px;
    }
  }

  &__product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
