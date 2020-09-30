import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      <div style={{
      "display": "flex",
      "flexDirection": "column", 
      "flexWrap": "wrap", 
      "justifyContent": "center", 
      "alignItems": "center"
    }}>
      <h4>Carrito de Compra</h4>
      <span>Productos escogidos: {cart.length}</span> 
      <ul>      
      {cart.map((item) => (
        <li>{item.title}</li>
      ))}
      </ul>
      <Link to={'/'}>Home</Link> 
      </div>
    </div>
  )
}

export default Cart;



/*import React from 'react';

const BuildingCart = (props) => {
    return (<div className="container">
        <div className="cartProduct">            
            <h4>Carrito de Compra</h4>
            <ul>
                <li>Camisa</li>
            </ul>            
        </div>
    
    </div>)
}

export default BuildingCart;

*/

