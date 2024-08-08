import { createRouter, createWebHistory } from 'vue-router';
import Landing from '@pages/landing/Index.vue';
import SignIn from '@pages/signin/SignIn.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
    },
    {
        path: '/developer/sign-in',
        name: 'Signin',
        component: SignIn,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
