
export default [
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