import React, { useEffect, useState } from "react";

const Card=({ name, flag})=>{
  return(
    <div 
     style={{
      display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          gap:"4px",
          border:"1px solid black",
          borderRadius:"4px",
          height:"200px",
          width:"200px"
     }}
    >
       <img src={flag} alt={`Flag of ${name}`} width="100" />
      <h2>{name}</h2>  

    </div>
  )
}


const XCountries = () => {
  const [countries, setCountries] = useState([]);
  // const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
       const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
     const data = await response.json();
      setCountries(data);
  } catch (err) {
      console.log("Error fetching data:", err);
     
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

 

  return (

<div
style={{
  display:"flex",
  gap:"10px",
  flexWrap:"wrap"
}}>
  {countries.map((country,index)=>(
    <Card 
    
   key={`${country.abbr}-${country.name}-${index}`} 
          name={country.name}
          flag={country.flag}
   />
  ))}

</div>

  );
};

export default XCountries;
