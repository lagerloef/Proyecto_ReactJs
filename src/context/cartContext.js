import React, { useState }  from 'react';

export const CartContext = React.createContext([]);//Crea un contexto con el nombre CartContext, con un valor 0 en el carrito de Compras

export const CartProvider = (props) =>{
    const [cart,setCart] = useState([]); 
    
    function carter(a,b,c,d){
        let subtotal = a*d;
        var inputdata = {'qty': a,'name': b, 'id': c , 'price':d ,'subtotal':subtotal}
        var enddata = ([...cart, inputdata])        
        console.log(enddata);
        setCart(enddata)                
    }
    
    return(
        <CartContext.Provider value={[cart,carter]}>
            {props.children}
        </CartContext.Provider>
    )
}
