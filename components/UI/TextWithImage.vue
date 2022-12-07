<template>
  <div class="image-with-text">
    <img class="image-with-text__image"
         :src="item.image" alt="">
    <span class="image-with-text__text">{{ item.title }}</span>
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
  flex: 1 1 250px;
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
  @media screen and (max-width: $mediaSWidth) {
    margin: 5px;
    padding: 10px;
  }
}
</style>
