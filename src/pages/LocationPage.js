import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./locationPage.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaHiking,
  FaMountain,
  FaPlane,
  FaWhatsapp,
} from "react-icons/fa";
import "./HomePage.css";

const LocationPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      setShowScrollTop(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Preloaded high-quality Unsplash images for the carousel
  const locations = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaPlane className="icon" />,
      distance: "640 METER (1KM OR 3MIN)",
      title: "SKARDU INT'L AIRPORT",
      description:
        "Pinnacle Executive Lodges is just 640m away from the Skardu International Airport. You don't have to travel across the town for accommodation anymore.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaMountain className="icon" />,
      distance: "MULTI-DAY HIKE FROM SKARDU",
      title: "K2 BASE CAMP",
      description:
        "K2 is the largest peak in Pakistan and the 2nd largest peak in the world. Start your K2 base camp journey from the most centrally located hotel in Skardu.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaHiking className="icon" />,
      distance: "SCENIC HIKING TRAILS",
      title: "HIMALAYAN TREKS",
      description:
        "Explore breathtaking Himalayan trails starting right from our doorstep. We provide guided tours and equipment rentals for all skill levels.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaMapMarkerAlt className="icon" />,
      distance: "15 MINUTES DRIVE",
      title: "KACHURA LAKE",
      description:
        "Visit the stunning Kachura Lake with its crystal clear waters, just a short drive from our location. Perfect for day trips and photography.",
    },
  ];

  // Preload all images for the carousel
  useEffect(() => {
    locations.forEach((location) => {
      const img = new Image();
      img.src = location.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((currentIndex + 1) % locations.length);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % locations.length);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, locations.length]);

  return (
    <div>
      {/* Existing Banner Carousel (Not Modified) */}
      <div className="professional-carousel">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="carousel-item"
          >
            <div
              className="background-image"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${locations[currentIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="preload-image"
              style={{ backgroundImage: `url(${locations[nextIndex].image})` }}
              aria-hidden="true"
            />
            <div className="carousel-content">
              <div className="location-spotlight">
                <h2>{locations[currentIndex].title}</h2>
                <p>{locations[currentIndex].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="carousel-controls">
          {locations.map((_, index) => (
            <button
              key={index}
              className={`control-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => {
                setNextIndex(index);
                setTimeout(() => setCurrentIndex(index), 50);
              }}
            />
          ))}
        </div>
      </div>

      {/* New Location Section */}
      <div className="location-details-container">
        <div className="container">
        <div className="location-details">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className={`location-row ${
                index % 2 === 0 ? "image-left" : "text-left"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="location-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img src={location.image} alt={location.title} loading="lazy" />
                <div className="image-overlay"></div>
              </motion.div>

              <motion.div
                className="location-text"
                initial={{ x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="location-meta">
                  {location.icon}
                  <p>{location.distance}</p>
                </div>
                <h2>{location.title}</h2>
                <p className="description">{location.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="explore-btn"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Gulshan Hotel Kachura</h3>
              <p>
                <FaMapMarkerAlt /> Kachura Lake, Skardu, Pakistan
              </p>
              <p>
                <FaPhone />
                <a href="tel:+923425577821">+92 342 5577821</a>
              </p>
              <p>
                <FaEnvelope />
                <a href="mailto:info@gulshanhotelkachura.com">
                  info@gulshanhotelkachura.com
                </a>
              </p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Rooms</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Newsletter</h3>
              <p>Stay updated with our latest offers.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button className="cta-button">Subscribe</button>
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
              >
                Eng. Ghulam Rasool
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/+923425577821"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationPage;
