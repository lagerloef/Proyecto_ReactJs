import React, { useState, useEffect } from "react";
import Item from "./Item";

export function ItemList (props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    setLoading(true);
    setTimeout(
      function() {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=Laptop&limit=20")
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
      {data.map((item,i) => (
        <div key={i} className="itemProducts col-lg-4  col-md-6  col-sm-12">
            <Item value={item}/>
        </div>
      ))}
      </ul>
    </div>
  );
}
export default ItemList;




