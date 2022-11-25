<template v-if="list">
  <div class="slider">
    <div class="slider-bar">
      <ArrowButton type="left" @click="onArrowButtonClickPreviousHandler"/>
      <ArrowButton type="right" @click="onArrowButtonClickNextHandler"/>
    </div>
    <ul class="slider-list">
      <Slide
          v-for="slide of slides[slidePageIndex]"
          :key="slide.id"
          :slide="slide"
      />
    </ul>
  </div>
</template>

<script>

import Slide from "@/components/Slider/Slide";
import ArrowButton from "@/components/UI/ArrowButton";


import sliderDTF from "@/functions/sliderDTF"

export default {
  name: "Slider",
  components: {Slide, ArrowButton},
  props: {
    list: {
      type: Array,
      require: true,
    }
  },
  data: () => {
    return {
      itemsInSlide: 2,
      slidePageIndex: 0,
      sliderInterval: 0
    }
  },
  computed: {
    slides() {
      return sliderDTF(this.list, this.itemsInSlide)
    },
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
    this.sliderInterval = setInterval(() => {
      this.onArrowButtonClickNextHandler()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/colors";

.slider {
  display: flex;
  flex-direction: column;
  padding: 0 50px 50px 50px;

  .slider-bar {
    align-self: flex-end;
    margin-bottom: 20px;

    &__title {
      color: $darkGrey;
    }
  }

  .slider-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }


}
</style>