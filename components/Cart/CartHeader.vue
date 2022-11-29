<template>
  <div class="cart-header">
    <ButtonCart :cartCount="cartCount" @click="onShowListToggle"/>
    <div v-if="showList" class="cart-header__wrapper">
      <CartProductList class="cart-header__list" v-if="productsList.length" :list="productsList"/>
      <p v-else>Корзина пуста</p>
      <div class="cart-header__buttons">
        <ButtonConfirm @click="onConfirm">Confirm</ButtonConfirm>
        <ButtonViewCart @click="onViewCart">View Cart</ButtonViewCart>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductList from "~/components/Cart/CartProductList";
import ButtonCart from "~/components/UI/ButtonCart";
import ButtonConfirm from "~/components/UI/ButtonConfirm";
import ButtonViewCart from "~/components/UI/ButtonViewCart";
import Title from "~/components/UI/Title";

export default {
  name: "CartHeader",
  components: {CartProductList, Title, ButtonViewCart, ButtonConfirm, ButtonCart},
  props: {
    productsList: {
      type: Array,
      require: true
    },
    cartCount: {
      type: Number,
      require: false
    }
  },
  data: () => {
    return {
      showList: false
    }
  },
  methods: {
    onShowListToggle() {
      this.showList = !this.showList
    },
    onMouseOverCart() {
      this.showList = true
    },
    onMouseLeaveCart() {
      this.showList = false
    },
    onConfirm() {
      this.showList = false
      //  redirect to form
    },
    onViewCart() {
      this.showList = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.cart-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    background: $white;
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 5;
    right: 15px;
    top: 80px;
    width: 300px;
    padding: 10px;
  }

  &__buttons {
    justify-self: flex-end;
    display: flex;
    justify-content: space-around;
  }
}
</style>
