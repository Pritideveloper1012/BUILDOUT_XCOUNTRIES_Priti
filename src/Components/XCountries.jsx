import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar"; // import your new SearchBar component

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
      <img src={flag} alt={`Flag of ${name}`} width="100" />
      <h2>{name}</h2>
    </div>
  );
};

const XCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch(" https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>XCountries</h1>

      {/* Reusable SearchBar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
