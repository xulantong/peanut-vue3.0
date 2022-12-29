import router from "@/peanut/router";
import store from "@/peanut/store"

const routes = store.state['peanut-routes'].routes
resolveRoute(routes)
routes.forEach(item => {
    router.addRoute({
        ...item,
    })
})

router.beforeResolve((to, from, next) => {
    if (to.path === '/') {
        next({
            path: '/peanut/home'
        })
    }
    //todo token校验
    next()
})
function resolveRoute (routes) {
    routes?.forEach(route => {
        route.component = getLayoutComponent(route.componentPath)
        delete route.componentPath
        route?.children?.forEach(item => {
            item.component = getLayoutComponent(item.componentPath)
            if (item?.children?.length)
                resolveRoute(route?.children)
        })
    })
}

function getLayoutComponent(path) {
    return () => ((async () => {
        if (path.includes('@/peanut/')) {
            return import("@/peanut/" + path.replace("@/peanut/", ''))
        } else {
            return import("@/views/" + path.replace("@/views/", ''))
        }

    })())

}

