import React, { useRef, useEffect, useState } from 'react';
import { Modal } from '../';
import { Link } from 'react-router-dom';
import { withToken } from '../../util';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actionCreators';
// import { gsap } from 'gsap';

const SideDrawerModal = ({ show, toggleModal }) => {
    // const homeRef = useRef(null);
    // const aboutRef = useRef(null);
    // const loginRef = useRef(null);
    // const registerRef = useRef(null);
    // const propertyRef = useRef(null);
    // const addPropertyRef = useRef(null);
    // const logoutRef = useRef(null);

    const [token, _setToken] = withToken();
    console.log(token ? true : false);
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

    const handleClick = e => {
        toggleModal('sideDrawer');
    };
    return (
        <Modal
            modalName="sideDrawer"
            className={`sidedrawer ${show ? 'show' : ''}`.trim()}>
            <div
                className={`sidedrawer-container ${show ? 'show' : ''}`.trim()}>
                <Link
                    onClick={handleClick}
                    className="sidedrawer-link"
                    //ref={homeRef}
                >
                    Home
                </Link>
                <Link
                    onClick={handleClick}
                    className="sidedrawer-link"
                    // ref={aboutRef}
                >
                    About
                </Link>
                <Link
                    onClick={handleClick}
                    to="/login"
                    className="sidedrawer-link"
                    // ref={loginRef}
                    hidden={token ? true : false}>
                    Login
                </Link>
                <Link
                    to="/register"
                    onClick={handleClick}
                    className="sidedrawer-link"
                    // ref={registerRef}
                    hidden={token ? true : false}>
                    Register
                </Link>
                <Link
                    onClick={handleClick}
                    to="/property"
                    className="sidedrawer-link"
                    // ref={propertyRef}
                >
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
                <div
                    onClick={handleClick}
                    className="sidedrawer-link"
                    // ref={logoutRef}
                    hidden={token ? false : true}>
                    Log out
                </div>
            </div>
        </Modal>
    );
};

const mapStateToProps = ({
    modal: {
        sideDrawer: { show },
    },
}) => ({
    show,
});

export default connect(mapStateToProps, { toggleModal })(SideDrawerModal);
