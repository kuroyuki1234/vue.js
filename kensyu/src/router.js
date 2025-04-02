import { createRouter, createWebHistory } from 'vue-router';
import top from './components/top.vue'
import registration from './components/registration.vue'
import completion from './components/completion.vue';
import './style.css';

const routes = [
    {
        path: '/top',
        name: 'top',
        component: top,
    },
    {
        path: '/registration',
        name: 'registration',
        component: registration,
    },
    {
        path: '/completion',
        name: 'completion',
        component: completion,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;