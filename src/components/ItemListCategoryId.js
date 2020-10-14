import React, { useState, useEffect } from "react";
import Item from "./Item";
import {getFirestore} from '../firebase';
import Loader from "./loader/Loader";

const ItemListCategoryId = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);  
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("Items")
    const categoryItemCollection = itemCollection.where('categoryId', '==', `${props.products}`);    
    categoryItemCollection.get()
    .then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No data!');
      }
      setItems(querySnapshot.docs.map(doc => {
        return ({id: doc.id, ...doc.data()});
      }));      
    })
    .catch((error) => {
      console.log("There was an error trying to get items: ", error);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [props.products]);

  useEffect(() => {
    console.log(items);
  },[items])

  if(loading) {
    return <div><Loader/></div>
  }

  return (
    <div className="container">
      <ul>      
      {
        items.map((p,i) => (
        <div className="itemProducts col-lg-4  col-md-6  col-sm-12">
            <Item key={p.id} nombre={p.title} img={p.img} precio={p.price} id={p.id} descripcion={p.description} categoria={p.categoryId}/>
        </div>
      ))}
      </ul>
    </div>
  );
}

export default ItemListCategoryId;