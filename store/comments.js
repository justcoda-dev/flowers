const MUTATION_TYPES = {
  GET_COMMENTS: "GET_COMMENTS",

}

export const actions = {
  async getComments({commit, dispatch}) {
    try {
      const {data: comments} = await this.$axios.$get('comments?populate=icon')
      commit(MUTATION_TYPES.GET_COMMENTS, comments)
    } catch (e) {
      console.error("getComments error", e)
      dispatch("getComments")
    }
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



