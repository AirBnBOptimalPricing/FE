import axios from 'axios';

import {
    GET_SUGGESTED_PRICE_START,
    GET_SUGGESTED_PRICE_SUCCESS,
    GET_SUGGESTED_PRICE_FAILURE,
} from '../actions';

const getSuggestedPriceStart = () => {
    return {
        type: GET_SUGGESTED_PRICE_START,
    };
};

const getSuggestedPriceSuccess = data => {
    return {
        type: GET_SUGGESTED_PRICE_SUCCESS,
        payload: data,
    };
};

const getSuggestedPriceFailure = error => {
    return {
        type: GET_SUGGESTED_PRICE_FAILURE,
        payload: error,
    };
};

export const getSuggestedPrice = ({
    neighbourhood_group,
    room_type,
}) => async dispatch => {
    dispatch(getSuggestedPriceStart());

    try {
        // response.data comes back as
        /**
         * {
         * prediction: "[value]" // also stupid
         * }
         */
        console.log('getting suggested price');
        const response = await axios.post(
            'https://dspt3airbnb.herokuapp.com/predict',
            [
                // having to send data as a list is dumb
                {
                    room_type,
                    neighbourhood_group,
                },
            ],
        );
        console.log(response.data.prediction.replace(/[[\]]/g, ''));

        dispatch(
            getSuggestedPriceSuccess(
                response.data.prediction.replace(/[[\]]/g, ''),
            ),
        );
    } catch (error) {
        dispatch(
            getSuggestedPriceFailure(
                'Something went wrong getting a suggested price',
            ),
        );
    }
};
