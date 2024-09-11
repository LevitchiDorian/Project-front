import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <h1>Descoperă Restaurantele Chișinăului</h1>
      <div className="search-input">
        <input type="text" placeholder="Căutare" />
      </div>
    </div>
  );
};

export default SearchBar;
