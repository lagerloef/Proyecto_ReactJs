  
import React from 'react';

function Input(props) {
  
  return (
    <input onChange={props.handleChange} value={props.count}/>
  )
}

export default Input;