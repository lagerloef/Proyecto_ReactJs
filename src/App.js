import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//importo componentes que puedo armar fuera
import Menu from "./components/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import PurchaseOrder from './components/PurchaseOrder';
import Products1 from './components/Products1';
import Products2 from './components/Products2';
import Products3 from './components/Products3';
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
        <Route path="/Notebooks"><Products1/></Route>
        <Route path="/Tablets"><Products2/></Route>
        <Route path="/SmartPhones"><Products3/></Route>
        <Route path="/Items/:id" component={ItemDetailContainer}/>           
        <Route path="/cart" ><Cart/></Route>
        <Route path="/purchaseOrder" ><PurchaseOrder/></Route>
        </Switch>
        </CartProvider>       
      </BrowserRouter>            
    </div>
  );
}

export default App;
