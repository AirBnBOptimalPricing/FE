import React from 'react';
import { Form, withFormik } from 'formik';
import * as Yup from 'yup';
import { useOptions } from '../../hooks';
import { Input } from '../';

const AddForm = ({ errors, touched, initialValues, values }) => {
    const [floors, bedsAndBaths] = useOptions([{ amount: 5 }, { amount: 7 }]);

    return (
        <div className="form">
            <header>
                <h3 className="form-header">Add a property</h3>
            </header>
            <Form>
                <Input name="address" id="address" />
                <Input name="city" id="city" />
                <Input name="state" id="state" />
                <Input name="zip" id="zip" />
                <Input name="description" id="description" />

                <Input
                    name="propertyType"
                    id="property-type"
                    altText="Property Type"
                />
                <Input name="floors" as="select" id="floors">
                    {floors}
                </Input>
                <Input name="beds" as="select" id="beds">
                    {bedsAndBaths}
                </Input>
                <Input name="baths" as="select" id="baths">
                    {bedsAndBaths}
                </Input>
                <Input name="amenities" id="amenities" />
                <Input name="price" id="price" />
                <Input
                    name="canHaveChildren"
                    type="checkbox"
                    id="children"
                    altText="Children Allowed"
                    className="checkbox"
                />
                <button type="submit">Add Property</button>
            </Form>
        </div>
    );
};

// cannot make configuration file outside of this file
const EnhancedAddForm = withFormik({
    mapPropsToValues: ({
        address = '',
        city = '',
        state = '',
        zip = '',
        description = '',
        canHaveChildren = false,
        propertyType = '',
        floors = 1,
        beds = 1,
        baths = 1,
        amenities = '',
        price = '',
    }) => ({
        address,
        city,
        state,
        zip,
        description,
        canHaveChildren,
        propertyType,
        floors,
        beds,
        baths,
        amenities,
        price,
    }),
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
        baths: Yup.string(),
        amenities: Yup.string().required(),
        price: Yup.string().required(),
    }),
    handleSubmit: (values, formikBag) => {},
})(AddForm);

export default EnhancedAddForm;
