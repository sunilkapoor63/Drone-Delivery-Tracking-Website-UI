import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src="/images/logo.jpg" alt="Logo" className="footer-logo" />
          <p>Reach for the skies with SkyDrop: your fast, reliable drone delivery service!</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Press</a>
            <a href="#">Responsibility</a>
            <a href="#">Safety and Privacy</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <a href="#">Delivery Packages</a>
            <a href="#">Medical Delivery</a>
            <a href="#">Food Delivery</a>
            <a href="#">Inspection Services</a>
            <a href="#">Pricing</a>
            <a href="#">Delivery Area</a>
          </div>
          <div className="footer-column">
            <h3>Partners</h3>
            <a href="#">Partner with XYZ</a>
            <a href="#">Browse Partners</a>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <a href="#">Help Center</a>
            <a href="#">Getting Started</a>
            <a href="#">FAQs</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <select className="language-selector">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
        <p>© Designed by Sunil Kapoor</p>
      </div>
    </footer>
  );
}

export default Footer;
