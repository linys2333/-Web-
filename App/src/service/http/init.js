import axios from 'axios'
import router from 'ROUTER/'

// 请求拦截
axios.interceptors.request.use((config) => {
    // 身份验证
    config.headers.get('Authorization') = sessionStorage.token || ''

    return config;
}, (err) => {
    return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use((res) => {
    let token = res.headers.get('Authorization') || ''
    if (token) {
        sessionStorage.setItem('token', token)
    } else {
        sessionStorage.removeItem('token')
    }

    return res
}, (err) => {
    if (err.response.status === "401") {
        sessionStorage.removeItem('token')

        alert('身份验证失败，请重新登陆')
        router.push('/Login')
    }

    return Promise.reject(err)
})