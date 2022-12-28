import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/peanut',
        name: 'layouts',
        meta:{
          text:'»¨Éú'
        },
        component: () => import('./../peanut/layouts'),
        children:[
            {
                path:'home',
                name:'home',
                meta:{
                    text:'Ö÷Ò³'
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
