<template>
  <div class="image-with-text">
    <img class="image-with-text__image"
         :src="`http://localhost:1337${item.attributes.image?.data?.attributes?.url}`" alt="">
    <span class="image-with-text__text">{{ item.attributes?.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextWithImage',
  props: {
    item: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.image-with-text {
  display: flex;
  align-items: center;
  flex: 1 1 280px;
  border: 1px solid $borderColor;
  margin: 10px;
  padding: 20px;

  &__image {
    height: 30px;
    width: 30px;
    padding-right: 15px;
    border-right: 1px solid $borderColor;
  }

  &__text {
    padding-left: 15px;
  }
}
</style>
