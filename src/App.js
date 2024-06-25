import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';
import WhyFMA from './components/WhyFMA';
import ComponentWithBackground from './components/ComponentWithBackground';
import LatestNews from './components/LatestNews';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import MovingToFredericton from './components/MovingToFredericton';
import ScrollProgressBar from './components/ScrollProgressBar'; // Adjust the path accordingly
import './App.css';

import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="scroll-container">
        <Navbar />
        <Main />
        <AboutUs />
        <WhyFMA />
        <MovingToFredericton />
        <Team />
        <Gallery />
        <LatestNews />
        <Contact /> 
        <FollowUs />
        <Footer />
      </div>
      <ScrollProgressBar />
    </Router>
  );
}

export default App;
