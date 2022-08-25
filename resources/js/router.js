import { createWebHashHistory, createRouter } from "vue-router";
import home from './pages/home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';
import dashboard from './pages/dashboard.vue';
import store from './store/index.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
    },

    {
        path: '/login',
        name: 'Login',
        component: login,
        meta:{
            requiresAuth: false
        }
    },

    {
        path: '/register',
        name: 'Register',
        component: register,
        meta:{
            requiresAuth: false
        }
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard,
        meta:{
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


//Url Authenticate
router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && store.getters.geToken == 0){
        return { name: 'Login'}
    }

    if(to.meta.requiresAuth == false && store.getters.geToken != 0){
        return { name: 'Dashboard'}
    }
})

export default router;