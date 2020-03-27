import {
    AUTH_START,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_FAILURE,
    SET_LOGGED_IN_USER,
    LOG_OUT_USER,
} from '../actions';
import { decodeToken, withToken } from '../../util';

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
    const [localToken, setLocalToken] = withToken();
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
            console.log(action.payload);
            const token = action.payload;
            const userInfo = token ? decodeToken(token) : { userId: null };
            setLocalToken('token', token);
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
            const decodedToken = localToken
                ? decodeToken(localToken)
                : { userId: null };
            return {
                ...state,
                user: {
                    ...state.user,
                    loggedInAs: {
                        ...state.user.loggedInAs,
                        id:
                            typeof decodeToken.userId === 'undefined'
                                ? null
                                : decodedToken.userId,
                    },
                },
            };

        case LOG_OUT_USER:
            setLocalToken('token', '');
            return {
                ...state,
                user: {
                    ...state.user,
                    loggedInAs: {
                        ...state.user.loggedInAs,
                        id: null,
                    },
                    token: null,
                },
            };

        default:
            return { ...initialState };
    }
};
