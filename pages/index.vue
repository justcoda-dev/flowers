<template>
  <div class='main-page'>
    <Slider class='main-page__slider'
            :list='slides'
    />
    <div class="main-page__features container">
      <TextWithImage
        v-for="feature of features"
        :key="feature.id"
        :item="feature"
      />
    </div>
    <div class="main-page__category-banners container">
      <Banner
        class="banner"
        v-for="banner of categories"
        :key="banner.id"
        :banner="banner"
      />
    </div>
    <ProductsSlider
      class="main-page container"
      @addProduct="addProduct"
      :list="products"
    />
    <SalesBanner
      class="main-page__sales-banner container"
      :banner="saleBanner"
    />
    <Comments
      class="main-page__comments"
      :comments="comments"
    />
  </div>
</template>

<script>
import Banner from "~/components/Banner/Banner";
import Comments from "~/components/Comments/Comments";
import Product from "~/components/Product/Product";
import ProductsSlider from "~/components/ProductsSlider/ProductsSlider";
import SalesBanner from "~/components/SalesBanner/SalesBanner";
import Slider from '~/components/Slider/Slider'
import TextWithImage from "~/components/UI/TextWithImage";


import {mapActions, mapGetters} from "vuex"

export default {
  name: 'IndexPage',
  components: {ProductsSlider, Comments, Product, SalesBanner, Banner, TextWithImage, Slider},
  layout: 'default',
  computed: {
    ...mapGetters({
      products: "products/products",
      categories: "productCategories/categories",
      slides: "slider/slides",
      features: "features/features",
      saleBanner: "saleBanner/saleBanner",
      comments: "comments/comments"
    })
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProduct",
      getProducts: "products/getProducts",
      getCategories: "productCategories/getCategories",
      getSlides: "slider/getSlides",
      getFeatures: "features/getFeatures",
      getSaleBanner: "saleBanner/getSaleBanner",
      getComments: "comments/getComments"
    })
  },
  created() {
    try {
      this.getSaleBanner()
      this.getFeatures()
      this.getProducts()
      this.getCategories()
      this.getSlides()
      this.getComments()
    } catch (e) {
      console.error("index page error,", e)
    }
  }
}
</script>
<style lang='scss'>
@import "assets/variables";

.main-page {
  height: 100%;
  box-sizing: border-box;
  max-width: 1920px;
  min-width: 320px;
  margin: 0 auto;

  @media screen and (max-width: $mediaMWidth) {
    margin: 80px auto 20px auto;
  }
  // global
  .container {
    margin: 45px 45px 0 45px;
  }

  // /global
  // slider
  &__slider {
    margin: 30px 15px;
    animation: ease-in 0.3s aniFromRight;
  }

  //  /slider
  //  features
  &__features {
    display: flex;
    flex-wrap: wrap;
    animation: ease-in 1s aniFromLeft;
  }

  //  /features
  //  banners
  &__category-banners {
    display: flex;
    justify-content: center;
    @media screen and (max-width: $mediaLWidth) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: $mediaMWidth) {
      .banner {
        flex: 0 1 auto;
      }
    }
  }

  //  /banners
  //  products-list
  &__product-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  }

  //  /products-list
  //  sales-banner
  &__sales-banner {

  }

  //  /sales-banner
  // comments
  &__comments {
    margin-top: 45px;
  }

  // /comments
  //   media
  @media screen and (max-width: $mediaXlWidth) {
    .container {
      margin: 45px 45px 0 45px;
    }
  }

  @media screen and (max-width: $mediaLWidth) {
    .container {
      margin: 35px 35px 0 35px;
    }
  }
  @media screen and (max-width: $mediaMWidth) {
    .container {
      margin: 25px 25px 0 25px;
    }
  }
  @media screen and (max-width: $mediaSWidth) {
    .container {
      margin: 5px 5px 0 5px;
    }
  }
}

@keyframes aniFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes aniFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}


</style>
<!--populate-->
