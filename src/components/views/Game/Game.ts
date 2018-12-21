import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import * as signalr from '@aspnet/signalr';

import {api} from '../../../scripts/api';
import {GameSessionStore} from '../../../scripts/stores/games/GameSessionStore';

@Component
export default class extends Vue {

    Identity: any = null;

    Connection: signalr.HubConnection = null;

    IsReady: boolean = false;

    async created() {
        // Log In
        await api.auth.login({
            Email: 'admin',
            Password: 'asdfghjkl'
        });

        // Show identity
        this.Identity = await api.auth.me();

        await GameSessionStore.dispatch('init');

        this.IsReady = true;
    }

    get Game() {
        return GameSessionStore.state.Game;
    }

    get GameLog() {
        return GameSessionStore.state.GameLog;
    }

    async JoinGame() {
        const gameResponse = await api.games.current();

        await GameSessionStore.dispatch('joinGame', gameResponse.Id);
    }

    async StartGame() {
        await GameSessionStore.state.Connection.invoke('StartGame');
    }

    WordPlayed: string = null;

    async SubmitWord() {
        await GameSessionStore.state.Connection.invoke('TakeTurn', {
            WordGuessed: this.WordPlayed
        });
    }
}