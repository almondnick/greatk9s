import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../src/assets/logo.png';
import styled from 'styled-components';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setProfile] = useState('');

  useEffect(() => {
    setLoggedIn(Auth.loggedIn());

    if (Auth.loggedIn()) {
      const user = Auth.getProfile();
      setProfile(user.data.firstName); 
    }
  }, []);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    setLoggedIn(false);
    setProfile('');
  };

  const StyledLogo = styled.img`
    width: 50px; /* Adjust the width as needed */
    height: auto;
    margin-right: 10px; /* Optional: Add some margin to the right */
  `;

  return (
    <Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <StyledLogo src={logo} alt="Logo" />
          Gimme Paw
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/booknow">Book Now</Nav.Link>
            {loggedIn ? (<Nav.Link href="/userappointments">My Appointments</Nav.Link>) : (<></>)}
            {loggedIn ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link href='/login'>Login / Sign Up</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
