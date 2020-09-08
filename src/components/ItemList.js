import React, { useState} from "react";
import Item from './Item.js';

function ItemsList() {
    const [products, setProducts] = useState([]);               
    const [error, setError] = useState("");
   
    getProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => {
        setError(err);   
      });
     if (!error) {
       return (
         <ul>
           {products.map((product) => (
             <Item product={product} />
           ))}
         </ul> 
       
       );
     } else return <span>{error}</span>;
  }

  export default ItemsList
  
function getProducts() {                                                                                          
     return new Promise((resolve, reject) => {                            
         setTimeout(() => {                                                 
           resolve([                                                        
             { id: 1, name: "Notebook GADNIC GLOWN", description:"Intel Atom x5 Z8350 14 Pulg.", price:"45.000"},
             { id: 2, name: "Notebook Lenovo V15 IIL", description:"Intel Core i7 -1065G7 15.6 Pulg.", price:"120.000" },
             { id: 3, name: "Tablet Alcatel 1T 8082", description:"16G 1G 10.1 Pulg.", price:"15.000" },                                
             { id: 4, name: "Celular Alcatel 1", description:"16G 1G 5 Pulg.", price:"10.000" },
           ]);                                                              
         }, 2000);                                                          
       });                                                                  
    }   