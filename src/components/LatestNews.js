import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import calendarImage from "../images/calendar-2024-week-start-sunday-fun-modern-design-planner-template-hype-style-office-wall_762686-341.png";
import { Link } from 'react-router-dom'; // Import Link from React Router

const LatestNews = () => {
  // Dummy data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Summer Picnic',
      date: 'June 28, 2023',
      description: 'Join us for a fun-filled day at the annual summer picnic event!',
    },
    {
      id: 2,
      title: 'Cultural Festival',
      date: 'July 15, 2023',
      description: 'Experience a celebration of diverse cultures at our upcoming cultural festival.',
    },
    {
      id: 3,
      title: 'Community Workshop',
      date: 'August 5, 2023',
      description: 'Attend our community workshop to learn new skills and meet like-minded individuals.',
    },
  ];

  return (
    <div className="latest-news-container bg-light py-5 " id='events'>
      <Container id=''>
        <Row className="align-items-center " >
          <Col md={6} className="text-center mb-4">
            {/* Replace the Calendar component with an image */}
            <img src={calendarImage} alt="Calendar" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2 className=" mb-4 " >Upcoming Events</h2>
            <Row xs={1} md={2} className="g-4">
              {upcomingEvents.map((event) => (
                <Col key={event.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                      <Card.Text>{event.description}</Card.Text>
                      <Link to={`/register/${event.id}`}>
                        <Button variant="primary" className="mt-auto">Register</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestNews;
