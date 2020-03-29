import axios from 'axios';
import { withToken } from './';

export const withAuth = (url, method, data) => {
    const [token] = withToken();
    return axios
        .create({
            headers: {
                Authorization: token,
            },
            baseURL: 'https://airbnb-labmda.herokuapp.com',
        })
        [method](url, data);
};
