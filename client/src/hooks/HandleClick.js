import { useState, useEffect } from 'react';

const HandleClick = async (num) => {
    const [pokemon, setPokemon] = useState([])



    let options = {
      method: 'POST',
      headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          // 'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
          // 'X-RapidAPI-Key': ''
          // 'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({'page-number':  num})
    }
  
    
    let results = await fetch('http://localhost:3000/pokemon', options)
    let returnPokemon = await results.json()
    console.log(returnPokemon)
    setPokemon(returnPokemon)
   const pokeData = pokemon

   return pokeData
  
    
}

export default HandleClick 