import {Store} from 'vuex';
import * as signalr from '@aspnet/signalr';

export interface GameSessionStoreState {
    Connection: signalr.HubConnection;
    Game: any;
    GameLog: string[];
}

export const GameSessionStore = new (class extends Store<GameSessionStoreState> {
    constructor() {
        super({
            state: {
                Connection: null,
                Game: null,
                GameLog: []
            },
            actions: {
                async init(context) {
                    if (context.state.Connection) {
                        return;
                    }

                    context.commit('create');

                    await context.state.Connection.start();

                    context.state.Connection.on('game:log', (message: string) => {
                        context.commit('updateLog', message);
                    });

                    context.state.Connection.on('game:update', (game) => {
                        context.commit('updateGame', game);
                    });
                },
                async joinGame(context, inviteToken: string) {
                    await context.state.Connection.invoke('JoinGame', inviteToken);
                },
                async takeTurn(context, action: any) {
                    await context.state.Connection.invoke('TakeTurn', action);
                }
            },
            mutations: {
                create(state) {
                    state.Connection = new signalr.HubConnectionBuilder()
                        .withUrl(AppConfig.ApiPath + '/games')
                        .build();
                },
                updateGame(state, game: any) {
                    state.Game = game;
                },
                updateLog(state, log: string) {
                    state.GameLog.push(log);
                }
            }
        });
    }
});