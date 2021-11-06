const state = {
  candidate: {},
  code: [],
  category: {
    name: 'GOVERNADOR ESTADUAL',
    codeLength: 5,
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
}

const mutations = {
  mutationSetCode($state, payload) {
    const stateCopy = $state;
    console.log(stateCopy.code);
    if(stateCopy.code.length < stateCopy.category.codeLength) stateCopy.code.push(payload)
  },
  mutationSetCategory($state, payload) {
    const stateCopy = $state;
    switch (payload) {
      case payload === 'state_governor':
        stateCopy.category = {
          name: 'Governador Estadual',
          codeLength: 5
        }
        break;

      case payload === 'mayor':
        stateCopy.category = {
          name: 'Prefeito',
          codeLength: 2
        }
        break;

      case payload === 'president':
        stateCopy.category = {
          name: 'President',
          codeLength: 5
        }
        break;

      default:
        stateCopy.category = {
          name: '',
          codeLength: null
        }
        break;
    }
  },
  mutationRemoveCode($state) {
    const stateCopy = $state;
    stateCopy.code = []
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}