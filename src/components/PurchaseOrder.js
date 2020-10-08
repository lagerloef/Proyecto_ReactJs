import React, { useState, useContext } from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { CartContext } from '../context/cartContext';
import {getFirestore} from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


function PurchaseOrder(props) {

  const [cart] = useContext(CartContext);
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [orderId, setOrderID] = useState()  
  const price = cart.map((item) => item.total);
  const sum = price.reduce((a, b) => a + b,0);

  function fire(e){
    e.preventDefault();            
    const db = getFirestore();
    const orders = db.collection('orders');
    console.log(cart);
    orders.add(
        {
        buyer: {name, email, phone},
        items: cart,
        data: firebase.firestore.Timestamp.fromDate(new Date()),
        total: sum,                   
      }
      ).then(({id})=>{
        setOrderID(id)//sucess
        clearState()
      }).catch((error) =>{
        console.log('Error add orders: ', error);
     }).finally(() =>{
        console.log(orderId);
      }); 
    };


  function clearState(){
       setEmail('')
        setName('')
        setPhone('')        
      }


    if(cart.length === 0){
      return <div>No hay elementos en el carrito</div>
    } else{ 
    return(<div>                       
            <Form style={{
                margin: '0 0 0 5vw'
              }}>
              <Label>Datos para la compra</Label>
              <FormGroup row>
                  <Label for="exampleEmail" sm={8}>Email</Label>
                  <Col sm={6}>
                  <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="example@test.com" />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label for="phone" sm={8}>Phone</Label>
                  <Col sm={6}>
                  <Input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" name="number" id="exampleNumber" placeholder="11447856773" />
                  </Col>
              </FormGroup>
              <FormGroup row>
                  <Label for="name" sm={8}>Name</Label>
                  <Col sm={6}>
                  <Input value={name} onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" placeholder="" />
                  </Col>
              </FormGroup>
              <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                  <Button color='dark' onClick={(e)=>fire(e)}>Generar Orden</Button>
                  </Col>
              </FormGroup>             
              {orderId ? <div>              
              Order ID: {orderId}
              </div> : ''}       
              </Form>
        </div>) 
    }
    
}
export default PurchaseOrder;