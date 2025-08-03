import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Card = ({ name, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        border: "1px solid black",
        borderRadius: "4px",
        height: "200px",
        width: "200px",
      }}
    >
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
      const response = await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  // Filter countries based on search
  const filteredCountries = countries.filter((country) =>
  country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
       {filteredCountries.map((country, index) => (
  <Card
    key={`${country.cca3}-${index}`}
    name={country.name?.common}
    flag={country.flags?.png}
  />
))}

      </div>
    </>
  );
};

export default XCountries;
