import React from 'react';
import './App.css';
//importo componentes que puedo armar fuera
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NameForm from "./components/NameForm";
import ItemCount from "./components/ItemCount";


function App() {
      
    return (
      <div className="App">
      <header className="App-header">               
        <NavBar/>        
      </header>
      <Home nombre="María"/>
      <NameForm/>
      <ItemCount/>   
    </div>
  );
}

export default App;
