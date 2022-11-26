<template>
  <div class="button-home">
    <img
      class="button-home__image"
      src="http://localhost:1337/uploads/shopping_cart_0759e01f5c.png?updated_at=2022-11-26T11:28:16.213Z"
      alt="">
  </div>
</template>

<script>
export default {
  name: "ButtonCart"
}
</script>

<style lang="scss" scoped>
.button-home {
  width: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &__image {
    width: 100%;
  }
}
</style>
