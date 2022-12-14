/*
* @author: xulantong
* @time: 2022-11-17 19:14:46
*/
const {theme} = require('./config')
const path = require('path')
const resolve = (dir) => path.join(process.cwd(), dir)

module.exports.createPack = function (pack) {
    return {
        css: {
            loaderOptions: {
                scss: {
                    additionalData(content, loaderContext) {
                        const {resourcePath, rootContext} = loaderContext
                        const relativePath = path.relative(rootContext, resourcePath).replace(/\\/g, '/')
                        const noPrependPaths = ["src/peanut/styles/themes/"];
                        if (!noPrependPaths.find(path => relativePath.indexOf(path) > -1)) {
                            content = `@import "~@/peanut/styles/themes/${theme}/variables.scss";\r\n` + content;
                        }
                        return content;
                    }

                }
            },
        },
        configureWebpack() {
            return {
                name:'peanut-vue',
                resolve: {
                    alias: {
                        '@': resolve('src'),
                    },
                }
            }
        },
        ...pack
    }
}