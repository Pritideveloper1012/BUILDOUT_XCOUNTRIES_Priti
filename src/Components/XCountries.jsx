import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Typography, Grid } from "@mui/material";
import CountryCard from "./CountryCard";


const XCountries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
      setCountries(response.data);
    } catch (err) {
      console.error("Error fetching countries:", err);
      setError("Unable to load countries.");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
   <Grid container spacing={2}>
  {countries.map((country, index) => (
    <Grid 
      key={country.cca3 || index} 
      data-grid={{ xs: 12, sm: 6, md: 4 }} 
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <CountryCard country={country} />
    </Grid>
  ))}
</Grid>

  );
};

export default XCountries;
