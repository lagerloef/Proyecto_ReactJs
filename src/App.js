import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//importo componentes que puedo armar fuera
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from './components/ItemDetailContainer';
import BuildingCart from './components/Cart';


function App() {
      
    return (
      <div className="App">
      <BrowserRouter>
        <header className="App-header">               
          <NavBar/>        
        </header>
        <Switch>
        <Route exact path="/" ><Home nombre="Juan Pablo"/></Route>
        <Route path="/item/:id" component={ItemDetailContainer}/>
        <Route exact path="/cart" ><BuildingCart/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
