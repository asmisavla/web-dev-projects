// HomeImage.js
import React from 'react';
import './HomeImage.css';
import pacificImage from '../assets/pacific.jpg'; // Adjust the path according to your project structure

const HomeImage = () => {
    return (
        <div className="image-container">
            <img src={pacificImage} alt="Pacific" />
            <div className="content">
                <h1 className="text">Welcome to the Pacific</h1>
                <button className="button">Explore Now</button>
            </div>
        </div>
    );
};

export default HomeImage;
