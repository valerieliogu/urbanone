import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>URBONE</h3>
            <p>Form Unspoken.</p>
          </div>

          <div className="footer-section">
            <h4>CATEGORY</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#catalog">Catalog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>CATEGORY</h4>
            <ul>
              <li><a href="#shirts">Shirts & Tshirt</a></li>
              <li><a href="#pants">Pants</a></li>
              <li><a href="#jackets">Jacket</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
              <a href="#youtube">YouTube</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} URBONE 2025. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms & Conditions</a>
            <span>•</span>
            <a href="#shipping">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;