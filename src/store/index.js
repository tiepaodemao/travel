import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state = {
    name:'',
    pwd:'',
    isLogin:'',
    shopping:[]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
