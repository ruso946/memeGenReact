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
        figCTop.className = tipoFont+" sizeFont"+sizeFont+" colorFont"+colorFont;
        const figCBottom = document.getElementById("figCBottom");        
        figCBottom.innerText = textoIngresado[1];        
        figCBottom.className = tipoFont2+" sizeFont"+sizeFont2+" colorFont"+colorFont2;
        
    }); 
    
    let [tipoFont, setTipoFont] = useState("Letra2");
    const manejaSetTipoFont = (e)=>{
        setTipoFont(e.target.value);
        }   

    let [tipoFont2, setTipoFont2] = useState("Letra3");
    const manejaSetTipoFont2 = (e)=>{
        setTipoFont2(e.target.value);
        }

    let [sizeFont, setSizeFont] = useState("2");
    const manejaSetSizeFont = (e)=>{
        setSizeFont(e.target.value);
        console.log("desde size font: ",e.target.value);
    }
     
    let [sizeFont2, setSizeFont2] = useState("3");
    const manejaSetSizeFont2 = (e)=>{
        setSizeFont2(e.target.value);
        console.log("desde size font2: ",e.target.value);
    }
    
    let [colorFont, setColorFont] = useState("2");
    const manejaSetColorFont = (e)=>{
        setColorFont(e.target.value);
        console.log("desde Color font: ",e.target.value);
    }

    let [colorFont2, setColorFont2] = useState("3");
    const manejaSetColorFont2 = (e)=>{
        setColorFont2(e.target.value);
        console.log("desde Color font2: ",e.target.value);
    }

    let [posicionTextoArriba, setPosicionTextoArriba] = useState();
    const manejaSetPosicionTextoArriba = (e)=>{
        setPosicionTextoArriba(e.target.value);
        if (e.target.value==="sube"){
            console.log(posicionTextoArriba);
            var figCTop = document.getElementById("figCTop");
            let top = window.getComputedStyle(figCTop).getPropertyValue("top");
            let indice = top.indexOf("px");            
            let extraida = top.substring(0, indice);// Cortar desde 0 hasta la aparición de la p
            let numero = parseInt(extraida)-10;
            let posicion = numero.toString()+"px";
            figCTop.style.top = posicion;


        } else if (e.target.value==="baja"){
            figCTop = document.getElementById("figCTop");
            let top = window.getComputedStyle(figCTop).getPropertyValue("top");
            let indice = top.indexOf("px");
            // Cortar desde 0 hasta la aparición de la p
            let extraida = top.substring(0, indice);
            let numero = parseInt(extraida)+10;
            let posicion = numero.toString()+"px";
            figCTop.style.top = posicion;            
        }}

        let [posicionTextoAbajo, setPosicionTextoAbajo] = useState();
        const manejaSetPosicionTextoAbajo = (e)=>{
            setPosicionTextoAbajo(e.target.value);
            if (e.target.value==="sube"){
                console.log(posicionTextoAbajo);
                var figCBottom = document.getElementById("figCBottom");
                let top = window.getComputedStyle(figCBottom).getPropertyValue("top");
                let indice = top.indexOf("px");            
                let extraida = top.substring(0, indice);// Cortar desde 0 hasta la aparición de la p
                let numero = parseInt(extraida)-10;
                let posicion = numero.toString()+"px";
                figCBottom.style.top = posicion;
            } else if (e.target.value==="baja"){
                figCBottom = document.getElementById("figCBottom");
                let top = window.getComputedStyle(figCBottom).getPropertyValue("top");
                let indice = top.indexOf("px");// Cortar desde 0 hasta la aparición de la p                
                let extraida = top.substring(0, indice);
                let numero = parseInt(extraida)+10;
                let posicion = numero.toString()+"px";
                figCBottom.style.top = posicion;    
            }
        }

        let [alineacionTextoAbajo, setAlineacionTextoAbajo] = useState();
        const manejaSetAlineacionTextoAbajo = (e)=>{
            setAlineacionTextoAbajo(e.target.value);
            if (e.target.value==="izquierda"){
                console.log(alineacionTextoAbajo);
                var figCBottom = document.getElementById("figCBottom");
                let left = window.getComputedStyle(figCBottom).getPropertyValue("left");
                let indice = left.indexOf("px");            
                let extraida = left.substring(0, indice);// Cortar desde 0 hasta la aparición de la p
                let numero = parseInt(extraida)-10;
                let Alineacion = numero.toString()+"px";
                figCBottom.style.left = Alineacion;
            } else if (e.target.value==="derecha"){
                figCBottom = document.getElementById("figCBottom");
                let left = window.getComputedStyle(figCBottom).getPropertyValue("left");
                let indice = left.indexOf("px");// Cortar desde 0 hasta la aparición de la p                
                let extraida = left.substring(0, indice);
                let numero = parseInt(extraida)+10;
                let alineacion = numero.toString()+"px";
                figCBottom.style.left = alineacion;    
            }
        }

        let [alineacionTextoArriba, setAlineacionTextoArriba] = useState();
        const manejaSetAlineacionTextoArriba = (e)=>{
            setAlineacionTextoArriba(e.target.value);
            if (e.target.value==="izquierda"){
                console.log(alineacionTextoArriba);
                var figCTop = document.getElementById("figCTop");
                let left = window.getComputedStyle(figCTop).getPropertyValue("left");
                let indice = left.indexOf("px");            
                let extraida = left.substring(0, indice);// Cortar desde 0 hasta la aparición de la p
                let numero = parseInt(extraida)-10;
                let Alineacion = numero.toString()+"px";
                figCTop.style.left = Alineacion;
            } else if (e.target.value==="derecha"){
                figCTop = document.getElementById("figCTop");
                let left = window.getComputedStyle(figCTop).getPropertyValue("left");
                let indice = left.indexOf("px");// Cortar desde 0 hasta la aparición de la p                
                let extraida = left.substring(0, indice);
                let numero = parseInt(extraida)+10;
                let alineacion = numero.toString()+"px";
                figCTop.style.left = alineacion;    
            }
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
                        <option selected value="2">Tamaño letra mediano</option>
                        <option value="3">Tamaño letra grande</option>
                        <option value="4">Tamaño letra muy grande</option>
                    </select>
                </div >
                <div id="coloresLetraArriba">   
                    <select className={`form-select form-select-sm p-2 mx-auto my-2`}  onChange={manejaSetColorFont}>
                        <option className="colorFont1" value="1">Color1 Negro</option>
                        <option selected className="colorFont2" value="2">Color2 Violeta</option>
                        <option className="colorFont3" value="3">Color3 Verde</option>
                        <option className="colorFont4" value="4">Color4 Rojo</option>
                    </select>
                </div >               
                <button onClick={manejaSetAlineacionTextoArriba} value="izquierda">izquierda</button>
                <button onClick={manejaSetAlineacionTextoArriba} value="derecha">derecha</button>
                <input type="text" placeholder="ingrese su texto" onInput={manejaSetTexto} id="input1" className = {`mb-2 mx-auto ${tipoFont}`} />
                <label className="mb-4" for="input1">Texto de arriba</label>
                <button onClick={manejaSetPosicionTextoArriba} value="sube">sube</button>
                <button onClick={manejaSetPosicionTextoArriba} value="baja">baja</button>
            </div>
            <div className='p-2 border border-2 p-2'>
                <button onClick={manejaSetPosicionTextoAbajo} value="sube">sube</button>
                <button onClick={manejaSetPosicionTextoAbajo} value="baja">baja</button>
                <label className="mt-4" for="input2">Texto de abajo</label>
                <input type="text" placeholder="ingrese su texto" onInput={manejaSetTexto} id="input2" className = {`mt-2 mx-auto ${tipoFont2}`} />
                <button onClick={manejaSetAlineacionTextoAbajo} value="izquierda">izquierda</button>
                <button onClick={manejaSetAlineacionTextoAbajo} value="derecha">derecha</button>
                <div id="coloresLetraAbajo">   
                    <select className="form-select form-select-sm p-2 mx-auto my-2" onChange={manejaSetColorFont2}>
                        <option className="colorFont1" value="1">Color1 Negro</option>
                        <option className="colorFont2" value="2">Color2 Violeta</option>
                        <option selected className="colorFont3" value="3">Color3 Verde</option>
                        <option className="colorFont4" value="4">Color4 Rojo</option>
                    </select>
                </div >               
                <div>
                    <select className="form-select form-select-sm p-2 mx-auto my-2" onChange={manejaSetSizeFont2}>
                        <option value="1">Tamaño letra chico</option>
                        <option value="2">Tamaño letra mediano</option>
                        <option selected value="3">Tamaño letra grande</option>
                        <option value="4">Tamaño letra muy grande</option>
                    </select>
                </div>
                
                <div className='p-2 border border-1'>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont2} type="radio" className="form-check-input " id="radio5" name="optradio2" value="Letra1"/>
                        <label className="form-check-label Letra1" for="radio5">Fantasy</label>
                    </div>
                    <div class="form-check">
                        <input onInput={manejaSetTipoFont2} type="radio" className="form-check-input " id="radio6" name="optradio2" value="Letra2"/>
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
    );
}



export default Textos;