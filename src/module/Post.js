const state = {
  post: []
};

const getters = {
  allPost: (state) => state.post
};

const actions={
  AddPost({commit},post){
    commit('addNewPost', post)
  }
};

const mutations={
  addNewPost: (state,post) => state.post = post
};

export default{
  state,
  getters,
  actions,
  mutations
}