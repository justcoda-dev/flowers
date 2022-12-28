<template>
  <div v-if="propsIsCome" class="sales-banner">
    <img class="sales-banner__image"
         :src="`https://api.kvitnychok.store${banner.attributes?.image?.data?.attributes?.url}`"
         alt="#">
    <div class="sales-banner__text-block">
      <Title class="sales-banner__title-name">Акція</Title>
      <Title class="sales-banner__title-text" type="h3" :text="banner.attributes?.title"/>
      <ButtonGreen>
        <NuxtLink :style="{color: 'white'}" to="flower-pots/orchid">
          Замовити
        </NuxtLink>
      </ButtonGreen>
    </div>
  </div>
  <Loading v-else/>
</template>

<script>
import ButtonGreen from "~/components/UI/ButtonGreen";
import Loading from "~/components/UI/Loading";
import Title from "~/components/UI/Title";

export default {
  name: "SalesBanner",
  components: {Loading, ButtonGreen, Title},
  props: {
    banner: {
      type: Object,
      require: true
    },
  },
  computed: {
    propsIsCome() {
      return Object.keys(this.banner).length
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/variables";

.sales-banner {
  font-family: 'Fira Sans', sans-serif;
  position: relative;
  display: flex;
  height: 450px;
  background: $bodyBackground;

  @media screen and (max-width: $mediaSWidth) {
    height: 350px;
  }
  @media screen and (max-width: $mediaMWidth) {
    &:before {
      position: absolute;
      content: "";
      background: #ffffff;
      opacity: .4;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }


  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    @media screen and (max-width: $mediaMWidth) {
      filter: blur(2px);
    }

  }

  &__text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    padding-right: 30px;
    right: 0;
    position: absolute;
    @media screen and (max-width: $mediaMWidth) {
      width: 100%;
      padding: 0;
      z-index: 2;
    }
  }

  &__title-name {
    color: $sliderText;
    font-weight: 400;
  }

  &__title-text {
    text-align: center;
    color: $sliderTitle;
    font-weight: 600;
  }

  &__date {
    font-size: 1.1rem;
  }
}
</style>
