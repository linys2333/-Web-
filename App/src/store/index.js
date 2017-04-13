import Vuex from 'vuex'
import user from './user'

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        user
    },
    strict: debug
})

export default store