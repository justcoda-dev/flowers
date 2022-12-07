<template>
  <div class="sales-banner">
    <img class="sales-banner__image"
         :src="banner.attributes?.image?.data?.attributes?.url"
         alt="">
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
</template>

<script>
import ButtonGreen from "~/components/UI/ButtonGreen";
import Title from "~/components/UI/Title";

export default {
  name: "SalesBanner",
  components: {ButtonGreen, Title},
  props: {
    banner: {
      type: Object,
      require: true
    },
  },
  data: () => {
    return {
      timer: 0
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
  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    right: 0;
    position: absolute;
  }

  &__title-name {
    color: $sliderText;
    font-weight: 400;
  }

  &__title-text {
    color: $sliderTitle;
    font-weight: 600;
  }

  &__date {
    font-size: 1.1rem;
  }
}
</style>
