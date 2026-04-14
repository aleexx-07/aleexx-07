import React from 'react'
import './SearchBar.css'
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSearch(inputValue);
    }
  }
  return (
    <div className='SearchBarContainer'>
      <input 
        className='SearchBar' 
        type="text" 
        placeholder="Buscar Pokémon..." 
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='SearchButton' onClick={handleSearch}>
        Buscar
      </button>
    </div>
  )
}

export default SearchBar;