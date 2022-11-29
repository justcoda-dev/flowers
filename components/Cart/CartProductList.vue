<template>
  <ul class="cart-list">
    <li class="cart-list__item" v-for="product of list">
      <img class="cart-list__item-image"
           :src="`https://kvitnychok.herokuapp.com${product.attributes?.image?.data?.attributes?.url}`" alt="">
      <div class="cart-list__item-description">
        <p class="cart-list__item-title">{{ product.attributes?.title }}</p>
        <p class="cart-list__item-count">Усього {{ product.attributes?.count }} шт x
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

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 50px;

  &__item {
    display: flex;
    padding: 10px;
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
