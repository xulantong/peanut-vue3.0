/*
* @author: xulantong
* @time: 2022-11-17 19:14:07
*/

const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach(item => {
  modules[item]['namespaced'] = true
})
export default modules
