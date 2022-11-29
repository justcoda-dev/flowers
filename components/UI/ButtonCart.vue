<template>
  <div @click="onClick" class="button-home">

    <img
      class="button-home__image"
      src="~assets/icons/shopping-cart.png"
      alt="">
    <div v-if="cartCount" class="button-home__count"> {{ cartCount }}</div>
  </div>
</template>

<script>
export default {
  name: "ButtonCart",
  props: {
    cartCount: {
      type: Number,
      require: true
    }
  },
  methods: {
    onClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.button-home {
  position: relative;
  width: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &__image {
    width: 100%;
  }

  &__count {
    position: absolute;
    right: 5px;
    top: 0;
    background: #59B210;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
    font-weight: 500;
    color: $white;
  }
}
</style>
