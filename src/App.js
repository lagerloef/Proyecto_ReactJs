import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
//importo componentes que puedo armar fuera
import Menu from "./components/NavBar";
import Home from "./components/Home";
import ItemDetailContainer from './components/ItemDetailContainer';
import BuildingCart from './components/Cart';
import ItemList from './components/ItemList';
import { CartProvider } from './context/cartContext';


function App() {
      
    return (      
      <div className="App">
      <CartProvider> 
      <BrowserRouter>     
        <header className="App-header">               
          <Menu/>        
        </header>       
        <Switch>
        <Route exact path="/" ><Home nombre="Juan Pablo"/></Route>
        <Route path="/Products" ><ItemList/></Route>        
        <Route path="/item/:id" component={ItemDetailContainer}/>
        <Route path="/cart" ><BuildingCart/></Route>            
        </Switch>       
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
