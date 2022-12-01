import router from "@/peanut/router";

router.beforeResolve((to, from, next) => {
    if (to.path === '/') {
        next({
            path: '/home'
        })
    }
    //todo token校验
    next()
})