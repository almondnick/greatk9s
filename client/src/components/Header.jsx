import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setProfile] = useState('');

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
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <h1>About Us</h1>
            </Link>
          </li>
          <li>
            <Link to="/booknow">
              <h1>BookNow</h1>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <h1>Services</h1>
            </Link>
          </li>
          {loggedIn ? (
            <>
              <li>
                <span>Hello, {username}</span>
              </li>
              <li>
                <button onClick={logout}>
                  <h1>Logout</h1>
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <h1>Login</h1>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <h1>Sign Up!</h1>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
