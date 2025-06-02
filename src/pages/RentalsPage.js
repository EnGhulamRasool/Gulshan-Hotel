import { motion } from "framer-motion";
import "./RentalsPage.css";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import WhatsAppFeature from "../components/WhatsAppFeature";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RentalsPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Rental vehicles data with proper car images
  const rentalVehicles = [
    {
      name: "Yaris",
      location: "Car Rental in Faisalabad",
      handle: "@Rent a Car in Faisalabad",
      priceWithinCity: "PKR 6000",
      priceOutOfCity: "PKR 6500",
      description: "Toyota Yaris a car for complete family",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Suzuki Alto Vxr",
      location: "Car Rental in Faisalabad",
      handle: "@Rent a Car in Faisalabad",
      priceWithinCity: "PKR 4500",
      priceOutOfCity: "PKR 5000",
      description: "Good car with lowest price in your city",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Suzuki Wagon R",
      location: "Car Rental in Faisalabad",
      handle: "@Rent a Car in Faisalabad",
      priceWithinCity: "PKR 4500",
      priceOutOfCity: "PKR 5000",
      description: "Car with Reasonable price in your city",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Suzuki Cultus",
      location: "Car Rental in Faisalabad",
      handle: "@Rent a Car in Faisalabad",
      priceWithinCity: "PKR 5000",
      priceOutOfCity: "PKR 5500",
      description: "Minimum Budget car in your city",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Suzuki Wagon R",
      location: "Car Rental in Faisalabad",
      handle: "@Rent a Car in Faisalabad",
      priceWithinCity: "PKR 4500",
      priceOutOfCity: "PKR 5000",
      description: "Car with Reasonable price in your city",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Yaris",
      location: "Car Rental in Faisalabad",
      handle: "@Rent a Car in Faisalabad",
      priceWithinCity: "PKR 6000",
      priceOutOfCity: "PKR 6500",
      description: "Toyota Yaris a car for complete family",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="rental-page">
      {/* Header Section */}
      <header className="rental-header">
        <div className="container">
          <h1>
            Rent A Car in Pakistan with Lowest Prices | Car Rentals Pakistan
          </h1>
          <p className="header-description">
            Rent a car in Pakistan, Contact +92 345 9668442 for car rental in
            Pakistan. We have a wide range of vehicles available for car rental
            in Pakistan with the lowest prices. Support Team is available 24/7
            to ensure your safety while traveling on a rental car in Pakistan.
            Just Call our support team to Book a Car on a Rent in Pakistan with
            Guaranteed Best & Affordable Prices in Pakistan.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="rentals-section">
          <div className="container">
            <div className="vehicles-grid">
              {rentalVehicles.map((vehicle, index) => (
                <div key={index} className="vehicle-card">
                  <div className="vehicle-image-container">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="vehicle-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="vehicle-info">
                    <h3 className="vehicle-name">{vehicle.name}</h3>
                    <p className="vehicle-location">{vehicle.location}</p>
                    <p className="vehicle-handle">{vehicle.handle}</p>

                    <div className="pricing">
                      <div className="price-row">
                        <span>Price within city</span>
                        <strong>{vehicle.priceWithinCity}</strong>
                      </div>
                      <div className="price-row">
                        <span>Price out of city</span>
                        <strong>{vehicle.priceOutOfCity}</strong>
                      </div>
                    </div>

                    <p className="vehicle-description">{vehicle.description}</p>

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
              ))}
            </div>
          </div>
        </section>
      </main>

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

export default RentalsPage;
