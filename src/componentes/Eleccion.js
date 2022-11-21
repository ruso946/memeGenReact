import { useRef } from "react";
import React from "react";
import exportarMeme from "../utils/exportarMeme";

const Eleccion = ()=>{
const exportRef = useRef();

    return (
        <div className="m-5 p-2 border border-3">
            <h1> Eleccion: </h1>
            <div  id="canvasParaExportar">
                <figure ref={exportRef} id="figureEleccion">
                    <figcaption className="Letra1" id="figCTop"></figcaption>
                    <img id="imgEleccion" src="/pastelitos.png" width="300" height="auto" alt="eleccion de imagen del Dropdown"></img>                    
                    <img id="imgEleccion2" src="/pastelitos.png"></img>
                    <figcaption id="figCBottom"></figcaption>
                </figure>
                
            </div>
            <button onClick={() => exportarMeme(exportRef.current, "test")}>           
                Capture Image
          </button>                
        </div>
    )
}

export default Eleccion;