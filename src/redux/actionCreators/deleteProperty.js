import {
    DELETE_PROPERTY_FAILURE,
    DELETE_PROPERTY_START,
    DELETE_PROPERTY_SUCCESS,
} from '../actions';
import { withAuth } from '../../util';

const deleteStart = () => {
    return {
        type: DELETE_PROPERTY_START,
    };
};

const deleteSuccess = id => {
    return {
        type: DELETE_PROPERTY_SUCCESS,
        payload: id,
    };
};

const deleteFail = error => {
    return {
        type: DELETE_PROPERTY_FAILURE,
        payload: error,
    };
};

export const deleteProperty = id => async dispatch => {
    dispatch(deleteStart());
    try {
        const response = await withAuth(`/user/property/${id}`, 'delete');
        console.log(response);
        dispatch(deleteSuccess(id));
    } catch (error) {
        console.log(error);
        dispatch(deleteFail(error.response));
    }
};
