import React, { useEffect, useState } from "react";


const FetchRequest = ({pokemonSearch}) => {
    // console.log("inputText is: ", inputText)
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function getPokemon(name){
            try {
                console.log(`Searching for ${pokemonSearch}`)
                const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const data = await result.json()
                console.log(`Data ${data}`)
                setPokemon(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPokemon(pokemonSearch)
    },[])

  return (
    <>
    <h2>{pokemon.name}</h2>
    {
        pokemon.name
        ? <p>{pokemon.name}</p>
        : <p>Loading Pokemon...</p>
    }
    
    </>
  )
}

export default FetchRequest
