import React from 'react';
import ItemList from './ItemList.js'

function Home(props) {
    return <div className="container">
                <h2 id="greeting">Bienvenido Mundo!! {props.nombre}</h2> 
                <h1>Productos alta calidad</h1> 
                <ItemList/>              
        </div>            
           
} 
export default Home 