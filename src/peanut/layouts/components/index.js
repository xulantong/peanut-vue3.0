/*
* @author: xulantong
* @time: 2022-11-17 19:13:46
*/
import peanutLayoutTop from './PeanutLayoutTop'
import peanutLayoutSide from './PeanutLayoutSide'
import peanutLayoutTopLeft from './PeanutLayoutTopLeft'
import PeanutLayoutTopRight from './PeanutLayoutTopRight'

export default {
    install(app) {
        app.component('peanutLayoutTop', peanutLayoutTop)
        app.component('peanutLayoutSide', peanutLayoutSide)
        app.component('peanutLayoutTopLeft', peanutLayoutTopLeft)
        app.component('PeanutLayoutTopRight', PeanutLayoutTopRight)
    }
}