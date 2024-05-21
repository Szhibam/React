import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObje= {
    name: "szhibam",
    age : 22
  }
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card channel  = "chai or code" someObj = {myObje}/>
      <Card channel  = "chai or code" someObj = {myArr}/>
      <Card username = "szhibam" btnText = "click me"/>

    </>
  )
}

export default App
