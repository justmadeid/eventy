import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/cerita-sukses',
        name: 'cerita',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CeritaSukses.vue')
    },
    {
        path: '/detail/:slug',
        props: true,
        name: 'detail',
        component: Detail
    },
    {
        path: '/cart',
        name: 'cart',
        component: ShoppingCart
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
]

const router = new VueRouter({
    routes
})

export default router