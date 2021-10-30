import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavbarComp.css'

const NavbarComp = () => {
  const {logout,user} = useAuth()
  const [navbar,setNavbar] = useState(false);

  const changeNavBackground = () => {
   
    if(window.scrollY >= 255){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changeNavBackground)
    return (
        <Navbar className={navbar ? 'nav nav-active': 'nav'} expand="lg">
  <Container>
    <Navbar.Brand className='nav-heading' href="#home">NPM Tourism</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className='nav-link' to='/home'>Home</NavLink>
        <a className='nav-link' href="#tour-packages">Tour Packages</a>
        
        
        
       {
         user.email? 
         <span></span>
         :
         <NavLink className='nav-link' to='/login' >Login</NavLink>
       }
       
        
        {
          user.email? 
          <NavLink className='nav-link' to='/myorders' >My Orders</NavLink>
          
          :
          <span></span>
        }
        {
          user.email? 
          <NavLink className='nav-link' to='/manage' >Manage All Orders </NavLink>
          
          :
          <span></span>
        }
        {
          user.email? 
          <NavLink className='nav-link' to='/addService' >Add a New Service  </NavLink>
          
          :
          <span></span>
        }
        {
          user.email? 
          <button onClick={logout} className='nav-link-btn'>LogOut</button>
          
          :
          <span></span>
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavbarComp;