import axios from 'axios';
import { withToken } from '../hooks';

export const withAuth = (url, method, data) => {
    const token = withToken();
    return axios
        .create({
            headers: {
                Authorization: token,
            },
            baseURL: '',
        })
        [method](url, data);
};
