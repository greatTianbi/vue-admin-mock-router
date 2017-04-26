import * as types from './mutations_type'

const mutations = {
    [types.ADD_COUNT](state) {
        state.count += 1
    },
    [types.MINUS_COUNT] (state) {
        state.count -= 1
    }
}

export default mutations