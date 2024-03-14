import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {

    setLoggedIn(Auth.loggedIn());

    if (Auth.loggedIn()) {
      const user = Auth.getProfile();
      setProfile(user.data.firstName); 
      console.log(user)
    }
  }, []);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    setLoggedIn(false);
    setProfile('');
  };

  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Great K9s</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/booknow">Book Now</Nav.Link>
            {loggedIn ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link href='/login'>Login / Sign Up</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Header;
