import API from '@/api/index';

const state = {
  candidate: {},
  code: [],
  category: {
    name: '',
    codeLength: null,
  }
}

const getters = {
  getCandidate: ($state) => $state.candidate, 
  getCode: ($state) => $state.code, 
  getCategory: ($state) => $state.category, 
}

const actions = {
  setCode({ commit }, payload) {
    commit('mutationSetCode', payload);
  },

  setCategory({ commit }, payload) {
    commit('mutationSetCategory', payload);
  },

  removeCode({ commit }) {
    commit('mutationRemoveCode');
  },

  async searchCode({ commit, dispatch }, payload) {
    const { data } = await API.getCandidate(payload)
    if (data.errors) dispatch('setErrors', data.errors)
    commit('mutationSetCandidate', data.candidates)
  }
}

const mutations = {
  mutationSetCode($state, payload) {
    const stateCopy = $state;
    if(stateCopy.code.length < stateCopy.category.codeLength) {
      stateCopy.code.push(payload)
    }
  },
  mutationSetCategory($state, payload) {
    const stateCopy = $state;
    if (payload === 'state_governor') {
      stateCopy.category = {
        name: 'GOVERNADOR ESTADUAL',
        codeLength: 5
      }
    }
    if (payload === 'mayor') {
      stateCopy.category = {
        name: 'PREFEITO',
        codeLength: 2
      }
    }
    if (payload === 'president') {
      stateCopy.category = {
        name: 'PRESIDENT',
        codeLength: 2
      }
    }
  },
  mutationRemoveCode($state) {
    const stateCopy = $state;
    stateCopy.code = []
    stateCopy.candidate = {}
  },
  mutationSetCandidate($state, payload) {
    const stateCopy = $state
    stateCopy.candidate = payload
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}