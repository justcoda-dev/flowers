<template>
  <a class="link" :href="social.link" target="_blank">
    <img
      class="link__image"
      :src="social.icon"
    >
  </a>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    social: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.link {
  margin: 0 5px;

  &__image {
    height: 33px;
    width: 33px;
    @media screen and (max-width: $mediaMWidth) {
      height: 53px;
      width: 53px;
    }
  }
}
</style>
