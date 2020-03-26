import React from 'react';
import { connect } from 'react-redux';

const PropertyCard = ({
    className = '',
    loggedInAs,
    address,
    state,
    zip,
    city,
    description,
    price,
    owner,
}) => {
    return (
        <div className={`${className} property card`.trim()}>
            <img src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <div className="property-info">
                <header>
                    <h4>{`${address}, ${city}, ${state.toUpperCase()}, ${zip}`}</h4>
                </header>
                <section>
                    <div>
                        <p>{description}</p>
                        <p>Price: {`$${price}`}</p>
                    </div>
                </section>
                {// conditionally render only if the owner is looking at them
                owner === loggedInAs.id && (
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
