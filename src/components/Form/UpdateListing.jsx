import React from 'react';
import { Form, withFormik } from 'formik';
import * as Yup from 'yup';
import { useOptions } from '../../hooks';
import { Input } from '../';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { updateProperty } from '../../redux/actionCreators';

const UpdateForm = ({ errors, touched, initialValues, values, ...props }) => {
    const [floors, bedsAndBaths] = useOptions([{ amount: 5 }, { amount: 7 }]);

    return (
        <div className="form">
            <header>
                <h3 className="form-header">Edit a property</h3>
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
                <button type="submit" className="form-update">
                    Save
                </button>
            </Form>
        </div>
    );
};

// cannot make configuration file outside of this file
const EnhancedUpdateForm = compose(
    withRouter,
    withFormik({
        // if you refresh the page it doesn't retrieve the properties and store it to list
        // this component requires a request to /property/:id but it does not exist.
        mapPropsToValues: ({
            match: {
                params: { id },
            },
            list,
            ...props
        }) => {
            // props has match, can pull id and then in redux, pull the information for a property
            try {
                const { id: propertyID, ...property } = list[id];
                return {
                    ...property,
                };
            } catch (err) {
                props.history.push('/property');
            }
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
            propertyType: Yup.string(), // what kind of property types are there? commerical/residential
            floors: Yup.string(),
            beds: Yup.string(),
            baths: Yup.string(),
            amenities: Yup.string().required(),
            price: Yup.string().required(),
        }),
        handleSubmit: (
            {
                canHaveChildren: children_allowed,
                beds: bedrooms_number,
                baths: bathrooms_number,
                propertyType: property_type,
                floors,
                ...values
            },
            {
                props: {
                    updateProperty,
                    match: {
                        params: { id },
                    },
                    history,
                },
            },
        ) => {
            const property = {
                ...values,
                zip: Number.parseInt(values.zip),
                children_allowed,
                bathrooms_number,
                bedrooms_number,
                property_type,
            };
            console.log('submitted');
            updateProperty(id, values).then(() => history.push('/property/'));
        },
    }),
)(UpdateForm);

const mapStateToProps = ({ property: { list } }) => ({ list });

export default connect(mapStateToProps, { updateProperty })(EnhancedUpdateForm);
