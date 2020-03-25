import {
    registerStart,
    registerFailure,
    registerSuccess,
    loginStart,
    loginSuccess,
    loginFailure,
} from './';
import { withAuth } from '../../util';

export const login = credentials => async dispatch => {
    loginStart();
    try {
        const response = await withAuth('/auth/login/', 'post', credentials);
        console.log(response);
        loginSuccess(response);
    } catch (error) {
        console.log(error);
        loginFailure(error);
    }
};

export const register = credentials => async dispatch => {
    registerStart();
    try {
        console.log(response);
        const response = await withAuth('/auth/register/', 'post', credentials);
        registerSuccess(response);
    } catch (error) {
        console.log(error);
        registerFailure(error);
    }
};
