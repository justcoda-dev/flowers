<template>
  <footer>
    footer
    <div class="phone-list">
      <p>phone: +380988661614</p>
      <p>e-mail: +380988661614</p>
    </div>
    <div class="social-list">
      <Title class="social-list__title" type="h5" text="Підписуйся"/>
      <SocialLink class="social-list__link" v-for="social of socialList" :key="social.id"
                  :social="social"/>
    </div>
  </footer>
</template>

<script>
import SocialLink from "~/components/Social/SocialLink";
import Title from "~/components/UI/Title";

export default {
  name: "Footer",
  components: {Title, SocialLink},
  props: {
    socialList: {
      type: Array,
      require: false
    }
  }
};
</script>

<style lang="scss" scoped>
.social-list {
  &__title {
    color: black;
  }

  &__link {

  }
}
</style>
