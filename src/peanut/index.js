import PeanutLayoutsComponents from './layouts/components'
import './styles/index.scss'

export default {
    install(app) {
        app.use(PeanutLayoutsComponents)
    }
}
