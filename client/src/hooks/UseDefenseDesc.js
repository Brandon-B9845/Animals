import { useState, useEffect } from 'react';


const UseDefenseDesc = (num) => {
    const [defenseDesc, setDefenseDesc] = useState([])


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
      const results = await fetch('http://localhost:3000/pokemon/defense_desc', options)
      let returnPokemon = await results.json()
      setDefenseDesc(returnPokemon)
    }
    

    useEffect(() => {
      fetchDefenseDesc()
    }, [num])
    
   

   return { defenseDesc }
  
    
}

export default UseDefenseDesc