<template>
  <div @mouseenter="onSliderMouseEnter" @mouseleave="onSliderMouseLeave" class='slider'>
    <ArrowButton v-if="showArrowButton" class="slider__left-btn" type='left'
                 @click='onArrowButtonClickPreviousHandler'/>
    <ArrowButton v-if="showArrowButton" class="slider__right-btn" type='right'
                 @click='onArrowButtonClickNextHandler'/>
    <ul class='slider-list'>
      <Slide
        v-for='(slide, index) of list'
        :key='slide.id'
        :slide='slide'
        v-if="slidePageIndex === index"
      />
    </ul>

  </div>
</template>

<script>

import Slide from '@/components/Slider/Slide'
import ArrowButton from '@/components/UI/ArrowButton'

export default {
  name: 'Slider',
  components: {Slide, ArrowButton},
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
      sliderInterval: 0,
      showArrowButton: false,
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
    },
    onSliderMouseEnter() {
      this.showArrowButton = true
    },
    onSliderMouseLeave() {
      this.showArrowButton = false
    }
  },
  mounted() {
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
  min-height: 300px;
  position: relative;
  box-sizing: border-box;

  &__left-btn {
    position: absolute;
    left: 0;
    bottom: 50%;
    z-index: 2;
    opacity: .7;
    animation: smoothAnimation 1s;

    &:hover {
      background: #000000;
      opacity: 1;
    }
  }

  &__right-btn {
    position: absolute;
    right: 0;
    bottom: 50%;
    z-index: 2;
    opacity: .7;
    animation: smoothAnimation 1s;

    &:hover {
      background: #000000;
      opacity: 1;
    }
  }

  .slider-list {
    height: 600px;
    list-style: none;
    padding: 0;
    margin: 0;
  }


}

@keyframes smoothAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .7;
  }
}
</style>
