import React from 'react';
import Card from '../componentes/Card';
import camara from '../camara.png'
import glass from '../glass.png'
import modulo from '../modulo.png'
import trasera from '../trasera.png'



function Products(){
    return (
       <div className='contenedorcartitas'>
<>
<Card titulo='Cambio de Glass' imagen={glass} descripcion='Si solo se rompio el vidrio de tu celular, pero sigue funcionando correctamente, podemos reemplazarlo si cambiar la pantalla completa' textoboton= "mas informacion"/>
<Card titulo='Cambio de Camara' imagen={camara} descripcion='Si solo se rompio el vidrio de tu celular, pero sigue funcionando correctamente, podemos reemplazarlo si cambiar la pantalla completa'textoboton= "mas informacion"/>
<Card titulo='Cambio de Tapa Trasera' imagen={trasera} descripcion='Si solo se rompio el vidrio de tu celular, pero sigue funcionando correctamente, podemos reemplazarlo si cambiar la pantalla completa'textoboton= "mas informacion"/>
<Card titulo='Cambio de Modulo Completo' imagen={modulo} descripcion='Si solo se rompio el vidrio de tu celular, pero sigue funcionando correctamente, podemos reemplazarlo si cambiar la pantalla completa'textoboton= "mas informacion"/>
        </>
       </div> 
    )
}

export default Products;