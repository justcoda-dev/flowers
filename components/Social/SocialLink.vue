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
  &__image {
    fill: #cb0d29;
  }
}
</style>
