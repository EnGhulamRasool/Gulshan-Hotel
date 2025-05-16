import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="feature-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;