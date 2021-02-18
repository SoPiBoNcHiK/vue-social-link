import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/user/:id',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/reg',
        name: 'Registration',
        component: Registration,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router