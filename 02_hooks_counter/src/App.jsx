import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /* useState(
    default value aap kuch v de skte ho :
    true/false,
    ''
  ) */
  const [counter, setCounter]=useState(15)
  
  // let counter = 15
  const addValue = () =>{
    /**
    counter+=1;
    * lekin aise counter ka value on screen change nhi hogi
    * isuue ho rhe h ____UI Updation ___ pe
    */
   setCounter(counter+1)
   console.log("clicked", Math.random(), counter);
  }

  const removeValue= ()=>{
    if(counter>0)setCounter(counter-1)
  }

  return (
    <>
      
      <h1>CHAI or REACT</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>
        Add value {counter}
        </button>
      <br/> <br/>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
