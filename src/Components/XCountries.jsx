import React, { useEffect, useState } from "react";
import "./Countries.css"


const Countries = () => {
 const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
  const fetchCountries = async () => {
    const res = await fetch(" https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
    const data = await res.json();
   console.log("Fetched countries:", data); 
    
    setCountries(data);
  };
  fetchCountries();
}, []);

  const filteredCountries = countries.filter((country) =>
  country.common.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="country-container">
           {filteredCountries.map((country) =>
          country.common && country.png ? (
            <div key={country.common} className="countryCard">
              <img src={country.png} alt={country.common} />
              <p>{country.common}</p>
            </div>
          ) : null
        )}

      </div>
    </div>
  );
};

export default Countries;
