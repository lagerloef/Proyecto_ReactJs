import React from 'react';
import './App.css';
//importo componentes que puedo armar fuera
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Button from "./components/Boton";

function App() {
  const value = prompt("Ingrese su Nombre")
     
    return (
      <div className="App">
      <header className="App-header">               
        <NavBar/>        
      </header>
      <Home name={value}/> 
      <Button/>            
    </div>
  );
}

export default App;
