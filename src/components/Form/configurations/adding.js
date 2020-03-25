import * as Yup from 'yup';

export const addConfiguration = {
    mapPropsToValue({
        address = '',
        city = '',
        state = '',
        zip = '',
        description = '',
        canHaveChildren = false,
        propertyType = '',
        floors = 1,
        beds = 0,
        bath = 0,
        amenities = '',
        price = 0,
    }) {
        return {
            // form shape
            address,
            city,
            state,
            zip,
            description,
            canHaveChildren,
            propertyType,
            floors,
            beds,
            bath,
            amenities,
            price,
        };
    },
    validationSchema: Yup.object().shape({
        // form shape goes here with validation
        address: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string()
            .min(2)
            .required(),
        zip: Yup.string()
            .required()
            .min(5),
        description: Yup.string().required(),
        canHaveChildren: Yup.boolean().oneOf([true, false]),
        propertyType: Yup.string().required(), // what kind of property types are there? commerical/residential
        floors: Yup.number().required(),
        beds: Yup.number().required(),
        bath: Yup.number(),
        amenities: Yup.string().required(),
        price: Yup.number().required(),
    }),
    handleSubmit(values, formikBag) {
        // handle submit here
        return;
    },
};
