import http from './http/'

class UserService {
    login(data) {
        return http.post('/api/user/login', { dto: data })
    }

    logout() {
        return http.post('/api/user/logout')
    }
}

// 实例化后再导出
export default new UserService()
