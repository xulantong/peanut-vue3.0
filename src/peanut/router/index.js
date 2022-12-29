/*
* @author: xulantong
* @time: 2022-11-17 19:14:02
*/

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/changePassword',
        name: 'changePassword',
        component: () => import('@/peanut/views/ChangePassword'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/peanut/views/Login'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
