/*
* @author: xulantong
* @time: 2022-11-17 19:13:28
*/
const config = require('@/config')
const defaultConfig = {
    baseUrl: '/peanut',
    theme: 'default',
    title:'peanut后台解决方案'
}

module.exports = {
    ...Object.assign({},defaultConfig,config)
}