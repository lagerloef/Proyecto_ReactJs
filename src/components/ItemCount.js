import React , { useState } from "react";

function ItemCount (){
const [count, setCount] = useState(0);

function del (){ 
  if (count > 0){setCount(count-1)} 
}

function add (){
  if (count < 10){setCount(count+1)}
}

return (  <div className="container">
  <h1>Contador</h1>
    <div className="row cartShop">
    <button onClick={del}>-</button>
    <p>{count}</p>
    <button onClick={add}>+</button>
    </div>
  </div>
)
}

export default ItemCount