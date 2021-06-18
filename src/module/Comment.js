const state = {
  comment: []
};

const getters = {
  allComment: (state) => state.comment
};

const actions={
  addComment({commit},comment){
    commit('addNewComment', comment)
  }
};

const mutations={
  addNewComment: (state,comment) => state.comment = comment
};

export default{
  state,
  getters,
  actions,
  mutations
}