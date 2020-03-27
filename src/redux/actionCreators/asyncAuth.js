import { authStart, authFailure, loginSuccess, registerSuccess } from './';
import { withAuth } from '../../util';

export const login = credentials => async dispatch => {
    dispatch(authStart());
    try {
        const response = await withAuth('/auth/login/', 'post', credentials);
        const payload = response.data.token;
        dispatch(loginSuccess(payload));
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
        dispatch(registerSuccess);
        return response;
    } catch (error) {
        console.log(error);
        dispatch(authFailure(error));
        return { error };
    }
};
