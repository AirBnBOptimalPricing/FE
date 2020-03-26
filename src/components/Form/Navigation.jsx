import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, NavbarBrand, Navbar, Nav, NavItem } from 'reactstrap';

const Navigation = () => {
    return(
        <div>
        <Navbar>
            <NavbarBrand tag={Link} to="/">
            AirBnB
            </NavbarBrand>
            {localStorage.getItem('token') ? (
                <Nav className='nav-links'>
                <NavItem>
                    <NavLink
                    tag={Link}
                    to='/property/new'
                    >
                    Add Listing
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to='#'>
                    Log Out
                    </NavLink>
                </NavItem>
                </Nav>
            ) : (
               <Nav>
                   <NavItem> <NavLink tag={Link} to="/"> Home </NavLink></NavItem>
                   <NavItem> <NavLink tag={Link} to="/login"> LogIn </NavLink></NavItem>
                   <NavItem> <NavLink tag={Link} to="/register"> SignUp</NavLink> </NavItem>
               </Nav>
            )}
        </Navbar>
        </div>
    )
}
export default Navigation;