import { useState, useEffect } from "react";
import React from "react";

const Dropdown = () => {
    let [imgElegida,setImgElegida] = useState();
    const manejaValorImg = (e)=>{
        setImgElegida (e.target.src);        
    }
        
    useEffect(() => {        
        let imagenDelOtroComponente = document.getElementById("imgEleccion");
        /*acá hay que hacer que descargue la imagen a una carpeta, con un nombre
        de archivo establecido, y ponerese archivo como fuente fija de la imagen
         en el div de Eleccion que va a ser exportado
        */          
        imagenDelOtroComponente.setAttribute("src",`${imgElegida}`);        
    });
    const urlApi = 'https://api.memegen.link/templates/';    
    try{
        const CargarApi = async () =>{
            const respuesta = await fetch(urlApi);
            if (respuesta.status === 200){
                
                const ConstruyeInnerUlDrpdwn = (imagen)=>{
                                        
                    textoInner += `<li key="${imagen.id}" value="${imagen.name}">
                    <button type='text' className="dropdown-item text-light botonLi" href="#">
                    <img alt="imagenApi" height="auto" width="40" src="${imagen.blank}">
                    </img>
                     ${imagen.name}</button>
                     </li>`;                     
                }
                
                const json = await respuesta.json();
                let textoInner = "";
                json.forEach(imagen=>{
                    ConstruyeInnerUlDrpdwn(imagen)
                    }
                );
                document.getElementById("ulDrpdwn").innerHTML= textoInner;
                // const ListaDeLi = document.getElementsByClassName("botonLi");                                
            }
            
        }
    CargarApi();
    }
    catch(err){
        console.log("error",err);
    }

        return (
            <div className={"dropdown mt-5"}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Elija su imagen
                </button>                
                <ul onClick={manejaValorImg} className="dropdown-menu" id="ulDrpdwn" aria-labelledby="dropdownMenuButton">    
                </ul>                
            </div>
            
        );
}
export default Dropdown;