import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import WhatsAppFeature from "../components/WhatsAppFeature";

import {
  FaUtensils,
  FaTv,
  FaCoffee,
  FaParking,
  FaSnowflake,
} from "react-icons/fa";

import {
  FaBed,
  FaWifi,
  FaConciergeBell,
  FaMapMarkerAlt,
  FaTshirt,
  FaStar,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import "./HomePage.css";

const guestHouseImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
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

  const roomImages = [
    "images/Rooms/Deluxe1.jpeg",
    "images/Rooms/Deluxe2.jpeg",
    "images/Rooms/Deluxe3.jpeg",
    "images/Rooms/Deluxe4.jpeg",
    "images/Rooms/standard1.jpeg",
    "images/Rooms/standard2.jpeg",
    "images/Rooms/standard1.jpeg",
    "images/Rooms/standard1.jpeg",
  ];

  const bannerImage =
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const roomTypes = [
  {
    type: "Lake View Deluxe",
    price: "10,000 PKR",
    description: "Breathtaking Kachura Lake views with luxury amenities. Perfect romantic getaway in Skardu's best location...",
    includes: ["Breakfast", "WiFi", "TV", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Mountain View Suite",
    price: "12,000 PKR",
    description: "Panoramic Karakoram mountain views from private balcony. Cozy yet elegant Skardu accommodation...",
    includes: ["Breakfast", "WiFi", "AC", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Family Connector",
    price: "15,000 PKR",
    description: "Two interconnected rooms for families. Child-friendly amenities near Kachura Lake attractions...",
    includes: ["Breakfast", "WiFi", "2 TVs", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Business Executive",
    price: "9,500 PKR",
    description: "Productivity-focused room with workspace. High-speed WiFi for Skardu business travelers...",
    includes: ["Breakfast", "WiFi", "Desk", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Honeymoon Suite",
    price: "13,500 PKR",
    description: "Romantic decor with king bed. Special amenities for couples in Skardu...",
    includes: ["Champagne", "Flowers", "Spa", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Economy Standard",
    price: "7,500 PKR",
    description: "Budget-friendly option with essentials. Great value near Kachura Lake...",
    includes: ["WiFi", "TV", "Fan", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Premium Deluxe",
    price: "11,000 PKR",
    description: "Spacious room with luxury finishes. Best panoramic views in Skardu...",
    includes: ["Breakfast", "WiFi", "Minibar", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  },
  {
    type: "Accessible Room",
    price: "8,500 PKR",
    description: "Wheelchair-accessible accommodation. All amenities adapted for comfort...",
    includes: ["Breakfast", "WiFi", "TV", "Parking"],
    icon: <FaBed />,
    colSpan: 1
  }
];

  const LOCATIONS = [
    {
      id: 1,
      name: "Gulshan Hotel Kachura - Shangrila",
      description:
        "Nestled in the majestic Hunza Valley with panoramic views of Rakaposhi and Ultar Sar peaks.",
      image: "images/Kachura/kachura-3.jpeg",
      link: "#naran",
    },
    {
      id: 2,
      name: "Gulshan Hotel Kachura - Sadpara",
      description:
        "Nestled in the majestic Hunza Valley with panoramic views of Rakaposhi and Ultar Sar peaks.",
      image: "images/Skardu/skd-3.jpeg",
      link: "#hunza",
    },
    {
      id: 3,
      name: "Gulshan Hotel Kachura - Kachura Upper Lake",
      description:
        "Overlooking the mighty Indus River with easy access to Shangrila Resort and Deosai Plains.",
      image: "images/Kachura/kachura-1.jpeg",
      link: "#skardu",
    },
    {
      id: 4,
      name: "Gulshan Hotel Kachura - Sarfaranga",
      description:
        "Situated in the Switzerland of Pakistan with lush green valleys and crystal clear rivers.",
      image: "images/shigar/shigar-2.jpeg",
      link: "#swat",
    },
  ];

  const features = [
    {
      icon: <FaParking />,
      title: "Secure Parking",
      description: "24/7 security for peace of mind",
    },
    {
      icon: <FaWifi />,
      title: "High-Speed WiFi",
      description: "Free high-speed internet in all rooms",
    },
    {
      icon: <FaConciergeBell />,
      title: "24/7 Assistance",
      description: "Friendly staff always available",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Location",
      description: "Easy access to major attractions",
    },

    {
      icon: <FaStar />,
      title: "Luxury Rooms",
      description: "Fully furnished, clean, and cozy",
    },
  ];

  return (
    <div className="guest-house-home">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Gulshan Hotel Kachura Skardu
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your Luxurious Retreat in Pakistan
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              className="primary-btn"
              onClick={() =>
                window.open(
                  "https://wa.me/923425577821?text=Hello%20Gulshan%20Hotel%20Kachura,%20I%27m%20interested%20in%20booking%20a%20room%20or%20tour%20package.%20Could%20you%20please%20share%20availability%20and%20details%3F",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Book Now
            </button>
            <Link to="/room" className="secondary-btn">
              Explore Rooms
            </Link>
          </motion.div>
        </motion.div>
      </section>


      
      <section className="guest-house-section">
        <div className="container">
          <div className="two-column-container">
            <motion.div
              className="content-column"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Experience Comfort at Gulshan Hotel Kachura</h2>
              <p className="intro-text">
                Nestled in Pakistan’s scenic valleys, Gulshan Hotel Kachura
                offers a perfect blend of luxury and affordability for families,
                business travelers, and adventurers.
              </p>
              <div className="highlights">
                <div className="highlight-item">
                  <FaMapMarkerAlt className="highlight-icon" />
                  <div className="highlight-text">
                    <h3>Prime Locations</h3>
                    <p>Close to Kachura Lake and other iconic destinations.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaStar className="highlight-icon" />
                  <div className="highlight-text">
                    <h3>Exceptional Service</h3>
                    <p>Personalized hospitality with unmatched privacy.</p>
                  </div>
                </div>
              </div>
              <button
                className="cta-button"
                onClick={() =>
                  window.open(
                    "https://wa.me/923425577821?text=Hello%20Gulshan%20Hotel%20Kachura%2C%20I%27d%20like%20to%20book%20a%20stay.%20Could%20you%20please%20share%3A%0A%0A1.%20Availability%20for%20my%20dates%0A2.%20Room%20types%20and%20rates%0A3.%20Any%20current%20packages%20or%20offers%3F",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Book Your Stay <FaArrowRight />
              </button>
            </motion.div>
            <motion.div
              className="image-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={guestHouseImage}
                alt="Gulshan Hotel Kachura"
                className="guest-house-image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="family-rooms-section">
        <div className="container">
          <div className="two-column-container">
            <motion.div
              className="image-column"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="images/Rooms/standard1.jpeg"
                alt="Family Room at Gulshan Hotel Kachura"
                className="family-room-image"
              />
            </motion.div>
            <motion.div
              className="content-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Family-Friendly Rooms</h2>
              <p className="intro-text">
                Gulshan Hotel Kachura offers spacious, safe, and affordable
                rooms designed for families, ensuring a homely and respectful
                environment.
              </p>
              <p>
                We maintain a family-oriented atmosphere, prohibiting unmarried
                couples, alcohol, and illegal activities for your peace of mind.
              </p>

              <Link to="/room" className="cta-button">
                Explore Rooms
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Gulshan Hotel Kachura?
          </motion.h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Locations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our hotels in Pakistan’s most picturesque valleys, near
            iconic tourist destinations.
          </motion.p>
          <div className="locations-grid">
            {LOCATIONS.map((location, index) => (
              <motion.div
                key={location.id}
                className="location-card"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={location.image} alt={location.name} />
                <div className="location-content">
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rooms-container">
        <div className="container">
          <div className="section-header">
            <h1>LUXURIOUS & AFFORDABLE ROOMS IN SKARDU NEAR KACHURA LAKE</h1>
            <p>
              Experience the best hotel accommodation in Skardu with stunning
              views of Kachura Lake and the Karakoram mountains. Our rooms
              combine modern comfort with traditional hospitality for an
              unforgettable stay.
            </p>
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
                          {item.includes("TV") && <FaTv />}
                          {item.includes("Parking") && <FaParking />}
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
</section>
      <section className="contact-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-card">
              <h3>Phone</h3>
              <a href="tel:+923425577821">
                <FaPhone /> +92 342 5577821
              </a>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:info@gulshanhotelkachura.com">
                <FaEnvelope /> info@gulshanhotelkachura.com
              </a>
            </div>
            <div className="contact-card">
              <h3>Address</h3>
              <p>
                <FaMapMarkerAlt /> Kachura Lake, Skardu, Pakistan
              </p>
            </div>
          </motion.div>
        </div>
      </section>
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

export default HomePage;
