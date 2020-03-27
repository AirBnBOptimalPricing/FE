import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { NavLink, NavbarBrand, Navbar, Nav, NavItem } from 'reactstrap';
import { toggleModal } from '../redux/actionCreators';

const Navigation = ({ className = '', toggleModal }) => {
    const openSideDrawer = () => {
        toggleModal('sideDrawer');
    };

    return (
        <div className={`${className} nav`.trim()}>
            <Link className="nav-brand" to="/property">
                AirBnB Optimal
            </Link>
            <div className="nav-sidedrawer button" onClick={openSideDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* <Navbar>
                <NavbarBrand tag={Link} to="/">
                    AirBnB
                </NavbarBrand>
                {localStorage.getItem('token') ? (
                    <Nav className="nav-links">
                        <NavItem>
                            <NavLink tag={Link} to="/property/new">
                                Add Listing
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="#">
                                Log Out
                            </NavLink>
                        </NavItem>
                    </Nav>
                ) : (
                    <Nav>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/login">
                                LogIn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">
                                SignUp
                            </NavLink>
                        </NavItem>
                    </Nav>
                )}
            </Navbar> */}
        </div>
    );
};

export default connect(null, { toggleModal })(Navigation);
