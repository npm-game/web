import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {api} from '../../../scripts/api';
import {GameSessionStore} from '../../../scripts/stores/games/GameSessionStore';

@Component
export default class extends Vue {

    @Prop()
    InviteToken: string;

    async created() {
        // Log In
        await api.auth.login({
            Email: 'player',
            Password: 'asdfghjkl'
        });

        await GameSessionStore.dispatch('init');

        await GameSessionStore.dispatch('joinGame', this.InviteToken);
    }
}