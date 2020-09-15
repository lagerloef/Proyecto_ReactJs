import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export function ItemDetailContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    setLoading(true);
    setTimeout(
      function() {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${props.product}&limit=10`)
        .then(response => {
          return response.json();
        })
        .then(res => {
          setData(res.results);
          setLoading(false);
        })
      },3000
    )
    },[]) 

  useEffect(() => {
    console.log(data);
  }, [data])

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="container">
      <ul>      
      {data.map((item) => (
        <ItemDetail item={item} />
      ))}
      </ul>
    </div>
  );
}
export default ItemDetailContainer;
