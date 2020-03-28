import React, { useRef, useEffect, useState } from 'react';
import { Modal } from '../';
import { Link, useHistory } from 'react-router-dom';
import { withToken } from '../../util';
import { connect } from 'react-redux';
import { toggleModal, logOutUser } from '../../redux/actionCreators';
// import { gsap } from 'gsap';

const SideDrawerModal = ({ show, toggleModal, token, logOutUser }) => {
    // const homeRef = useRef(null);
    // const aboutRef = useRef(null);
    // const loginRef = useRef(null);
    // const registerRef = useRef(null);
    // const propertyRef = useRef(null);
    // const addPropertyRef = useRef(null);
    // const logoutRef = useRef(null);

    const history = useHistory();

    if (!token) {
        [token] = withToken();
    }
    // const timeline = gsap.timeline({ paused: true });

    useEffect(() => {
        // timeline.to(homeRef, { x: 0 });
        // timeline.from(homeRef, { x: 500, duration: 0.25 });
        // timeline.from(aboutRef, { x: 500, duration: 0.25 });
        // timeline.from(loginRef, { x: 500, duration: 0.25 });
        // timeline.from(registerRef, { x: 500, duration: 0.25 });
        // timeline.from(propertyRef, { x: 500, duration: 0.25 });
        // timeline.from(addPropertyRef, { x: 500, duration: 0.25 });
        // timeline.from(logoutRef, { x: 500, duration: 0.25 });
    }, []);

    const handleClick = () => {
        history.push('/login');
        toggleModal('sideDrawer');
    };

    const logOut = e => {
        e.preventDefault();
        e.stopPropagation();
        logOutUser();
        history.push('/login');
    };
    return (
        <Modal
            modalName="sideDrawer"
            className={`sidedrawer ${show ? 'show' : ''}`.trim()}>
            <div
                className={`sidedrawer-container ${show ? 'show' : ''}`.trim()}>
                <Link
                    to="/property"
                    onClick={handleClick}
                    className="sidedrawer-link"
                    //ref={homeRef}
                >
                    Home
                </Link>
                <Link
                    to="/property"
                    onClick={handleClick}
                    className="sidedrawer-link"
                    // ref={aboutRef}
                >
                    About
                </Link>
                <Link
                    onClick={handleClick}
                    to="/property"
                    className="sidedrawer-link"
                    // ref={propertyRef}
                    hidden={token ? false : true}>
                    Properties
                </Link>
                <Link
                    onClick={handleClick}
                    to="/property/new"
                    className="sidedrawer-link"
                    // ref={addPropertyRef}
                    hidden={token ? false : true}>
                    Add Property
                </Link>
                <Link
                    to="/register"
                    onClick={handleClick}
                    className="sidedrawer-link"
                    // ref={registerRef}
                    hidden={token ? true : false}>
                    Register
                </Link>
                <div
                    onClick={logOut}
                    className="sidedrawer-link"
                    // ref={logoutRef}
                >
                    Log {token ? 'out' : 'in'}
                </div>
            </div>
        </Modal>
    );
};

const mapStateToProps = ({
    modal: {
        sideDrawer: { show },
    },
    auth: {
        user: { token },
    },
}) => ({
    show,
    token,
});

export default connect(mapStateToProps, { toggleModal, logOutUser })(
    SideDrawerModal,
);
