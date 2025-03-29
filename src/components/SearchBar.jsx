import React from 'react';
import '../styles/SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className='searchbar'>
      <div className='search-input'>
        <SearchIcon fontSize='large' sx={{ color: '#000000' }} />
        <input
          type="text"
          placeholder="Search by detail or location"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "1rem",
            background: "transparent",
            paddingLeft: "10px",
          }}
        />
      </div>
      <div className='create-trip-btn'>Create Trip</div>
    </div>
  );
};

export default SearchBar;
