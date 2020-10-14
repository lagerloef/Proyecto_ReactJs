import React, { useState, useEffect } from "react";
import Item from "./Item";
import {getFirestore} from '../firebase';
import Loader from "./loader/Loader";

export function ItemList () { 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);  
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("Items");

    itemCollection.get()
    .then((querySnapshot)=>{
        if(querySnapshot.size === 0){
            console.log('No data!');
        }

        setItems(querySnapshot.docs.map(doc => {
          return ({id: doc.id, ...doc.data()});
        }));

    })
    .catch((error) => {
        console.log("Error searching items", error);
    }).finally(() => {
        setLoading(false);
    }); 
   
    },[]); 


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

export default ItemList;

/*
  return (
    <div className="container">
      <ul>      
      {items.map((item,i) => (
        <div key={i} className="itemProducts col-lg-4  col-md-6  col-sm-12">
            <h1>Hello</h1>
        </div>
      ))}
      </ul>
    </div>
*/