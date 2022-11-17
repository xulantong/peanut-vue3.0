const {theme} = require('./config')
const path = require('path')

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
        ...pack
    }
}