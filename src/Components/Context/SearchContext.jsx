// SearchContext.js
import React, { createContext, useState } from "react";

// Create Search Context
export const SearchContext = createContext();

// Create a provider component
export function SearchProvider({ children }) {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <SearchContext.Provider value={{ isSearching, setIsSearching, filteredData, setFilteredData }}>
      {children}
    </SearchContext.Provider>
  );
  
}
