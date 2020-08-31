import React from'react'; // createElement
import ReactDOM from'react-dom'; // appendChild

const element = <h1>Hola React!!!</h1>
const container = document.getElementById('app')
ReactDOM.render(element, container)