import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/cartContext';
import {getFirestore} from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Loader from "./loader/Loader";

function PurchaseOrder(props) {  
  const {register, errors, handleSubmit} = useForm();
  const [entradas, setEntradas] = useState([]);
  const [cart] = useContext(CartContext);
  const [orderId, setOrderID] = useState();
  const [loading, setLoading] = useState(false);
  const price = cart.map((item) => item.total);
  const sum = price.reduce((a, b) => a + b,0);
  
  
  const procesarFormulario = (data, e) => {
      console.log(data);
      setEntradas([
          ...entradas,
          data            
      ])      
      console.log(entradas);                
      // limpiar campos
      e.target.reset();       
  } 
  
   
  function fire() { 
    setLoading(true)            
    const db = getFirestore();
    const orders = db.collection('orders');
    console.log(cart);
    orders.add(
        {
        buyer: entradas,       
        items: cart,
        data: firebase.firestore.Timestamp.fromDate(new Date()),
        total: sum,                   
        }
      ).then(({id})=>{
        setOrderID(id)//sucess 
        setLoading(false);             
      }).catch((error) =>{
        console.log('Error add orders: ', error);
     }).finally(() =>{
        console.log(orderId);
        setEntradas([]);        
      }); 
    };

    if(loading) {
      return <div><Loader/></div>
    }

  return(<div className="container"> 
    <h1>Datos del Cliente</h1>                      
    <form onSubmit={handleSubmit(procesarFormulario)}> 
      <div className="form-group row">
        <div className="col-sm-2">
          <label for="staticname">Nombre:</label>
        </div>
        <div className="col-sm-4">   
          <input
            name="nombre" 
            type="text"                   
            ref={
                register({
                            required: {
                              value:true, message: 'Ingrese nombre'
                              },
                              maxLength: {
                              value: 12, 
                              message: 'No más de 12 carácteres!'
                              },
                              minLength: {
                              value: 3, 
                              message: 'Mínimo 2 carácteres'
                              }
                        })
                    }
            className="form-control my-6"
            placeholder="Ingrese Nombre"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors?.nombre?.message}
          </span>
        </div>
        <div className="col-sm-2">
          <label for="staticlastname">Apellido:</label>
        </div>
        <div className="col-sm-4">
          <input
              name="apellido"
              type="text"
              ref={
                register({
                            required: {
                              value:true, message: 'Ingrese Apellido'
                            },
                            maxLength: {
                              value: 10, 
                              message: 'No más de 5 carácteres!'
                              },
                              minLength: {
                              value: 3, 
                              message: 'Mínimo 2 carácteres'
                              }
                        })
              }
              className="form-control my-6"
              placeholder="Ingrese Apellido"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors?.apellido?.message}
          </span>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-2">
          <label for="staticemail">Email:</label>
        </div>
        <div className="col-sm-4">
          <input
              name="email"
              ref={register({
              required: "Required",
                pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
              })}
              className="form-control my-6"
              placeholder="Ingrese email"
              />
              <span className="text-danger text-small d-block mb-2">
                {errors?.email?.message}
              </span>
        </div>
        <div className="col-sm-2">
          <label for="staticphone">Teléfono:</label>
        </div>
        <div className="col-sm-4">
          <input
              name="phone"
              type="number"
              ref={
                    register({                      
                        required: {
                          value:true, message: 'Ingrese número de Telefono'
                          },
                          min: {
                              value: 1000000, 
                              message: 'minimo 7 carácteres numéricos positivos!'
                              },
                              max: {
                              value: 999999999999999, 
                              message: 'maximo 15 carácteres numéricos positivos!'
                              }
                        })
                    }
          className="form-control my-6"
          placeholder="Ingrese numero de Telefono"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors?.phone?.message}
          </span>
        </div>
      </div>                 
      <button 
        className="btn btn-dark"
        type="submit"                     
      >
      enviar
      </button>
    </form> 
        {orderId ? <div>
              <h2>Gracias por su Compra</h2>              
              <strong>Order ID:</strong> {orderId}
              </div> : ''}
            <ul className="mt-2">
                {
                    entradas.map((item, index) =>
                        <li key={index}>
                            {item.nombre} {item.apellido} , ahora puedes hacer Click y Generar tu Orden
                        </li> )                    
                }
            </ul>
            {entradas.length !==0 ? <button className="btn btn-dark" onClick={fire}>
              Generar Orden
            </button> :''}
        </div>
)}
export default PurchaseOrder;

/*
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
*/