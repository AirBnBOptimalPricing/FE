import React from 'react';
import { withToken } from '../util';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../redux/actionCreators';

const NavMenu = ({ logOutUser, token }) => {
    // first grab token from store
    const history = useHistory();

    // if not there, we will use localStorage to find a token if present
    if (!token) {
        // if no token or not null
        [token] = withToken();
    }

    console.log(history);

    const logOut = e => {
        logOutUser();
        history.push('/login');
    };

    console.log(token);
    return (
        <div className={`nav-menu`.trim()}>
            <Link
                className="nav-menu-link"
                to="/property"
                //ref={homeRef}
            >
                Home
            </Link>
            <Link
                className="nav-menu-link"
                to="/property"
                // ref={aboutRef}
            >
                About
            </Link>
            <Link
                to="/property"
                className="nav-menu-link"
                // ref={propertyRef}
            >
                Properties
            </Link>
            <Link
                to="/property/new"
                className="nav-menu-link"
                // ref={addPropertyRef}
                hidden={token ? false : true}>
                Add Property
            </Link>
            <Link
                to="/register"
                className="nav-menu-link"
                // ref={registerRef}
                hidden={token ? true : false}>
                Register
            </Link>
            <div
                className="nav-menu-link"
                // ref={logoutRef}
                onClick={logOut}>
                Log {token ? 'out' : 'in'}
            </div>
        </div>
    );
};

const mapStateToProps = ({
    auth: {
        user: { token },
    },
}) => ({ token });

export default connect(mapStateToProps, { logOutUser })(NavMenu);
