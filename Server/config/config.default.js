'use strict'

module.exports = appInfo => {
    const config = {}

    // should change to your own
    config.keys = appInfo.name + '_1494907585628_9034'

    // add your config here
    // 启动端口
    config.port = 8004

    return config
}