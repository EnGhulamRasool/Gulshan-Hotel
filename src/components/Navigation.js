import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      path: '/', 
      name: 'Home',
      submenu: null
    },
    { 
      name: 'About',
      submenu: [
        { path: '/about-us', name: 'About Us' },
        { path: '/terms', name: 'Terms and Conditions' }
      ]
    },
    { 
      name: 'Stays',
      submenu: [
        { path: '/room', name: 'Rooms' },
        // { path: '/our-menu', name: 'Our Menu' },
        { path: '/cultural-dishes', name: 'Cultural Dishes' }
      ]
    },
    { 
      name: 'Car Rental',
      submenu: [
        { path: '/vehicle-rentals', name: 'Vehicle Rentals' },
        // { path: '/vacation-rentals', name: 'Vacation Rentals' },
        // { path: '/travel-stories', name: 'Travel Stories' },
        // { path: '/travel-forum', name: 'Travel Forum' }
      ]
    },
    { 
      name: 'Tour Package',
      submenu: [
        { path: '/location', name: 'Things to Do' },
        { path: '/gallery', name: 'Gallery' }
      ]
    },
    { 
      path: '/contact', 
      name: 'Contact',
      submenu: null
    }
  ];

  const toggleMobileSubmenu = (index) => {
    if (mobileSubmenu === index) {
      setMobileSubmenu(null);
    } else {
      setMobileSubmenu(index);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <h1>Gulshan Hotel Kachura</h1>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <div 
              key={item.path || item.name} 
              className="nav-item-container"
            >
              {item.submenu ? (
                <>
                  <div 
                    className="nav-item has-submenu"
                    onMouseEnter={() => !isOpen && setMobileSubmenu(index)}
                    onMouseLeave={() => !isOpen && setMobileSubmenu(null)}
                    onClick={() => isOpen && toggleMobileSubmenu(index)}
                  >
                    {item.name}
                    <FaChevronDown className="submenu-arrow" />
                    <div className={`submenu ${mobileSubmenu === index ? 'open' : ''}`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="submenu-item"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSubmenu(null);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="nav-item"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileSubmenu(null);
                  }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <a 
            href="https://wa.me/923425577821?text=Hello%20Gulshan%20Hotel%20Kachura,%20I'm%20interested%20in%20booking%20a%20room%20or%20tour%20package.%20Could%20you%20please%20share%20availability%20and%20details?"
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <FaWhatsapp className="whatsapp-icon" /> WhatsApp
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileSubmenu(null);
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;