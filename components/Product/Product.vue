<template>
  <div class="product">
    <img class="product__image"
         :src="`http://localhost:1337${product.attributes?.image?.data?.attributes?.url}`" alt="">
    <p class="product__title">{{ product.attributes?.title }}</p>
    <p class="product__price">{{ product.attributes?.price }} грн</p>
    <p class="product__count">{{ product.attributes?.count }} шт</p>
    <ButtonAdd>Додати в кошик</ButtonAdd>
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
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    max-width: 300px;
    min-height: 120px;
    min-width: 120px;
  }

  &__title {
  }

  &__price {
  }

  &__count {
  }
}
</style>
