import React from 'react';
import { connect } from 'react-redux';

const PropertyCard = ({ className = '', loggedInAs }) => {
    const property = {
        address: '1234 Rainbow Street N',
        city: 'hayward',
        state: 'ca',
        zip: 94544,
        description: 'apartment with 3 bedrooms',
        children_allowed: 0,
        property_type: 'apartment',
        bedrooms_number: 3,
        bathrooms_number: 2,
        amenities: 'AC',
        price: '4000',
        owner: 4,
    };
    console.log(loggedInAs);
    return (
        <div className={`${className} property card`.trim()}>
            <img src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <div className="property-info">
                <header>
                    <h4>{`${property.address}, ${
                        property.city
                    }, ${property.state.toUpperCase()}, ${property.zip}`}</h4>
                </header>
                <section>
                    <div>
                        <p>{property.description}</p>
                        <p>Price: {`$${property.price}`}</p>
                    </div>
                </section>
                {// conditionally render only if the owner is looking at them
                property.owner === loggedInAs.id && (
                    <div className="property-controls">
                        <div className="edit">Edit</div>
                        <div className="delete">Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = ({ auth: { user } }) => {
    return { loggedInAs: { ...user.loggedInAs } };
};

export default connect(mapStateToProps, {})(PropertyCard);
