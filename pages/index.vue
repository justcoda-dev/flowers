<template>
  <div class='main-page'>
    <Slider class='main-page__slider' :list='slides'/>
    <div class="main-page__features">
      <TextWithImage
        v-for="feature of features"
        :key="feature.id"
        :item="feature"
      />
    </div>
    <div class="main-page__category-banners">
      <Banner
        v-for="banner of categoryBanners"
        :key="banner.id"
        :banner="banner"
      />
    </div>
    <div class="main-page__product-list">
      <Product @addProduct="addProduct" v-for="product of products" :product="product"
               :key="product.id"/>
    </div>
    <SalesBanner class="main-page__sales-banner" :banner="saleBanner"/>
    <Comments :comments="comments"/>
  </div>
</template>

<script>
import Banner from "~/components/Banner/Banner";
import Comments from "~/components/Comments/Comments";
import Product from "~/components/Product/Product";
import SalesBanner from "~/components/SalesBanner/SalesBanner";
import Slider from '~/components/Slider/Slider'
import TextWithImage from "~/components/UI/TextWithImage";

import {mapActions} from "vuex"

export default {
  name: 'IndexPage',
  components: {Comments, Product, SalesBanner, Banner, TextWithImage, Slider},
  layout: 'default',
  data: () => {
    return {
      slides: [],
      features: [],
      categoryBanners: [],
      products: [],
      saleBanner: {},
      comments: [],
    }
  },
  methods: {
    ...mapActions({addProduct: "cart/addProduct"})
  },
  async created() {
    try {
      const {data: slides} = await this.$axios.$get('slides?populate=image')
      const {data: features} = await this.$axios.$get('features?populate=image')
      const {data: categoryBanners} = await this.$axios.$get('category-banners?populate=image')
      const {data: saleBanner} = await this.$axios.$get('sale-banner?populate=image')
      const {data: products} = await this.$axios.$get('flower-pots?populate=image')
      const {data: comments} = await this.$axios.$get('comments?populate=icon')


      this.slides = slides
      this.features = features
      this.categoryBanners = categoryBanners
      this.saleBanner = saleBanner
      this.products = products
      this.comments = comments
    } catch (e) {
      console.error("index page error,", e)
    }

  }

}
</script>
<style lang='scss'>
.main-page {
  height: 100%;
  box-sizing: border-box;

  // slider
  &__slider {
    height: 100%;
    min-height: 600px;
    margin: 15px;
  }

  //  /slider
  //  features
  &__features {
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
  }

  //  /features
  //  banners
  &__category-banners {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  //  /banners
  //  sales-banner
  &__sales-banner {
    margin: 15px;
  }

  //  /sales-banner
  //  products-list
  &__product-list {
    display: flex;
  }

  //  /products-list
}
</style>
<!--populate-->
