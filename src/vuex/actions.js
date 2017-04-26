import * as types from './mutations_type'

const actions = {
    addCount ({ commit }) {
        commit(types.ADD_COUNT)
    },
    minusCount ({ commit }) {
        commit(types.MINUS_COUNT)
    }
}
    
export default actions
