import React from 'react';
import Card from '../componentes/Card';
import perfil from '../perfil.png'

function About() {
    return (
        <>
            <div className='contenedorcartitas'>
                <Card titulo='@facuforipatecnologia' imagen={perfil} descripcion='Repara tu celular' textoboton= "hola" />
            </div>
        </>
    )
}

export default About;