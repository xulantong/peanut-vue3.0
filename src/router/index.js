
export default [
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