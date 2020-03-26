import { initialState } from '../initialState';

export const modal = (state = { ...initialState.modal }, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};
