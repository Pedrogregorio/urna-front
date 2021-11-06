import Vue from 'vue'
import Vuex from 'vuex'
import Candidate from './modules/candidate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Candidate,
  },
})
