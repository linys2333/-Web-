import http from './http/'

class TestService {
    getTestData() {
        return http.get('/api/biz/getTestData')
    }
}

// 实例化后再导出
export default new TestService()
