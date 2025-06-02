import { useLocation, useNavigate } from "react-router-dom";
import "./CarDetailPage.css";

const CarDetailPage = () => {
  const { state: vehicle } = useLocation();
  const navigate = useNavigate();

  if (!vehicle) {
    return <div>Vehicle not found. <button onClick={() => navigate("/rentals")}>Back to Rentals</button></div>;
  }

  const images = [
    "https://images.unsplash.com/photo-1593065439858-4e9cccaacff5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Replace with actual images
    "https://images.unsplash.com/photo-1593065439858-4e9cccaacff5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1593065439858-4e9cccaacff5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1593065439858-4e9cccaacff5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ];

  const features = [
    "Manual",
    "Air Conditioned",
    "Comfortable",
    "Music Box",
    "ABS brakes",
    "28 Seats",
  ];

  const termsConditions = [
    "Cost doesn't include meal.",
    "Driver's meal and accommodation will be offered by AJKTOURS.",
    "Cost includes Transport (Corolla Car/Vehicle/Jeep where ever needed).",
    "Hotels are subject to availability till final confirmation.",
    "Prices may be different as hotel and transport rates change frequently.",
    "Please bring necessary documents with you e.g CNIC, Passport, Marriage Certificate etc...",
  ];

  return (
    <div className="car-detail-page">
      <div className="container">
        <h1 className="car-title">{vehicle.name}</h1>
        <div className="car-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${vehicle.name} image ${index + 1}`} />
          ))}
        </div>
        <div className="car-content">
          <div className="car-description">
            <p>AJK Tours provides best services for Car Hire Rentals. We offer All Type of Cars, Jeeps and Heavy Vehicles with Automatic Transmission.</p>
          </div>
          <div class price="car-price">
            <p><strong>Price:</strong> <span className="price-value">{vehicle.price}/per day</span></p>
            <ul className="car-features">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="car-terms">
            <h3>Terms & Conditions</h3>
            <ul>
              {termsConditions.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          </div>
          <div className="car-contact">
            <p><strong>Phone:</strong> +923000341068</p>
            <button className="contact-us-button">Contact Us</button>
          </div>
        </div>
        <div className="share-post">Share this post</div>
      </div>
    </div>
  );
};

export default CarDetailPage;