<template>
  <div
    class="cart-header"
    :class="{'show-list':showList}"
  >
    <ButtonCart
      @click="onShowListToggle"
      :cartCount="cartCount"
      ref="cart-btn"
    />
    <div
      v-show="showList"
      class="cart-header__wrapper"
      ref="cart-wrapper"
    >
      <CartProductList
        v-if="productsList.length"
        class="cart-header__list"
        :list="productsList"
      />
      <p v-else>Корзина пуста</p>
      <div class="cart-header__buttons">
        <span>
          <b>Загальна вартість:</b>
          {{ cartFullPrice }}грн
        </span>
        <ButtonViewCart
          @click="onViewCart"
        >
          Оформити
        </ButtonViewCart>
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
    const container = this.$refs["cart-wrapper"]
    const btn = this.$refs["cart-btn"].$el

    if (container || btn) {
      window.addEventListener("click", (e) => {
        if (!container.contains(e.target) && !btn.contains(e.target)) {
          this.showList = false
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.show-list {
  @media screen and (max-width: $mediaMWidth) {
    &:before {
      position: fixed;
      display: block;
      content: "";
      width: 100%;
      height: 100vh;
      background: #333333;
      opacity: .95;
      left: 0;
      bottom: 0;
      top: 0;
      z-index: -1;
    }
  }
}

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
    border: 1px solid $borderColor;
    max-height: 300px;
    box-sizing: border-box;

    @media screen and (max-width: $mediaMWidth) {
      left: 0;
      right: 0;
      width: 100%;
      max-height: 100%;
      box-sizing: border-box;
      position: fixed;

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
