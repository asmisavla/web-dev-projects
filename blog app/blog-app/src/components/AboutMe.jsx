import React from 'react';
import './AboutMe.css';
import photographerImage from '../assets/photographer.png'; // Adjust the path if necessary

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-text"> 
          <h1>About Me</h1>
          <span>
            I'm a paragraph. Click here to add your own text and edit me. It's easy.
            Just click "Edit Text" or double click me to add your own content and
            make changes to the font. Feel free to drag and drop me anywhere you
            like on your page. I’m a great place for you to tell a story and let
            your users know a little more about you.
          </span>
          <br /><br />
          <span>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail about
            your company. Talk about your team and what services you provide.
          </span>
          <br /><br />
          <span>
            Tell your visitors the story of how you came up with the idea for your
            business and what makes you different from your competitors. Make your
            company stand out and show your visitors who you are.
          </span>
          <br /><br />
          <span>
            Contact me,<br />
            info@mysite
          </span>
        </div>
        <div className="about-me-image-container">
          <img 
            src={photographerImage} 
            alt="Photographer" 
            className="about-me-image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
