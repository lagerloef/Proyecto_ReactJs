import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

const Cart = () => {
  const [cart] = useContext(CartContext);
  const subtotal = cart.map((item) => item.subtotal);
  const total = subtotal.reduce((a, b) => a + b,0);
  const qtyProducts = cart.map((item) => item.qty);  
  const totalQtyProducts = qtyProducts.reduce((a, b) => a + b,0);

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
      <h5>Productos Seleccionados: {totalQtyProducts}</h5> 
      <Table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>SubTotal</th>
        </tr> 
        </thead>
      <tbody>     
      {cart.map((item) => (
        <tr>
          <th scope="row">{item.name}</th>
          <td>{item.qty}</td>
          <td>${item.price}</td>
          <td>${item.subtotal}</td>
        </tr>        
      ))}
      </tbody>
      </Table>
      <h5>Precio Total: {total}</h5>
      <div className="row">      
      <Link to={'/purchaseOrder'}>
        <Button color="dark">Iniciar Compra</Button>
      </Link>            
      <Link to={'/'}>
        <Button color="secondary">Seguir comprando</Button>
      </Link>
      </div>
      <br/>        
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
    <h5>Elige productos en el carrito de Compra</h5>    
    <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Cart;