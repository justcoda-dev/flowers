import {slides} from "~/data/sliderMain";

const MUTATION_TYPES = {
  GET_SLIDES: "GET_SLIDES",

}

export const actions = {
  getSlides({commit}) {
    // const {data: products} = await this.$axios.$get('flower-pots?populate=image')
    commit(MUTATION_TYPES.GET_SLIDES, slides.data)
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_SLIDES](state, slides) {
    state.slides = slides
  },

}

export const state = () => ({
  loading: false,
  slides: [],
})

export const getters = {
  slides: state => state.slides,
  loading: state => state.loading,
  isCome: state => !!state.slides.length
}



