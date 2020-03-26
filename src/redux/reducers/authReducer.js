import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';
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
            const { id } = action.payload.token
                ? decodeToken(action.payload.token)
                : null;

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

        default:
            return { ...initialState };
    }
};
