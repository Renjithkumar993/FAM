import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageFredericton from '../images/a1.jpg';
import imageKerala from '../images/a2.jpg';
import imageCulture from '../images/a3.jpg';

export default function Main() {
  return (
    <div className='main-container'>
      <style>
        {`
          .main-container {
            position: relative;
            height: 70vh; /* Set maximum height for responsiveness */
            overflow: hidden;
          }

          .custom-carousel .carousel-item {
            height: 100%;
          }

          .carousel-image {
            width: 100%;
            height: 70vh;
            object-fit: cover;
            opacity: 1; /* Set opacity to 1 */
          }

          .carousel-caption {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center; /* Center vertically */
            align-items: center; /* Center horizontally */
          }

          .carousel-caption h1, .carousel-caption p {
            font-size: 2.5em;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease forwards;
            font-family: 'Your Font Name', sans-serif; /* Replace 'Your Font Name' with your desired font */
          }

          .carousel-caption button {
            font-size: 1.2em;
            padding: 8px 16px;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .carousel-caption button:hover {
            background-color: #0056b3;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateX(-20px); /* Animate from left */
            }
            to {
              opacity: 1;
              transform: translateX(0); /* Animate to center */
            }
          }

          @media (max-width: 768px) {
            .carousel-caption h1, .carousel-caption p {
              font-size: 1.8em;
            }

            .carousel-caption button {
              font-size: 1em;
              padding: 6px 12px;
            }
          }

          @media (max-width: 576px) {
            .carousel-caption h1, .carousel-caption p {
              font-size: 1.2em; /* Adjust font size for smaller screens */
            }

            .carousel-caption button {
              font-size: 0.9em; /* Adjust button font size for smaller screens */
              padding: 5px 10px;
            }
          }

          @media (max-width: 480px) {
            .carousel-caption h1, .carousel-caption p {
              font-size: 1em; /* Further decrease font size for smaller screens */
            }

            .carousel-caption button {
              font-size: 0.8em; /* Further decrease button font size for smaller screens */
              padding: 4px 8px;
            }
          }
        `}
      </style>
      <Carousel fade interval={5000} pause={false} className='custom-carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={imageFredericton}
            alt='Fredericton'
          />
          <Carousel.Caption className='carousel-caption'>
            <h1>Discover the Charm of Fredericton</h1>
            <p>Explore stunning landscapes and rich cultural heritage.</p>
            <Button variant='danger'>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={imageKerala}
            alt='Kerala'
          />
          <Carousel.Caption className='carousel-caption'>
            <h1>Experience the Beauty of Kerala</h1>
            <p>Discover the tranquil backwaters and vibrant traditions.</p>
            <Button variant='danger'>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 carousel-image'
            src={imageCulture}
            alt='Culture'
          />
          <Carousel.Caption className='carousel-caption'>
            <h1>Celebrate Diverse Cultures</h1>
            <p>Embrace the richness of global cultures and traditions.</p>
            <Button variant='danger'>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
