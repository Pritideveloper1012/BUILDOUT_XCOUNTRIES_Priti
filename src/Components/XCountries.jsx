import React, { useEffect, useState } from "react";

// Reusable Card component
const Card = ({ name, flag }) => {
  return (
    <div className="countryCard" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      height: "200px",
      width: "200px",
      padding: "10px"
    }}>
      <img src={flag} alt={`Flag of ${name}`} width="100" height="auto" />
      <h2>{name}</h2>
    </div>
  );
};

const XCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch countries once on mount
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Filtered list based on search term
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>XCountries</h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search countries"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "300px"
          }}
        />
      </div>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center"
      }}>
        {filteredCountries.map((country, index) => (
          <Card
            key={`${country.abbr}-${country.name}-${index}`}
            name={country.name}
            flag={country.flag}
          />
        ))}
      </div>
    </div>
  );
};

export default XCountries;
