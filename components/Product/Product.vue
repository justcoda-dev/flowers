<template>
  <div class="product" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <div class="product__image">
      <img
        :src="`https://kvitnychok.herokuapp.com${product.attributes?.image?.data?.attributes?.url}`" alt="">
    </div>
    <div class="product__text-wrapper">
      <p class="product__title">{{ product.attributes?.title }}</p>
      <p class="product__price">{{ product.attributes?.price }} грн</p>
    </div>
    <!--    <p class="product__count">{{ product.attributes?.count }} шт</p>-->
    <ButtonAdd @click="onAddProduct" v-if="hover" class="product__button">Додати в кошик</ButtonAdd>
  </div>
</template>

<script>
import ButtonAdd from "~/components/UI/ButtonAdd";

export default {
  name: "Product",
  components: {ButtonAdd},
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  data: () => {
    return {
      hover: false
    }
  },
  methods: {
    onMouseOver() {
      this.hover = true
    },
    onMouseLeave() {
      this.hover = false
    },
    onAddProduct() {
      this.$emit("addProduct", this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.product {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid $bodyBackground;
  border-radius: 5px;
max-width: 200px;
  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
      min-height: 140px;
      min-width: 120px;
    }

    &:hover {
      &:before {
        position: absolute;
        content: "";
        background: white;
        width: 100%;
        height: 100%;
        opacity: 50%;
      }
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: $sliderTitle;
    }
  }

  &__price {
    text-align: center;
    margin: 10px;
  }

  &__count {
  }

  //&__hover-menu {
  //  position: absolute;
  //  height: 100%;
  //  width: 100%;
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //  justify-content: flex-end;
  //    &:before {
  //      content: "";
  //      background: white;
  //      width: 100%;
  //      height: 100%;
  //      opacity: 50%;
  //    }
  //}

  &__button {
    position: absolute;
    bottom: 0;
  }
}
</style>
