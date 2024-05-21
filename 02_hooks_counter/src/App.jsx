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

   /**
    * ___OUTPUT KYA HOGA?_____
    * setCounter(counter+1) -->yaha v same kaam
    * setCounter(counter+1) -->yaha v same kaam
    * setCounter(counter+1) -->yaha v same kaam
    * setCounter(counter+1) -->yaha v same kaam
    * _______________________________________________________________________________________________
    * to kya aisa krne se counter ka value 4 bar update hoga ?
    * nhi ...... kyoki react me kaam batches me hote h
    * wo ek bundle banayega kaam ka or dekhe ga areh ye to ek hi kam h bar bar kyu karu ?
    * lekin agar aaoko kisi reason k wajah se counter ko 4 bar increment krna ho wo bhi isi larah se 
    * ----------------------------------------------------------------------------------------------->>>>>>>>>>>>
    * setCounter( (prevCounter) => prevCounter +1)
    * OR
    * setCounter (prevCOunter => prevCOunter +1) X4
    */
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
