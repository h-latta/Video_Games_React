import React, { useState } from 'react';
const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="inputbox"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            type="text"
            placeholder="Search here!"
          />
          <button className="searchbutton" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  };
 
export default SearchBar;