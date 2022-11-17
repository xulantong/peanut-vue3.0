const pack = require("./src/peanut/pack");

module.exports = pack.createPack(
    {
        devServer: {
            proxy: {
                '/peanut': {
                    target: 'http://127.0.0.1:7676',
                    changeOrigin: true,
                    pathRewrite: {'^/peanut': ''}
                }
            }
        }
    }
)