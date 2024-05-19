// import { Children } from "react"

// import { Children } from "react";

function customREnder(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)

    this code is not modulor
    */
    
    const domElement = document.createElement
    (reactElement.type)

    domElement.innerHTML = reactElement.Children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)




}

const reactElement = {
    type : 'a'  ,   //'div/p/a'
    props: {        //object hota h
        href : 'https://google.com',
        target : '_blank'
    },
    Children: 'Click me to visit google'
}

const maincontainer = document.getElementById("root");


customREnder(reactElement, maincontainer)