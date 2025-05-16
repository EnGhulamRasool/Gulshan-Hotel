import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FaUtensils, FaTv, FaCoffee, FaParking, FaSnowflake } from "react-icons/fa";

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
 
  // const rooms = [
  //   {
  //     id: 1,
  //     title: "Deluxe Bedroom",
  //     description:
  //       "A cozy yet elegant room with modern amenities and a serene ambiance.",
  //     price: "Rs. 8,000 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 2,
  //     title: "Premium Bedroom",
  //     description:
  //       "A spacious room with elegant décor and top-class amenities for a memorable stay.",
  //     price: "Rs. 9,500 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 3,
  //     title: "Luxury Suite",
  //     description:
  //       "Indulge in absolute luxury with panoramic views, premium furnishings, and a private balcony.",
  //     price: "Rs. 12,000 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 4,
  //     title: "Executive Room",
  //     description:
  //       "Perfect for business travelers with a dedicated workspace and premium amenities.",
  //     price: "Rs. 10,500 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 5,
  //     title: "Family Suite",
  //     description:
  //       "Spacious accommodation for families with separate living and sleeping areas.",
  //     price: "Rs. 15,000 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 6,
  //     title: "Honeymoon Suite",
  //     description:
  //       "Romantic retreat with special amenities for newlyweds and couples.",
  //     price: "Rs. 18,000 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 7,
  //     title: "Standard Room",
  //     description:
  //       "Comfortable and affordable option with all essential amenities.",
  //     price: "Rs. 7,000 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  //   {
  //     id: 8,
  //     title: "Presidential Suite",
  //     description:
  //       "Ultimate luxury experience with premium services and expansive space.",
  //     price: "Rs. 25,000 PKR",
  //     image:
  //       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  // ];
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

  const bannerImage = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

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
  const LOCATIONS = [
    {
      id: 1,
      name: "Gulshan Hotel Kachura - Naran",
      description:
        "Located in the heart of Naran Valley with stunning views of the Kunhar River and close to popular attractions.",
      image:
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#naran",
    },
    {
      id: 2,
      name: "Gulshan Hotel Kachura - Hunza",
      description:
        "Nestled in the majestic Hunza Valley with panoramic views of Rakaposhi and Ultar Sar peaks.",
      image:
        "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#hunza",
    },
    {
      id: 3,
      name: "Gulshan Hotel Kachura - Skardu",
      description:
        "Overlooking the mighty Indus River with easy access to Shangrila Resort and Deosai Plains.",
      image:
        "https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#skardu",
    },
    {
      id: 4,
      name: "Gulshan Hotel Kachura - Swat",
      description:
        "Situated in the Switzerland of Pakistan with lush green valleys and crystal clear rivers.",
      image:
        "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      icon: <FaTshirt />,
      title: "Laundry Services",
      description: "Keep your clothes fresh",
    },
    {
      icon: <FaStar />,
      title: "Luxury Rooms",
      description: "Fully furnished, clean, and cozy",
    },
  ];

  return (
    <div className="guest-house-home">
      
      {/* Hero Section */}
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
            <button className="primary-btn">Book Now</button>
            <button className="secondary-btn">Explore Rooms</button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
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
              <button className="cta-button">
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

      {/* Family Rooms Section */}
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
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
              <button className="cta-button">
                Book Now <FaArrowRight />
              </button>
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

      {/* Locations Section */}
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
                  <div className="location-actions">
                    <a href={location.link}>Learn More</a>
                    <button className="cta-button">Book Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      {/* <section className="rooms-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Rooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Luxurious and affordable accommodations tailored to your needs.
          </motion.p>
          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className="room-card"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={room.image} alt={room.title} />
                <div className="room-content">
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                  <div className="room-footer">
                    <span>{room.price}</span>
                    <button className="cta-button">Book Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
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
                        {item.includes("TV") && <FaTv />}
                        {item.includes("Parking") && <FaParking />}
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
      {/* Contact Section */}
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
            <div>
              <h3>Phone</h3>
              <a href="tel:+923425577821">
                <FaPhone /> +92 342 5577821
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:info@gulshanhotelkachura.com">
                <FaEnvelope /> info@gulshanhotelkachura.com
              </a>
            </div>
            <div>
              <h3>Address</h3>
              <p>
                <FaMapMarkerAlt /> Kachura Lake, Skardu, Pakistan
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
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
                  <a href="#">Location</a>
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

export default HomePage;
