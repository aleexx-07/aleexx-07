import './App.css';
import PokemonContainer from './PokemonContainer/PokemonContainer';
import SearchBar from './SearchBar/SearchBar';
import { useState, useEffect } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const buscarPokemon = async () => {
    setError(false);
    setLoading(true);
    if (pokemonData!=null) { 
      setPokemonData(null); }
    try {
      
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        setLoading(false);
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(false);
      setLoading(false);
    } catch (error) {
      setPokemonData(null);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      buscarPokemon();
    }
  }, [searchTerm]);

  const handleSearch = (name) => {
    setSearchTerm(name);
  };
  return (
    <>
      <h1>POKEDEX</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <div className='loading'>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>}
      {error && <p className='error'>Pokemon not found</p>}
      {pokemonData && <PokemonContainer pokemonData={pokemonData} />}
    </>
  );
}

export default App;
