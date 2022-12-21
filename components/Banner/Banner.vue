<template>
  <div class="banner" @click="onClick">
    <figure class="banner__image-wrapper" :class="{isActive}">
      <img class="banner__image"
           :src="banner.attributes?.image?.data?.attributes?.url" alt="">
      <Title class="banner__title" type="h3" :text="banner.attributes?.title"/>
      <NuxtLink class="banner__link" :to="banner.attributes?.to">
        Переглянути
      </NuxtLink>
    </figure>
  </div>
</template>

<script>
import Title from "@/components/UI/Title";

export default {
  name: "Banner",
  components: {Title},
  props: {
    banner: {
      type: Object,
      require: true
    }
  },
  data: () => {
    return {
      isActive: false,
      mobile: false
    }
  },
  methods: {
    onClick() {
      this.$router.push(this.banner.attributes?.to)
      this.$emit("click", this.banner.attributes.category)
    }
  },
  watch: {
    "$route"(to) {
      this.isActive = to.path === this.banner.attributes?.to
    }
  }, mounted() {
    this.isActive = this.$route.path === this.banner.attributes?.to
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.isActive {
  border: 2px solid $sliderText;
}

.banner {
  font-family: 'Fira Sans', sans-serif;
  margin: 15px;
  display: flex;
  flex: 0 1 280px;
  cursor: pointer;

  &__image {
    width: 100%;
    height: 100%;
    transition: .5s ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__image-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  &__title {
    position: absolute;
    z-index: 1;
    top: 25%;
    left: 10%;
    color: $sliderTitle;
    text-transform: uppercase;
    font-weight: 500;
    opacity: .7;
    transition: .3s;
    font-size: clamp(1.8rem, 5vw, 3.5rem);
  }

  &__link {
    position: absolute;
    z-index: 1;
    top: 55%;
    left: 10%;
    font-weight: 400;
    font-size: 1.2rem;
    color: $sliderTitle;
    text-transform: uppercase;
    opacity: .7;
    transition: .3s;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
