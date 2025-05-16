import { motion, } from "framer-motion";
import { FaBed, FaWifi, FaUtensils, FaTv, FaCoffee, FaParking, FaSnowflake } from "react-icons/fa";
import "./RoomPage.css";
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
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Deluxe
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Premium
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Luxury
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Standard
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Executive
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" , // Family
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Executive
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  // Family
  ];


    const roomTypes = [
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description: "A cozy yet elegant room with modern amenities and a serene ambience.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description: "Spacious room with elegant décor and top-class amenities for a memorable stay.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description: "Indulge in luxury with panoramic views, premium furnishings, and a private balcony.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
    {
      type: "Deluxe Room",
      price: "10,000 PKR",
      description: "A well-equipped and budget-friendly room for comfortable stays.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description: "Designed for business travelers, offering workspace and premium comfort.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description: "Spacious and cozy, perfect for families looking for a home like stay.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
      {
      type: "Standard Room",
      price: "8,000 PKR",
      description: "Designed for business travelers, offering workspace and premium comfort.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    },
    {
      type: "Standard Room",
      price: "8,000 PKR",
      description: "Spacious and cozy, perfect for families looking for a home like stay.",
      includes: ["Breakfast for 2", "Free WiFi", "TV", "Parking"],
      icon: <FaBed />
    }
  ];



  return (
    <div className="room-page">
      {/* Banner Section */}
   <div className="rooms-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
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
            Experience comfort and elegance in every day. Whether you're here for business or leisure, our well-furnished rooms offer the perfect blend of luxury and convenience.
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
        <div className="section-header">
          <h1>LUXURIOUS & AFFORDABLE ROOMS AT OUR GUEST HOUSE IN ISLAMABAD</h1>
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
                <img 
                  src={roomImages[index]} 
                  alt={room.type} 
                  loading="lazy"
                />
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
                
                <div className="room-footer">
                  <div className="room-price">{room.price} <span></span></div>
                  <button className="book-now-btn" onClick="#">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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

export default RoomPage;