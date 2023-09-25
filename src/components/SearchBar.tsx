import React, { useCallback, useState } from "react";
import "./SearchBar.css";
import { useAppDispatch } from "../hooks/hook";
import { setSearch } from "../store/reducers/searchReducer";
import { setZero } from "../store/reducers/paginationReducer";

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  
  // Create a debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery:any) => {
      dispatch(setSearch(searchQuery));
      dispatch(setZero());
    }, 300), // Adjust the debounce delay as needed
    [dispatch]
  ); // Adjust the debounce delay as needed

  const handleInputChange = (e: any) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    // Call the debounced search function with the updated query
    debouncedSearch(newQuery);
  };

  return (
    <div className="searchInputContainer p-1">
      <div className="inputContainer m-1">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn-search m-1" onClick={() => debouncedSearch(query)}>
        Search
      </button>
    </div>
  );
};

// Debounce function
function debounce(func:any , delay:any) {
  let timeoutId:any;
  return function (...args:any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default SearchBar;
