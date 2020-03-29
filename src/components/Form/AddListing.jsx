import React, { useEffect } from 'react';
import { Form, withFormik } from 'formik';
import * as Yup from 'yup';
import { useOptions } from '../../hooks';
import { Input } from '../';
import { connect } from 'react-redux';
import { addProperty, getSuggestedPrice } from '../../redux/actionCreators/';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { formatMoney } from '../../util';

const AddForm = ({
    errors,
    touched,
    values: { neighborhoodGroup: neighbourhood_group, propertyType: room_type },
    getSuggestedPrice,
    amount,
}) => {
    const [floors, bedsAndBaths, propertyType, neighborhoodGroup] = useOptions([
        { amount: 5 },
        { amount: 7 },
        {
            data: {
                1: 'Apartment Unit / House',
                2: 'Private Room',
                3: 'Shared room',
            },
        },
        {
            data: {
                1: 'Mitte',
                2: 'Pankow',
                3: 'Tempelhof - Schöneberg',
                4: 'Friedrichshain-Kreuzberg',
                5: 'Neukölln',
                6: 'Charlottenburg-Wilm.',
                7: 'Treptow - Köpenick',
                8: 'Steglitz - Zehlendorf',
                9: 'Reinickendorf',
                10: 'Lichtenberg',
                11: 'Marzahn - Hellersdorf',
                12: 'Spandau',
            },
        },
    ]);

    useEffect(() => {
        // send a req to https://dspt3airbnb.herokuapp.com/predict
        //  if both pieces of information is available
        if (room_type && neighbourhood_group) {
            getSuggestedPrice({ room_type, neighbourhood_group });
        }
        // eslint-disable-next-line
    }, [room_type, neighbourhood_group]);

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
                    inputClassName="ds-input"
                    as="select">
                    {propertyType}
                </Input>
                <Input
                    name="neighborhoodGroup"
                    id="neighborhood-group"
                    altText="Neighborhood"
                    inputClassName="ds-input"
                    as="select">
                    {neighborhoodGroup}
                </Input>
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
                {amount && (
                    <div className="suggested-price-field">
                        <p>Suggested price: </p>
                        <p>${formatMoney(amount)}</p>
                    </div>
                )}

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
            propertyType = '1',
            neighborhoodGroup = '1',
            floors = 1,
            beds = 1,
            baths = 1,
            amenities = '',
            amount,
            price,
        }) => {
            return {
                address,
                city,
                state,
                zip,
                description,
                canHaveChildren,
                neighborhoodGroup,
                propertyType,
                floors,
                beds,
                baths,
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
            propertyType: Yup.string(), // what kind of property types are there? commerical/residential
            neighborhoodGroup: Yup.string(),
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
                neighborhoodGroup,
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
        suggestedPrice: { amount },
    },
}) => {
    return { isLoading, amount };
};

export default connect(mapStateToProps, { addProperty, getSuggestedPrice })(
    EnhancedAddForm,
);
