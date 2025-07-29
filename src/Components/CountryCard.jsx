import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CountryCard = ({ country }) => {
  console.log(country);

  return (
    <Card sx={{ maxWidth: 300, m: 2, p: 1 }}>
      {country?.flag ? (
        <img
          src={country.flag}
          alt={country?.name || "Country Flag"}
          style={{ width: "100%", height: "160px", objectFit: "cover" }}
        />
      ) : (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f2f2f2",
          }}
        >
          No Flag Available
        </Typography>
      )}

      <CardContent>
        <Typography variant="h6" component="div">
          {country?.name || "No Country Name"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
