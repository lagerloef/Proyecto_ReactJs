import React from "react";
import ItemCount from './ItemCount'
      
   function ItemDetail(props) {  
     return (                             
        <div key={props.item.id} className="itemProducts col-lg-4  col-md-6  col-sm-12">
            <h6>{props.item.title}</h6>
            <img
              src={props.item.thumbnail} 
              style={{"width": "150px"}}
              alt="{item.title}"
            />
            <p>$ {props.item.price}</p>
            <p>product_id: {props.item.id}</p>
            <ItemCount/>            
            <button>comprar</button>           
        </div> 
        
     );  
   }  

   export default ItemDetail;