import React, {Component} from 'react';

class ItemCount extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador : 0 
    }; 
  }
  onClickAdd(){
    if (this.state.contador <10){
        this.setState({
        contador : this.state.contador+1       
        });
    }
  }

  onClickDel(){
    if (this.state.contador >0){
    this.setState({
       contador : this.state.contador-1       
    });
    }
  }
  render(){
    return (
        <div className="container ">
            <h1>Contador</h1>
            <div className="row cartShop">
                <Button label="-" onClick={()=>this.onClickDel()} />
                <Contador valor={this.state.contador}/>
                <Button label="+" onClick={()=>this.onClickAdd()} />        
                
            </div>
        </div>
    )
  }
}

export default ItemCount;

//Functional Component
const Contador = props => {
    return(
      <div>
        <h5>{props.valor}</h5>
      </div>
    );
  };
  
const Button = props => {
    return (
      <button onClick={()=>props.onClick()}> {props.label}</button>
    );
};
