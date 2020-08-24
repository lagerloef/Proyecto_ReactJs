import React from 'react';

function Home(props) {
    return <div>
            <div id="greeting">
                <h2>Bienvenido {props.nombre}</h2>
            </div>
        </div>
    
}
export default Home 