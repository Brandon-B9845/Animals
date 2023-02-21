import { useState, useEffect } from 'react';


const UseAttackDesc = (num) => {
    const [attackDesc, setAttackDesc] = useState([])


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
    const fetchAttackDesc = async () => {
      const results = await fetch('http://localhost:3000/pokemon/attack_desc', options)
      let returnPokemon = await results.json()
      setAttackDesc(returnPokemon)
    }
    

    useEffect(() => {
      fetchAttackDesc()
    }, [num])
    
   

   return { attackDesc }
  
    
}

export default UseAttackDesc