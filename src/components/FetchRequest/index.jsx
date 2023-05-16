import React, { useEffect, useState } from "react";


const FetchRequest = ({inputText}) => {
    // console.log("inputText is: ", inputText)
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function getPokemon(name){
            try {
                const result = await fetch("https://pokeapi.co/api/v2/pokemon/:name")
                const data = await result.json()
                setPokemon(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getPokemon({inputText})
    },[])

  return (
    <>
    <h2>{inputText}</h2>
    {
        pokemon.length
        ? data
        : "No Pokemon :("
    }
    
    </>
  )
}

export default FetchRequest
