import { useState, useEffect } from 'react';


const UseLegendaries = (num) => {
    const [legendaries, setLegendaries] = useState([])


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
    const fetchLegendaries = async () => {
      const results = await fetch('http://localhost:3000/pokemon/legendary', options)
      let returnPokemon = await results.json()
      setLegendaries(returnPokemon)
    }
      
 

    useEffect(() => {
        fetchLegendaries()
    }, [num])

    console.log(legendaries)
   

   return { legendaries }
  
    
}

export default UseLegendaries 