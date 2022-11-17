import router from "@/peanut/router";

router.beforeResolve((to, from, next) => {
    //todo token校验
    next()
})