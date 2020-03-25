import * as Yup from 'yup';

export const defaultAddShape = {
    address: '1234 abc street',
    city: '',
    state: '',
    zip: '',
    description: '',
    canHaveChildren: false,
    propertyType: '',
    floors: 1,
    beds: 2,
    bath: 3,
    amenities: '',
    price: 0,
};

export const addConfiguration = {
    mapPropsToValue: () => ({ ...defaultAddShape }),
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
        floors: Yup.string(),
        beds: Yup.string(),
        bath: Yup.string(),
        amenities: Yup.string().required(),
        price: Yup.string().required(),
    }),
    handleSubmit: (values, formikBag) => {
        // handle submit here
        console.log(values);
        return;
    },
};
