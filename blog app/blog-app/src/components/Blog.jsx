// Blog.jsx
import React from 'react';
import './Blog.css';
import exampleImage1 from '../assets/ExampleImage1.png'; // Replace with the path to your image
import exampleImage2 from '../assets/ExampleImage2.png'; // Replace with the path to your image
import exampleImage3 from '../assets/ExampleImage3.png'; // Replace with the path to your image
import { Button, IconButton, TextField } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <h2 className="blog-title">Kashmir Travel Experience</h2>

        <div className="blog-section">
          <img src={exampleImage1} alt="Example 1" className="blog-image float-left" />
          <div className="blog-text">
            <span className='blog-subtitle'>Famous places to visit</span>
            <p className='blog-body'>Kashmir, often referred to as "Paradise on Earth," boasts a variety of stunning destinations that captivate visitors with their natural beauty and cultural richness. Srinagar, the summer capital, is famous for its serene Dal Lake, vibrant Mughal gardens, and charming houseboats. Gulmarg is a renowned hill station, ideal for skiing in winter and lush meadows in summer. Pahalgam, a picturesque town, serves as a base for the Amarnath Yatra and offers breathtaking views, trekking opportunities, and riverside camping. Sonamarg, known as the "Meadow of Gold," is a gateway to the majestic Thajiwas Glacier. The enchanting landscapes, rich history, and warm hospitality make Kashmir a must-visit destination for travelers.</p>
          </div>
        </div>

        <div className="blog-section">
          <img src={exampleImage2} alt="Example 2" className="blog-image float-right" />
          <div className="blog-text">
            <span className='blog-subtitle'>Activities to do</span>
            <p className='blog-body'>Kashmir offers a plethora of activities that cater to diverse interests, ensuring an unforgettable experience for every visitor. Adventure enthusiasts can indulge in skiing and snowboarding in Gulmarg, while the summer months offer opportunities for trekking, mountaineering, and camping in scenic spots like Pahalgam and Sonamarg. Shikara rides on Dal Lake in Srinagar provide a tranquil and picturesque way to explore the floating markets and houseboats. Anglers can enjoy trout fishing in the pristine rivers and streams. For those interested in history and culture, visiting the Mughal gardens, ancient temples, and local bazaars offers a glimpse into Kashmir's rich heritage. Additionally, the region's cuisine, with its aromatic spices and unique flavors, is a culinary delight that visitors should not miss.</p>
          </div>
        </div>

        <div className="blog-section">
          <img src={exampleImage3} alt="Example 3" className="blog-image float-left" />
          <div className="blog-text">
            <span className='blog-subtitle'>Must try foods and beverages</span>
            <p className='blog-body'>Kashmir's culinary landscape is a reflection of its rich cultural heritage, featuring a variety of flavorful and aromatic dishes that are sure to tantalize the taste buds. The region's cuisine is predominantly known for its use of spices like saffron, fennel, and dry ginger, which add a unique depth to the flavors. A traditional Kashmiri meal often includes Rogan Josh, a tender lamb curry, and Yakhni, a yogurt-based mutton curry. Vegetarians can enjoy dishes like Dum Aloo, made with potatoes cooked in a rich gravy, and Nadru Yakhni, featuring lotus stem. The famous Wazwan, a multi-course meal, showcases the culinary prowess of Kashmiri chefs and is a must-try for any food enthusiast. On the beverage front, Kahwa, a traditional green tea brewed with saffron, almonds, and cardamom, offers a warm and fragrant respite from the cold. Noon Chai, or salted pink tea, is another local favorite, often enjoyed with traditional breads like Girda and Lavasa. The cuisine of Kashmir, with its rich flavors and comforting beverages, provides a delightful culinary journey.</p>
          </div>
        </div>

        <div className="blog-actions">
          <IconButton aria-label="like" className='icon-button'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="share" className='icon-button'>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="comment" className='icon-button'>
            <CommentIcon />
          </IconButton>
        </div>

        <div className="blog-comment-section">
          <TextField
            id="outlined-multiline-static"
            label="Leave a comment"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" className="submit-button">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
