import {createStore} from 'vuex'
import dayjs from "dayjs";

export default createStore({
    state: {
        time: dayjs().format('YYYY-MM-DD HH:mm:ss')
    },
    mutations: {},
    actions: {},
})
