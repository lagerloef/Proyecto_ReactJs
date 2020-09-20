import React from 'react';
//import CartIcon from './CartIcon';
import ItemCount from "./ItemCount"

const BuildingCart = (props) => {
    return (<div className="container">
        <div className="cartProduct">            
            <h4>Carrito de Compra</h4>
            <ul>
                <li>Camisa</li>
            </ul>
            <ItemCount/>
        </div>
    
    </div>)
}

export default BuildingCart;