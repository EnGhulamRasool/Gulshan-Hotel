import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/location', name: 'Location' },
    { path: '/room', name: 'Rooms' },
    { path: '/gallery', name: 'Attractions' },
    { path: '/contact', name: 'Contact' },
    // { path: '/rooms', name: 'Rooms & Suites' },
    // { path: '/contact', name: 'Contact' },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <h1>Gulshan Hotel Kachura</h1>
        </Link>

 {/* <Link to="/" className="logo-container">
      <div className="logo-wrapper">
        <img 
          src="../images/logo.jpeg"
          alt="Gulshan Hotel Kachura Logo" 
          className="logo-image"
        />
        <h1 className="logo-text">Gulshan Hotel Kachura</h1>
      </div>
    </Link> */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/923175000734" 
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Whatsapp
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;