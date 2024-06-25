import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

function FollowUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px',
        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)"
      
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <a href="#" style={socialIconStyle}>
          <FaFacebook size={40} />
        </a>
        <a href="#" style={socialIconStyle}>
          <FaTwitter size={40} />
        </a>
        <a href="#" style={socialIconStyle}>
          <FaInstagram size={40} />
        </a>
      </div>
    </motion.div>
  );
}

const socialIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: '608dfd',
  color: '#fff',
  borderRadius: '50%',
  margin: '0 5px',
  transition: 'background-color 0.3s ease',
};

export default FollowUs;