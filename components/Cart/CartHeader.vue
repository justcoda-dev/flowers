<template>
  <div class="cart-header" ref="cart-header">
    <ButtonCart :cartCount="cartCount" @click="onShowListToggle"/>
    <div v-show="showList" class="cart-header__wrapper">
      <CartProductList class="cart-header__list" v-if="productsList.length"
                       :list="productsList"/>
      <p v-else>Корзина пуста</p>
      <div class="cart-header__buttons">
        <!--        <ButtonConfirm @click="onConfirm">Підтвердити</ButtonConfirm>-->
        <span><b>Загальна вартість:</b> {{ cartFullPrice }}грн</span>
        <ButtonViewCart @click="onViewCart">Корзина</ButtonViewCart>
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
    },
    cartFullPrice: {
      type: [Number, String],
      require: true
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
      this.$router.push("/form")
      //  redirect to form
    },
    onViewCart() {
      this.showList = false
      this.$router.push("/cart")
    }
  },
  mounted() {
    window.addEventListener("click", (e) => {
      const container = this.$refs["cart-header"]
      console.log(container.contains(e.target))
      if (!container.contains(e.target)) {
        this.showList = false
      }
    })
  },
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
    width: 400px;
    padding: 10px;
    box-shadow: 2px 2px 4px #333333;
    @media screen and (max-width: $mediaSWidth) {
      width: 250px;
    }
  }

  &__buttons {
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
