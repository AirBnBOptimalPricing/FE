import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    SET_LOGGED_IN_USER,
} from '../actions';
import { decodeToken } from '../../util';

const initialState = {
    isLoading: null,
    status: null,
    error: {
        message: null,
    },
    user: {
        loggedInAs: null,
        token: null,
    },
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            console.log('start state', state);
            return {
                ...state,
                isLoading: true,
                error: {
                    ...state.message,
                    message: '',
                },
            };

        case AUTH_SUCCESS:
            let {
                payload: { token },
            } = action;
            const { id } = token ? decodeToken(token) : null;
            localStorage.setItem('token', token);
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    loggedInAs: {
                        id,
                    },
                    token: action.payload.token,
                },
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isLoading: false,
                status: action.payload.status,
                error: {
                    ...state.error,
                    message: action.payload.message,
                },
            };
        case SET_LOGGED_IN_USER:
            const localToken = localStorage.getItem('token');
            const user = localToken ? decodeToken(localToken) : null;
            console.log(localToken, user);
            return {
                ...state,
                user: {
                    ...state.user,
                    loggedInAs: {
                        ...state.user.loggedInAs,
                        id: user.id,
                    },
                },
            };

        default:
            return { ...initialState };
    }
};
