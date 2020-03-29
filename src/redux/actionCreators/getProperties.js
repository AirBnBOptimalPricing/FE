import { withAuth } from '../../util';
import {
    GET_PROPERTY_FAILURE,
    GET_PROPERTY_START,
    GET_PROPERTY_SUCCESS,
    GET_SINGLE_PROPERTY_SUCCESS,
} from '../actions';

import { setLoggedInUser } from './';

const getStart = () => {
    return {
        type: GET_PROPERTY_START,
    };
};

const getSuccess = data => {
    return { type: GET_PROPERTY_SUCCESS, payload: data };
};

const getSinglePropertySuccess = data => {
    return {
        type: GET_SINGLE_PROPERTY_SUCCESS,
        payload: data,
    };
};

const getFail = error => {
    return { type: GET_PROPERTY_FAILURE, payload: error };
};

export const getProperties = () => async dispatch => {
    dispatch(getStart());
    try {
        const response = await withAuth('/user', 'get');
        dispatch(getSuccess(response.data));
        dispatch(setLoggedInUser());

        return;
    } catch (error) {
        dispatch(getFail(error.response.data));
    }
};

export const getSingleProperty = id => async dispatch => {
    dispatch(getStart());
    try {
        const response = await withAuth(`/user/${id}`, 'get');
        dispatch(getSinglePropertySuccess(response.data));
        dispatch(setLoggedInUser());
        return;
    } catch (error) {
        dispatch(getFail(error.response.data));
    }
};
