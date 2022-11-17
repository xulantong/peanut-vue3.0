import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'layouts',
        component: () => import('@/peanut/layouts'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('./../views/Home')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
