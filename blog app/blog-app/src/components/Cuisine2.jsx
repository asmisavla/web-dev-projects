// Cuisine1.jsx
import * as React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import './Cuisine1.css'; // Ensure the path is correct
import '../App.css';

const cuisineData = [
  { name: 'Chinese', image: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg' },
  { name: 'Japanese', image: 'https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/l-intro-1664219638.jpg' },
  { name: 'Thai', image: 'https://shef.com/homemade-food/wp-content/uploads/thai-food01-scaled-e1662414525462.jpg' },
  { name: 'Veitnamese', image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622728130/The-Best-Food-In-Vietnam-Main/The-Best-Food-In-Vietnam-Main.jpg' },
  { name: 'Singaporean', image: 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/03/local-food-singapore-900x643.png' },
  { name: 'Malaysian', image: 'https://media.vietravel.com/images/NewsPicture/nasi.jpg' },
  { name: 'Korean', image: 'https://img.veenaworld.com/wp-content/uploads/2022/04/Korean-Food.jpg' },
];

const Cuisine2 = () => {
  return (
    <Box sx={{ p: 2}}>
      <Typography variant="h5" component="h2" style={{ color: 'white' }} gutterBottom>
        Asian Cuisine
      </Typography>
      <Box className="scroll-container">
        <Box className="scroll-content">
          {cuisineData.map((cuisine, index) => (
            <Card key={index} sx={{ minWidth: 250, position: 'relative' }} className="card">
              <CardMedia
                component="img"
                height="150"
                width="250"
                image={cuisine.image}
                alt={cuisine.name}
                className="card-media"
              />
              <Box className="card-overlay">
                <Typography variant="h6" component="div">
                  {cuisine.name}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Cuisine2;
