import { useState, useEffect } from 'react';


const UseRandom = () => {
    const [random, setRandom] = useState([])


    let options = {
      method: 'POST',
      headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          // 'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
          // 'X-RapidAPI-Key': ''
          // 'Access-Control-Allow-Origin': '*'
      },
    }
    const fetchRandom = async () => {
      const results = await fetch('http://localhost:3000/pokemon/random', options)
      let returnPokemon = await results.json()
      setRandom(returnPokemon)
    }
    

    useEffect(() => {
      fetchRandom()
    }, [])
    
   

   return { random }
  
    
}

export default UseRandom