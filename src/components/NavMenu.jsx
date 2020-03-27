import React from 'react';
import { withToken } from '../util';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const [token] = withToken();
    return (
        <div className={`nav-menu`.trim()}>
            <Link
                className="nav-menu-link"
                //ref={homeRef}
            >
                Home
            </Link>
            <Link
                className="nav-menu-link"
                // ref={aboutRef}
            >
                About
            </Link>
            <Link
                to="/login"
                className="nav-menu-link"
                // ref={loginRef}
                hidden={token ? true : false}>
                Login
            </Link>
            <Link
                to="/register"
                className="nav-menu-link"
                // ref={registerRef}
                hidden={token ? true : false}>
                Register
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
            <div
                className="nav-menu-link"
                // ref={logoutRef}
                hidden={token ? false : true}>
                Log out
            </div>
        </div>
    );
};

export default NavMenu;
