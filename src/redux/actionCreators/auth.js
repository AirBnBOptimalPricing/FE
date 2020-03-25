import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
} from '../actions';

export const loginStart = () => {
    return {
        type: LOGIN_START,
    };
};

export const loginSuccess = payload => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};

export const loginFailure = payload => {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
};

export const registerStart = () => {
    return {
        type: REGISTER_START,
    };
};

export const registerSuccess = payload => {
    return {
        type: REGISTER_SUCCESS,
        payload,
    };
};

export const registerFailure = payload => {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
};
