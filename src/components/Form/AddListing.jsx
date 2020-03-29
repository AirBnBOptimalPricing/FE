import React from 'react';
import { Form, withFormik } from 'formik';
import * as Yup from 'yup';
import { useOptions } from '../../hooks';
import { Input } from '../';
import { connect } from 'react-redux';
import { addProperty } from '../../redux/actionCreators/';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const AddForm = ({ errors, touched }) => {
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
const EnhancedAddForm = compose(
    withRouter,
    withFormik({
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
            propertyType: Yup.string(), // what kind of property types are there? commerical/residential
            floors: Yup.string(),
            beds: Yup.number(),
            baths: Yup.number(),
            amenities: Yup.string().required(),
            price: Yup.number().required(),
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
            { props: { addProperty, history }, resetForm },
        ) => {
            const property = {
                ...values,
                zip: Number.parseInt(values.zip),
                children_allowed,
                bathrooms_number,
                bedrooms_number,
                property_type,
            };
            addProperty(property).then(id => {
                // on success
                console.log('success?');
                resetForm({
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    description: '',
                    canHaveChildren: false,
                    propertyType: '',
                    floors: 1,
                    beds: 1,
                    baths: 1,
                    amenities: '',
                    price: '',
                });

                history.push(`/property/`);
            });
            console.log().catch(err => {
                console.log('error happened', err.config, err.response);
            });
        },
    }),
)(AddForm);

const mapStateToProps = ({
    property: {
        status: { isLoading },
    },
}) => {
    return { isLoading };
};

export default connect(mapStateToProps, { addProperty })(EnhancedAddForm);
