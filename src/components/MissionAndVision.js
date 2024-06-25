import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MissionVision.css'; // Import custom CSS
import image1 from "../images/fam-removebg-preview.png"

const MissionVision = () => {
  const missionVisionData = [
    {
      title: 'Our Mission',
      description:
        'To support and unite the Malayalee community in Fredericton through cultural, educational, and social initiatives that promote inclusiveness and a sense of belonging.',
      icon: faBullseye,
    },
    {
      title: 'Our Vision',
      description:
        'To create a vibrant and cohesive community that celebrates Malayalam culture, empowers individuals, and fosters strong connections among members.',
      icon: faLightbulb,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div id="mission-vision" className="mission-vision py-5">
      <div className="container position-relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-5 position-relative"
        >
          Mission & Vision
        </motion.h2>
        <motion.div
          className="row justify-content-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="col-md-6 mb-4" variants={itemVariants}>
            <div className="mission-vision-item mission p-4 text-center rounded shadow">
              <FontAwesomeIcon icon={missionVisionData[0].icon} size="3x" className="text-gold mb-3" />
              <h5 className="card-title mb-3">{missionVisionData[0].title}</h5>
              <p className="card-text">{missionVisionData[0].description}</p>
            </div>
          </motion.div>
          <motion.div className="col-md-6 mb-4" variants={itemVariants}>
            <div className="mission-vision-item vision p-4 text-center rounded shadow">
              <FontAwesomeIcon icon={missionVisionData[1].icon} size="3x" className="text-gold mb-3" />
              <h5 className="card-title mb-3">{missionVisionData[1].title}</h5>
              <p className="card-text">{missionVisionData[1].description}</p>
            </div>
          </motion.div>
          <motion.div className="col-md-12 mb-4" variants={itemVariants}>
            <img src={image1} alt="Image" className="img-fluid mt-4" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
