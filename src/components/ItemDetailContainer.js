import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'; 
//import ItemCount from "./ItemCount"
//import Button from "./Boton" ;
const ItemDetailContainer= (props)=> {
    const [data, setData] = useState(false);
    useEffect(() => {
      let id = props.match.params.id;
        setTimeout(
            function(){
                fetch(
                    `https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`
                )
                .then(response => {
                  return response.json();
                })
                .then(res => {
                    setData(res)              
                })
              },3000
            )
          }, [])

    useEffect(()=>{
      console.log(data)
    }, [data])

    if(data === false){
        return <div>
            Cargando detalle del producto...
        </div>
    }else{
        return <div className="container">
        <ItemDetail value={data}/>
      </div>
    }

}

export default ItemDetailContainer;
/*    }else{
        return <div className="detailProduct">
            <h1>Detalle del Producto</h1>
            <h4>{data.nombre}</h4>
            <p>Categoria: {data.categoria}</p>
            <p>Precio ${data.precio}</p>
            <ItemCount/> 
            <Button color="dark" />
            
        </div>
    }*/