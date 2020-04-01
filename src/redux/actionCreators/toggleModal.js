import { TOGGLE_MODAL } from '../actions';

export const toggleModal = modalName => {
    return {
        type: TOGGLE_MODAL,
        payload: modalName,
    };
};
