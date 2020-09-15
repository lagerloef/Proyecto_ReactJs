import React, { Component } from 'react';
import Button from './Boton';
import Input from "./Input";

 class ItemCount extends Component {
  
  constructor() {
    super();   
    
    //Initial Value in the Count
    this.state = {
      count: 0
    }
    // Minimum value for counter.
    
    this.minCounter = 0;
    //Maximum value for counter.      
    
    this.maxCounter = 5;
    //Handle change on the input Component.
      
    this.handleChange = this.handleChange.bind(this);

    }

 
  //Handles the state change of the input element.
   
  handleChange = (event) => {
    this.setState({
      count: event.target.value
    });
  }

  //Handles the add action in the Button.
  
  handleAdd = () => {
    if(this.state.count < this.maxCounter) {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  }
  
  //Handles the Substract action in the Button.
   
  handleSubstract = () => {
    if(this.state.count > this.minCounter) {
      this.setState((state) => ({
        count: state.count - 1
      }));
    }
  }
   
  render() {
    
    return (
      <div> 
        <Button
          color="dark"
          onClick={this.handleSubstract}
          sign="-"
        />
        <Input
          count={this.state.count}
          handleChange={this.handleChange}
        />
        <Button
          color="dark"
          onClick={this.handleAdd}
          sign="+"
        />        
      </div>
    );
  }
}

export default ItemCount
  