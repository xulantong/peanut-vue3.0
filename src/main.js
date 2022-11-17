import {createApp} from 'vue'
import App from './App.vue'
import router from './peanut/router'
import store from './peanut/store'
import peanut from './peanut'

createApp(App).use(store).use(router).use(peanut).mount('#app')
