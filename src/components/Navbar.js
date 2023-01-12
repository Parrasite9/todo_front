import {useState, useEffect} from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from  './NavbarElements'

const Navbar = () => {
    return(
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>About</NavLink>
                    <NavLink to='/events' activeStyle>Events</NavLink>
                    <NavLink to='/annual' activeStyle>Annual</NavLink>
                    <NavLink to='/team' activeStyle>Teams</NavLink>
                    <Navlink to='/sign-up' activeStyle>Sign Up</Navlink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar