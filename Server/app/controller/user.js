module.exports = app => {
    class UserController extends app.Controller {
        async login(ctx) {
            ctx.body = result(true, topics)
        }

        async logout(ctx) {
            ctx.body = result(true, topics)
        }
    }
    return UserController
}
