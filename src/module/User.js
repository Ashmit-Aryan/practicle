const state = {
  user: {}
};

const getters = {
  allUser: (state) => state.user
};

const actions={
  AddUser({commit},user){
    commit('addNewUser', user)
  }
};

const mutations={
  addNewUser: (state,user) => state.user = user
};

export default{
  state,
  getters,
  actions,
  mutations
}