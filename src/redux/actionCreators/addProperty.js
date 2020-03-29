import {
    CREATE_PROPERTY_FAILURE,
    CREATE_PROPERTY_SUCCESS,
    CREATE_PROPERTY_START,
} from '../actions';

export const addStart = () => {
    return {
        type: CREATE_PROPERTY_START,
    };
};

export const addSuccess = property => {
    return {
        type: CREATE_PROPERTY_SUCCESS,
        payload: property,
    };
};

export const addFail = error => {
    return {
        type: CREATE_PROPERTY_FAILURE,
        payload: error,
    };
};
