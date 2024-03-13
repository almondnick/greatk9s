import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
  
  return (
    <header>
      <nav class="navbar">
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
            </ul>
        </nav>
    </header>
  );
};

export default Header;
