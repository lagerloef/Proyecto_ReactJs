import React, { useState } from 'react';
import Button from "./Boton"

function ItemCount (props) {
  //const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  const stock = 10;
  const limit = stock +1
 /*
  useEffect(() => {      
      if(count <0){
          setCount(0)
      }else{
      if(count === 11){
          setCount(10)
        }
        }
    })
    */

   if(count <0){
    setCount(0)
    }else{
    if(count === limit){
    setCount(10)
    }
  }

  return (
    <div onClick={props.func(count)}>     
      <Button        
        onClick={() => setCount(count + 1)}
        sign="+"
        />      
      <input value={count}/>  
      <Button         
        onClick={() => setCount(count - 1)}
        sign="-"
        />
    </div>
  );
}
export default ItemCount;