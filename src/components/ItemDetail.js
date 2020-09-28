import React, {useState, useContext, useEffect} from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/cartContext';

function ItemDetail (props){

  const [count, setCount] = useState(0);
  const comprar = `Comprar | ${count}`;  
  const [cart, setCart] = useContext(CartContext);

  // Set the Cart Context with the added product
  const addToCart = () => {
    const product = props.prod;
    console.log(product);
    setCart(currentCart => [...currentCart, product])
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function giveMeCount(c){
      setCount(c)
      console.log('c => ', c, 'count => ', count);
  }

    return (
    <div style={{
      "display": "flex",
      "flexDirection": "column", 
      "flexWrap": "wrap", 
      "justifyContent": "center", 
      "alignItems": "center"
    }}>
      <h4>{props.prod.title}</h4>
      <img
        src={props.prod.secure_thumbnail} 
        style={{"width": "200px"}}
        alt={props.prod.title}
      />
      <p>$ {props.prod.price}</p>
      <p>product_id: {props.prod.id}</p>
      <ItemCount func={giveMeCount}/>
      <button onClick={addToCart}>{comprar}</button>      
    </div>
  );
}
export default ItemDetail;