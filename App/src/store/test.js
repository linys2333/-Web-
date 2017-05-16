import testService from 'SERVICE/testService'

const state = {}

const getters = {}

const actions = {
    getTestData() {
        return testService.getTestData()
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}