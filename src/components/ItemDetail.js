import React from "react";
import ItemCount from './ItemCount';

function ItemDetail (props){
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
      <ItemCount/>
      <button>comprar</button>
      
    </div>
  );
}
export default ItemDetail;