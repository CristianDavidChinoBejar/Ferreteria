import React, { useState } from 'react'

const getApi = () => {
    const [getContentApi, setGetContentApi] = useState()
    
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
    const getPokemon = fetch(url)
      .then(response => response.json())
      .then(data => 
        console.log(data.results)
        setGetContentApi(data.results)
        );
    

  return (
    <div>
        <h1>
            getApi
        </h1>
        <p> {getPokemon} </p>
    </div>
  )
}

export default getApi