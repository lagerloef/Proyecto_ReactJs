import React, {useState, useContext, useEffect} from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/cartContext';

function ItemDetail (props){

  const [count, setCount] = useState(0);
  //const comprar = `Comprar | ${count}`;  
  const [cart, carter] = useContext(CartContext);

  // Set the Cart Context with the added product

  function handlerBuyer(){
    if (count !== 0){
      const total = count*props.prod.price;
      carter(count, props.prod.title, props.prod.id, props.prod.price,total)
      setCount(0)
    }    
  }


  /*
  const addToCart = () => {    
    const product = props.prod;
    console.log(product);
    setCart(currentCart => [...currentCart, product])    
  }
   */ 
  useEffect(() => {  
    console.log(cart);
  }, [cart]);

 function giveMeCount(c){
  setCount(c)
  }
  /*
  useEffect(() => {
    setHandleCart(true);
    console.log(count);
  }, [count]);
*/
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
        src={props.prod.img} 
        style={{"width": "200px"}}
        alt={props.prod.title}
      />
      <p><strong>Descripción: </strong>{props.prod.description}</p>
      <p><strong>Precio: </strong>${props.prod.price}</p>
      <p><strong>Product-Id: </strong>{props.prod.id}</p>
      <ItemCount func={giveMeCount}/>
      <button onClick={()=> handlerBuyer()}>add cart | {count} </button>      
    </div>
  );
}
export default ItemDetail;