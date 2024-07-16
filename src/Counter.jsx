import React from 'react'
import { useState } from 'react';
function Counter() {

    const[counter,setCounter]=useState(0)

    
    function handleIncrement(){

        setCounter(counter+1)
    }

    function handleDecrement(){

        console.log("inside decrement");

        setCounter(counter-1)
    }

    function handleReset(){
        
        
        setCounter(0)
    }
  return (
   <div>
    <input type="text" value={counter}/>

    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>
   </div>
  )
}

export default Counter