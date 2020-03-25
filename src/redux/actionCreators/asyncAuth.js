import { authStart, authSuccess, authFailure } from './';
import { withAuth } from '../../util';

export const login = credentials => async dispatch => {
    authStart();
    try {
        const response = await withAuth('/auth/login/', 'post', credentials);
        const payload = { token: response.data.token };
        authSuccess(payload);
    } catch (error) {
        console.log(error);
        authFailure(error);
    }
};

export const register = credentials => async dispatch => {
    authStart();
    try {
        const response = await withAuth('/auth/register/', 'post', credentials);
        const payload = { token: '' };
        authSuccess(payload);
    } catch (error) {
        console.log(error);
        authFailure(error);
    }
};
