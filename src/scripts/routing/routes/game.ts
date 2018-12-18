import {RouteConfig} from 'vue-router';

import Game from '../../../components/views/Game/Game.vue';

export default {
    name: 'game',
    path: '/game',
    component: Game,
    meta: {
        title: 'Game'
    }
} as RouteConfig;