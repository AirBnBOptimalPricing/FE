import { AUTH_START, AUTH_FAILURE, AUTH_SUCCESS } from '../actions';

export const authStart = () => {
    return {
        type: AUTH_START,
    };
};

export const authSuccess = payload => {
    return {
        type: AUTH_SUCCESS,
        payload,
    };
};

export const authFailure = payload => {
    return {
        type: AUTH_FAILURE,
        payload,
    };
};
