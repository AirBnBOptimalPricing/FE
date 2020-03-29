import { addStart, addFail, addSuccess } from './addProperty';
import { withAuth } from '../../util';
export const addProperty = property => async dispatch => {
    dispatch(addStart());
    try {
        const response = await withAuth('/user/property', 'post', property);
        console.log(response);
        dispatch(addSuccess(response.data));
        return response.data; // data is id...
    } catch (error) {
        dispatch(addFail(error));
        return error;
    }
};
