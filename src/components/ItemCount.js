import React, { useState, useEffect } from 'react';
import Button from "./Boton"

function ItemCount2 (props) {
  const [count, setCount] = useState(0); 
  
  useEffect(() => {      
      if(count <0){
          setCount(0)
      }else{
      if(count === 11){
          setCount(10)
        }
        }
    })

  return (
    <div onClick={props.func(count)}>     
      <Button
        color="dark" 
        onClick={() => setCount(count + 1)}
        sign="+"
        />      
      <input value={count}/>  
      <Button 
        color="dark"
        onClick={() => setCount(count - 1)}
        sign="-"
        />
    </div>
  );
}
export default ItemCount2;