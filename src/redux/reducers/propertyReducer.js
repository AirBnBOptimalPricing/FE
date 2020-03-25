import {
    GET_PROPERTY_FAILURE,
    GET_PROPERTY_START,
    GET_PROPERTY_SUCCESS,
} from '../actions';

import { mapObject } from '../../util';

import { initialState } from '../initialState';

export const property = (state = { ...initialState.property }, action) => {
    switch (action.type) {
        case GET_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                },
            };
        case GET_PROPERTY_SUCCESS:
            const propertyList = mapObject(action.payload);
            return {
                ...state,
                list: { ...propertyList },
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case GET_PROPERTY_FAILURE:
            return {
                ...state,
                list: {},
                status: {
                    ...state,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };

        default:
            return { ...state };
    }
};
