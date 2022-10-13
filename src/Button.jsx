import React from 'react'
import { useState,useEffect } from 'react'
export const Button = () => {
  const [inputText,setInput]=useState("")
  
 
 
const AddTotext=(e)=>{
  let input=e.target.value
 setInput((prev)=> prev + input)

  

}

const del=()=>{
  setInput(inputText.slice(0,-1))

}
const clear=()=>{
  setInput("")

}
const percentage=()=>{
  setInput(inputText/100)
}

const calc=()=>{
  try {
    setInput(eval(inputText))
  }catch (err){
    setInput(`invalid `)

  }

}






    return (
      <>
    <div className='Screen'>
        <div className='result'>
        {inputText}
        </div>

    </div>

      <div className='button-container'>
        <button onClick={clear}>AC</button>
        <button value="x" onClick={del}>X</button>
        <button value="/" onClick={AddTotext}>/</button>
        <button value="%" onClick={percentage}>%</button>

        <button value={7} onClick={AddTotext}>7</button>
        <button value={8} onClick={AddTotext}>8</button>
        <button value={9} onClick={AddTotext}>9</button>
        <button value="*" onClick={AddTotext}>*</button>

        <button value={4} onClick={AddTotext}>4</button>
        <button value={5} onClick={AddTotext}>5</button>
        
        <button value={6} onClick={AddTotext}>6</button>
        <button value="-" onClick={AddTotext}>-</button>

        <button value={1} onClick={AddTotext}>1</button>
        <button value={2} onClick={AddTotext}>2</button>
        <button value={3} onClick={AddTotext}>3</button>
        <button value="+" onClick={AddTotext}>+</button>

        <button value={0} onClick={AddTotext}>0</button>
        <button value="." onClick={AddTotext}>.</button>
      <button onClick={calc}  id='equal-btn'>=</button>
  </div>
      </>
      
    )
  
  
}