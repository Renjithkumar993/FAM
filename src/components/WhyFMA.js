import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/fam-removebg-preview.png';

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

  return (
    <div id="mission-vision" className="mission-vision py-5">
      <div className="container position-relative">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4">
            <div className="mission-vision-item mission p-4 text-center rounded shadow">
              <FontAwesomeIcon icon={missionVisionData[0].icon} size="3x" className="text-gold mb-3" />
              <h2 className="card-title mb-3">{missionVisionData[0].title}</h2>
              <p className="card-text">{missionVisionData[0].description}</p>
            </div>
            <div className="mission-vision-item vision p-4 text-center rounded shadow mt-4">
              <FontAwesomeIcon icon={missionVisionData[1].icon} size="3x" className="text-gold mb-3" />
              <h2 className="card-title mb-3">{missionVisionData[1].title}</h2>
              <p className="card-text">{missionVisionData[1].description}</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})`, height: '70vh', backgroundSize: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
