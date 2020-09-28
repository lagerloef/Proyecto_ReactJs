import React, { useState }  from 'react';

export const CartContext = React.createContext([]);//Crea un contexto con el nombre CartContext, con un valor 0 en el carrito de Compras

export const CartProvider = (props) =>{
    const [cart,setCart] = useState([]);

    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

