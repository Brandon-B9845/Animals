import { useState, useEffect } from 'react';
import Card from './components/PokeCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    console.log(pokemon)
  }, []);
  
  async function handleClick() {
    let results = await fetch('http://localhost:3000/pokemon')
    let returnPokemon = await results.json()
    console.log(returnPokemon)
    setPokemon(returnPokemon)
    
}
function findPicture(pokedex_number){
    if(pokedex_number < 10){
      return `00${pokedex_number}`
    }
    else if (pokedex_number >= 10 && pokedex_number < 100){
      return`0${pokedex_number}`
    }else return pokedex_number
  
} 

  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
          <div className="wrapper">
          {pokemon ? pokemon.map((poke) => <Card key={poke.pokedex_number} picture={poke.pokedex_number < 494 ?  `https://serebii.net/pokearth/sprites/dp/${findPicture(poke.pokedex_number)}.png` : `https://www.serebii.net/swordshield/pokemon/${poke.pokedex_number}.png`} name={poke.name} type={poke.type1} attack={poke.attack} defense={poke.defense}gen={poke.generation} pokedex={poke.pokedex_number} />) : <p>Click the button</p>}
          </div>
          <button onClick={handleClick} >Click me</button>
        </div>

      </header>

    </div>
  );
}

export default App;
