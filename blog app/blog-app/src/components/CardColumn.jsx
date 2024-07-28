import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

function ImgMediaCard({ image, title, subtitle, author, date, timeToRead, description }) {
  return (
    <Card sx={{ width: '100%', mb: 2 }}>
      <CardMedia
        component="img"
        alt={title}
        height="300"
        image={image}
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ mr: 2 }}>A</Avatar>
          <Box>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date} • {timeToRead}
            </Typography>
          </Box>
        </Box>
        <Link
          href="https://www.wix.com/demone2/traveler-blog/post/the-girl-from-ipanema"
          underline="none"
          sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'blue' } }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
        </Link>
        <Link
          href="https://www.wix.com/demone2/traveler-blog/post/the-girl-from-ipanema"
          underline="none"
          sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'blue' } }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        </Link>
        <Link
          href="https://www.wix.com/demone2/traveler-blog/post/the-girl-from-ipanema"
          underline="none"
          sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'blue' } }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function CardColumn({ className }) {
  return (
    <Box
      className={className}
      sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        marginLeft: '70px',
        marginTop: '10px'
      }}
    >
      <ImgMediaCard 
        image="https://static.wixstatic.com/media/ae5901bd4fda41009c4cc4a19bb70d05.jpg/v1/fill/w_2999,h_1688,fp_0.50_0.50,q_90,enc_auto/ae5901bd4fda41009c4cc4a19bb70d05.jpg" 
        title="The Girl from Ipanema" 
        subtitle="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading..."
        author="Admin" 
        date="Mar 25, 2023" 
        timeToRead="1 min" 
        description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica." 
      />
    </Box>
  );
}
