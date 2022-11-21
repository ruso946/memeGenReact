import React from 'react';
import { useState, useEffect } from "react";

const Textos = ()=>{
        
    let [textoIngresado,setTexto] = useState(["Ingrese su texto","ingrese su texto"]);
    const manejaSetTexto = ()=>{
        const input1 = document.getElementById("input1");
        const input2 = document.getElementById("input2");        
        setTexto([input1.value,input2.value]);        
        }
        
    useEffect(() => {
        const figCTop = document.getElementById("figCTop");        
        figCTop.innerText = textoIngresado[0];
        figCTop.className = tipoFont+" sizeFont"+sizeFont;
        const figCBottom = document.getElementById("figCBottom");        
        figCBottom.innerText = textoIngresado[1];
        // figCBottom.className = tipoFont2;
        figCBottom.className = tipoFont2+" sizeFont"+sizeFont2;
        
    }); 
    
    let [tipoFont, setTipoFont] = useState({tipoFont});
    const manejaSetTipoFont = (e)=>{
        setTipoFont(e.target.value);
        }   

    let [tipoFont2, setTipoFont2] = useState({tipoFont2});
    const manejaSetTipoFont2 = (e)=>{
        setTipoFont2(e.target.value);
        }

    let [sizeFont, setSizeFont] = useState({sizeFont});
    const manejaSetSizeFont = (e)=>{
        setSizeFont(e.target.value);
        console.log("desde size font: ",e.target.value);

    }
     
    let [sizeFont2, setSizeFont2] = useState({sizeFont2});
    const manejaSetSizeFont2 = (e)=>{
        setSizeFont2(e.target.value);
        console.log("desde size font2: ",e.target.value);

    }
      
    

    return (
        <div className='m-4 p-2 border border-2'>
            <div className='p-2 border border-2 p-2'>
                <div className='p-2 border border-1'>
                    <div className="form-check">
                        <input onInput={manejaSetTipoFont} type="radio" className="form-check-input " id="radio1" name="optradio" value="Letra1" />
                        <label className="form-check-label Letra1" for="radio1">Fantasy</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont} type="radio" className="form-check-input " id="radio2" name="optradio" value="Letra2"/>
                        <label className="form-check-label Letra2" for="radio2">Cursive Lucida</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont} type="radio" className="form-check-input" id="radio3" name="optradio" value="Letra3"/>
                        <label className="form-check-label Letra3" for="radio3">Serif Georgia</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont} type="radio" className="form-check-input" id="radio4" name="optradio" value="Letra4"/>
                        <label className="form-check-label Letra4" for="radio4">Monospace Lucida</label>
                    </div>
                </div>
                <div>
                    <select className="form-select form-select-sm p-2 mx-auto my-2" onChange={manejaSetSizeFont}>
                        <option value="1">Tamaño letra chico</option>
                        <option value="2">Tamaño letra mediano</option>
                        <option value="3">Tamaño letra grande</option>
                        <option value="4">Tamaño letra muy grande</option>
                    </select>
                </div >                
                <input type="text" placeholder="ingrese su texto" onInput={manejaSetTexto} id="input1" className = {`mb-2 mx-auto ${tipoFont}`} />
                <label className="mb-4" for="input1">Texto de arriba</label>
            </div>
            <div className='p-2 border border-2 p-2'>                
                <label className="mt-4" for="input2">Texto de abajo</label>
                <input type="text" placeholder="ingrese su texto" onInput={manejaSetTexto} id="input2" className = {`mt-2 mx-auto ${tipoFont2}`} />
                <div>
                    <select className="form-select form-select-sm p-2 mx-auto my-2" onChange={manejaSetSizeFont2}>
                        <option value="1">Tamaño letra chico</option>
                        <option value="2">Tamaño letra mediano</option>
                        <option value="3">Tamaño letra grande</option>
                        <option value="4">Tamaño letra muy grande</option>
                    </select>
                </div>
                
                <div className='p-2 border border-1'>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont2} type="radio" className="form-check-input " id="radio5" name="optradio2" value="Letra1"/>
                        <label className="form-check-label Letra1" for="radio5">Fantasy</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont2} type="radio" className="form-check-input " id="radio6" name="optradio2" value="Letra2" />
                        <label className="form-check-label Letra2" for="radio6">Cursive Lucida</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont2} type="radio" className="form-check-input" id="radio7" name="optradio2" value="Letra3"/>
                        <label className="form-check-label Letra3" for="radio7">Serif Georgia</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont2} type="radio" className="form-check-input" id="radio8" name="optradio2" value="Letra4"/>
                        <label className="form-check-label Letra4" for="radio8">Monospace Lucida</label>
                </div>
            </div>
            </div>
        </div>            
    )
}



export default Textos;