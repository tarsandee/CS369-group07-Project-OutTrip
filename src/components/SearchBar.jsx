import React from 'react'
import '../styles/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='searchbar'>
        <div className='search-input'><SearchIcon fontSize='large' sx={{color:'#000000'}}/> Search For Trip</div>
        <div className='create-trip-button'>Create Trip</div>
    </div>
  )
}

export default SearchBar