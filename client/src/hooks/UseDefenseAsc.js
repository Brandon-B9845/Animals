import { useState, useEffect } from 'react';


const UseDefenseAsc = (num) => {
    const [defenseAsc, setDefenseAsc] = useState([])


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
    const fetchDefenseDesc = async () => {
      const results = await fetch('http://localhost:3000/pokemon/defense_asc', options)
      let returnPokemon = await results.json()
      setDefenseAsc(returnPokemon)
    }
    

    useEffect(() => {
      fetchDefenseDesc()
    }, [num])
    
   

   return { defenseAsc }
  
    
}

export default UseDefenseAsc