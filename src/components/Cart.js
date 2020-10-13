import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Cart = () => {
  const [cart] = useContext(CartContext);
  const total = cart.map((item) => item.total);
  const sum = total.reduce((a, b) => a + b,0);
  const qtyItems = cart.map((item) => item.qty);  
  const totalQtyItems = qtyItems.reduce((a, b) => a + b,0); 

  if(cart.length!== 0 ) { 
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
      <span>Productos Seleccionados: {totalQtyItems} </span> 
      <ol>      
      {cart.map((item) => (
        <li>{item.name} , Cantidad: {item.qty}, Precio c/u: ${item.price} , total:${item.total}</li>
      ))}
      </ol>
      <h5>Precio Total: {sum}</h5>
      <Link to={'/purchaseOrder'}>
        <Button color="dark">Generar Datos</Button>
      </Link>        
      </div>
    </div>
  )}else return (
    <div style={{
      "display": "flex",
      "flexDirection": "column", 
      "flexWrap": "wrap", 
      "justifyContent": "center", 
      "alignItems": "center"
    }}>
    <h4>Carrito de Compra</h4>
    <h5>No has seleccionado ningún producto en el carrito de Compra</h5>    
    <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Cart;
