import { withAuth } from '../../util';
import {
    GET_PROPERTY_FAILURE,
    GET_PROPERTY_START,
    GET_PROPERTY_SUCCESS,
} from '../actions';

const getStart = () => {
    return {
        type: GET_PROPERTY_START,
    };
};

const getSuccess = data => {
    return { type: GET_PROPERTY_SUCCESS, payload: data };
};

const getFail = error => {
    return { type: GET_PROPERTY_FAILURE, payload: error };
};

export const getProperties = () => async dispatch => {
    dispatch(getStart());
    try {
        const response = await withAuth('/user/', 'get');
        dispatch(getSuccess(response.data));
        return;
    } catch (error) {
        dispatch(getFail(error));
    }
};
