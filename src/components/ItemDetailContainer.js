import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    let id = props.match.params.id;
    console.log(props);    
      
            fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(response => {
            return response.json();
            })
            .then(res => {
            setData(res);
            setLoading(false);
          })     
   

  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  
  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <ItemDetail prod={data}/>
  );
}