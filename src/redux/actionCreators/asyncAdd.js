import { addStart, addFail, addSuccess } from './addProperty';
import { withAuth } from '../../util';
export const addProperty = property => async dispatch => {
    dispatch(addStart);
    try {
        const response = await withAuth('/api/property', 'post');
        dispatch(addSuccess(response.data));
        return response;
    } catch (error) {
        dispatch(addFail(error));
        return error;
    }
};
