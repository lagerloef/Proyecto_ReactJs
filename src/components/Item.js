import React from "react";
import { NavLink } from 'react-router-dom';
      
   function Item (props) {  
     return ( 
      <div className="col-lg-12  col-md-12  col-sm-12"> 
        <NavLink className="cart" to={`/Items/${props.id}`}>
            <h6>{props.nombre}</h6>
            <img
              src={props.img} 
              style={{"width": "150px"}}
              alt={props.nombre}
            />  
              <p>Precio: {props.precio}</p> 
        </NavLink>
      </div> 
        
     );  
   }  

   export default Item;
