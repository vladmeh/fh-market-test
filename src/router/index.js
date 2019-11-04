import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'service',
        component: () => import('../views/Service.vue')
    },
    {
        path: '/service/:alias',
        name: 'position',
        component: () => import('../views/Position.vue'),
        props: true,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
