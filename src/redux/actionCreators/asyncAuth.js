import { authStart, authSuccess, authFailure } from './';
import { withAuth } from '../../util';

export const login = credentials => async dispatch => {
    dispatch(authStart());
    try {
        const response = await withAuth('/auth/login/', 'post', credentials);
        const payload = { token: response.data.token };
        dispatch(authSuccess(payload));
        return { message: 'Logged in successfully' };
    } catch (error) {
        console.log(error);
        dispatch(authFailure(error));
        return { error };
    }
};

export const register = credentials => async dispatch => {
    dispatch(authStart());
    try {
        const response = await withAuth('/auth/register/', 'post', credentials);
        const payload = { token: '' };
        dispatch(authSuccess(payload));
        return { message: 'Registration successful' };
    } catch (error) {
        console.log(error);
        dispatch(authFailure(error));
        return { error };
    }
};
