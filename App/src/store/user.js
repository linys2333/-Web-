import userService from 'SERVICE/userService'

const state = {
    userName: ''
}

const getters = {
    userName: state => state.userName
}

const actions = {
    login({ commit }, data) {
        return userService.login(data)
            .then(() => commit('login', data))
    },
    logout({ commit }) {
        return userService.logout()
            .then(() => commit('logout'))
    }
}

const mutations = {
    login(state, data) {
        state.userName = data.userName
    },
    logout(state) {
        state.userName = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}