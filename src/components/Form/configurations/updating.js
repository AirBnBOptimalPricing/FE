import * as Yup from 'yup';

export const createEditConfiguration = ({ id, property }) => {
    return {
        mapPropsToValue(property) {
            return {
                // form shape
                ...property,
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
};
