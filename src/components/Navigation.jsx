import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actionCreators';
import { NavMenu } from './';

const Navigation = ({ className = '', toggleModal }) => {
    const openSideDrawer = () => {
        toggleModal('sideDrawer');
    };

    return (
        <div className={`${className} nav`.trim()}>
            <Link className="nav-brand" to="/property">
                AirBnB Optimal
            </Link>
            <NavMenu />
            <div className="nav-sidedrawer button" onClick={openSideDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default connect(null, { toggleModal })(Navigation);
