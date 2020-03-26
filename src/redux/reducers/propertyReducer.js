import {
    GET_PROPERTY_FAILURE,
    GET_PROPERTY_START,
    GET_PROPERTY_SUCCESS,
    CREATE_PROPERTY_FAILURE,
    CREATE_PROPERTY_SUCCESS,
    CREATE_PROPERTY_START,
    UPDATE_PROPERTY_FAILURE,
    UPDATE_PROPERTY_START,
    UPDATE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILURE,
    DELETE_PROPERTY_START,
    DELETE_PROPERTY_SUCCESS,
} from '../actions';

import { mapObject, insertObjectToMap, removeObjectFromMap } from '../../util';

const initialState = {
    list: {
        1: {
            id: 1,
            address: '1234 rainbow street n',
            city: 'Hollywood',
            state: 'ca',
            zip: '90210',
            description:
                'Premium apartment unit, 3 bed/bath, spacious, room service',
            canHaveChildren: false,
            propertyType: 'apartment',
            floors: 2,
            beds: 3,
            baths: 3,
            amenities: null,
            price: 5000,
            owner: 3,
        },
        2: {
            id: 2,
            address: '1234 rainbow street n',
            city: 'Hollywood',
            state: 'ca',
            zip: '90210',
            description:
                'Premium apartment unit, 3 bed/bath, spacious, room service',
            canHaveChildren: false,
            propertyType: 'apartment',
            floors: 2,
            beds: 3,
            baths: 3,
            amenities: null,
            price: 5000,
            owner: 4,
        },
        3: {
            id: 3,
            address: '1234 rainbow street n',
            city: 'Hollywood',
            state: 'ca',
            zip: '90210',
            description:
                'Premium apartment unit, 3 bed/bath, spacious, room service',
            canHaveChildren: false,
            propertyType: 'apartment',
            floors: 2,
            beds: 3,
            baths: 3,
            amenities: null,
            price: 5000,
            owner: 2,
        },
        4: {
            id: 4,
            address: '1234 rainbow street n',
            city: 'Hollywood',
            state: 'ca',
            zip: '90210',
            description:
                'Premium apartment unit, 3 bed/bath, spacious, room service',
            canHaveChildren: false,
            propertyType: 'apartment',
            floors: 2,
            beds: 3,
            baths: 3,
            amenities: null,
            price: 5000,
            owner: 4,
        },
    },
    active: {
        // default shape
        id: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        description: null,
        canHaveChildren: null,
        propertyType: null,
        floors: null,
        beds: null,
        baths: null,
        amenities: null,
        price: null,
    },
    status: {
        isLoading: null,
        errors: {
            message: null,
        },
    },
};

export const property = (state = { ...initialState }, action) => {
    switch (action.type) {
        case GET_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case GET_PROPERTY_SUCCESS:
            console.log('hello');
            const fetchedMappedPropertyList = mapObject(action.payload);
            console.log(fetchedMappedPropertyList);
            return {
                ...state,
                list: { ...fetchedMappedPropertyList },
                status: {
                    ...state.status,
                    isLoading: false,
                },
            };
        case GET_PROPERTY_FAILURE:
            return {
                ...state,
                list: {},
                status: {
                    ...state,
                    isLoading: false,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };
        case CREATE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case CREATE_PROPERTY_SUCCESS:
            // add to list by reconverting list back to array and subjecting to mapObject
            const newlyCreatedPropertyList = insertObjectToMap(
                action.payload,
                state.list,
            );
            return {
                ...state,
                list: { ...newlyCreatedPropertyList },
                status: {
                    isLoading: false,
                },
            };
        case CREATE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };

        case UPDATE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case UPDATE_PROPERTY_SUCCESS:
            // payload is updated object with id
            let { id } = action.payload;
            const property = { ...state.list[id], ...action.payload };
            return {
                ...state,
                list: {
                    ...state.list,
                    [id]: { ...property },
                },
                status: {
                    ...state.status,
                    isLoading: false,
                },
            };
        case UPDATE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };

        case DELETE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case DELETE_PROPERTY_SUCCESS:
            // this is where we remove said object, we are given an id
            const { id: propertyIdToDelete } = action.payload;
            const listWithoutId = removeObjectFromMap(
                propertyIdToDelete,
                state.list,
            );
            return {
                ...state,
                list: { ...listWithoutId },
                status: { ...state.status, isLoading: false },
            };
        case DELETE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: action.payload.message,
                    },
                },
            };
        default:
            return { ...state };
    }
};
