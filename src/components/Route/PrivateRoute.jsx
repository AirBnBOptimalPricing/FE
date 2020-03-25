import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useToken } from '../../hooks';

const PrivateRoute = ({ component: Component, ...props }) => {
    const token = useToken();
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

export default PrivateRoute;
