import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import test from './test'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        test
    },
    strict: process.env.NODE_ENV !== 'production'
})

export default store