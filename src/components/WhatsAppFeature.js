import { FaWhatsapp } from "react-icons/fa";
// import "../styles/WhatsAppFeature.css"; // Assuming you have a separate CSS file for styles

const WhatsAppFeature = () => {
  return (
    <a
      href="https://wa.me/923425577821?text=Hello%20Gulshan%20Hotel%20Kachura,%20I'm%20interested%20in%20booking%20a%20room%20or%20tour%20package.%20Could%20you%20please%20share%20availability%20and%20details?"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp />
    </a>
    
  );
};

export default WhatsAppFeature;