import {createStore} from 'vuex'

export default createStore({
    state:()=>( {
        demo: 'peanut'
    }),
    mutations: {
        setDemo(state, val) {
            state.demo = val
        }
    },
    actions: {
        setDemo({commit}, val) {
            commit.setDemo(val)
        }
    },
})