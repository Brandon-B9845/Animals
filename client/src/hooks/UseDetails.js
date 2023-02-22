import { useState, useEffect } from 'react';


const UseDetails = (num) => {
    const [details, setDetails] = useState([])


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
    const fetchDetails = async () => {
      const results = await fetch('http://localhost:3000/pokemon/defense_desc', options)
      let returnPokemon = await results.json()
      setDetails(returnPokemon)
    }
    

    useEffect(() => {
      fetchDetails()
    }, [num])
    
   

   return { details }
  
    
}

export default UseDefenseDesc