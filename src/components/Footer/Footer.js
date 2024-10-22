import React from 'react';
import './Footer.css';

/**
 * Footer component for displaying the website's footer section. 
 * Contains a logo, description, helpful links, popular regions, 
 * and social media links.
 * 
 * @returns {JSX.Element} - The rendered footer component
 */
const Footer = () => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-content">

          {/* Logo section with description */}
          <div className="footer-logo-section">
            <img src="/images/logo.png" alt="One Ring Rentals" className="footer-logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo eros nibh...</p>
          </div>

          {/* Helpful links section */}
          <div className="footer-links-section">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              <li><a href="#">All rentals</a></li>
              <li><a href="#">List your rental</a></li>
              <li><a href="#">Read our FAQs</a></li>
            </ul>
          </div>

          {/* Popular regions section with images */}
          <div className="footer-regions-section">
            <h3>Popular Regions</h3>
            <ul className="footer-regions">
              <li>
                <div className="image">
                  <a href="#">
                    <img src="https://place-hold.it/60" alt="Rhovanion" />
                  </a>
                </div>
                <p><a href="#">Rhovanion</a></p>
              </li>
              <li>
                <div className="image">
                  <a href="#">
                    <img src="https://place-hold.it/60" alt="Eriador" />
                  </a>
                </div>
                <p><a href="#">Eriador</a></p>
              </li>
              <li>
                <div className="image">
                  <a href="#">
                    <img src="https://place-hold.it/60" alt="Bay of Belfalas" />
                  </a>
                </div>
                <p><a href="#">Bay of Belfalas</a></p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom section with copyright and social media links */}
    <div id="footer-bottom">
      <div className="container">
        <div className="footer-bottom-content">
          <div className="footer-left">
            &copy; 2024 One Ring Rentals
          </div>
          <div className="footer-right">
            <ul className="social-networks">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google"></i></a></li>
              <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
