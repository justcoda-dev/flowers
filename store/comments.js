const MUTATION_TYPES = {
  GET_COMMENTS: "GET_COMMENTS",

}

export const actions = {
  async getComments({commit}) {
    const {data: comments} = await this.$axios.$get('comments?populate=icon')
    console.log(comments)
    commit(MUTATION_TYPES.GET_COMMENTS, comments)
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



