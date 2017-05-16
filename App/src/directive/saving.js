import Vue from 'vue'

export default {
    bind(el, binding) {
        Vue.nextTick(() => {
            el.__oldValue = el.innerText
        })
    },
    update(el, binding) {
        let value = el.__oldValue

        if (binding.value) {
            el.disabled = true
            el.innerText = value + '中...'
        } else {
            el.disabled = false
            el.innerText = value
        }
    }
}