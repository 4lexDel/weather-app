import { useState } from 'react';
import './searchBar.css'

function SearchBar({text, onSearchClick}) {
  const [searchValue, setSearchValue] = useState(text); 

  const handleSearchBarChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="search-bar">
      <input type="text" onChange={handleSearchBarChange} value={searchValue} />
      <button onClick={() => onSearchClick(searchValue)}>Search</button>
    </div>
  );
}

export default SearchBar;
