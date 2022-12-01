/*
* @author: xulantong
* @time: 2022-11-17 19:14:41
*/
import '@babel/polyfill'
import PeanutLayoutsComponents from './layouts/components'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import './plugins/permission'

export default {
    install(app) {
        app.use(PeanutLayoutsComponents).use(ElementPlus)
    }
}
