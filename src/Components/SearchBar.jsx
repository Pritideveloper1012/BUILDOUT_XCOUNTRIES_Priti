import React from "react"
import { Box, TextField } from "@mui/material"
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        marginBottom: "20px",
        padding: "8px",
        fontSize: "16px",
        width: "300px",
      }}
    />
  );
};
export default SearchBar