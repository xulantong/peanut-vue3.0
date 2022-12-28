import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/peanut',
        name: 'layouts',
        meta:{
          text:'����'
        },
        component: () => import('./../peanut/layouts'),
        children:[
            {
                path:'home',
                name:'home',
                meta:{
                    text:'��ҳ'
                },
                component:()=>import('./../peanut/views/Home')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
