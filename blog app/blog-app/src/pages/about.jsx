import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import AboutMe from '../components/AboutMe';
import './About.css';

const About = () => {
  return (
    <>
      <ResponsiveAppBar />
      <main className="about-page-container">
        <AboutMe />
      </main>
    </>
  );
}

export default About;
