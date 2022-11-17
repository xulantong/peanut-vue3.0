import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'layouts',
        component: () => import('./../peanut/layouts'),
        children:[
            {
                path:'/index',
                name:'index',
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
