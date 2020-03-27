import {
    AUTH_START,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
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
        loggedInAs: { id: null },
        token: null,
    },
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                isLoading: true,
                error: {
                    ...state.message,
                    message: '',
                },
            };

        case LOGIN_SUCCESS:
            const token = action.payload;
            const userInfo = token ? decodeToken(token) : { userId: null };
            localStorage.setItem('token', token);
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    loggedInAs: {
                        id: userInfo.userId,
                    },
                    token,
                },
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
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
            // userInfo should resemble
            /**
             * {
             *  userId,
             * ...
             * }
             */
            const localToken = localStorage.getItem('token');
            const decodedToken = localToken
                ? decodeToken(localToken)
                : { userId: null };

            return {
                ...state,
                user: {
                    ...state.user,
                    loggedInAs: {
                        ...state.user.loggedInAs,
                        id: decodedToken.userId,
                    },
                },
            };

        default:
            return { ...initialState };
    }
};
