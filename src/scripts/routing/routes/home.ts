import {RouteConfig} from 'vue-router';

import Home from '../../../components/views/Home/Home.vue';

export default {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
        title: 'Home'
    }
} as RouteConfig;