const state = {
  errors: []
}

const getters = {
  hasError: ($state) => $state.error?.length > 0, 
  getErrors: ($state) => $state.errors,  
}

const actions = {
  setErrors({ commit }, payload) {
    commit('mutationSetErrors', payload);
  },
  removeErrors({ commit }) {
    commit('mutationRemoveErrors')
  }
}

const mutations = {
  mutationSetErrors($state, payload) {
    const stateCopy = $state;
    stateCopy.errors.push(payload)
  },
  mutationRemoveErrors($state) {
    const stateCopy = $state;
    stateCopy.errors = []
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}