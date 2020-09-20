import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList= (props) =>{
  
  const [data, setData] = useState(false)    
    
    useEffect(()=> {      
      setTimeout(
        function(){
          fetch('https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items')        
          .then(response => {
            return response.json();
          })
          .then(res => {
              setData(res)              
          })
        }, 1000
      )
    },[])


    if(data.length > 0){
      return data.map((p, i) => (                   
          <div className= "itemProducts col-lg-4  col-md-6  col-sm-12" key={i}>
               <Item value={data[i]}/>         
          </div>          
      ))      
    }   
      return <div style={{textAlign: 'left', marginLeft: '5vw'}}>
          'Loading List of products...'
      </div> 

}


export default ItemList;







/*import React, { useState, useEffect } from "react";

function ItemList() {
  const [data, setData] = useState([]);  
  const [error, setError] = useState("");
 
  useEffect(() => { 
      
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Celular&limit=20`)
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res);
      setData(res.results);         
    })
    .catch(error => {
      setError(error);
    }); 
    
    
  }, []) 

  useEffect(() => {
    console.log(data);
  }, [data])

  if (!error) {
    return (
      <ul>
        {data.map((prod) => (        
        <div key={prod.id} className="itemProducts col-lg-4  col-md-6  col-sm-12">
            <h6>{prod.title}</h6>
            <img
              src={prod.thumbnail} 
              style={{"width": "150px"}}
              alt="{item.title}"
            />
            <p>${prod.price}</p>
            <p>product: {prod.id}</p>
            <li>Detalle del Producto</li>
        </div> 
      ))}
      </ul> 
    
    );
  } else {
    return <span>{error}</span>;
  }

}

export default ItemList;
*/




