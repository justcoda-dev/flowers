import {comments} from "~/data/comments";

const MUTATION_TYPES = {
  GET_COMMENTS: "GET_COMMENTS",

}

export const actions = {
  getComments({commit}) {
    // const {data: products} = await this.$axios.$get('flower-pots?populate=image')
    commit(MUTATION_TYPES.GET_COMMENTS, comments.data)
  }
}

export const mutations = {
  [MUTATION_TYPES.GET_COMMENTS](state, comments) {
    state.comments = comments
  },

}

export const state = () => ({
  loading: false,
  comments: [],
})

export const getters = {
  comments: state => state.comments,
  loading: state => state.loading,
  isCome: state => !!state.comments.length
}


