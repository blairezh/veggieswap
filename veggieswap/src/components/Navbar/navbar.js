import React, { useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
      }
    }, [isAuth]);
    return ( 
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            VeggieSwap
          </a>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <a href="/publicboard">Listings</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;