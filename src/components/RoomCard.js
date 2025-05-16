import { motion } from 'framer-motion';

const RoomCard = ({ room, index }) => {
  return (
    <motion.div
      className="room-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="room-image" style={{ backgroundImage: `url(${room.image})` }}></div>
      <div className="room-details">
        <h3>{room.title}</h3>
        <p>{room.description}</p>
        <div className="room-price">{room.price}</div>
        <button className="primary-btn">Book Now</button>
      </div>
    </motion.div>
  );
};

export default RoomCard;