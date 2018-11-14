const state = {
  userList: [],
  currentUser: null
};

const mutations = {
  setUsers(state, payload) {
    state.userList = payload;
  },

  setCurrentUsers(state, payload) {
    state.currentUser = payload;
  }
};

const actions = {
  async getUsers({ commit }, username) {
    let response = await fetch(`//api.github.com/users`);
    let users = await response.json();
    commit("setUsers", users);
  }
};

export default {
  state,
  mutations,
  actions
};
