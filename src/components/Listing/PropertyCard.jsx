import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

const PropertyCard = ({
    className = '',
    id,
    loggedInAs,
    address,
    state,
    zip,
    city,
    description,
    price,
    owner,
}) => {
    const location = useLocation();
    const history = useHistory();
    console.log(owner, loggedInAs);
    return (
        <div
            onClick={e => {
                e.stopPropagation();
                history.push(`${location.pathname}/${id}`);
            }}
            className={`${className} property card`.trim()}>
            <img
                src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="placeholder"
            />
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
                        <div
                            className="edit"
                            onClick={e => e.stopPropagation()}>
                            Edit
                        </div>
                        <div
                            className="delete"
                            onClick={e => e.stopPropagation()}>
                            Delete
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

export default connect(mapStateToProps, {})(PropertyCard);
