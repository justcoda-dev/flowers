<template>
  <a class="link" :href="social.attributes?.link" target="_blank">
    <img class="link__image"
         :src="`http://localhost:1337${social.attributes?.icon?.data?.attributes?.url}`">
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
