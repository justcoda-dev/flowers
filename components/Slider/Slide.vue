<template>
  <li  class='slide'
      :style='{
    background: `url(https://api.kvitnychok.store${slide.attributes?.image?.data?.attributes?.url})`,
    }
'>
    <div class='slide__text-wrapper'>
      <Title
        class='slide__title-title'
        type='h2'
        :text='slide.attributes?.title'
      />
      <Description
        class='slide__title-description'
        :text='slide.attributes?.text'
      />
    </div>
  </li >
</template>

<script>
import Description from '@/components/UI/Description'
import Title from '@/components/UI/Title'

export default {
  name: 'Slide',
  components: {Description, Title},
  props: {
    slide: {
      type: Object,
      require: true
    }
  },


}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.slide {
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 50px;
    z-index: 1;
  }

  &__title-title {
    font-family: 'Fira Sans', sans-serif;
    color: $sliderTitle;
    font-weight: 700;
  }

  &__title-description {
    line-height: 1.6;
    color: $sliderText;
    font-weight: 500;
  }

  @media screen and (max-width: $mediaSWidth) {

  }
}
</style>
