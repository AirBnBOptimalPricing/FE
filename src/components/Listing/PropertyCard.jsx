import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { deleteProperty } from '../../redux/actionCreators';

const PropertyCard = ({
    className = '',
    id,
    loggedInAs,
    address,
    state,
    zip,
    city,
    description,
    propertyType,
    floors,
    beds,
    baths,
    price,
    user_id: owner,
    deleteProperty,
    refresh,
}) => {
    const location = useLocation();
    const history = useHistory();

    const deletePropertyonClick = e => {
        e.stopPropagation();
        deleteProperty(id).then(() => {
            history.push('/property');
            refresh();
        });
    };
    return (
        <div
            onClick={e => {
                e.stopPropagation();
                history.push(`${location.pathname}/${id}`);
            }}
            className={`${className} property card`.trim()}>
            <img
                src="https://images.unsplash.com/photo-1538685634737-24b83e3fa2f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                alt="placeholder"
            />
            <div className="property-info">
                <header>
                    <h4>{`${address}, ${city}, ${state.toUpperCase()}, ${zip}`}</h4>
                </header>
                <section>
                    <div>
                        <p>{description}</p>
                        {/* <p>{`A ${floors} ${propertyType} with ${beds} and ${baths}`}</p> // returns undefined */}
                        <p>Price: {`$${price}`}</p>
                    </div>
                </section>
                {// conditionally render only if the owner is looking at them
                // commented due to the way BE made the property model without an owner property
                owner === loggedInAs.id && (
                    <div className="property-controls">
                        <div
                            className="edit"
                            onClick={e => {
                                e.stopPropagation();
                                history.push(`/property/${id}/edit`);
                            }}>
                            Edit
                        </div>
                        <div 
                            className="delete" 
                            onClick={deletePropertyonClick}>
                            Clear
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = ({
    auth: {
        user: { loggedInAs },
    },
}) => {
    return { loggedInAs: { ...loggedInAs } };
};

export default connect(mapStateToProps, { deleteProperty })(PropertyCard);
