import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaFileAlt,
  FaBed,
  FaUtensils,
  FaCar,
  FaMapMarkedAlt,
  FaImages,
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";
import "./Footerpage.css";

const Footer = () => {
  const navItems = [
    { 
      path: '/', 
      name: 'Home',
      icon: <FaHome />,
      submenu: null
    },
    { 
      name: 'About',
      icon: <FaInfoCircle />,
      submenu: [
        { path: '/about-us', name: 'About Us', icon: <FaInfoCircle /> },
        { path: '/terms', name: 'Terms and Conditions', icon: <FaFileAlt /> }
      ]
    },
    { 
      name: 'Stays',
      icon: <FaBed />,
      submenu: [
        { path: '/room', name: 'Rooms', icon: <FaBed /> },
        { path: '/cultural-dishes', name: 'Cultural Dishes', icon: <FaUtensils /> }
      ]
    },
    { 
      name: 'Car Rental',
      icon: <FaCar />,
      submenu: [
        { path: '/vehicle-rentals', name: 'Vehicle Rentals', icon: <FaCar /> },
      ]
    },
    { 
      name: 'Tour Package',
      icon: <FaMapMarkedAlt />,
      submenu: [
        { path: '/location', name: 'Things to Do', icon: <FaMapMarkedAlt /> },
        { path: '/gallery', name: 'Gallery', icon: <FaImages /> }
      ]
    },
    { 
      path: '/contact', 
      name: 'Contact',
      icon: <FaAddressBook />,
      submenu: null
    }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Gulshan Hotel Kachura</h3>
            <p>
              <FaMapMarkerAlt className="footer-icon" /> Kachura Lake, Skardu, Pakistan
            </p>
            <p>
              <FaPhone className="footer-icon" />
              <a href="tel:+923425577821">+92 342 5577821</a>
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:info@gulshanhotelkachura.com">
                info@gulshanhotelkachura.com
              </a>
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="social-icon" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="social-icon" />
              </a>
            </div>
          </div>
          
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              {navItems.map((item) => {
                if (item.submenu) {
                  return item.submenu.map((subItem) => (
                    <li key={subItem.path}>
                      <a href={subItem.path}>
                        <span className="footer-icon">
                          {subItem.icon}
                        </span>
                        {subItem.name}
                      </a>
                    </li>
                  ));
                } else {
                  return (
                    <li key={item.path}>
                      <a href={item.path}>
                        <span className="footer-icon">
                          {item.icon}
                        </span>
                        {item.name}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button className="cta-button">Subscribe</button>
            </div>
            <div className="whatsapp-cta">
              <a 
                href="https://wa.me/923425577821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <FaWhatsapp className="whatsapp-icon" /> Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Gulshan Hotel Kachura. All Rights Reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://wa.me/923476903476"
              target="_blank"
              rel="noopener noreferrer"
              className="engineer-contact-link"
            >
              Eng. Ghulam Rasool
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;