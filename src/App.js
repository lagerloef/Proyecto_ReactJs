import React from 'react';
import './App.css';
//importo componentes que puedo armar fuera
import NavBar from "./components/NavBar";
import Home from "./components/Home";


function App() {
      
    return (
      <div className="App">
      <header className="App-header">               
        <NavBar/>        
      </header>
      <Home nombre="Juan Pablo"/>
    </div>
  );
}

export default App;
