import {RouteConfig} from 'vue-router';

import Join from '../../../components/views/Join/Join.vue';

export default {
    name: 'join',
    path: '/join/:InviteToken',
    component: Join,
    props: true,
    meta: {
        title: 'Join Game'
    }
} as RouteConfig;