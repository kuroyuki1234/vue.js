import { createRouter, createWebHistory } from 'vue-router';
import Top from '@/components/Top.vue'
import Registration from '@/components/Registration.vue'
import Completion from '@/components/Completion.vue';
import '@/style.css';
import path from 'path';

const routes = [
    {
        path: '/',
        redirect: '/Top',
    },
    {
        path: '/Top',
        name: 'Top',
        component: Top,
    },
    {
        path: '/Registration',
        name: 'Registration',
        component: Registration,
    },
    {
        path: '/Completion',
        name: 'Completion',
        component: Completion,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;