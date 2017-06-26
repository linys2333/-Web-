module.exports = options => {
    return async(ctx, next) => {
        if (ctx.path === '/favicon.ico') {
            return
        }
        next()
    }
}
