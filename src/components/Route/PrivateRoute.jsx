import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withToken } from '../../util';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, ...props }) => {
    if (!token) {
        [token] = withToken();
    }
    // Needs a safeguard, such as, when a user goes to edit a property, they must OWN that property
    return (
        <Route
            {...props}
            render={props => {
                return token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        />
    );
};

const mapStateToProps = ({
    auth: {
        user: { token },
    },
}) => ({ token });

export default connect(mapStateToProps)(PrivateRoute);
