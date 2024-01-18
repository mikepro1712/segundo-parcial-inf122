import React from "react";
import '../styles/Logica.css'
import Boton from './Boton.js';
function Logica(){
    return(
        <div className="Flex-container">
            <div className="titulo">
                <h1>Mis metas</h1>
            </div>
            <div className="Text-button1">
                <Boton/>
            </div>
            <div>
                <stan>Completadas</stan>
            </div>
            <div>
            <stan>Pendientes</stan>
            </div>
        </div>
    );
}
export default Logica;  
