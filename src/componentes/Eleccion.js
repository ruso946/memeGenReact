import { useRef } from "react";
import React from "react";
import exportarMeme from "../utils/exportarMeme";

const Eleccion = ()=>{
const exportRef = useRef();

    return (
        <div className="m-5 p-2 border border-3">
            <h1> Meme: </h1>
            <div  id="canvasParaExportar" ref={exportRef}>
                <figure  id="figureEleccion">
                    <figcaption id="figCTop"></figcaption>
                    <img id="imgEleccion" src="" width="300" height="auto" alt="eleccion de imagen del Dropdown"></img>                                        
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