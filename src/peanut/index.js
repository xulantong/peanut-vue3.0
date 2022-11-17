/*
* @author: xulantong
* @time: 2022-11-17 19:14:41
*/
import PeanutLayoutsComponents from './layouts/components'
import './styles/index.scss'
import './plugins/permission'

export default {
    install(app) {
        app.use(PeanutLayoutsComponents)
    }
}
