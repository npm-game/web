import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import axios from 'axios';
import * as signalr from '@aspnet/signalr';

axios.defaults.withCredentials = true;

@Component
export default class extends Vue {

    Identity: any = null;

    Connection: signalr.HubConnection = null;

    Game: any = null;
    GameLog: string[] = [];

    IsReady: boolean = false;

    async created() {
        // Log In
        await axios.post(AppConfig.ApiPath + '/auth/login', {
            Email: 'admin',
            Password: 'asdfghjkl'
        });

        // Show identity
        const idResponse = await axios.get(AppConfig.ApiPath + '/auth/me');
        this.Identity = idResponse.data;

        // Establish connection
        this.Connection = new signalr.HubConnectionBuilder()
            .withUrl(AppConfig.ApiPath + '/games')
            .build();

        this.Connection.on('game:log', (message: string) => {
            this.GameLog.push(message);
        });

        this.Connection.on('game:update', (game) => {
            this.Game = game;
        });

        await this.Connection.start();

        this.IsReady = true;
    }

    async JoinGame() {
        const gameResponse = await axios.get(AppConfig.ApiPath + '/games/current');

        this.Game = gameResponse.data;

        await this.Connection.invoke('JoinGame', this.Game.Id);
    }

    async StartGame() {
        await this.Connection.invoke('StartGame');
    }
}