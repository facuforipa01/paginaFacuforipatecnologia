import React from 'react';
import Carrousel from '../componentes/Carrousel';
import camara from '../camara.png'
import glass from '../glass.png'
import modulo from '../modulo.png'
import trasera from '../trasera.png'


function Inicio(){
    return (<>
    <Carrousel camara={camara} trasera={trasera} glass={glass} modulo ={modulo}/>
    </>
    )
}
export default Inicio;