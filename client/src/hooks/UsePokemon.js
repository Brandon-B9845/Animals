import { useState, useEffect } from 'react';


const UsePokemon = (num) => {
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
    const fetchPokemon = async () => {
      const results = await fetch('http://localhost:3000/pokemon', options)
      let returnPokemon = await results.json()
      setPokemon(returnPokemon)
    }
    

    useEffect(() => {
      fetchPokemon()
    }, [num])
   

   return { pokemon }
  
    
}

export default UsePokemon 