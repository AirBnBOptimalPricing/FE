import {
    UPDATE_PROPERTY_FAILURE,
    UPDATE_PROPERTY_START,
    UPDATE_PROPERTY_SUCCESS,
} from '../actions';
import { withAuth } from '../../util';

const updateStart = () => {
    return {
        type: UPDATE_PROPERTY_START,
    };
};

const updateSuccess = id => {
    return {
        type: UPDATE_PROPERTY_SUCCESS,
        payload: id,
    };
};

const updateFail = error => {
    return {
        type: UPDATE_PROPERTY_FAILURE,
        payload: error,
    };
};

export const updateProperty = (id, changes) => async dispatch => {
    dispatch(updateStart());
    try {
        const response = await withAuth(`/user/property/${id}`, 'put', changes);
        const parsedData = JSON.parse(response.config.data);
        const property = {
            id,
            ...parsedData,
        };
        dispatch(updateSuccess(property));
        return response;
    } catch (error) {
        console.log(error);
        dispatch(updateFail(error.response));
    }
};
