import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

/**
 * Header component for displaying the website's navigation bar.
 * Includes the logo and navigation links for various pages.
 * 
 * @returns {JSX.Element} - The rendered header component
 */
const Header = () => (
  <header className="site-header">
    <div className="container header-container">

      {/* Logo section with a link to the homepage */}
      <div className="logo">
        <Link to="/">
          <img src="https://i.postimg.cc/QdhTZyy5/logo.png" alt="One Ring Rentals" />
        </Link>
      </div>

      {/* Navigation menu with links to different pages */}
      <div className="nav-container">
        <nav className="navigation">
          <ul>
            <li><Link to="/">Find a Rental</Link></li>
            <li><Link to="/">List your rental</Link></li>
            <li><Link to="/">Travel Guides</Link></li>
            <li><Link to="/regions">Regions</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

    </div>
  </header>
);

export default Header;
