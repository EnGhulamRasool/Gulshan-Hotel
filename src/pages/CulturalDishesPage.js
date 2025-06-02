import { motion } from "framer-motion";
import "./CulturalDishesPage.css";
import { AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Footer from "./Footer";
import WhatsAppFeature from "../components/WhatsAppFeature";
import { useState, useEffect } from "react";

const CulturalDishesPage = () => {
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

  // Cultural dishes data with images and descriptions
  const culturalDishes = [
    {
      name: "Prapu",
      description:
        "Prapu is a traditional Gilgit-Baltistan dish featuring handmade wheat noodles, boiled until tender, then coated in a rich apricot and walnut paste. Ground almonds thicken the sauce, adding depth and a silky texture.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mamtu",
      description:
        "Mamtu, a signature dish from northern Gilgit-Baltistan with Chinese origins, features steamed dumplings filled with a savory mix of chopped meat, onions, chili, and garlic, cooked for hours in a multi-tiered steamer.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Marzan",
      description:
        "rapu is a traditional Gilgit-Baltistan dish featuring handmade wheat noodles, boiled until tender, then coated in a rich apricot and walnut paste. Ground almonds thicken the sauce, adding depth and a silky texture.",
      image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Balay",
      description:
        "Balay is a hearty goat meat soup loved in Gilgit-Baltistan, infused with rich flavors and paired with tender noodles, offering a comforting and indulgent culinary experience.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Butter Tea",
      description:
        "This Himalayan classic blends tea leaves, yak butter, water, and salt into a creamy drink, reflecting the high-altitude lifestyle, churned and served hot from copper pots.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="cultural-page">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hero-title"
          >
            Culinary Heritage of Gilgit-Baltistan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="hero-subtitle"
          >
            Explore the authentic flavors of our cultural dishes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="hero-breadcrumb"
          >
            Home / Cultural Dishes
          </motion.div>
        </div>
      </div>

      {/* Cultural Dishes Section */}
      <section className="cultural-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-subtitle">Traditional Delights</h2>
            <h1 className="section-header">Savor Gilgit-Baltistan’s Finest</h1>
          </motion.div>
          <div className="dishes-grids">
          
            {culturalDishes.map((dish, index) => (
              <div className="dishMain">
              <div className="dish-content">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                </div>
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  <div className=""></div>
                </div>
                
              </div>
            ))}
          </div>
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
            initial={{ opacity: 0, y: 20, rotate: -180 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 20, rotate: 180 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CulturalDishesPage;
