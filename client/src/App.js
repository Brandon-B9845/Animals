import { useState, useEffect } from 'react';
import Card from './components/PokeCard';
import NavBar from './components/NavBar';
import Button from './components/Button';
import UsePokemon from './hooks/UsePokemon';


import './App.css';


function App() {
  const [pageCount, setPageCount] = useState(0)
  const { pokemon } = UsePokemon(pageCount);

  // async function leggyBoyos(){
  //   let results = await fetch('http://localhost:3000/pokemon/legendary')
  //   let returnPokemon = await results.json()
  //   console.log(returnPokemon)  
  //   setPokemon(returnPokemon)
  // }

  function findPicture(pokedex_number) {
    if (pokedex_number < 10) {
      return `00${pokedex_number}`
    }
    else if (pokedex_number >= 10 && pokedex_number < 100) {
      return `0${pokedex_number}`
    } else return pokedex_number
  }



  function previous() {
    if (pageCount > 0) {
      setPageCount(prevVal => prevVal - 1)
    }
  }

  function next() {
    setPageCount(prevVal => prevVal + 1)
  }

  // handleClick()

  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
          {/* <button onClick={leggyBoyos}>AHHHH</button> */}
          {/* <button onClick={"i"} >Click me</button> */}
          <Button name="previous-btn" handler={previous} title="Previous" />
          <Button name="next-btn" handler={next} title="Next" />
          <p>You are on page {pageCount}</p>
          <div className="wrapper">
            {pokemon ? pokemon.map((poke) => <Card key={poke.pokedex_number} picture={poke.pokedex_number < 494 ? `https://serebii.net/pokearth/sprites/dp/${findPicture(poke.pokedex_number)}.png` : `https://www.serebii.net/swordshield/pokemon/${poke.pokedex_number}.png`} name={poke.name} type={poke.type1} attack={poke.attack} defense={poke.defense} gen={poke.generation} pokedex={poke.pokedex_number} />) : <p>Click the button</p>}
          </div>

        </div>

      </header>

    </div>
  );
}

export default App;
