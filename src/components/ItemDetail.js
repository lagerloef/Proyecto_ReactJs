import React, {useState} from 'react';
import ItemCount from './ItemCount';

function ItemDetail (props){

  const [count, setCount] = useState(0);
  const comprar = `Comprar | ${count}`

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
      <button>{comprar} </button>
    </div>
  );
}
export default ItemDetail;