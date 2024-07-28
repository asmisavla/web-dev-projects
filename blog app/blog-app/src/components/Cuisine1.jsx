import * as React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import './Cuisine1.css'; // Ensure the path is correct
import '../App.css';
import { Link } from 'react-router-dom';

const cuisineData = [
  { name: 'Punjabi', image: 'https://www.thestatesman.com/wp-content/uploads/2022/02/istockphoto-1.jpg' },
  { name: 'Gujarati', image: 'https://clubmahindra.gumlet.io/blog/media/section_images/traditiona-795df276e0f7f60.jpg?w=376&dpr=2.6' },
  { name: 'South Indian', image: 'https://assets.vogue.com/photos/63d169f727f1d528635b4287/master/w_2560%2Cc_limit/GettyImages-1292563627.jpg' },
  { name: 'Rajasthani', image: 'https://rajasthanjourneys.com/wp-content/uploads/2023/04/Rajasthani-Cuisine.jpg' },
  { name: 'Bengali', image: 'https://images.news18.com/ibnlive/uploads/2024/03/shutterstock_1644255829-2024-03-b15d0b47c5a7d025a8faba21dce92514.jpg?impolicy=website&width=640&height=480' },
  { name: 'Mughlai', image: 'https://www.clubmahindra.com/blog/media/section_images/mughlaicui-706ca44ba1f2a25.jpg' },
  { name: 'Maharashtrian', image: 'https://curlytales.com/wp-content/uploads/2022/07/best-maharashtrian-restaurants-in-mumbai.jpg' },
  { name: 'Hyderabadi', image: 'https://hmhub.in/wp-content/uploads/2019/08/maxresdefault-4.jpg' },
  { name: 'Goan', image: 'https://www.elitehavens.com/magazine/wp-content/uploads/2022/11/Credit_Shores-Threesixtyfive-res.jpg' },
  { name: 'Kashmiri', image: 'https://www.tripsontrack.com/wp-content/uploads/2023/04/Top-10-Kashmiri-Dishes.jpg' },
];

const Cuisine1 = () => {
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

export default Cuisine1;
