<template>
  <div class="sales-banner">
    <img class="sales-banner__image"
         :src="`http://localhost:1337${banner.attributes?.image?.data?.attributes?.url}`"
         alt="">
    <div class="sales-banner__text-block">
      <Title class="sales-banner__title-name">Акція</Title>
      <Title class="sales-banner__title-text" type="h3" :text="banner.attributes?.title"/>
      <p class="sales-banner__date">Акція дійсна до {{ banner.attributes?.valid_until }} </p>
      <ButtonGreen>Замовити</ButtonGreen>
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
  },
  methods: {},
  created() {
  },
  mounted() {
    console.log(this.banner.attributes?.title)
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
