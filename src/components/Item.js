import React from 'react';
import { Link } from 'react-router-dom';

function Item (props){
    return(
        <div className="col-lg-12  col-md-12  col-sm-12" >
            <Link to={`/item/${props.value.id}`}>
                <h4 >{props.value.nombre}</h4>
            </Link>
            <p>Precio: <strong>${props.value.precio}</strong></p>            
        </div>
    )
} 

export default Item;














/*import React from "react";
      
   function Item(props) { 

     return (                             
        <div className="itemProducts col-lg-4  col-md-6  col-sm-12">
            <h6>{props.value.nombre}</h6>
            <p>{props.value.categoria}</p>
            <p>${props.value.price}</p>
            <li>Detalle del Producto</li>
        </div> 
        
     );  
   }  
  

   export default Item;
*/
  
