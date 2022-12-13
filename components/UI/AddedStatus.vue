<template>
  <div class="added_product">
    <span class="added_product__text">Додано в корзину</span>
  </div>
</template>

<script>
export default {
  name: "AddedStatus",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.added_product {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  transition: .7s;

  &__text {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
  }
}
</style>
