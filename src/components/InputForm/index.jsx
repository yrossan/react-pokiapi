import React, { useState, useEffect } from "react";
import FetchRequest from "../FetchRequest";


const InputForm = () => {
    const [inputText, setInputText] = useState("")
    const [submittedText, setSubmittedText] = useState("")
    // let sendUserInput


    function updateInput(e) {
        setInputText(e.target.value) //Updating the state of input text to what is being entered
        // console.log(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log("Submit has been pressed")
        // console.log("Value is: ", inputText)
        setSubmittedText(inputText)
        setInputText('')
        
    }

    // if (submittedText !== ""){
    //     sendUserInput=<FetchRequest inputText={submittedText}/>
    // }

    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Please enter a pokemon: </label>
            <input type="text" value={inputText} onChange={updateInput}></input>
            <input type="submit" ></input>
        </form>
        {submittedText !== '' ? <FetchRequest pokemonSearch={submittedText} /> : <p>No pokemon yet, please submit a pokemon!</p>}
        {/* {sendUserInput} */}
        </>
    )
}

export default InputForm
