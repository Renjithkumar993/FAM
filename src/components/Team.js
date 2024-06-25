import React from "react";
import { useInView } from "react-intersection-observer";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Team = () => {
  const teamData = [
    {
      name: "Dennis Thomas",
      job: "Director",
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      name: "Renjith Rajakumar",
      job: "Director",
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      name: "Renil Lambert",
      job: "Director",
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      name: "Remya Abhilash",
      job: "Director",
      img: "https://via.placeholder.com/150", // Placeholder image URL
    },
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Meet the Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                dapibus leonec.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamData.map((d, i) => (
            <ZoomInCard key={`${d.name}-${i}`} name={d.name} job={d.job} img={d.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ZoomInCard = ({ name, job, img }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const zoomInStyle = {
    transform: inView ? "scale(1)" : "scale(0.9)",
    opacity: inView ? 1 : 0,
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
  };

  return (
    <div ref={ref} className="col-md-3 col-sm-6 team">
      <div className="thumbnail" style={zoomInStyle}>
        <img src={img} alt={name} className="team-img" />
        <div className="caption">
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};
