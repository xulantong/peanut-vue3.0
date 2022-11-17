/*
* @author: xulantong
* @time: 2022-11-17 19:15:04
*/
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