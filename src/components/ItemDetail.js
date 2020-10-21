import React, {useState, useContext, useEffect} from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/cartContext';
import { useParams } from 'react-router-dom';

function ItemDetail (props){

  const [count, setCount] = useState(0);
  //const comprar = `Comprar | ${count}`;  
  const [cart, carter] = useContext(CartContext);
  const {id} =useParams();

  // Set the Cart Context with the added product

  function handlerBuyer(){
    if (count !== 0){
      const subtotal = count*props.prod.price;
      carter(count, props.prod.title, props.prod.id, props.prod.price, subtotal)
      setCount(0)
    }    
  }

  useEffect(() => {  
    console.log(cart);
  }, [cart]);

 function giveMeCount(c){
  setCount(c)
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
        style={
          {"max-height": "200px"}
        }
        src={props.prod.img}
        alt={props.prod.title}
      />     
      <p><strong>Descripción: </strong>{props.prod.description}</p>
      <p><strong>Precio: </strong>${props.prod.price}</p>
      <p><strong>Product-Id: </strong>{id}</p>
      <ItemCount func={giveMeCount}/>
      <br/>
      <button className="btn btn-dark" onClick={()=> handlerBuyer()}>add cart | {count} </button>      
    </div>
  );
}
export default ItemDetail;