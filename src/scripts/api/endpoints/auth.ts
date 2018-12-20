import axios from 'axios';

export default class {
    async me() {
        const response = await axios.get('/auth/me');

        return response.data;
    }

    async login(loginRequest: any): Promise<void> {
        const response = await axios.post<void>('/auth/login', loginRequest);

        return response.data;
    }

    async signup(registerRequest: any): Promise<void> {
        const response = await axios.post<void>('/auth/signup', registerRequest);

        return response.data;
    }

    async logout(): Promise<void> {
        const response = await axios.post<void>('/auth/logout');

        return response.data;
    }
}
