import React from 'react';
import ItemList from './ItemList.js'

function Home(props) {
    return <div className="container">
                <h2 id="greeting">Bienvenido {props.nombre}</h2> 
                <h1>Productos con descuentos del 10%</h1>                
                <ItemList products="samsung"/>                
        </div>            
           
} 
export default Home 