<template>
  <div class='main-page'>
    <Slider class='main-page__slider' :list='slides'/>
  </div>
</template>

<script>
import Slider from '~/components/Slider/Slider'

export default {
  name: 'IndexPage',
  components: {Slider},
  layout: 'default',
  data: () => {
    return {
      slides: []
    }
  },

  async created() {
    const {data: slides} = await this.$axios.$get('slides?populate=image')
    this.slides = slides
  }

}
</script>
<style lang='scss'>
.main-page {
  &__slider {
    height: 1px;
  }
}
</style>
<!--populate-->
