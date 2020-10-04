import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {getFirestore} from '../firebase';

export default function ItemDetailContainer(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = props.match.params.id;
  
  useEffect(() => {
    setLoading(true);    
    console.log(id);
    const db = getFirestore()
    const itemCollection = db.collection('Items');
    const item = itemCollection.doc(id);       
    item.get()
    .then((doc) =>{        
        if (!doc.exists){
            console.log ("Item no existe!");
        }
        console.log("item encontrado");
        setProduct({ id: doc.id, ...doc.data() });
    })
    .catch((error) =>{
        console.log('Error searchin item: ', error);
    })
    .finally(() =>{
        setLoading(false);
    })
  }, [id]);   
      
  
 useEffect(() => {
    console.log(product);
  }, [product])
  

  
  if(loading) {
    return <div>Loading...</div>
  }
  return (    
    <ItemDetail prod={product}/>    
  );
}