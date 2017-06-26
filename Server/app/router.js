module.exports = app => {
    app.post('login', '/api/user', 'user.login')
    app.post('logout', '/api/user', 'user.logout')
    app.get('getTestData', '/api/biz', 'test.getData')
}
