import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
    count: 0
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store