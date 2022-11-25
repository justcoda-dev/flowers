<template>
  <div class='slider'>
    <ArrowButton type='left' @click='onArrowButtonClickPreviousHandler' />
    <ul class='slider-list'>
      <Slide
        v-for='slide of list'
        :key='slide.id'
        :slide='slide'
      />
    </ul>
    <ArrowButton type='right' @click='onArrowButtonClickNextHandler' />
  </div>
</template>

<script>

import Slide from '@/components/Slider/Slide'
import ArrowButton from '@/components/UI/ArrowButton'

export default {
  name: 'Slider',
  components: { Slide, ArrowButton },
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  data: () => {
    return {
      itemsInSlide: 1,
      slidePageIndex: 0,
      sliderInterval: 0
    }
  },
  computed: {
    maxPages() {
      return (this.list?.length / this.itemsInSlide) - 1
    }
  },
  methods: {
    onArrowButtonClickNextHandler() {
      this.slidePageIndex = this.slidePageIndex < this.maxPages ? this.slidePageIndex + 1 : 0
    },
    onArrowButtonClickPreviousHandler() {
      this.slidePageIndex = this.slidePageIndex !== 0 ? this.slidePageIndex - 1 : this.maxPages
    }
  },
  mounted() {
    console.log(this.list)
    this.sliderInterval = setInterval(() => {
      this.onArrowButtonClickNextHandler()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval)
  }
}
</script>

<style lang='scss' scoped>
@import "assets/variables";

.slider {
  height: 100%;
  max-height: 620px;

  .slider-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }


}
</style>
