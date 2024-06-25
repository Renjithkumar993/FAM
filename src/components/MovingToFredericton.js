import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFileDownload, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MovingToFredericton = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, delay: 0.5 } },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, delay: 1 } },
  };

  return (
    <motion.div
      className="moving-to-fredericton-container py-5"
      style={{ background: '#f9f9f9' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              className="left-content"
              variants={leftContentVariants}
              initial="hidden"
              animate="visible"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.6697494024043!2d-66.650224384504!3d45.96358992967899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caae6ad24e65e55%3A0xb551e71e732b6ce8!2sFredericton%2C%20NB%2C%20Canada!5e0!3m2!1sen!2sin!4v1625049946572!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              className="right-content"
              variants={rightContentVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-3">
                <h2 className='mt-3'>Planning to move to Fredericton?</h2>
                <p>We have a helpful document to guide you through.</p>
                <Button variant="info" className="rounded-pill" href="path_to_your_document.pdf" download>
                  <FaFileDownload className="mr-1" /> Download Guide
                </Button>
              </div>
              <div className="mt-4">
                <Button variant="primary" className="mr-3 rounded-pill mt-2 " href="#" target="_blank">
                  <FaFacebook className="mr-1" /> Request to Join Facebook Group
                </Button>
                <Button variant="success" className="rounded-pill mt-2 " href="#" target="_blank">
                  <FaWhatsapp className="mr-1" /> Request to Join WhatsApp Group
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default MovingToFredericton;
