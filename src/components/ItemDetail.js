import React from 'react';
import ItemCount from './ItemCount.js';

function ItemDetail(props){
  return(
    <div div className="detailProduct">
        <h1>Detalle del Producto {props.value.id}</h1>
        <h4>{props.value.nombre}</h4>
        <h5>Categoria: {props.value.categoria}</h5>
        <p><strong>Precio: $</strong>{props.value.precio}</p>
        <ItemCount/>
        <button>Comprar</button>
        <hr></hr>
    </div>
  )
}

export default ItemDetail;