import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//importo componentes que puedo armar fuera
import Menu from "./components/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import PurchaseOrder from './components/PurchaseOrder';
import CategoryContainer from './components/CategoryContainer';
import { CartProvider } from './context/cartContext';

function App() {      
    return (      
      <div className="App">
      <BrowserRouter> 
      <CartProvider>  
        <header className="App-header">               
          <Menu/>        
        </header>       
        <Switch>
        <Route exact path="/" ><Home nombre="Juan Pablo"/></Route>
        <Route path="/categorias/:categoryId"><CategoryContainer/></Route>
        <Route path="/Items/:id"><ItemDetailContainer/></Route>
        <Route path="/cart" ><Cart/></Route>
        <Route path="/purchaseOrder" ><PurchaseOrder/></Route>
        </Switch>
        </CartProvider>       
      </BrowserRouter>            
    </div>
  );
}

export default App;
