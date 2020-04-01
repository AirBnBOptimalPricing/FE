import { authStart, authFailure, loginSuccess, registerSuccess } from './';
import { withAuth } from '../../util';

export const login = credentials => async dispatch => {
    dispatch(authStart());
    try {
        const response = await withAuth('/auth/login/', 'post', credentials);
        const payload = response.data.token;
        // on login fail/success this will happen because BE is issuing 203 on faliure
        dispatch(loginSuccess(payload));
        return { message: 'Logged in successfully' };
    } catch (error) {
        dispatch(authFailure(error.response.data));
        return { error };
    }
};

export const register = credentials => async dispatch => {
    dispatch(authStart());
    try {
        const response = await withAuth('/auth/register/', 'post', credentials);
        dispatch(registerSuccess());
        return response;
    } catch (error) {
        dispatch(authFailure(error.response.data));
        return { error };
    }
};
