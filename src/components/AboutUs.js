import React from "react";
import aboutUs from "../images/istockphoto-1438238504-612x612.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";

const About = () => {
  const sectionStyle = {
    padding: '50px 0', // Padding for larger screens
    backgroundColor: '#f8f9fa',
  };

  const headingStyle = {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '2rem', // Unique style for heading
    marginBottom: '20px', // Unique style for heading
  };

  const textStyle = {
    fontSize: '1.2rem', // Unique style for paragraphs
    lineHeight: '1.6', // Unique style for paragraphs
    marginBottom: '1.5rem', // Unique style for paragraphs
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '0.25rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  };

  return (
    <motion.div
      id="about"
      style={sectionStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-xs-12 col-md-6 order-2 order-md-1 mb-4 mb-md-0"
            initial={{ x: -100, opacity: 0 }} // Animation for smaller screens
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutUs}
              className="img-fluid"
              alt="About Us"
              style={imgStyle}
            />
          </motion.div>
          <motion.div
            className="col-xs-12 col-md-6 order-1 order-md-2"
            initial={{ x: 100, opacity: 0 }} // Animation for smaller screens
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="about-text">
              <h2 className="mb-4" style={headingStyle}>About Us</h2>
              <p style={textStyle}>
                Welcome to the vibrant and diverse Malayalee Community Group
                in Fredericton, Canada. We are a group of individuals who share
                a common bond of Malayalam language and culture, hailing from
                the beautiful state of Kerala, India.
              </p>
              <p style={textStyle}>
                Our community strives to foster inclusiveness and to create a
                warm and welcoming environment for everyone. We celebrate our
                rich cultural heritage through various events, festivals,
                cultural programs, and social gatherings.
              </p>
              <p style={textStyle}>
                Whether you are a student, professional, family, or an individual
                with an interest in Malayalam culture, you are warmly invited to
                be a part of our community. Join us as we cherish our traditions,
                share our stories, and create beautiful memories together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
