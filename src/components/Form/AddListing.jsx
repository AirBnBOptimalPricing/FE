import React from 'react';
import * as Yup from 'yup';
import { Form, Field } from 'formik';
import { useForm } from '../../hooks';

const AddListing = () => {
    const formikConfiguration = {
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
                city,
                state,
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
    const form = () => (
        <Form>
            <Field name="address" />
            <Field name="city" />
            <Field name="state" />
            <Field name="zip" />
            <Field name="description" />
            <Field name="canHaveChildren" type="checkbox" />
            <Field name="propertyType" />
            <Field name="floors" as="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </Field>
            <Field name="beds"></Field>
            <Field name="bath"></Field>
            <Field name="amenities"></Field>
            <Field name="price"></Field>
        </Form>
    );
    const EnhancedAdd = useForm(form, formikConfiguration);
    return <EnhancedAdd />;
};

export default AddListing;
