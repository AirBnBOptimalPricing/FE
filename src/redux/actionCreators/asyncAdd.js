import { addStart, addFail, addSuccess } from './addProperty';
import { withAuth } from '../../util';
export const addProperty = property => async dispatch => {
    console.log('start');
    // dispatch(addStart);
    // const response = await withAuth('/api/property', post)
    // dispatch(addSuccess(response.data))
    console.log('finish');
    try {
    } catch (error) {
        // dispatch(addFail(error))
        console.log('failure');
    }
};
