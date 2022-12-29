import {createStore} from 'vuex'

export default createStore({
    state: () => ({
        routes: [
            {
                path: '/peanut',
                name: 'layouts',
                componentPath: '@/peanut/layouts',
                meta: {
                    title: '首页'
                },
                children: [
                    {
                        path: 'home',
                        name: 'home',
                        meta: {
                            title: '首页'
                        },
                        componentPath: '@/peanut/views/Home',
                        children: [
                            {
                                path: 'home1',
                                name: 'home',
                                meta: {
                                    title: '首页1'
                                },
                                componentPath: '@/peanut/views/Home'
                            },
                            {
                                path: 'home2',
                                name: 'home',
                                meta: {
                                    title: '首页2'
                                },
                                componentPath: '@/peanut/views/Home'
                            }
                        ]

                    }
                ]
            },

        ]
    }),
    mutations: {},
    actions: {},
})