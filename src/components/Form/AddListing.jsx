import React from 'react';
import { Form, Field } from 'formik';
import { useForm } from '../../hooks';
import { addConfiguration } from './configurations';

const AddListing = () => {
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
    const EnhancedAdd = useForm(form, addConfiguration);
    return <EnhancedAdd />;
};

export default AddListing;
