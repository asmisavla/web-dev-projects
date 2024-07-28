import React from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png'; // Add your image paths here

const ImageGallery = () => {
    return (
        <>
            <h4>Select option</h4>
            <div className="gallery-container">
                <div className="gallery-item">
                    <img src={image1} alt="travel" className="gallery-image" />
                    <Link to="/travel">
                        <button className="image-button">Travel</button>
                    </Link>
                </div>
                <div className="gallery-item">
                    <img src={image2} alt="eat" className="gallery-image" />
                    <Link to="/eat">
                        <button className="image-button">Eat</button>
                    </Link>
                </div>
                <div className="gallery-item">
                    <img src={image3} alt="relax" className="gallery-image" />
                    <Link to="/relax">
                        <button className="image-button">Relax</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ImageGallery;
