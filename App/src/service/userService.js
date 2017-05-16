import http from './http/'

class UserService {
    login(data) {
        return http.post('/User/Login', { dto: data })
    }

    logout() {
        return http.post('/User/Logout')
    }
}

// 实例化后再导出
export default new UserService()