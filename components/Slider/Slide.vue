<template>
  <li class="slide">
    <div class="slide__text-wrapper">
      <Title
          class="slide__title-number"
          type="h1"
          :text="slide.id"
      />
      <Title
          class="slide__title-title"
          type="h5"
          :text="slide.props?.title"
      />
      <Description
          class="slide__title-description"
          :text="slide.props?.text"
      />
    </div>
    <div class="slide__image-wrapper">
      <img class="slide__image" :src="slide.props?.image">
    </div>
  </li>
</template>

<script>
import Description from "@/components/UI/Description"
import Title from "@/components/UI/Title";

export default {
  name: "Slide",
  components: {Description, Title},
  props: {
    slide: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/colors";

.slide {
  display: flex;
  margin: 5px;
  flex: 1 0 300px;

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 50%;

  }

  &__title-number {
    color: $red;
  }

  &__title-title {
    color: $darkGrey;
  }

  &__title-description {
    color: $darkGrey;
    line-height: 1.6;
  }

  &__image-wrapper {
    margin: auto;
    max-width: 50%;
  }

  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>