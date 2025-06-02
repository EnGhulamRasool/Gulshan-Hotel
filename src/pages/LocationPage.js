import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import WhatsAppFeature from "../components/WhatsAppFeature";
import "./locationPage.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaHiking,
  FaMountain,
  FaWalking,
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
        "images/Kachura/kachura-2.jpg",
      icon: <FaWalking className="icon" />,
      distance: "100 METER (3MIN)",
      title: "Shangrila",
      description:
        "Pinnacle Executive Lodges is just 640m away from the Skardu International Airport. You don't have to travel across the town for accommodation anymore.",
    },
    {
      id: 2,
      image:
        "images/Kachura/kachura-3.jpeg",
      icon: <FaMountain className="icon" />,
      distance: "MULTI-DAY HIKE FROM SKARDU",
      title: "Kachura Valley",
      description:
        "K2 is the largest peak in Pakistan and the 2nd largest peak in the world. Start your K2 base camp journey from the most centrally located hotel in Skardu.",
    },
    {
      id: 3,
      image:
        "images/Skardu/skd-3.jpeg",
      icon: <FaHiking className="icon" />,
      distance: "SCENIC HIKING TRAILS",
      title: "Sadpara Village",
      description:
        "Explore breathtaking Himalayan trails starting right from our doorstep. We provide guided tours and equipment rentals for all skill levels.",
    },
    {
      id: 4,
      image:
        "images/Kachura/kachura-1.jpeg",
      icon: <FaWalking className="icon" />,
      distance: "2 MINUTES",
      title: "Shangrila",
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
      <Footer />
      <WhatsAppFeature />

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
