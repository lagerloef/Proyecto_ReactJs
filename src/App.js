import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//importo componentes que puedo armar fuera
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
      
    return (
      <div className="App">
      <BrowserRouter>
        <header className="App-header">               
          <NavBar/>        
        </header>
        <Switch>
          <Route exact path="/">
            <Home nombre="Juan Pablo"/>
          </Route>
          <Route path="/Laptop">
            <ItemDetailContainer product="laptop"/>
          </Route>
          <Route path="/Tablet">
            <ItemDetailContainer product="tablet"/>
          </Route>
          <Route path="/Celular">
            <ItemDetailContainer product="celular"/>
          </Route>           
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
