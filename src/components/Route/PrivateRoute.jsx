import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useToken } from '../../hooks';

const PrivateRoute = ({ component: Component, props }) => {
    const token = useToken();
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
