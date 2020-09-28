import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//importo componentes que puedo armar fuera
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from './components/ItemDetailContainer';
import BuildingCart from './components/Cart';
import Products1 from './components/Products1';
import Products2 from './components/Products2';
import Products3 from './components/Products3';
import { CartProvider } from './context/cartContext';


function App() {
      
    return (      
      <div className="App">
      <CartProvider>
      <BrowserRouter>     
        <header className="App-header">               
          <NavBar/>        
        </header>   
        <Switch>
        <Route exact path="/" ><Home nombre="Juan Pablo"/></Route>        
        <Route path="/item/:id" component={ItemDetailContainer}/>
        <Route path="/cart" ><BuildingCart/></Route>
        <Route path="/Laptop" ><Products1 nombre="Juan Pablo"/></Route>
        <Route path="/Tablet" ><Products2 nombre="Juan Pablo"/></Route>
        <Route path="/Celular" ><Products3 nombre="Juan Pablo"/></Route>      
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
