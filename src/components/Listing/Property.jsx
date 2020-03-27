import React from 'react';
import { connect } from 'react-redux';

const Property = ({
    className = '',
    match: {
        params: { id },
    },
    list,
}) => {
    const {
        id: propertyId,
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
        owner,
    } = list[id]; // the way list is set up this is how to extract property
    return (
        <div className={`${className} property listing`.trim()}>
            <img
                src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="placeholder"
            />
            <header>
                <h4>{address}</h4>
            </header>
        </div>
    );
};

const mapStateToProps = ({ property: { list } }) => ({
    list,
});

export default connect(mapStateToProps, {})(Property);
