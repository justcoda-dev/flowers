<template>
  <ul class="cart-list">
    <li class="cart-list__item" v-for="product of list">
      <img class="cart-list__item-image"
           :src="`https://api.kvitnychok.store${product.attributes?.image?.data?.attributes?.url}`"
           alt="">
      <div class="cart-list__item-description">
        <p class="cart-list__item-title">{{ product.attributes?.title }}</p>
        <p class="cart-list__item-count"> {{ product.attributes?.count }} шт x
          {{ product.attributes?.price }} грн</p>
        <!--        <p class="cart-list__item-total-price">ціна грн</p>-->
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CartProductList",
  props: {
    list: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 50px;
  overflow: auto;
  max-width: 100%;
  box-sizing: border-box;

  &__item {
    display: flex;
    padding: 10px;
    border: 1px solid $borderColor;
    margin: 5px 0;
    border-radius: 5px;
  }

  &__item-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    position: center;
    border-radius: 5px;

  }

  &__item-description {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }

  &__item-count {

  }

  &__item-title {

  }

  &__item-total-price {
  }
}

</style>
