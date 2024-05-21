import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)

  const [numAllowed, setNUmberAllowed] = useState(false)

  const [charAllowed, setCharAllow] = useState(false)

  const [password, setPassword] = useState("")

  // useRef hook --> implemanted for copy to clipboard purpose
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "!!!!@#$%^&*()_+=-[]}{`~"

    for (let i  = 1; i  <= length; i ++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password] )

  /**-------------------------------------------
   * now if you want to run the page on start you can do it by executing the function _____passwordGenerator()___ here
   * passwordGenerator()
   * _______ERROR________
   *  React limits the number of renders to prevent an infinite loop.
   * ______________________________________________ 
   */

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password} 
            className='outline-none w-full py-1 px-3' placeholder="password" 
            read-only
            ref={passwordRef}
            />

            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5'> Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min = {6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={ (e) => {setLength(e.target.value)}}/>
              <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={numAllowed}
              id='numberInput'
              onChange={() => setNUmberAllowed((prev) => !prev)} />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={charAllowed}
              id='charInput'
              onChange={() => setCharAllow((prev) => !prev)} />
            <label htmlFor="charInput">Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
