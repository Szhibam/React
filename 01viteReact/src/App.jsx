import Chai from "./chai"

function App() {


  // agar aapko veriable return krna h to kaise kroge?
  const myVariable = "{} braces k andar variable ka naam likhese wo dikhaga"
  

  return (
    <>
    <h2>1. function ka naam caps me</h2>
    <h3>2. return tum ek hi elements kr skte ho</h3>
    <h3>isiliye usko iske andar kro</h3>
    <h3> isko fragments bolte h</h3>
    <p>note-- {myVariable}</p>  
    {/* ____EVALUATED EXPRESSION^^^__________ */}
    <Chai/>
    </>
  )
}

export default App
