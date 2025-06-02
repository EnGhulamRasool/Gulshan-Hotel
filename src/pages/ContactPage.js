import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import WhatsAppFeature from "../components/WhatsAppFeature";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    departureDate: "",
    departureTime: "",
    noOfPersons: "",
    noOfAdults: "",
    bookingType: "",
    roomType: "",
    tourOption: "",
    needGuide: "",
    destination: "",
    address: "",
    emergencyContact: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.departureDate)
      newErrors.departureDate = "Departure date is required";
    if (!formData.noOfPersons)
      newErrors.noOfPersons = "Number of persons is required";
    if (!formData.bookingType)
      newErrors.bookingType = "Please select booking type";
    if (formData.bookingType === "rooms" && !formData.roomType)
      newErrors.roomType = "Please select room type";
    if (formData.bookingType === "tours" && !formData.destination)
      newErrors.destination = "Please select destination";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.emergencyContact)
      newErrors.emergencyContact = "Emergency contact is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const errorMessages = Object.values(data.errors).flat().join("\n");
          throw new Error(errorMessages);
        }
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      setSubmitStatus({
        success: true,
        message: data.message || "Message sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        departureDate: "",
        departureTime: "",
        noOfPersons: "",
        noOfAdults: "",
        bookingType: "",
        roomType: "",
        tourOption: "",
        needGuide: "",
        destination: "",
        address: "",
        emergencyContact: "",
      });
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmitStatus({
        success: false,
        message:
          error.message ||
          "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="co">
      <section className="contact-sectionS">
        <div className="container">
          <div className="contactGulshan">
            <h1>Welcome to Gulshan Hotel Kachura</h1>
            <p>
              Gulshan Hotel Kachura is a renowned guesthouse, ready to warmly
              welcome our valued guests. We offer well-furnished rooms, guided
              tours, car rentals, and much more to make your stay memorable.
              With over 1000+ satisfied customers, we take pride in delivering
              exceptional service. If you are planning to visit Skardu, we
              promise to provide you with complete tour guidance and comfortable
              accommodation.
            </p>
          </div>

          <div className="contact-container">
            {/* Left Side - Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <h2 className="contact-bookingin">Booking Inquiry</h2>
      

              {submitStatus && (
                <div
                  className={`alert ${
                    submitStatus.success ? "alert-success" : "alert-error"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Phone*</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? "error" : ""}`}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Departure Date*</label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.departureDate ? "error" : ""
                      }`}
                    />
                    {errors.departureDate && (
                      <span className="error-message">
                        {errors.departureDate}
                      </span>
                    )}
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Departure Time</label>
                    <input
                      type="time"
                      name="departureTime"
                      value={formData.departureTime}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Number of Persons*</label>
                    <select
                      name="noOfPersons"
                      value={formData.noOfPersons}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.noOfPersons ? "error" : ""
                      }`}
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    {errors.noOfPersons && (
                      <span className="error-message">
                        {errors.noOfPersons}
                      </span>
                    )}
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Number of Adults</label>
                    <select
                      name="noOfAdults"
                      value={formData.noOfAdults}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Booking Type*</label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="bookingType"
                          value="rooms"
                          checked={formData.bookingType === "rooms"}
                          onChange={handleChange}
                        />
                        Rooms Only
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="bookingType"
                          value="tours"
                          checked={formData.bookingType === "tours"}
                          onChange={handleChange}
                        />
                        Tours Only
                      </label>
                    </div>
                    {errors.bookingType && (
                      <span className="error-message">
                        {errors.bookingType}
                      </span>
                    )}
                  </motion.div>
                </div>

                {formData.bookingType === "rooms" && (
                  <div className="form-row">
                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label>Room Type*</label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className={`form-input ${
                          errors.roomType ? "error" : ""
                        }`}
                      >
                        <option value="">Select Room Type</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="deluxe">Deluxe</option>
                      </select>
                      {errors.roomType && (
                        <span className="error-message">{errors.roomType}</span>
                      )}
                    </motion.div>
                  </div>
                )}

                {formData.bookingType === "tours" && (
                  <>
                    <div className="form-row">
                      <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label>Need Guide?</label>
                        <select
                          name="needGuide"
                          value={formData.needGuide}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </motion.div>

                      <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label>Destination*</label>
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className={`form-input ${
                            errors.destination ? "error" : ""
                          }`}
                        >
                          <option value="">Select Destination</option>
                          <option value="skardu">Skardu</option>
                          <option value="khaplu">Khaplu</option>
                          <option value="desoi">Desoi</option>
                        </select>
                        {errors.destination && (
                          <span className="error-message">
                            {errors.destination}
                          </span>
                        )}
                      </motion.div>
                    </div>
                  </>
                )}

                <div className="form-row">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Address*</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`form-input ${errors.address ? "error" : ""}`}
                    />
                    {errors.address && (
                      <span className="error-message">{errors.address}</span>
                    )}
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Emergency Contact No*</label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.emergencyContact ? "error" : ""
                      }`}
                    />
                    {errors.emergencyContact && (
                      <span className="error-message">
                        {errors.emergencyContact}
                      </span>
                    )}
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div
                    className="form-group full-width"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      rows="4"
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit Booking"}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Contact Info and Map */}
            <motion.div
              className="contact-info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <h2 className="contact-bookingin">Contact us</h2>

          

              <div className="contact-info">
                {[
                  {
                    icon: <FaMapMarkerAlt className="info-icon" />,
                    content: "Lower kachura Main Shangrila Road Skardu",
                  },
                  {
                    icon: <FaPhone className="info-icon" />,
                    content: (
                      <a href="tel:+923425577821" className="clickable-link">
                        +92 342 557 7821
                      </a>
                    ),
                  },
                  {
                    icon: <FaWhatsapp className="info-icon" />,
                    content: (
                      <a
                        href="https://wa.me/923425577821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable-link"
                      >
                        Chat on WhatsApp
                      </a>
                    ),
                  },
                  {
                    icon: <FaEnvelope className="info-icon" />,
                    content: (
                      <a
                        href="mailto:info@gulshanhotelskd.com"
                        className="clickable-link"
                      >
                        info@gulshanhotelskd.com
                      </a>
                    ),
                  },
                  {
                    icon: <FaGlobe className="info-icon" />,
                    content: (
                      <a
                        href="http://gulshanhotelskd.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable-link"
                      >
                        gulshanhotelskd.com
                      </a>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.4264088234445!2d75.46079147562263!3d35.41946567267289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e4438cfb5994b7%3A0xbde9c58201ee62cd!2sGULSAHN%20HOTEL%20KACHURA%20SKARDU!5e0!3m2!1sen!2s!4v1748761719422!5m2!1sen!2s"
                  title="Gulshan Hotel Kachura Location"
                  className="responsive-map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer/>
      <WhatsAppFeature/>
    </div>
  );
};

export default ContactPage;
