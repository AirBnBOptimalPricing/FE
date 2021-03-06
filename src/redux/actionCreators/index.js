import { authStart, authFailure, loginSuccess, registerSuccess } from './auth';
import { login, register } from './asyncAuth';
import { addFail, addStart, addSuccess } from './addProperty';
import { addProperty } from './asyncAdd';
import { setLoggedInUser } from './setLoggedInUser';
import { getProperties, getSingleProperty } from './getProperties';
import { toggleModal } from './toggleModal';
import { logOutUser } from './logOutUser';
import { deleteProperty } from './deleteProperty';
import { updateProperty } from './updateProperty';
import { getSuggestedPrice } from './getSuggestedPrice';

export {
    authStart,
    authFailure,
    loginSuccess,
    registerSuccess,
    login,
    register,
    addFail,
    addStart,
    addSuccess,
    addProperty,
    setLoggedInUser,
    getProperties,
    toggleModal,
    logOutUser,
    getSingleProperty,
    deleteProperty,
    updateProperty,
    getSuggestedPrice,
};
