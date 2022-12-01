/*
* @author: xulantong
* @time: 2022-11-17 19:13:28
*/
let config = {}

//判断是否是node环境
// if (process.env.VUE_APP_IS_NODE) {
//     try {
//         config = require("../../config")
//     } catch (e) {
//         //ignore
//     }
// } else {
//     let customFile = require.context("@", true, /\.\/config\/index\.js/);
//     if (customFile.keys().length) {
//         config = customFile(customFile.keys()[0]);
//     }
// }

const defaultConfig = {
    baseUrl: '/peanut',
    theme: 'default',
    title:'peanut后台解决方案'
}

module.exports = {
    ...Object.assign({},defaultConfig,config)
}