// Cuisine1.jsx
import * as React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import './Cuisine1.css'; // Ensure the path is correct
import '../App.css';

const cuisineData = [
  { name: 'French', image: 'https://ihmnotessite.com/wp-content/uploads/2020/04/FC1.jpg' },
  { name: 'Italian', image: 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg' },
  { name: 'English', image: 'https://cms-b-assets.familysearch.org/dims4/default/cc96530/2147483647/strip/true/crop/800x500+0+0/resize/800x500!/format/jpg/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F2d%2F7a%2Ff452bba9d5c8581030392bd4e252%2Fenglish-breakfast.jpg' },
  { name: 'German', image: 'https://www.thedailymeal.com/img/gallery/15-german-dishes-you-need-to-try-at-least-once/l-intro-1695566200.jpg' },
  { name: 'Swiss', image: 'https://fondue.bg/wp-content/uploads/2019/09/15-e1569185304912.jpg' },
  { name: 'Belgian', image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/belgian-waffles-cover-image.jpg' },
];

const Cuisine3 = () => {
  return (
    <Box sx={{ p: 2,mb: 8}}>
      <Typography variant="h5" component="h2" style={{ color: 'white' }} gutterBottom>
        European Cuisine
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

export default Cuisine3;
