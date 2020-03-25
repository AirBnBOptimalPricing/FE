import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';

import { initialState } from '../initialState';
export const auth = (
    state = {
        ...initialState.auth,
    },
    action,
) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                isLoading: true,
            };

        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: {
                    ...state.error,
                    message: null,
                },
                user: {
                    ...state.user,
                    // will do something with loggedInAs Later
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
