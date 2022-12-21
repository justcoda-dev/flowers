<template>
  <a class="link" :href="social.link" target="_blank">
    <img class="link__image"
         :src="social.icon">
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
.link {
  margin: 0 5px;
  &__image {
    height: 33px;
    width: 33px;
    //filter: invert(12%) sepia(93%) saturate(4364%) hue-rotate(344deg) brightness(93%) contrast(101%);;
    &:hover {
      //filter: invert(31%) sepia(73%) saturate(6998%) hue-rotate(340deg) brightness(88%) contrast(102%);
    }
  }
}
</style>
