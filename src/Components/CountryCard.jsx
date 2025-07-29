import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const CountryCard = ({ country }) => {
    console.log("Country:", country);
  return (
    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="140"
          image={country?.flag || "https://via.placeholder.com/300x140?text=No+Flag"}
        alt={`${country?.name || "Unknown"} flag`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        {country?.name || "Unknown"}
        </Typography>
       
      </CardContent>
    </Card>
  );
};

export default CountryCard;
