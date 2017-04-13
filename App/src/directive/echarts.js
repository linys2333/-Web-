import Vue from 'vue'
import echarts from 'echarts'
import { cloneDeep, isEqual } from 'lodash'

let setOption = (el, val) => {
    el.instance.setOption(val)
    el.__option = cloneDeep(val)
}

export default {
    bind(el, binding) {
        Vue.nextTick(() => {
            el.instance = echarts.init(el)
            setOption(el, binding.value)

            el.resizeEventHandler = () => el.instance.resize()
            window.addEventListener('resize', el.resizeEventHandler, false)
        })
    },
    update(el, binding) {
        // 值比较，变化了才更新
        if (!isEqual(binding.value, el.__option)) {
            el.instance.clear()
            setOption(el, binding.value)
        }
    },
    unbind(el) {
        el.instance.dispose()
        window.removeEventListener('resize', el.resizeEventHandler, false)
    }
}