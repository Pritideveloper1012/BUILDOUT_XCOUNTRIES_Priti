import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
  (country.common || "").toLowerCase().includes(searchTerm.toLowerCase())
);
  console.log(countries.map((c) => c.name)); // See if any name is undefined or not a string


  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="countryGrid">
        {filteredCountries.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            No countries found.
          </p>
        ) : (
          filteredCountries.map((country, index) => (
            <div className="countryCard" key={index}>
              <img src={country.png} alt={country.common} />
              <p>{country.common}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Countries;
