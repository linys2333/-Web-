module.exports = app => {
    class TestController extends Controller {
        async getData() {
            ctx.body = result(true, topics)
        }
    }
    return TestController
}
