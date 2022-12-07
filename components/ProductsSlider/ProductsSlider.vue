<template>
  <div class="products-slider" ref="slider-wrapper">
    <ArrowButton class="products-slider__left-btn" @click="onArrowButtonClickPreviousHandler"
                 type="left"/>
    <ArrowButton class="products-slider__right-btn" @click="onArrowButtonClickNextHandler"
                 type="right"/>
    <div class="products-slider__list"
         :style="{ transform: `translate3d(${transformPx}px, 0px, 0px) `, width:`${listWidth}px`}">
      <Product
        @addProduct="addProductToCart"
        ref="product"
        class="products-slider__item"
        v-for="item of list"
        :product="item"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import Product from "~/components/Product/Product";
import ArrowButton from "~/components/UI/ArrowButton";

export default {
  name: "ProductsSlider",
  components: {ArrowButton, Product},
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data: () => {
    return {
      transformPx: 0,
      elementWidth: 0,
      maxLength: 0,
      listWidth: 0,
      sliderWrapperWidth: 0,
      elementsInLine: 0,
      productsLength: 0
    }
  },
  methods: {
    onArrowButtonClickPreviousHandler() {
      if (this.transformPx >= 0 && this.productsLength >= this.elementsInLine) {
        this.transformPx = -this.maxLength + (this.elementsInLine * this.elementWidth)
      } else if (this.transformPx < 0) {
        this.transformPx = this.transformPx + this.elementWidth
      } else {
        return
      }
    },
    onArrowButtonClickNextHandler() {
      if (this.transformPx > 0 && this.productsLength >= this.elementsInLine) {
        this.transformPx = -this.maxLength + (this.elementsInLine * this.elementWidth)
      } else if (this.transformPx > -this.maxLength + (this.elementsInLine * this.elementWidth)) {
        this.transformPx = this.transformPx - this.elementWidth
      } else if (this.transformPx <= -this.elementWidth) {
        this.transformPx = 0
      } else {
        return
      }
    },
    addProductToCart(product) {
      this.$emit("addProduct", product)
    }
  }
  ,
  mounted() {
    this.elementWidth = this.$refs.product[0].$el.clientWidth
    this.productsLength = this.$refs.product.length
    this.maxLength = this.productsLength * this.elementWidth
    this.listWidth = (this.productsLength * 2) * this.elementWidth
    this.sliderWrapperWidth = this.$refs['slider-wrapper'].clientWidth
    this.elementsInLine = Math.round((this.sliderWrapperWidth / this.elementWidth)) - 1

    console.log(this.elementsInLine)
    console.log(this.elementsInLine)
  }
}
</script>

<style lang="scss" scoped>
.products-slider {
  display: flex;
  overflow: hidden;
  position: relative;

  &__list {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    transition: all 500ms ease 0s;
    transition-duration: 500ms;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
  }

  &__item {
    margin: 0 15px;
    min-width: 200px;
  }

  &__left-btn {
    position: absolute;
    left: 0;
    bottom: 50%;
    z-index: 2;
    opacity: .7;
    animation: smoothAnimation 1s;

    &:hover {
      background: #000000;
      opacity: 1;
    }
  }

  &__right-btn {
    position: absolute;
    right: 0;
    bottom: 50%;
    z-index: 2;
    opacity: .7;
    animation: smoothAnimation 1s;

    &:hover {
      background: #000000;
      opacity: 1;
    }
  }

}
</style>