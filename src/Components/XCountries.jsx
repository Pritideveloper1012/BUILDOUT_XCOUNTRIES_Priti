import React, { useEffect, useState } from "react";
import "./Countries.css"


const Countries = () => {
 const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
    const data = await res.json();
    setCountries(data);
  };
  fetchCountries();
}, []);

  const filteredCountries = countries.filter((country) =>
  country.name.common.toLowerCase().includes(searchText.toLowerCase())
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
        {filteredCountries.map((country) => (
    <div  className="country-card" key={country.name.common}>
    <img src={country.flags.png} alt={country.name.common} />
    <p>{country.name.common}</p>
  </div>
))}
      </div>
    </div>
  );
};

export default Countries;
