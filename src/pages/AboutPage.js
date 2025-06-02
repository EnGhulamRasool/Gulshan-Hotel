import { motion } from "framer-motion";
import "./AboutPage.css";
import { AnimatePresence } from "framer-motion";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import WhatsAppFeature from "../components/WhatsAppFeature";

const AboutPage = () => {
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

  // Mountain peaks data for the Why Choose Us section
  const mountainPeaks = [
    { name: "K2", height: "8611m" },
    { name: "Nanga Parbat", height: "8126m" },
    { name: "Gasherbrum I", height: "8068m" },
    { name: "Gasherbrum II", height: "8035m" },
    { name: "Broad Peak", height: "8051m" },
    { name: "Masherbrum", height: "7821m" },
    { name: "Rakaposhi", height: "7788m" },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Muhammad Ibrahim",
      title: "CEO, Travel Amazing Karakoram",
      description:
        "M. Ibrahim has been in the tourism industry for the last 20 years. He led climbing expeditions and treks in Pakistan. He has catered more than 100+ group's to different adventure in Pakistan. He established his own company Named as Travel Amazing Karakoram (TAK) in year 2007, the company is operating by a well experienced team. Tak. deals in Mountaineering, trekking, rock climbing and tours services offered by high Quality/ logistically safe and commercially competitive. I assure you will be satisfied with our hospitality",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      email: "ceo@takpaktour.com; hayyain2007@gmail.com",
    },
    {
      name: "Abdul Basit",
      title: "Managing Director/Team Leader",
      description:
        "Abdul Basit, our Director and Team Leader, shares M. Ibrahim's enthusiasm. With a distinguished career in the tourism industry, he has led countless expeditions, introducing travelers to Pakistan's natural wonders. Like M. Ibrahim, Abdul Basit is dedicated to providing exceptional adventure experiences through Travel Amazing Karakoram. Our company stands for top-notch quality, safety, and competitive pricing, ensuring your adventure in Pakistan is an unforgettable one. Your satisfaction is our top priority.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      email: "md@takpaktour.com",
    },
  ];

  return (
    <div className="about-page">
      {/* Banner Section */}
      <div
        className="about-banner"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="banner-description"
          >
            Discover the majestic beauty of Karakoram with our expert guides and
            unparalleled hospitality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="breadcrumb"
          >
            Home / About
          </motion.div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="content-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="content-image"
            >
              <img
                src="images/Rooms/standard2.jpeg"
                alt="Karakoram adventure"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="content-text"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="section-header"
              >
                <h2 className="section-subtitle">About Us</h2>
                <h1 className="section-header">
                  Welcome to Travel Amazing Karakoram
                </h1>
              </motion.div>
              <p className="section-text">
                At Travel Amazing Karakoram, we are more than just a tourism
                company; we are a dedicated team of explorers, conservationists,
                and enthusiasts committed to showcasing the wonders of Pakistan.
                Since our inception in 2007, we have been on a remarkable
                journey towards social development and environmental
                preservation, with a strong focus on promoting tourism.
              </p>
              <p className="section-text">
                Whether you want to join us on one of our Small Group Trips or
                be inspired by our Personal Trips collection of Ready-to-Book,
                we have a flavor of adventure to suit every palate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="content-row reverse">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="content-image"
            >
              <img src="images/Rooms/Deluxe1.jpeg" alt="Karakoram peaks" />
              <div className="image-overlay">
                {mountainPeaks.slice(0, 5).map((peak, index) => (
                  <span key={index} className="peak-label">
                    {peak.name} {peak.height}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="content-text"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="section-header"
              >
                <h2 className="section-subtitle">Why Choose Us</h2>
                <h1 className="section-header">Why Travel Amazing Karakoram</h1>
              </motion.div>
              <p className="section-text">
                Travel Amazing Karakoram is associated in order to Welcome
                International Adventure & tourists in Pakistan continuously
                working since 2007 towards its goal of social development &
                environment conservation emphasizing on tourism by leading the
                adventurer & tourists with entire satisfaction by all aspects
                opening its door towards tourists offering them utmost services
                by setting high standard of tour & travel to the desired or
                selected areas according to their views & opinions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registered Company Section */}
      <section className="registered-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-subtitle">Registered Company</h2>
            <h1 className="section-header">Travel Amazing Karakoram</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-text"
          >
            <p>
              The company Travel Amazing Karakoram (TAK) established under the
              license number -ID- 1058 from Pakistan tourism industry in 2007.
              The Company mission is to promote tourism, provide quality
              services to facilitate foreign & local mountaineers, rock
              climbers, trekkers & tourists in Karakoram, Himalaya, Hindukush
              ranges & other beautiful areas of Pakistan.
            </p>
            <p>
              Travel Amazing Karakoram Pakistan offers a wide range of services
              in the field of mountaineering, rock climbing, trekking, & tours
              for adventure lovers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      {/* <section className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-subtitle">Our Services</h2>
            <h1 className="section-header">Adventure with Travel Amazing Karakoram</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-text"
          >
            <p>
              Travel Amazing Karakoram provides expert-guided expeditions, tailored
              trekking routes, and mountaineering support across Pakistan's rugged
              terrains. Our services include equipment rentals, safety training,
              and logistics for climbers and adventurers.
            </p>
            <p>
              We also offer cultural tours, photography trips, and eco-friendly
              camping experiences, ensuring a memorable adventure for all types
              of travelers seeking the thrill of the outdoors.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-subtitle">TEAM MEMBERS</h2>
            <h1 className="section-header">
              Our team members are here to guide you
            </h1>
          </motion.div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="team-card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="team-image">
                  <img src={member.image} alt={`${member.name} profile`} />
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                  <p className="team-description">{member.description}</p>
                  <p className="team-email">
                    <span role="img" aria-label="email">
                      📧
                    </span>{" "}
                    {member.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default AboutPage;
