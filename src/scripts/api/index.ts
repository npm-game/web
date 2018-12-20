import axios from 'axios';

import auth from './endpoints/auth';
import games from './endpoints/games';

axios.defaults.baseURL = AppConfig.ApiPath;
axios.defaults.withCredentials = true;

export const api = {
    auth: new auth(),
    games: new games()
};
