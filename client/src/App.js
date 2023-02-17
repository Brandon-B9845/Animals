import { useState, useEffect } from 'react';
import Card from './components/PokeCard';
import NavBar from './components/NavBar';
import './App.css';


function App() {

  const [pokemon, setPokemon] = useState([])
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    console.log("i have changed")

  }, [pokemon, pageCount]);
  
  async function handleClick() {
    
    const options = {
      method: 'POST',
      headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          // 'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
          // 'X-RapidAPI-Key': ''
          // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({'page-number':  pageCount})
    }
  
    
    let results = await fetch('http://localhost:3000/pokemon', options)
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

async function leggyBoyos(){
  let results = await fetch('http://localhost:3000/pokemon/legendary')
  let returnPokemon = await results.json()
  console.log(returnPokemon)  
  setPokemon(returnPokemon)
}



function previous() {
  if(pageCount > 0){
    handleClick()
    setPageCount(prevVal => prevVal - 1)
  }
    
   
}

function next() {
  handleClick()
  setPageCount(prevVal => prevVal + 1)
  
}

// handleClick()

  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
          <button onClick={leggyBoyos}>AHHHH</button>
          <button onClick={handleClick} >Click me</button>
          <button onClick={previous}>Previous</button>
          <button onClick={next}>Next</button>
          <p>You are on page {pageCount}</p>
          <div className="wrapper">
          {pokemon ? pokemon.map((poke) => <Card key={poke.pokedex_number} picture={poke.pokedex_number < 494 ?  `https://serebii.net/pokearth/sprites/dp/${findPicture(poke.pokedex_number)}.png` : `https://www.serebii.net/swordshield/pokemon/${poke.pokedex_number}.png`} name={poke.name} type={poke.type1} attack={poke.attack} defense={poke.defense}gen={poke.generation} pokedex={poke.pokedex_number} />) : <p>Click the button</p>}
          </div>

        </div>

      </header>

    </div>
  );
}

export default App;
