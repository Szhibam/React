import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function is just an app so i can create a function here also
// lets do that 

function MyApp(){
    return (
    <div>
        <h1>Custom app!!!</h1>
    </div>)
}

/** ----------------------------------------------
const reactElement = {
    type : 'a'  ,   //'div/p/a'
    props: {        //object hota h
        href : 'https://google.com',
        target : '_blank'
    },
    Children: 'Click me to visit google'
}
*/
// ---------------------------------------------------------
/*
 * <MyApp> ('m' capital) ko vej rhe h jo fir react ek tree like structure me purse krta h
 * iske liye binders use hote h
 * to kyu na hum khud usko ek tree like structure de 
 * lekin aisa krne se kya wo run hoga ?
 * agar render k andar hum <ReactElement> pass krte h to kya wo run hoga ? or hume anchor tag dikhega?
 * nhi!!!!! render ek function h jo ek perticular argument expect krta h aise akise run krega be
 */

const anotherElement = (
    <a href='https://google.com' target='_blank'>visit google</a>
)


// react k hisab se ek element banate h

/**
 * agar render k andar variable inject krna h to 
 * 1. pehle usko render k bahar hi declare karo
 * 2. fir usko rendar k andar ekkkduuum last me likh do
 */

let myVar = "ami ekta variable"

const reactelement = React.createElement(
    'a',  // the first parameter expected is the tag
    {            // 2nd parameter expected is an object
        href : "https://google.com",
        target : '_blanl'
    },
    'click me visit googleeeeee ',
    myVar
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp/>
    // <ReactElement/> -----> XXXX wont run
    // reactelement    -----> XXXXX wont run
    // anotherElement    // -----> ye visible hai

    reactelement
  
)

// react ka render function :: ek perticular syntax h
