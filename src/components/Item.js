import React from "react";
      
   function Item(props) {  
     return (  
       <div className="itemProducts col-lg-3  col-md-4  col-sm-6">        
         <li key={props.product.id}>{props.product.name}</li>
         <li key={props.product.id}>{props.product.description}</li>
         <li key={props.product.id}>${props.product.price}</li>            
       </div> 
        
     );  
   }  

   export default Item;