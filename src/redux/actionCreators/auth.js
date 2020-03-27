import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_START,
    AUTH_FAILURE,
} from '../actions';

export const authStart = () => {
    return {
        type: AUTH_START,
    };
};

export const loginSuccess = payload => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};

export const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    };
};

export const authFailure = payload => {
    return {
        type: AUTH_FAILURE,
        payload,
    };
};
