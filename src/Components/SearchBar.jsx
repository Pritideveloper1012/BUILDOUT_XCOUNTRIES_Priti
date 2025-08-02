import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "250px",
          borderRadius: "4px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
};

export default SearchBar;
