import React, { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


    
   const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setSubmitStatus(null);
  
  try {
    const response = await fetch('http://127.0.0.1:8000/api/test', { // Added /api prefix
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData),
      credentials: 'include' // If using cookies/sessions
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    setSubmitStatus({ success: true, message: 'Message sent successfully!' });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  } catch (error) {
    console.error('Fetch error:', error);
    setSubmitStatus({ 
      success: false, 
      message: error.message || 'There was an error sending your message. Please try again.' 
    });
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="co">
      <section className="contact-sectionS">
        <div className="container">
          <div className="contact-container">
            {/* Left Side - Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get in touch</h2>
              
              {submitStatus && (
                <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Form fields with motion effects */}
                {['name', 'email', 'subject', 'message'].map((field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {field === 'message' ? (
                      <textarea
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required={field !== 'subject'}
                        className="form-textarea"
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required={field !== 'subject'}
                        className="form-input"
                      />
                    )}
                  </motion.div>
                ))}
                
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Contact Info & Map */}
            <motion.div 
              className="contact-info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Contact us</h2>

              <div className="contact-info">
                {[
                  { icon: <FaMapMarkerAlt className="info-icon" />, content: 'Lower kachura Main Shangrila Road Skardu' },
                  { icon: <FaPhone className="info-icon" />, content: <a href="tel:+923425577821" className="clickable-link">+92 342 557 7821</a> },
                  { icon: <FaWhatsapp className="info-icon" />, content: <a href="https://wa.me/923425577821" target="_blank" rel="noopener noreferrer" className="clickable-link">Chat on WhatsApp</a> },
                  { icon: <FaEnvelope className="info-icon" />, content: <a href="mailto:info@gulshanhotelskd.com" className="clickable-link">info@gulshanhotelskd.com</a> },
                  { icon: <FaGlobe className="info-icon" />, content: <a href="http://gulshanhotelskd.com/" target="_blank" rel="noopener noreferrer" className="clickable-link">gulshanhotelskd.com</a> }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {item.icon}
                    <p>{item.content}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="map-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d104045.68120763187!2d75.3809653!3d35.4194377!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1747224695247!5m2!1sen!2s"
                  title="Location Map"
                  className="responsive-map"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <a
                  href="https://wa.me/+923425577821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-float"
                >
                  <FaWhatsapp />
                </a>
    </div>
    
  );
};

export default ContactPage;