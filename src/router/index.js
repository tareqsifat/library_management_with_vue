import { createRouter, createWebHashHistory } from 'vue-router'
import dashboard from '../views/backend/dashboard';
import admin from '../views/backend/admin';
import management from '../views/backend/manegement';
import user from '../views/backend/user';
import login from '../views/frontend/login';
import signup from '../views/frontend/signup';
import portfolio from '../views/frontend/portfolio';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup,
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: portfolio,
    },
    {
        path: '/',
        name: 'dashboard',
        component: dashboard,
    },
    {
        path: '/admin',
        name: 'admin',
        component: admin,
    },
    {
        path: '/manegement',
        name: 'manegement',
        component: management,
    },
    {
        path: '/user',
        name: 'user',
        component: user,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
