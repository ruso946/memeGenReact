import { useRef } from "react";
import React from "react";
import exportarMeme from "../utils/exportarMeme";
import "./Eleccion.css";
const Eleccion = ()=>{
const exportRef = useRef();

    return (
        <div className="m-5 p-2 border border-3">
            <h1> Meme: </h1>
            <div className={"position-relative"} id="canvasParaExportar" ref={exportRef}>
                              
                <div id="figCTop"></div>
                                
                <div id="figCBottom"></div>
                
            </div>
            <button onClick={() => exportarMeme(exportRef.current, "MemeGen")}>           
                Exportar Meme
          </button>                
        </div>
    )
}

export default Eleccion;