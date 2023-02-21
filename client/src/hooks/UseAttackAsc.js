import { useState, useEffect } from 'react';


const UseAttackAsc = (num) => {
    const [attackAsc, setAttackAsc] = useState([])


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
    const fetchAttackAsc = async () => {
      const results = await fetch('http://localhost:3000/pokemon/attack_asc', options)
      let returnPokemon = await results.json()
      setAttackAsc(returnPokemon)
    }
    

    useEffect(() => {
      fetchAttackAsc()
    }, [num])
    
   

   return { attackAsc }
  
    
}

export default UseAttackAsc