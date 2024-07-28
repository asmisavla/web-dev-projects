import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';


const BottomBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Facebook
        </Typography>
        <IconButton color="inherit" aria-label="instagram">
          <InstagramIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Instagram
        </Typography>
        <IconButton color="inherit" aria-label="pinterest">
          <PinterestIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Pinterest
        </Typography>
        <IconButton color="inherit" aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Twitter
        </Typography>
      </Toolbar>
    </AppBar>
  );
};


export default BottomBar;
