// import {slides} from "~/data/sliderMain";

const MUTATION_TYPES = {
  GET_SLIDES: "GET_SLIDES",

}

export const actions = {
  async getSlides({commit, dispatch}) {
    try {
      const {data: slides} = await this.$axios.$get('slides?populate=image')
      commit(MUTATION_TYPES.GET_SLIDES, slides)
    } catch (e) {
      console.error("action getSlides", e)
      setTimeout(() => {
        dispatch("getSlides")
      }, 5000)
    }
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



