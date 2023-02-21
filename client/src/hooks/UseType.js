import { useState, useEffect } from 'react';


const UseType = (num) => {
    const [type, setType] = useState([])


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
    const fetchType = async () => {
      const results = await fetch('http://localhost:3000/pokemon/type', options)
      let returnPokemon = await results.json()
      setType(returnPokemon)
    }
    

    useEffect(() => {
      fetchType()
    }, [num])
    
   

   return { type }
  
    
}

export default UseType