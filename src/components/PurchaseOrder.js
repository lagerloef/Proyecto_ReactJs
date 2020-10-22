import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/cartContext';
import {getFirestore} from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Loader from "./loader/Loader";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function PurchaseOrder(props) {  
  const {register, errors, getValues, handleSubmit} = useForm();
  const [entradas, setEntradas] = useState([]);
  const [cart] = useContext(CartContext);
  const [orderId, setOrderID] = useState();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false)
  const price = cart.map((item) => item.subtotal);
  const total = price.reduce((a, b) => a + b,0);  
  const toggle = () => setModal(!modal);
  
  const procesarFormulario = (data, e) => {
      console.log(data);
      var informacion = {'name': data.nombre,'lastname': data.apellido, 'email': data.email , 'phone':data.phone}
      console.log(informacion)  
      setEntradas([
          ...entradas,
          informacion            
      ])      
      console.log(entradas);                
      // limpiar campos
      e.target.reset();       
  }  
  
  
  function getOrder() { 
    setLoading(true)            
    const db = getFirestore();
    const orders = db.collection('orders');
    console.log(cart);
    orders.add(
        {
        buyer: entradas,       
        items: cart,
        data: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total,                   
        }
      ).then(({id})=>{
        setOrderID(id)//sucess 
        setLoading(false); 
        setModal(true)                 
      }).catch((error) =>{
        console.log('Error add orders: ', error);
     }).finally(() =>{
        console.log(orderId);
        setEntradas([]);                    
      }); 
    };

    function clearState(){
      toggle();
      renderRedirect();            
  }
  function renderRedirect(){
    window.location.href = "/cart";   
 }


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
                              message: 'No más de 10 carácteres!'
                              },
                              minLength: {
                              value: 3, 
                              message: 'Mínimo 3 carácteres'
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
                              message: 'No más de 10 carácteres!'
                              },
                              minLength: {
                              value: 3, 
                              message: 'Mínimo 3 carácteres'
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
                required: "Email is required!",
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
          <label for="staticemail">Confirm Email:</label>
        </div>
        <div className="col-sm-4">
          <input
              name="emailConfirmation"
              ref={register({
                required: "Please confirm email!",
                pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        },
                validate: {
                matchesPreviousPassword: value => {
                  const { email } = getValues();
                  return email === value || "Emails should match!";
              }
            }
              })}
              className="form-control my-6"
              placeholder="Confirmar email"
              />
              <span className="text-danger text-small d-block mb-2">
                {errors?.emailConfirmation?.message}
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
            <div className="mt-2">
                {
                    entradas.map((item, index) =>
                        <h3 key={index}>
                            {item.name} {item.lastname} , ahora puedes hacer Click y Generar tu Orden
                        </h3> )                    
                }
            </div>
            {entradas.length !==0 ? <button className="btn btn-dark" onClick={getOrder}>
              Generar Orden
            </button> :''}
            <br/>
            <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={clearState}>Order ID: {orderId}</ModalHeader>
                        <ModalBody>
                            <h3>Muchas gracias por su compra!!</h3>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="dark" onClick={clearState}>Cerrar</Button>{' '}                           
                        </ModalFooter>
                    </Modal>
    </div>
)}
export default PurchaseOrder;