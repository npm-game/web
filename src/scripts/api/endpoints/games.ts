import axios from 'axios';

export default class {
    async current() {
        const response = await axios.get('/games/current');

        return response.data;
    }
}
