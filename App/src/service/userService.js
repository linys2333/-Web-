import http from './http/'

class UserService {
    login(data) {
        return http.post('/User/Login', { dto: data })
    }

    logout() {
        return http.post('/User/Logout')
    }

    getSecret(data) {
        return http.post('/User/GetSecret', { dto: data })
    }
}

// 实例化后再导出
export default new UserService()