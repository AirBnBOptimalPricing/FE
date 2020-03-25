import React from 'react';
import { Form } from 'formik';
import { useForm, useOptions } from '../../hooks';
import { addConfiguration } from './configurations';
import { Input } from '../';
const AddListing = () => {
    const [floors, bedsAndBaths] = useOptions([{ amount: 5 }, { amount: 7 }]);

    const form = () => (
        <Form>
            <Input name="address" type="text" />
            <Input name="city" type="text" />
            <Input name="state" type="text" />
            <Input name="zip" type="number" />
            <Input name="description" type="text" />
            <Input name="canHaveChildren" type="checkbox" />
            <Input name="propertyType" type="text" />
            <Input name="floors" as="select">
                {floors}
            </Input>
            <Input name="beds" as="select">
                {bedsAndBaths}
            </Input>
            <Input name="bath" as="select">
                {bedsAndBaths}
            </Input>
            <Input name="amenities" />
            <Input name="price" />
        </Form>
    );
    const EnhancedAdd = useForm(form, addConfiguration);
    return <EnhancedAdd />;
};

export default AddListing;
