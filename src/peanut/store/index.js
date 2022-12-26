/*
* @author: xulantong
* @time: 2022-11-17 19:14:07
*/
import {createStore} from 'vuex'

let customModules = {};
const customFiles = require.context("@", true, /\.\/store\/index\.js/)
if (customFiles.keys().length) {
    customModules = customFiles(customFiles.keys()[0]).default;
}


const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
    modules['peanut-' + key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach(item => {
    modules[item]['namespaced'] = true
})

Object.keys(customModules).forEach((key) => {
    modules[key] = customModules[key];
})

export default createStore({
    modules,
})
