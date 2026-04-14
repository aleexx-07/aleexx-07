import React from 'react'
import './PokemonContainer.css'
function PokemonContainer({ pokemonData }) {

  let { id , stats ,moves, types, name, weight, height,  sprites } = pokemonData;
  const statString = stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');
  
  return (
    
    <>
      <div className='container'>
        <span className='number'>#{id}</span>
        <h2 className='name'>{name}</h2>
        <div className='img-container'>
          <img src={sprites.front_default} alt={name} />
          <img src={sprites.back_default} alt={name} />
        </div>
        <div className='info'>
          <div className='tipo'>
            <h2>Tipo</h2>
            <p className='type'>{types.map(t => t.type.name).join(' / ')}</p>
          </div>
          <div className='categoria'>
            <h2>Movimientos</h2>
            <p className='category'>{moves.map(m => m.move.name).slice(0, 3).join(' / ')}</p>
          </div>
          <div className='weight'>
            <h2>Peso</h2>
            <p className='weight-value'>{weight / 10} kg</p>
          </div>
          <div className='height'>
            <h2>Altura</h2>
            <p className='height-value'>{height / 10} m</p>
          </div>
        </div>
        <div className='stats'>
          <p>Estadísticas:</p>
          <span className='hp'>HP {statString.split(', ')[0].split(': ')[1]} </span>
          <span className='attack'>Attack {statString.split(', ')[1].split(': ')[1]} </span>
          <span className='defense'>Defense {statString.split(', ')[2].split(': ')[1]} </span>
          <span className='speed'>Speed {statString.split(', ')[3].split(': ')[1]} </span>
          <span className='specialAttack'>Special Attack {statString.split(', ')[4].split(': ')[1]} </span>
          <span className='specialDefense'>Special Defense {statString.split(', ')[5].split(': ')[1]} </span>
        </div>
      </div>
    </>
    
  )
}

export default PokemonContainer;