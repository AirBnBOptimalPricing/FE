import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleProperty } from '../../redux/actionCreators';

const Property = ({
    className = '',
    match: {
        params: { id },
    },
    history,
    loggedInAs,
    getSingleProperty,
    active: {
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
        // amenities,
        price,
        owner,
    },
}) => {
    // const {
    //     id: propertyId,
    //     address,
    //     city,
    //     state,
    //     zip,
    //     description,
    //     canHaveChildren,
    //     propertyType,
    //     floors,
    //     beds,
    //     baths,
    //     // amenities,
    //     price,
    //     owner,
    // } = list[id]; // the way list is set up this is how to extract property

    useEffect(() => {
        getSingleProperty(id);
        // eslint-disable-next-line
    }, []);
    return (
        <div className={`${className} property listing`.trim()}>
            <img
                src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="placeholder"
            />
            <h2 className="price">&euro;{price}</h2>
            <header>
                <h4>{address}</h4>
                <div>{`${city}, ${state}, ${zip}`}</div>
            </header>
            <section className="body">
                <div className="description">Description: {description}</div>
                <div className="children separate">
                    <p>Children allowed:</p>
                    <p> {canHaveChildren ? 'Yes' : 'No'}</p>
                </div>
                <div className="property-type separate">
                    <p>Property type:</p> <p>{propertyType}</p>
                </div>
                <div className="beds separate">
                    <p>Beds:</p>
                    <p>{beds}</p>
                </div>
                <div className="baths separate">
                    <p>Baths:</p>
                    <p>{baths}</p>
                </div>
                <div className="floors separate">
                    <p>Floors:</p>
                    <p>{floors}</p>
                </div>
            </section>
            {/* {owner === loggedInAs.id &&  */}
            <div className="property-controls">
                <div
                    className="edit"
                    onClick={e => {
                        e.stopPropagation();
                        history.push(`/property/${id}/edit`);
                    }}>
                    Edit
                </div>
                <div className="delete" onClick={e => e.stopPropagation()}>
                    Delete
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({
    property: { active },
    auth: {
        user: { loggedInAs },
    },
}) => ({
    active,
    loggedInAs,
});

export default connect(mapStateToProps, { getSingleProperty })(Property);
