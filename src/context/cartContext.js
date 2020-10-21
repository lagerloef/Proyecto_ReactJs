import React, { useState }  from 'react';

export const CartContext = React.createContext([]);//Crea un contexto con el nombre CartContext, con un valor 0 en el carrito de Compras

export const CartProvider = (props) =>{
    const [cart,setCart] = useState([]);


    function carter(a,b,c,d,e){
        var purchase = {'qty': a,'name': b, 'id': c , 'price':d ,'subtotal':e}
        var purchases = ([...cart, purchase])        
        console.log(purchases);
        setCart(purchases)                
    }
    
    return(
        <CartContext.Provider value={[cart,carter]}>
            {props.children}
        </CartContext.Provider>
    )
}
