import {
    GET_PROPERTY_FAILURE,
    GET_PROPERTY_START,
    GET_PROPERTY_SUCCESS,
    CREATE_PROPERTY_FAILURE,
    CREATE_PROPERTY_SUCCESS,
    CREATE_PROPERTY_START,
    UPDATE_PROPERTY_FAILURE,
    UPDATE_PROPERTY_START,
    UPDATE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILURE,
    DELETE_PROPERTY_START,
    DELETE_PROPERTY_SUCCESS,
} from '../actions';

import { mapObject, insertObjectToMap, removeObjectFromMap } from '../../util';

import { initialState } from '../initialState';

export const property = (state = { ...initialState.property }, action) => {
    switch (action.type) {
        case GET_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case GET_PROPERTY_SUCCESS:
            const fetchedMappedPropertyList = mapObject(action.payload);
            return {
                ...state,
                list: { ...fetchedMappedPropertyList },
                status: {
                    ...state.status,
                    isLoading: false,
                },
            };
        case GET_PROPERTY_FAILURE:
            return {
                ...state,
                list: {},
                status: {
                    ...state,
                    isLoading: false,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };
        case CREATE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case CREATE_PROPERTY_SUCCESS:
            // add to list by reconverting list back to array and subjecting to mapObject
            const newlyCreatedPropertyList = insertObjectToMap(
                action.payload,
                state.list,
            );
            return {
                ...state,
                list: { ...newlyCreatedPropertyList },
                status: {
                    isLoading: false,
                },
            };
        case CREATE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };

        case UPDATE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case UPDATE_PROPERTY_SUCCESS:
            // payload is updated object with id
            let { id } = action.payload;
            const property = { ...state.list[id], ...action.payload };
            return {
                ...state,
                list: {
                    ...state.list,
                    [id]: { ...property },
                },
                status: {
                    ...state.status,
                    isLoading: false,
                },
            };
        case UPDATE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };

        case DELETE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case DELETE_PROPERTY_SUCCESS:
            // this is where we remove said object, we are given an id
            const { id: propertyIdToDelete } = action.payload;
            const listWithoutId = removeObjectFromMap(
                propertyIdToDelete,
                state.list,
            );
            return {
                ...state,
                list: { ...listWithoutId },
                status: { ...state.status, isLoading: false },
            };
        case DELETE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
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
