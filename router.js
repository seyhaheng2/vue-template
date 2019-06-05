import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue';

Vue.use(Router)
//All routes need meta
//So it is required to input meta
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Index',
        component: () => import('./views/Index.vue')
    }
]
})
export default router;