import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons'; // Import the expand icon

// Assuming you have imported your images as an array of image paths
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';

const images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  // Add more image paths as needed
];

const ImageItem = ({ src, alt, onClick }) => (
  <div className="image-item">
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt={alt}
        className="img-fluid rounded"
        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
        onClick={onClick}
      />
    </a>
  </div>
);

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image

  const showModalBox = () => {
    setShowModal(true);
  };

  const hideModalBox = () => {
    setShowModal(false);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowModal(false); // Close the modal when an image is clicked
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="row">
              {images.map((image, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <ImageItem src={image} alt={`Image ${index + 1}`} onClick={() => handleImageClick(index)} />
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Button onClick={showModalBox} variant="primary">
                View More <FontAwesomeIcon icon={faExpand} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={hideModalBox} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Additional Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <div className="row">
              {images.map((image, index) => (
                <div key={index} className="col-md-3 mb-3">
                  <Link to={`/image/${index + 1}`} style={{ textDecoration: 'none' }}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="img-thumbnail rounded"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleImageClick(index)}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
