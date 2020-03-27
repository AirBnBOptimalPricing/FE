import { TOGGLE_MODAL } from '../actions';

const initialState = {
    sideDrawer: {
        show: false,
    },
};

const toggleModal = modalName => {
    return {
        type: TOGGLE_MODAL,
        payload: modalName,
    };
};

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    show: !state[action.payload].show,
                },
            };
        default:
            return { ...state };
    }
};
