import React from "react";
import { Link } from 'react-router-dom';


      
   function Item (props) {  
     return (                             
        <div className="col-lg-12  col-md-12  col-sm-12">
            <h6>{props.value.title}</h6>
            <img
              src={props.value.thumbnail} 
              style={{"width": "150px"}}
              alt={props.value.title}
            />
            <p>$ {props.value.price}</p>
            <Link to={`/item/${props.value.id}`}>
            <p>product_id: {props.value.id}</p>
            </Link>
        </div> 
        
     );  
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
  
