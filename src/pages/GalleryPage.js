import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp, FaWhatsapp, FaSearch, FaExpand } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./GalleryPage.css";
import Footer from "./Footer";
import WhatsAppFeature from "../components/WhatsAppFeature";
const GalleryPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

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

  const bannerImage = "/images/banner-gallery.jpeg";

  // Location-wise gallery images from Unsplash
  const galleryImages = [
  {
    id: 1,
    url: "/images/Skardu/skd-1.jpeg",
    category: "Skardu",
    title: "Skardu View"
  },
  {
    id: 2,
    url: "/images/Skardu/skd-2.jpeg",
    category: "Skardu",
    title: "Sadpara Lake"
  },
  {
    id: 3,
    url: "/images/Skardu/skd-3.jpeg",
    category: "Skardu",
    title: "Sadpara Village"
  },
  {
    id: 4,
    url: "/images/Skardu/skd-4.jpeg",
    category: "Skardu",
    title: "Kharphocho (Skardu View Point)"
  },
  {
    id: 5,
    url: "/images/Kachura/kachura-1.jpeg",
    category: "Kachura",
    title: "Kachura Valley"
  },
   {
    id: 6,
    url: "/images/Kachura/kachura-2.jpg",
    category: "Kachura",
    title: "Kachura Valley"
  },
    {
    id: 7,
    url: "/images/Kachura/kachura-3.jpeg",
    category: "Kachura",
    title: "Kachura Valley"
  },
      {
    id: 8,
    url: "/images/Kachura/kachura-5.jpeg",
    category: "Kachura",
    title: "Shangrila"
  },
    {
    id: 9,
    url: "/images/khp/khp-1.jpeg",
    category: "Khaplu",
    title: "Khaplu Sareena Fort(Khaplu Khar)"
  },
    {
    id: 10,
    url: "/images/khp/khp-2.jpeg",
    category: "Khaplu",
    title: "Ghowari"
  },
   {
    id: 11,
    url: "/images/khp/khp-3.jpeg",
    category: "Khaplu",
    title: "Ghowari Valley"
  },
    {
    id: 12,
    url: "/images/khp/khp-4.jpeg",
    category: "Khaplu",
    title: "Saling Pull(Mashabrum View Point)"
  },
   {
    id: 13,
    url: "/images/shigar/shigar-1.jpeg",
    category: "Shigar",
    title: "Shigar Valley"
  },
   {
    id: 14,
    url: "/images/shigar/shigar-2.jpeg",
    category: "Shigar",
    title: "Shigar Gateway(Sarfaranga)"
  },
   {
    id: 15,
    url: "/images/shigar/shigar-3.jpeg",
    category: "Shigar",
    title: "Blind Lake Shigar"
  },
   {
    id: 16,
    url: "/images/shigar/shigar-4.jpeg",
    category: "Shigar",
    title: "Shigar Valley"
  },
  {
    id: 17,
    url: "/images/kharmang/kharmang-1.jpeg",
    category: "Kharmang",
    title: "Manthoka Abshar"
  },
   {
    id: 18,
    url: "/images/kharmang/kharmang-2.jpeg",
    category: "Kharmang",
    title: "Kharmang Valley"
  },
   {
    id: 19,
    url: "/images/kharmang/kharmang-3.jpeg",
    category: "Kharmang",
    title: "Sheosar Abshar"
  },
   {
    id: 20,
    url: "/images/kharmang/kharmang-4.jpeg",
    category: "Kharmang",
    title: "kharmang Valley"
  },
  // ... and so on for the rest
];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

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
            Attractions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="banner-description"
          >
            Explore the breathtaking beauty of Skardu, Kachura, Khaplu, Shigar, and Kharmang through our photo collection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="breadcrumb"
          >
            Home / Gallery
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-filters">
            <button 
              className={filter === "all" ? "active" : ""} 
              onClick={() => setFilter("all")}
            >
              All Locations
            </button>
            <button 
              className={filter === "Skardu" ? "active" : ""} 
              onClick={() => setFilter("Skardu")}
            >
              Skardu
            </button>
            <button 
              className={filter === "Kachura" ? "active" : ""} 
              onClick={() => setFilter("Kachura")}
            >
              Kachura
            </button>
            <button 
              className={filter === "Khaplu" ? "active" : ""} 
              onClick={() => setFilter("Khaplu")}
            >
              Khaplu
            </button>
            <button 
              className={filter === "Shigar" ? "active" : ""} 
              onClick={() => setFilter("Shigar")}
            >
              Shigar
            </button>
            <button 
              className={filter === "Kharmang" ? "active" : ""} 
              onClick={() => setFilter("Kharmang")}
            >
              Kharmang
            </button>
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <motion.div 
                className="gallery-item" 
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  loading="lazy"
                  onClick={() => openImage(image)}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <p>{image.category}</p>
                    <button 
                      className="view-button"
                      onClick={() => openImage(image)}
                    >
                      <FaSearch /> View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={closeImage}>
                &times;
              </button>
              <img 
                src={selectedImage.url.replace('800', '1200')} 
                alt={selectedImage.title} 
              />
              <div className="image-info">
                <h3>{selectedImage.title}</h3>
                <p className="location-tag">{selectedImage.category}</p>
                <a 
                  href={selectedImage.url.replace('800', '1600')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fullscreen-button"
                >
                  <FaExpand /> Full Screen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Section */}
  <Footer/>
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

export default GalleryPage;