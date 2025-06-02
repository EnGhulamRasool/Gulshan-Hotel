import { motion } from "framer-motion";
import {
  FaBed,
  FaWifi,
  FaUtensils,
  FaTv,
  FaCoffee,
  FaParking,
  FaSnowflake,
} from "react-icons/fa";
import "./RoomPage.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import WhatsAppFeature from "../components/WhatsAppFeature";
import { AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const RoomPage = () => {
  const navigate = useNavigate();

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

  const bannerImage = "/images/banner.jpeg";

  // Room images from Unsplash (specific to each type)
  const roomImages = [
    "images/Rooms/Deluxe1.jpeg", // Deluxe
    "images/Rooms/Deluxe2.jpeg", // Premium
    "images/Rooms/Deluxe3.jpeg", // Luxury
    "images/Rooms/Deluxe4.jpeg", // Standard
    "images/Rooms/standard1.jpeg", // Executive
    "images/Rooms/standard2.jpeg", // Family
    "images/Rooms/standard1.jpeg", // Executive
    "images/Rooms/standard1.jpeg", // Family
  ];

  const roomTypes = [
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description:
        "A cozy yet elegant room with modern amenities and a serene ambience.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description:
        "Spacious room with elegant décor and top-class amenities for a memorable stay.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description:
        "Indulge in luxury with panoramic views, premium furnishings, and a private balcony.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description:
        "A well-equipped and budget-friendly room for comfortable stays.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description:
        "Designed for business travelers, offering workspace and premium comfort.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description:
        "Spacious and cozy, perfect for families looking for a home like stay.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description:
        "Designed for business travelers, offering workspace and premium comfort.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description:
        "Spacious and cozy, perfect for families looking for a home like stay.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />,
    },
  ];

  return (
    <div className="room-page">
      {/* Banner Section */}
      <div
        className="rooms-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="banner-title"
          >
            Our Rooms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="banner-description"
          >
            Experience comfort and elegance in every day. Whether you're here
            for business or leisure, our well-furnished rooms offer the perfect
            blend of luxury and convenience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="breadcrumb"
          >
            Home / Rooms
          </motion.div>
        </div>
      </div>

      {/* Rooms Listing Section */}
      <div className="rooms-container">
        <div className="container">
          <div className="section-header">
            <h1>
              LUXURIOUS & AFFORDABLE ROOMS AT OUR GUEST HOUSE IN ISLAMABAD
            </h1>
          </div>

          <div className="rooms-grid">
            {roomTypes.map((room, index) => (
              <motion.div
                className="room-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="room-image">
                  <img src={roomImages[index]} alt={room.type} loading="lazy" />
                </div>
                <div className="room-content">
                  <div className="room-type">
                    <span className="room-icon">{room.icon}</span>
                    <h3>{room.type}</h3>
                  </div>
                  <p className="room-description">{room.description}</p>

                  <div className="room-includes">
                    <h4>Includes:</h4>

                    <ul>
                      {room.includes.map((item, i) => (
                        <li key={i}>
                          {item.includes("Breakfast") && <FaUtensils />}
                          {item.includes("WiFi") && <FaWifi />}
                          {item.includes("Air Conditioning") && <FaSnowflake />}
                          {item.includes("TV") && <FaTv />}
                          {item.includes("Parking") && <FaParking />}
                          {item.includes("Mini Bar") && <FaCoffee />}
                          {item.includes("Work Desk") && "💼"}
                          {item.includes("Extra Beds") && "🛏️"}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="room-price">
                    Price: {room.price} <span></span>
                  </div>
                  <div className="room-footer">
                    <div className="action-buttons">
                      <button
                        className="call-button"
                        onClick={() => navigate("/contact")} // Redirect to contact page
                      >
                        <i className="fas fa-phone"></i> Book Now
                      </button>
                      <button
                        className="cta-button"
                        onClick={() =>
                          window.open(
                            "https://wa.me/923425577821?text=Hello%20Gulshan%20Hotel%20Kachura,%20I'm%20interested%20in%20booking%20a%20room%20or%20tour%20package.%20Could%20you%20please%20share%20availability%20and%20details?",
                            "_blank"
                          )
                        } // Open WhatsApp in new tab
                      >
                        <i className="fab fa-whatsapp"></i> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    
          <Footer />
    
        <WhatsAppFeature/>
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

export default RoomPage;
